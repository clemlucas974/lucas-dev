import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'devops', label: 'DevOps' },
    { id: 'other', label: 'Other' },
  ];

  const skills = [
    { name: 'React', category: 'frontend', level: 95 },
    { name: 'TypeScript', category: 'frontend', level: 90 },
    { name: 'Next.js', category: 'frontend', level: 85 },
    { name: 'CSS/SCSS', category: 'frontend', level: 90 },
    { name: 'Tailwind CSS', category: 'frontend', level: 95 },
    { name: 'React Native', category: 'frontend', level: 80 },

    { name: 'Node.js', category: 'backend', level: 90 },
    { name: 'GraphQL', category: 'backend', level: 85 },
    { name: 'NestJS', category: 'backend', level: 85 },
    { name: 'PostgreSQL', category: 'backend', level: 90 },
    { name: 'Redis', category: 'backend', level: 80 },
    { name: 'MongoDB', category: 'backend', level: 75 },

    { name: 'AWS', category: 'devops', level: 85 },
    { name: 'Terraform', category: 'devops', level: 80 },
    { name: 'Kubernetes', category: 'devops', level: 80 },
    { name: 'Docker', category: 'devops', level: 85 },
    { name: 'CI/CD', category: 'devops', level: 90 },
    { name: 'Github Actions', category: 'devops', level: 85 },

    { name: 'System Design', category: 'other', level: 90 },
    { name: 'Team Leadership', category: 'other', level: 85 },
    { name: 'Agile/Scrum', category: 'other', level: 80 },
  ];

  const filteredSkills =
    activeCategory === 'all' ? skills : skills.filter((skill) => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id='skills' className='section bg-slate-950 relative'>
      <div className='container'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='font-display text-3xl md:text-4xl font-bold mb-4'>
              My <span className='title-gradient'>Skills</span>
            </h2>
            <p className='text-gray-400 max-w-3xl mx-auto'>
              A comprehensive overview of my technical expertise and abilities, developed over years
              of professional experience.
            </p>
          </motion.div>

          <div className='mb-10'>
            <div className='flex flex-wrap justify-center gap-3 mb-10'>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial='hidden'
              animate={inView ? 'visible' : 'hidden'}
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className='glass-card p-6 relative overflow-hidden'
                >
                  <div
                    className='absolute bottom-0 left-0 h-1 bg-indigo-600'
                    style={{ width: `${skill.level}%` }}
                  ></div>
                  <h3 className='text-lg font-medium mb-2'>{skill.name}</h3>
                  <div className='flex items-center justify-between'>
                    <div className='w-full bg-slate-800 rounded-full h-2.5'>
                      <motion.div
                        className='h-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600'
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                      />
                    </div>
                    <span className='ml-4 text-sm font-medium text-gray-400'>{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
