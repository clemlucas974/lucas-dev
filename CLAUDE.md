# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal developer portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The site showcases projects, skills, and professional experience with a focus on performance, accessibility, and modern web standards.

## Development Commands

```bash
# Start development server (default: http://localhost:5173)
npm run dev

# Build for production (compiles TypeScript and bundles with Vite)
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Check code formatting with Prettier
npm run prettier:check

# Format code with Prettier
npm run format
```

## Architecture & Structure

### Build System
- **Vite** for development and production builds
- TypeScript compilation happens before Vite build (`tsc -b && vite build`)
- Base path configurable via `VITE_BASE_PATH` environment variable
- Rollup WASM override for compatibility: `"rollup": "npm:@rollup/rollup-wasm-node"`

### Component Architecture
Single-page application with section-based components:
- `App.tsx` - Main layout with sections rendered in order: Hero → About → Skills → Projects → Contact
- `SEO.tsx` - Handles dynamic meta tags and structured data (must be rendered first in App)
- `Particles.tsx` - Background animation layer (positioned absolute, z-0, pointer-events-none)
- Section components in `src/components/`: Hero, About, Skills, Projects, Contact, Header, Footer

### Accessibility Features
- Skip-to-content link for keyboard navigation
- Proper ARIA labels and semantic HTML throughout
- Reduced motion support via `useReducedMotion` hook (checks `prefers-reduced-motion` media query)
- All animations respect `prefersReducedMotion` state
- Focus management in modal dialogs (Projects component)

### Styling System
- **Tailwind CSS** with custom configuration:
  - Custom color palettes: primary (indigo), secondary (purple), accent (teal)
  - Custom fonts: Electrolize (display), Inter (sans), Clash Display
  - Custom animations: fade-in, fade-in-up, slide-up, slide-down, float, pulse-slow
  - Dark mode class strategy (`darkMode: 'class'`)
  - Glass-card and tech-pill utilities (defined in `src/index.css`)

### Animation Strategy
- **Framer Motion** for all animations
- **react-intersection-observer** for scroll-triggered animations
- Animation variants pattern used throughout:
  ```typescript
  // Respect reduced motion preference
  const itemVariants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0 }
  };
  ```

### Data Management
- Projects data is hardcoded in `Projects.tsx` as an array of objects
- Each project includes: id, title, description, details, image (webp), technologies, link, datePublished, client
- Project images stored in `/public` as optimized WebP format
- Structured data (Schema.org) embedded in both HTML and component markup

### SEO Implementation
- Meta tags in `index.html` and dynamically via `SEO.tsx`
- Open Graph and Twitter Card meta tags
- Canonical URL: `https://lucas-dev.pro`
- `sitemap.xml` and `robots.txt` in `/public`
- Structured data for Person schema (JSON-LD)
- Vercel deployment config with security headers in `vercel.json`

### Deployment Configuration (Vercel)
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Security headers: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy
- Asset caching: 1 year immutable for `/assets/*`
- SPA routing: All requests rewrite to `/index.html` (except sitemap.xml)

### TypeScript Configuration
- Project references architecture with separate configs:
  - `tsconfig.json` - Root config (references app and node configs)
  - `tsconfig.app.json` - Application code
  - `tsconfig.node.json` - Vite config and build scripts
- Global types in `global.d.ts`

### Linting & Formatting
- ESLint config uses flat config format (`eslint.config.js`)
- Extends: `@eslint/js`, `typescript-eslint`, `react-hooks`, `react-refresh`
- Prettier with import sorting plugin (`@trivago/prettier-plugin-sort-imports`)
- Config in `.prettierrc`

## Key Technical Decisions

1. **WebP Images**: All project images use WebP format for optimal performance
2. **Accessibility First**: Reduced motion support and ARIA labels are mandatory
3. **Performance**: Preconnect hints for fonts and analytics, immutable asset caching
4. **SEO**: Comprehensive meta tags, structured data, and semantic HTML
5. **Type Safety**: Strict TypeScript with separate configs for app and build tooling
6. **Animation Consistency**: All animations must respect user's motion preferences

## Development Guidelines

- Component structure follows single responsibility principle (one section per component)
- Use `useReducedMotion` hook for all animated components
- Images go in `/public` and should be optimized (prefer WebP)
- Follow existing Framer Motion animation variant patterns
- Maintain accessibility standards (ARIA labels, semantic HTML, keyboard navigation)
- Update `sitemap.xml` when adding new pages or significant content changes
