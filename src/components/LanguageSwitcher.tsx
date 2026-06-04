import React, { useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGlobe } from 'react-icons/fi';

import { useReducedMotion } from '../utils/useReducedMotion';

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const dropdownVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, scale: 1 },
        visible: { opacity: 1, scale: 1 },
      }
    : {
        hidden: { opacity: 0, scale: 0.95, y: -10 },
        visible: { opacity: 1, scale: 1, y: 0 },
      };

  return (
    <div className={`relative ${className}`}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-ink-soft transition-all duration-300 hover:border-emerald-600/40'
        aria-label='Select language'
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <FiGlobe className='h-4 w-4 text-taupe' />
        <span className='text-lg translate-y-[1.5px]'>{currentLanguage.flag}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            variants={dropdownVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={
              prefersReducedMotion ? { duration: 0.1 } : { duration: 0.2, ease: 'easeOut' }
            }
            className='surface absolute right-0 z-50 mt-2 w-48 overflow-hidden !rounded-2xl'
            role='menu'
            aria-orientation='vertical'
          >
            <div className='py-2'>
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors duration-200 ${
                    currentLanguage.code === language.code
                      ? 'bg-emerald-600/10 text-emerald-800'
                      : 'text-ink-soft hover:bg-sand'
                  }`}
                  role='menuitem'
                  aria-current={currentLanguage.code === language.code ? 'true' : undefined}
                >
                  <span className='text-xl translate-y-[1.5px]'>{language.flag}</span>
                  <span className='text-sm font-medium'>{language.label}</span>
                  {currentLanguage.code === language.code && (
                    <svg
                      className='ml-auto h-4 w-4 text-emerald-700'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
