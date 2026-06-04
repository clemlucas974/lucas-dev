import React from 'react';

import { type Variants, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const pillars = [
    { key: 'frontend', no: '01' },
    { key: 'backend', no: '02' },
    { key: 'devops', no: '03' },
    { key: 'leadership', no: '04' },
  ] as const;

  return (
    <section id='about' className='section bg-sand'>
      <div className='container'>
        <motion.div
          ref={ref}
          variants={container}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Editorial two-column header */}
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12'>
            <motion.div variants={item} className='lg:col-span-5'>
              <span className='eyebrow mb-5'>01 — {t('about.title')}</span>
              <h2 className='font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl'>
                {t('about.title')}{' '}
                <span className='italic text-emerald-800'>{t('about.titleAccent')}</span>
              </h2>
            </motion.div>
            <motion.div variants={item} className='lg:col-span-7 lg:pt-2'>
              <p className='text-lg leading-relaxed text-ink-soft'>{t('about.description')}</p>
            </motion.div>
          </div>

          {/* Journey — quiet prose */}
          <motion.div
            variants={item}
            className='mt-16 grid grid-cols-1 gap-8 border-t border-line pt-12 lg:grid-cols-12 lg:gap-12'
          >
            <h3 className='font-display text-2xl font-medium text-ink lg:col-span-5'>
              {t('about.journey.title')}
            </h3>
            <div className='space-y-4 lg:col-span-7'>
              <p className='leading-relaxed text-ink-soft'>{t('about.journey.content1')}</p>
              <p className='leading-relaxed text-ink-soft'>{t('about.journey.content2')}</p>
            </div>
          </motion.div>

          {/* What I do — numbered editorial grid */}
          <div className='mt-16'>
            <motion.h3 variants={item} className='mb-8 font-display text-2xl font-medium text-ink'>
              {t('about.whatIDo.title')}
            </motion.h3>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
              {pillars.map(({ key, no }) => (
                <motion.div
                  key={key}
                  variants={item}
                  className='surface group flex gap-5 p-7 transition-transform duration-300 hover:-translate-y-1'
                >
                  <span className='font-display text-2xl font-semibold text-coral-600/80'>
                    {no}
                  </span>
                  <div>
                    <h4 className='mb-2 font-sans text-base font-semibold text-ink'>
                      {t(`about.whatIDo.${key}.title`)}
                    </h4>
                    <p className='text-sm leading-relaxed text-ink-soft'>
                      {t(`about.whatIDo.${key}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
