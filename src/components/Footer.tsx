import { type FC } from 'react';

import { useTranslation } from 'react-i18next';
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, MALT_PROFILE_URL } from '../utils/links';
import { MaltSvg } from './icons/MaltSvg';

const Footer: FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-zinc-950 py-8 sm:py-12 border-t border-zinc-800/40'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8'>
          <div className='sm:col-span-2'>
            <a
              href='#'
              className='text-xl sm:text-2xl font-bold text-gradient mb-3 sm:mb-4 inline-block font-electrolize'
            >
              &lt;LUCAS.DEV/&gt;
            </a>
            <p className='text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-md'>
              {t('footer.description')}
            </p>
            <div className='flex space-x-4'>
              {/* GITHUB */}
              <a
                href={GITHUB_PROFILE_URL}
                aria-label='Visit my GitHub profile'
                className='text-gray-400 hover:text-white transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  className='h-5 w-5 sm:h-6 sm:w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
              <a
                href={LINKEDIN_PROFILE_URL}
                aria-label='Visit my LinkedIn profile'
                className='text-gray-400 hover:text-white transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  className='h-5 w-5 sm:h-6 sm:w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
              <a
                href={MALT_PROFILE_URL}
                aria-label='Visit my Malt profile (opens in new tab)'
                className='text-gray-400 hover:text-white transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                <MaltSvg className='h-5 w-5 sm:h-6 sm:w-6' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-white font-medium text-base sm:text-lg mb-3 sm:mb-4'>{t('footer.navigation')}</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-sm sm:text-base text-gray-400 hover:text-white transition-colors'
                >
                  {t('footer.home')}
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-sm sm:text-base text-gray-400 hover:text-white transition-colors'
                >
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a
                  href='#skills'
                  className='text-sm sm:text-base text-gray-400 hover:text-white transition-colors'
                >
                  {t('footer.skills')}
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='text-sm sm:text-base text-gray-400 hover:text-white transition-colors'
                >
                  {t('footer.projects')}
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-sm sm:text-base text-gray-400 hover:text-white transition-colors'
                >
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-white font-medium text-base sm:text-lg mb-3 sm:mb-4'>{t('footer.contactTitle')}</h3>
            <ul className='space-y-3 sm:space-y-4'>
              <li className='flex items-start'>
                <svg
                  className='min-h-4 min-w-4 h-4 w-4 sm:min-h-5 sm:min-w-5 sm:h-5 sm:w-5 text-primary-400 mt-0.5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <span className='ml-3 text-sm sm:text-base text-gray-400'>
                  clement.lucas.dev@gmail.com
                </span>
              </li>
              <li className='flex items-start'>
                <svg
                  className='h-4 w-4 sm:h-5 sm:w-5 text-primary-400 mt-0.5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <span className='ml-3 text-sm sm:text-base text-gray-400'>
                  {t('contact.locationValue')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className='pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-zinc-800/40 text-center md:flex md:items-center md:justify-between'>
          <div className='text-xs sm:text-sm text-gray-300'>
            {t('footer.rights', { year: currentYear })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
