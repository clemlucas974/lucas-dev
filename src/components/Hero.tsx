import type { FC } from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowDownRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, MALT_PROFILE_URL } from '../utils/links';
import { useReducedMotion } from '../utils/useReducedMotion';
import { MaltSvg } from './icons/MaltSvg';

const Hero: FC = () => {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const ease = [0.16, 1, 0.3, 1] as const;
  const rise = (delay: number) =>
    prefersReducedMotion
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease } },
        };

  // LCP element: visible immediately — no JS-gated opacity
  const lcpVisible = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } };

  const orbitTech = ['TypeScript', 'Python', 'AI', 'System Architecture', 'Agentic Systems'];

  return (
    <section
      className='relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pt-32'
      aria-labelledby='hero-heading'
    >
      {/* Organic warm blobs */}
      <div className='pointer-events-none absolute inset-0 -z-0' aria-hidden='true'>
        <div className='blob blob-emerald animate-drift left-[-8%] top-[8%] h-[34rem] w-[34rem]' />
        <div
          className='blob blob-coral animate-drift right-[-6%] top-[22%] h-[26rem] w-[26rem]'
          style={{ animationDelay: '-6s' }}
        />
        <div
          className='blob blob-honey animate-drift bottom-[-6%] left-[34%] h-[22rem] w-[22rem]'
          style={{ animationDelay: '-11s' }}
        />
      </div>

      <div className='container relative z-10'>
        <div className='grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10'>
          {/* ── Left: editorial copy ── */}
          <div className='text-center lg:text-left'>
            <motion.div {...rise(0.05)} className='mb-7 flex justify-center lg:justify-start'>
              <span className='eyebrow' aria-label={t('hero.ariaLabels.title')}>
                {t('hero.title')}
              </span>
            </motion.div>

            <motion.h1
              id='hero-heading'
              {...lcpVisible}
              className='font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.02em] text-ink sm:text-6xl lg:text-7xl'
            >
              {t('hero.heading.part1')}{' '}
              <span className='mark italic text-emerald-800'>{t('hero.heading.part2')}</span>{' '}
              {t('hero.heading.part3')}
            </motion.h1>

            <motion.p
              {...rise(0.2)}
              className='mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0'
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              {...rise(0.28)}
              className='mt-5 font-sans text-sm tracking-wide text-taupe'
              aria-live='polite'
              aria-label={t('hero.ariaLabels.technologies')}
            >
              <span className='text-emerald-700'>{'// '}</span>
              <TypeAnimation
                sequence={[
                  'React • TypeScript • Node.js',
                  2000,
                  'GraphQL • PostgreSQL • AWS',
                  2000,
                  'React Native • Kubernetes • Terraform',
                  2000,
                ]}
                repeat={Infinity}
                cursor={true}
                className='inline-block'
                speed={prefersReducedMotion ? 50 : 40}
              />
            </motion.div>

            <motion.nav
              {...rise(0.36)}
              className='mt-9 flex flex-wrap justify-center gap-3 lg:justify-start'
              aria-label='Main navigation'
            >
              <a href='#projects' className='btn-primary'>
                {t('hero.viewProjects')}
                <FiArrowDownRight className='h-4 w-4' aria-hidden='true' />
              </a>
              <a href='#contact' className='btn-ghost'>
                {t('hero.contactMe')}
              </a>
            </motion.nav>

            <motion.div
              {...rise(0.44)}
              className='mt-8 flex items-center justify-center gap-1.5 lg:justify-start'
              aria-label='Social media links'
            >
              <a
                href={GITHUB_PROFILE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full p-2.5 text-taupe transition-colors hover:bg-sand hover:text-emerald-800'
                aria-label={t('hero.ariaLabels.github')}
              >
                <FiGithub className='h-5 w-5' aria-hidden='true' />
              </a>
              <a
                href={LINKEDIN_PROFILE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full p-2.5 text-taupe transition-colors hover:bg-sand hover:text-emerald-800'
                aria-label={t('hero.ariaLabels.linkedin')}
              >
                <FiLinkedin className='h-5 w-5' aria-hidden='true' />
              </a>
              <a
                href={MALT_PROFILE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full p-2.5 text-taupe transition-colors hover:bg-sand hover:text-emerald-800'
                aria-label={t('hero.ariaLabels.malt')}
              >
                <MaltSvg className='h-5 w-5' />
              </a>
            </motion.div>
          </div>

          {/* ── Right: abstract on-brand visual ── */}
          <motion.div
            {...rise(0.3)}
            className='relative mx-auto flex h-[20rem] w-full max-w-sm items-center justify-center sm:h-[24rem] lg:h-[28rem]'
            aria-hidden='true'
          >
            {/* slow dashed orbit ring */}
            <div className='animate-spin-slow absolute inset-6 rounded-full border border-dashed border-emerald-600/30 sm:inset-4' />

            {/* central organic shape */}
            <div className='relative flex h-52 w-52 items-center justify-center sm:h-64 sm:w-64'>
              <div
                className='animate-float-soft absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-700 to-coral-600 shadow-[0_30px_60px_-30px_hsl(162_100%_20%/0.6)]'
                style={{ borderRadius: '42% 58% 63% 37% / 41% 44% 56% 59%' }}
              />
              <div className='relative text-center text-paper'>
                <div className='font-electrolize text-5xl font-bold sm:text-6xl'>&lt;/&gt;</div>
                <p className='mt-2 text-xs font-medium uppercase tracking-[0.2em] text-paper/85'>
                  {t('hero.experience')}
                </p>
              </div>
            </div>

            {/* floating tech badges */}
            {orbitTech.map((tech, i) => {
              const angle = (i / orbitTech.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 46; // % from center
              const left = 40 + Math.cos(angle) * radius;
              const top = 50 + Math.sin(angle) * radius;
              return (
                <span
                  key={tech}
                  className='animate-float-soft absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-ink-soft shadow-sm'
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${i * -0.9}s`,
                  }}
                >
                  {tech}
                </span>
              );
            })}
          </motion.div>
        </div>

        {/* metadata strip */}
        <motion.div
          {...rise(0.55)}
          className='mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-line pt-6 text-xs uppercase tracking-[0.18em] text-taupe lg:justify-start'
        >
          <span>10+ yrs experience</span>
          <span className='h-1 w-1 rounded-full bg-coral-600' />
          <span>Paris / La Réunion</span>
          <span className='h-1 w-1 rounded-full bg-coral-600' />
          <span>Available for freelance</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
