import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4 inline-block px-4 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-full text-sm font-medium"
            >
              Senior Fullstack Engineer
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display"
            >
              Building
              <span className="title-gradient"> exceptional </span>
              digital experiences
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 mb-8"
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
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="#projects" className="button-primary">
                View Projects
              </a>
              <a href="#contact" className="button-outline">
                Contact Me
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex items-center space-x-5 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiTwitter className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-indigo-500/20 p-1 backdrop-blur-sm">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-30"></div>
              <div className="absolute inset-[3px] rounded-full bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-display font-bold title-gradient mb-2">&lt;/&gt;</div>
                  <p className="text-gray-300 text-sm md:text-base">10+ years experience</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 blur-3xl rounded-full bg-indigo-500/20 glow"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;