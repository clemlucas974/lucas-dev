import type { FC } from 'react';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from '../utils/links';

const Hero: FC = () => {
  return (
    <section
      className='relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden hero-gradient'
      aria-labelledby='hero-heading'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center lg:text-left'
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className='mb-4 inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-indigo-500/10 text-indigo-400 rounded-full text-xs sm:text-sm font-medium'
              role='text'
              aria-label='Professional title'
            >
              Senior Fullstack Engineer
            </motion.div>
            <motion.h1
              id='hero-heading'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className=' sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-electrolize text-base/5'
            >
              Building
              <span className='title-gradient'> exceptional </span>
              digital experiences
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className='text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8'
              aria-live='polite'
              aria-label='Technologies I work with'
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
              />
            </motion.div>
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className='flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start'
              aria-label='Main navigation'
            >
              <a
                href='#projects'
                className='button-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5'
                aria-label='View my projects'
              >
                View Projects
              </a>
              <a
                href='#contact'
                className='button-outline text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5'
                aria-label='Contact me'
              >
                Contact Me
              </a>
            </motion.nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className='mt-6 sm:mt-8 flex items-center space-x-4 sm:space-x-5 justify-center lg:justify-start'
              role='navigation'
              aria-label='Social media links'
            >
              <a
                href={GITHUB_PROFILE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-white transition-colors'
                aria-label='Visit my GitHub profile'
              >
                <FiGithub className='h-5 w-5 sm:h-6 sm:w-6' />
              </a>
              <a
                href={LINKEDIN_PROFILE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-white transition-colors'
                aria-label='Visit my LinkedIn profile'
              >
                <FiLinkedin className='h-5 w-5 sm:h-6 sm:w-6' />
              </a>
            </motion.div>
          </motion.article>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='relative flex justify-center lg:justify-end mt-8 lg:mt-0'
            aria-hidden='true'
          >
            <div className='relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-indigo-500/20 p-1 backdrop-blur-sm'>
              <div className='absolute inset-1 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-30'></div>
              <div className='absolute inset-[3px] rounded-full bg-slate-900 flex items-center justify-center'>
                <div className='text-center'>
                  <div className='text-4xl sm:text-5xl md:text-6xl font-electrolize font-bold title-gradient mb-2'>
                    &lt;/&gt;
                  </div>
                  <p className='text-gray-300 text-xs sm:text-sm md:text-base uppercase font-bold'>
                    10+ years experience
                  </p>
                </div>
              </div>
            </div>
            <div className='absolute -z-10 inset-0 blur-3xl rounded-full bg-indigo-500/20 glow'></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
