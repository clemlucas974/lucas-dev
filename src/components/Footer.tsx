import { type FC } from 'react';

import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL, MALT_PROFILE_URL } from '../utils/links';
import Logo from './Logo';
import { MaltSvg } from './icons/MaltSvg';

const Footer: FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { key: 'home', href: '#' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <footer className='border-t border-line bg-sand py-14 sm:py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='sm:col-span-2'>
            <a
              href='#'
              className='inline-block text-xl transition-opacity hover:opacity-80'
              aria-label='lucas.dev — home'
            >
              <Logo />
            </a>
            <p className='mb-6 mt-4 max-w-md leading-relaxed text-ink-soft'>
              {t('footer.description')}
            </p>
            <div className='flex gap-2.5'>
              <a
                href={GITHUB_PROFILE_URL}
                aria-label='Visit my GitHub profile'
                className='flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-ink-soft transition-colors hover:border-emerald-700 hover:bg-emerald-700 hover:text-paper'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FiGithub className='h-5 w-5' aria-hidden='true' />
              </a>
              <a
                href={LINKEDIN_PROFILE_URL}
                aria-label='Visit my LinkedIn profile'
                className='flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-ink-soft transition-colors hover:border-emerald-700 hover:bg-emerald-700 hover:text-paper'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FiLinkedin className='h-5 w-5' aria-hidden='true' />
              </a>
              <a
                href={MALT_PROFILE_URL}
                aria-label='Visit my Malt profile (opens in new tab)'
                className='flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-ink-soft transition-colors hover:border-emerald-700 hover:bg-emerald-700 hover:text-paper'
                target='_blank'
                rel='noopener noreferrer'
              >
                <MaltSvg className='h-5 w-5' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='mb-4 text-xs font-medium uppercase tracking-[0.18em] text-taupe'>
              {t('footer.navigation')}
            </h3>
            <ul className='space-y-2.5'>
              {navItems.map((nav) => (
                <li key={nav.key}>
                  <a
                    href={nav.href}
                    className='text-ink-soft transition-colors hover:text-emerald-800'
                  >
                    {t(`footer.${nav.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='mb-4 text-xs font-medium uppercase tracking-[0.18em] text-taupe'>
              {t('footer.contactTitle')}
            </h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-3'>
                <FiMail className='mt-0.5 h-5 w-5 shrink-0 text-emerald-700' aria-hidden='true' />
                <span className='text-ink-soft'>clement.lucas.dev@gmail.com</span>
              </li>
              <li className='flex items-start gap-3'>
                <FiMapPin className='mt-0.5 h-5 w-5 shrink-0 text-coral-700' aria-hidden='true' />
                <span className='text-ink-soft'>{t('contact.locationValue')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-line pt-6 text-center text-sm text-taupe'>
          {t('footer.rights', { year: currentYear })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
