import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'py-3 sm:py-4' : 'py-4 sm:py-6'
      }`}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className={`flex items-center justify-between transition-all duration-500 ease-out backdrop-blur-sm ${
            isScrolled
              ? 'bg-slate-900/80 rounded-full px-6 py-3 shadow-header'
              : 'px-0 py-0 rounded-none'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href='#'
            className='text-xl sm:text-2xl font-bold text-gradient font-electrolize'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            &lt;LUCAS.DEV/&gt;
          </motion.a>

          <nav className='hidden md:block'>
            <ul className='flex space-x-6 lg:space-x-8'>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <a
                    href={link.href}
                    className={`text-sm font-medium transition-all duration-300 hover:text-indigo-400 relative group ${
                      isScrolled ? 'text-gray-200' : 'text-gray-300'
                    }`}
                  >
                    {link.name}
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full'></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='hidden md:block button-primary'
          >
            Resume
          </motion.button> */}

          <button
            className={`block md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-200 hover:text-white' : 'text-gray-300 hover:text-white'
            }`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <FiX className='h-6 w-6' /> : <FiMenu className='h-6 w-6' />}
          </button>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='md:hidden overflow-hidden'
      >
        <div
          className={`mx-4 mt-4 rounded-2xl ${
            isScrolled
              ? 'bg-slate-900/90 backdrop-blur-xl border border-slate-800/50'
              : 'bg-slate-900/95 backdrop-blur-xl border border-slate-800/30'
          }`}
        >
          <div className='px-6 pt-4 pb-6'>
            <ul className='space-y-4'>
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    className='block text-base font-medium text-gray-200 hover:text-indigo-400 transition-colors duration-300'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <button className='mt-2 w-full button-primary'>Resume</button>
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
