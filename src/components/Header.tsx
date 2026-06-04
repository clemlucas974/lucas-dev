import React, { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';

import { useReducedMotion } from '../utils/useReducedMotion';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

interface NavLink {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const navLinks: NavLink[] = [
    { name: t('header.nav.about'), href: '#about' },
    { name: t('header.nav.skills'), href: '#skills' },
    { name: t('header.nav.projects'), href: '#projects' },
    { name: t('header.nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navLinks.forEach((link) => {
      const sectionId = link.href.substring(1); // Remove the #
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Focus first link in mobile menu
      const firstLink = mobileMenuRef.current?.querySelector('a');
      if (firstLink) {
        (firstLink as HTMLElement).focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  // Reduced motion variants
  const reducedMotionVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
  };

  const normalMotionVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };

  const navItemVariants = prefersReducedMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 } };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'py-3 sm:py-4' : 'py-4 sm:py-6'
      }`}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className={`flex items-center justify-between transition-all duration-500 ease-out ${
            isScrolled
              ? 'rounded-full border border-line bg-paper/80 px-5 py-2.5 shadow-[0_10px_30px_-18px_hsl(30_30%_25%_/_0.5)] backdrop-blur-md'
              : 'rounded-none border border-transparent px-0 py-1'
          }`}
          variants={prefersReducedMotion ? reducedMotionVariants : normalMotionVariants}
          initial='initial'
          animate='animate'
          transition={prefersReducedMotion ? {} : { duration: 0.6 }}
        >
          <motion.a
            href='#'
            className='text-lg transition-opacity hover:opacity-80 sm:text-xl'
            aria-label='lucas.dev — home'
            variants={
              prefersReducedMotion
                ? reducedMotionVariants
                : { initial: { opacity: 0 }, animate: { opacity: 1 } }
            }
            initial='initial'
            animate='animate'
            transition={prefersReducedMotion ? {} : { duration: 0.5 }}
          >
            <Logo />
          </motion.a>

          {/* Right cluster: nav · language · menu */}
          <div className='flex items-center gap-3 sm:gap-5'>
            <nav className='hidden md:block'>
              <ul className='flex space-x-6 lg:space-x-8'>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    variants={navItemVariants}
                    initial='initial'
                    animate='animate'
                    transition={prefersReducedMotion ? {} : { delay: 0.1 * i, duration: 0.5 }}
                  >
                    <a
                      href={link.href}
                      className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-emerald-800 ${
                        activeSection === link.href ? 'text-emerald-800' : 'text-ink-soft'
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-coral-600 transition-all duration-300 ${
                          activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              variants={
                prefersReducedMotion
                  ? reducedMotionVariants
                  : { initial: { opacity: 0 }, animate: { opacity: 1 } }
              }
              initial='initial'
              animate='animate'
              transition={prefersReducedMotion ? {} : { duration: 0.5, delay: 0.4 }}
            >
              <LanguageSwitcher />
            </motion.div>

            <button
              ref={menuButtonRef}
              className='block text-ink-soft transition-colors duration-300 hover:text-emerald-800 md:hidden'
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls='mobile-menu'
            >
              {mobileMenuOpen ? <FiX className='h-6 w-6' /> : <FiMenu className='h-6 w-6' />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <motion.div
        ref={mobileMenuRef}
        id='mobile-menu'
        initial={false}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={prefersReducedMotion ? { duration: 0.1 } : { duration: 0.3, ease: 'easeInOut' }}
        className='md:hidden overflow-hidden'
        role='dialog'
        aria-modal='true'
        aria-labelledby='mobile-menu-title'
      >
        <div className='surface mx-4 mt-4 !rounded-3xl'>
          <div className='px-6 pt-4 pb-6'>
            <h2 id='mobile-menu-title' className='sr-only'>
              Navigation Menu
            </h2>
            <ul className='space-y-4'>
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  variants={
                    prefersReducedMotion
                      ? { initial: { opacity: 1, x: 0 }, animate: { opacity: 1, x: 0 } }
                      : { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } }
                  }
                  initial='initial'
                  animate='animate'
                  transition={prefersReducedMotion ? {} : { duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className='block text-base font-medium text-ink-soft transition-colors duration-300 hover:text-emerald-800'
                    onClick={() => setMobileMenuOpen(false)}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
