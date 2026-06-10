import type { FC } from 'react';

import { type Variants, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, MALT_PROFILE_URL } from '../utils/links';
import { useReducedMotion } from '../utils/useReducedMotion';
import { MaltSvg } from './icons/MaltSvg';

const EMAIL = 'clement.lucas.dev@gmail.com';

const Contact: FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: { opacity: 1, transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 } },
  };
  const item: Variants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.6 } },
  };

  return (
    <section id='contact' className='section relative overflow-hidden bg-paper'>
      {/* soft blob accent */}
      <div
        className='blob blob-emerald animate-drift bottom-[-12%] right-[-8%] h-[28rem] w-[28rem]'
        aria-hidden='true'
      />

      <div className='container relative z-10'>
        <motion.div
          ref={ref}
          variants={container}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='grid grid-cols-1 gap-12 lg:grid-cols-12'
        >
          {/* Left: invitation */}
          <div className='lg:col-span-7'>
            <motion.span variants={item} className='eyebrow mb-5'>
              04 — {t('contact.titleAccent')}
            </motion.span>
            <motion.h2
              variants={item}
              className='font-display text-4xl font-semibold leading-[1.04] tracking-[-0.02em] text-ink md:text-6xl'
            >
              {t('contact.title')}{' '}
              <span className='italic text-emerald-800'>{t('contact.titleAccent')}</span>
            </motion.h2>
            <motion.p
              variants={item}
              className='mt-6 max-w-xl text-lg leading-relaxed text-ink-soft'
            >
              {t('contact.description')}
            </motion.p>

            <motion.a
              variants={item}
              href={`mailto:${EMAIL}`}
              className='group mt-9 inline-flex items-center gap-3 font-display text-2xl font-medium text-ink transition-colors hover:text-emerald-800 sm:text-3xl'
            >
              <span className='border-b-2 border-coral-500 pb-1'>{EMAIL}</span>
              <FiArrowUpRight className='h-6 w-6 text-emerald-700 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1' />
            </motion.a>
          </div>

          {/* Right: details card */}
          <motion.div variants={item} className='lg:col-span-5'>
            <div className='surface p-7 sm:p-8'>
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <span className='mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700'>
                    <FiMail className='h-5 w-5' />
                  </span>
                  <div>
                    <h3 className='text-xs font-medium uppercase tracking-[0.18em] text-taupe'>
                      {t('contact.email')}
                    </h3>
                    <a
                      href={`mailto:${EMAIL}`}
                      className='text-ink transition-colors hover:text-emerald-800'
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <span className='mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coral-500/15 text-coral-700'>
                    <FiMapPin className='h-5 w-5' />
                  </span>
                  <div>
                    <h3 className='text-xs font-medium uppercase tracking-[0.18em] text-taupe'>
                      {t('contact.location')}
                    </h3>
                    <p className='text-ink'>{t('contact.locationValue')}</p>
                  </div>
                </div>
              </div>

              <div className='mt-8 border-t border-line pt-6'>
                <h3 className='mb-4 text-xs font-medium uppercase tracking-[0.18em] text-taupe'>
                  {t('contact.followMe')}
                </h3>
                <div className='flex gap-2.5' aria-label='Social media links'>
                  <a
                    href={GITHUB_PROFILE_URL}
                    aria-label='Visit my GitHub profile (opens in new tab)'
                    className='flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink-soft transition-colors hover:border-emerald-700 hover:bg-emerald-700 hover:text-paper'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FiGithub className='h-5 w-5' aria-hidden='true' />
                  </a>
                  <a
                    href={LINKEDIN_PROFILE_URL}
                    aria-label='Visit my LinkedIn profile (opens in new tab)'
                    className='flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink-soft transition-colors hover:border-emerald-700 hover:bg-emerald-700 hover:text-paper'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FiLinkedin className='h-5 w-5' aria-hidden='true' />
                  </a>
                  <a
                    href={MALT_PROFILE_URL}
                    aria-label='Visit my Malt profile (opens in new tab)'
                    className='flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink-soft transition-colors hover:border-emerald-700 hover:bg-emerald-700 hover:text-paper'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <MaltSvg className='h-5 w-5' />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
