import React from 'react';

import { type Variants, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id='about' className='section relative bg-gradient-radial from-zinc-900 to-zinc-950'>
      <div className='container'>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='max-w-4xl mx-auto'
        >
          <motion.div variants={itemVariants} className='text-center mb-16'>
            <h2 className='font-electrolize text-3xl md:text-4xl font-bold mb-6'>
              {t('about.title')} <span className='title-gradient'>{t('about.titleAccent')}</span>
            </h2>
            <p className='text-lg text-gray-400 max-w-3xl mx-auto'>{t('about.description')}</p>
          </motion.div>

          <motion.div variants={itemVariants} className='glass-card p-8 md:p-10 relative'>
            <div className='absolute inset-0 -z-10 bg-gradient-to-br from-primary-600/10 to-secondary-600/10 rounded-xl blur opacity-30'></div>

            <div className='mb-8'>
              <h3 className='text-xl md:text-2xl font-semibold mb-4 font-electrolize'>
                {t('about.journey.title')}
              </h3>
              <p className='text-gray-300 mb-4 leading-relaxed'>{t('about.journey.content1')}</p>
              <p className='text-gray-300 leading-relaxed'>{t('about.journey.content2')}</p>
            </div>

            <div>
              <h3 className='text-xl md:text-2xl font-semibold mb-4 font-electrolize'>
                {t('about.whatIDo.title')}
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='border border-zinc-800/50 bg-zinc-900/50 rounded-lg p-4'>
                  <h4 className='text-primary-400 font-medium mb-2'>
                    {t('about.whatIDo.frontend.title')}
                  </h4>
                  <p className='text-gray-400'>{t('about.whatIDo.frontend.description')}</p>
                </div>
                <div className='border border-zinc-800/50 bg-zinc-900/50 rounded-lg p-4'>
                  <h4 className='text-purple-400 font-medium mb-2'>
                    {t('about.whatIDo.backend.title')}
                  </h4>
                  <p className='text-gray-400'>{t('about.whatIDo.backend.description')}</p>
                </div>
                <div className='border border-zinc-800/50 bg-zinc-900/50 rounded-lg p-4'>
                  <h4 className='text-teal-400 font-medium mb-2'>
                    {t('about.whatIDo.devops.title')}
                  </h4>
                  <p className='text-gray-400'>{t('about.whatIDo.devops.description')}</p>
                </div>
                <div className='border border-zinc-800/50 bg-zinc-900/50 rounded-lg p-4'>
                  <h4 className='text-pink-400 font-medium mb-2'>
                    {t('about.whatIDo.leadership.title')}
                  </h4>
                  <p className='text-gray-400'>{t('about.whatIDo.leadership.description')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
