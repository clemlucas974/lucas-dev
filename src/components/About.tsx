import React from 'react';

import { type Variants, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
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
    <section id='about' className='section relative bg-gradient-radial from-slate-900 to-slate-950'>
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
              About <span className='title-gradient'>Me</span>
            </h2>
            <p className='text-lg text-gray-400 max-w-3xl mx-auto'>
              I'm a passionate Senior Fullstack Engineer with over a decade of experience building
              scalable applications and leading technical teams. I specialize in modern JavaScript
              frameworks, cloud infrastructure, and creating exceptional digital experiences.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className='glass-card p-8 md:p-10 relative'>
            <div className='absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl blur opacity-30'></div>

            <div className='mb-8'>
              <h3 className='text-xl md:text-2xl font-semibold mb-4 font-electrolize'>
                My Journey
              </h3>
              <p className='text-gray-300 mb-4 leading-relaxed'>
                I've collaborated with innovative startups and established companies to build
                robust, scalable applications that solve real-world problems. My approach combines
                technical excellence with a deep understanding of business needs and user
                experience.
              </p>
              <p className='text-gray-300 leading-relaxed'>
                Throughout my career, I've led technical teams, mentored junior developers, and
                architected systems that can withstand the test of time and scale. I'm particularly
                passionate about clean code, performance optimization, and embracing modern
                development practices.
              </p>
            </div>

            <div>
              <h3 className='text-xl md:text-2xl font-semibold mb-4 font-electrolize'>What I Do</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='border border-slate-800 bg-slate-900/50 rounded-lg p-4'>
                  <h4 className='text-indigo-400 font-medium mb-2'>Frontend Excellence</h4>
                  <p className='text-gray-400'>
                    Create beautiful, responsive, and performant user interfaces using modern
                    frameworks and best practices.
                  </p>
                </div>
                <div className='border border-slate-800 bg-slate-900/50 rounded-lg p-4'>
                  <h4 className='text-purple-400 font-medium mb-2'>Backend Architecture</h4>
                  <p className='text-gray-400'>
                    Design and implement scalable server-side applications and APIs with a focus on
                    performance and security.
                  </p>
                </div>
                <div className='border border-slate-800 bg-slate-900/50 rounded-lg p-4'>
                  <h4 className='text-teal-400 font-medium mb-2'>DevOps & Infrastructure</h4>
                  <p className='text-gray-400'>
                    Build robust CI/CD pipelines and cloud infrastructure.
                  </p>
                </div>
                <div className='border border-slate-800 bg-slate-900/50 rounded-lg p-4'>
                  <h4 className='text-pink-400 font-medium mb-2'>Technical Leadership</h4>
                  <p className='text-gray-400'>
                    Lead development teams, mentor junior engineers, and ensure projects are
                    delivered on time and to specification.
                  </p>
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
