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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-2 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          <motion.a
            href='#'
            className='text-xl sm:text-2xl font-bold text-gradient font-display'
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
                    className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                      isScrolled ? 'text-gray-200' : 'text-gray-300'
                    }`}
                  >
                    {link.name}
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
            className='block md:hidden text-gray-200 hover:text-white transition-colors'
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <FiX className='h-6 w-6' /> : <FiMenu className='h-6 w-6' />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-md'
      >
        <div className='px-4 pt-2 pb-6'>
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
                  className='block text-base font-medium text-gray-200 hover:text-indigo-400 transition-colors'
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
      </motion.div>
    </header>
  );
};

export default Header;
