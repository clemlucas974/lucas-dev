import type { FC } from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, MALT_PROFILE_URL } from '../utils/links';
import { useReducedMotion } from '../utils/useReducedMotion';
import { MaltSvg } from './icons/MaltSvg';
import Plasma from './ui/Plasma';

const Hero: FC = () => {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  // Reduced motion variants
  const reducedMotionVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
  };

  const normalMotionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const titleVariants = prefersReducedMotion ? reducedMotionVariants : normalMotionVariants;
  const badgeVariants = prefersReducedMotion
    ? reducedMotionVariants
    : { initial: { opacity: 0 }, animate: { opacity: 1 } };
  const descriptionVariants = prefersReducedMotion
    ? reducedMotionVariants
    : { initial: { opacity: 0 }, animate: { opacity: 1 } };
  const navVariants = prefersReducedMotion ? reducedMotionVariants : normalMotionVariants;
  const socialVariants = prefersReducedMotion
    ? reducedMotionVariants
    : { initial: { opacity: 0 }, animate: { opacity: 1 } };
  const visualVariants = prefersReducedMotion
    ? reducedMotionVariants
    : { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } };

  return (
    <section
      className='relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden'
      aria-labelledby='hero-heading'
    >
      {/* Aurora Background */}
      {!prefersReducedMotion && (
        <div className='absolute inset-0 z-0 opacity-30'>
          {/* <Aurora
            colorStops={['#00a77a', '#f4917d', '#f5e187']}
            amplitude={1.2}
            blend={0.6}
            speed={0.8}
          /> */}
          <Plasma
            color='#00a77a'
            speed={0.6}
            direction='forward'
            scale={1.1}
            opacity={0.8}
            mouseInteractive={true}
          />
        </div>
      )}
      {prefersReducedMotion && (
        <div className='absolute inset-0 z-0'>
          <div className='hero-gradient h-full w-full' />
        </div>
      )}

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          <motion.article
            variants={titleVariants}
            initial='initial'
            animate='animate'
            transition={prefersReducedMotion ? {} : { duration: 0.8 }}
            className='text-center lg:text-left'
            role='main'
          >
            <motion.div
              variants={badgeVariants}
              initial='initial'
              animate='animate'
              transition={prefersReducedMotion ? {} : { delay: 0.2, duration: 0.8 }}
              className='mb-4 inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary-500/10 text-primary-400 rounded-full text-xs sm:text-sm font-medium'
              role='text'
              aria-label={t('hero.ariaLabels.title')}
            >
              {t('hero.title')}
            </motion.div>
            <motion.h1
              id='hero-heading'
              variants={titleVariants}
              initial='initial'
              animate='animate'
              transition={prefersReducedMotion ? {} : { delay: 0.3, duration: 0.8 }}
              className=' sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-electrolize text-base/5'
            >
              {t('hero.heading.part1')}
              <span className='title-gradient'> {t('hero.heading.part2')} </span>
              {t('hero.heading.part3')}
            </motion.h1>
            <motion.div
              variants={descriptionVariants}
              initial='initial'
              animate='animate'
              transition={prefersReducedMotion ? {} : { delay: 0.4, duration: 0.8 }}
              className='text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8'
              aria-live='polite'
              aria-label={t('hero.ariaLabels.technologies')}
            >
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
                aria-label={t('hero.ariaLabels.technologies')}
                speed={prefersReducedMotion ? 50 : 40}
              />
            </motion.div>
            <motion.nav
              variants={navVariants}
              initial='initial'
              animate='animate'
              transition={prefersReducedMotion ? {} : { delay: 0.5, duration: 0.8 }}
              className='flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start'
              aria-label='Main navigation'
            >
              <a
                href='#projects'
                className='button-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5'
                aria-label={t('hero.ariaLabels.projects')}
              >
                {t('hero.viewProjects')}
              </a>
              <a
                href='#contact'
                className='button-outline text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5'
                aria-label={t('hero.ariaLabels.contact')}
              >
                {t('hero.contactMe')}
              </a>
            </motion.nav>
            <motion.div
              variants={socialVariants}
              initial='initial'
              animate='animate'
              transition={prefersReducedMotion ? {} : { delay: 0.6, duration: 0.8 }}
              className='mt-6 sm:mt-8 flex items-center space-x-4 sm:space-x-5 justify-center lg:justify-start'
              aria-label='Social media links'
            >
              <a
                href={GITHUB_PROFILE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-zinc-800/80'
                aria-label={t('hero.ariaLabels.github')}
              >
                <FiGithub className='h-5 w-5 sm:h-6 sm:w-6' aria-hidden='true' />
              </a>
              <a
                href={LINKEDIN_PROFILE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-zinc-800/80'
                aria-label={t('hero.ariaLabels.linkedin')}
              >
                <FiLinkedin className='h-5 w-5 sm:h-6 sm:w-6' aria-hidden='true' />
              </a>
              <a
                href={MALT_PROFILE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-zinc-800/80'
                aria-label={t('hero.ariaLabels.malt')}
              >
                <MaltSvg className='h-5 w-5 sm:h-6 sm:w-6' />
              </a>
            </motion.div>
          </motion.article>
          <motion.div
            variants={visualVariants}
            initial='initial'
            animate='animate'
            transition={prefersReducedMotion ? {} : { delay: 0.3, duration: 0.8 }}
            className='relative flex justify-center lg:justify-end mt-8 lg:mt-0'
            aria-hidden='true'
          >
            <div className='relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-primary-600/20 p-1 backdrop-blur-sm'>
              <div className='absolute inset-1 rounded-full bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 opacity-30'></div>
              <div className='absolute inset-[3px] rounded-full bg-zinc-900 flex items-center justify-center'>
                <div className='text-center'>
                  <div className='text-4xl sm:text-5xl md:text-6xl font-electrolize font-bold title-gradient mb-2'>
                    &lt;/&gt;
                  </div>
                  <p className='text-gray-300 text-xs sm:text-sm md:text-base uppercase font-bold'>
                    {t('hero.experience')}
                  </p>
                </div>
              </div>
            </div>
            <div className='absolute -z-10 inset-0 blur-3xl rounded-full bg-primary-600/20 glow'></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
