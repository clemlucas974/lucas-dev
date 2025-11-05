import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', 'class'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Clash Display"', 'sans-serif'],
        electrolize: ['Electrolize', 'sans-serif'],
        portiso: ['Portiso', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f7f2',
          100: '#ccefe5',
          200: '#99dfcb',
          300: '#66cfb0',
          400: '#33bf96',
          500: '#00a77a',
          600: '#007e59',
          700: '#006647',
          800: '#004d35',
          900: '#003524',
          950: '#001a12',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          50: '#fef4f2',
          100: '#fde9e5',
          200: '#fbd3cb',
          300: '#f8bdb1',
          400: '#f6a797',
          500: '#f4917d',
          600: '#f17b63',
          700: '#e8583a',
          800: '#c0441f',
          900: '#903317',
          950: '#4a1a0c',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          50: '#fefcf3',
          100: '#fdf9e7',
          200: '#fbf3cf',
          300: '#f9edb7',
          400: '#f7e79f',
          500: '#f5e187',
          600: '#f3db6f',
          700: '#f0d044',
          800: '#d4b31f',
          900: '#9d8617',
          950: '#4f430c',
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      boxShadow: {
        header: '0px 2px 3px -1px #ffffff1a, 0px 1px 0px 0px #ffffff05, 0px 0px 0px 1px #ffffff14',
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'slide-down': 'slide-down 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(20px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
