import { type FC, useState } from 'react';

import { motion } from 'framer-motion';
import {
  SiAmazon,
  SiCss3,
  SiDocker,
  SiFigma,
  SiGithubactions,
  SiGo,
  SiGraphql,
  SiJira,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSlack,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import { useReducedMotion } from '../utils/useReducedMotion';

interface Skill {
  name: string;
  category: 'all' | 'frontend' | 'backend' | 'devops' | 'other';
  icon: React.ReactNode;
}

interface Category {
  id: string;
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const getCategories = (t: (key: string) => string): Category[] => [
  {
    id: 'all',
    label: t('skills.categories.all'),
    color: 'text-white',
    bgColor: 'bg-gradient-to-r from-primary-600 to-secondary-600',
    borderColor: 'border-primary-600',
  },
  {
    id: 'frontend',
    label: t('skills.categories.frontend'),
    color: 'text-blue-400',
    bgColor: 'bg-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    id: 'backend',
    label: t('skills.categories.backend'),
    color: 'text-green-400',
    bgColor: 'bg-green-600',
    borderColor: 'border-green-500',
  },
  {
    id: 'devops',
    label: t('skills.categories.devops'),
    color: 'text-orange-400',
    bgColor: 'bg-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    id: 'other',
    label: t('skills.categories.other'),
    color: 'text-purple-400',
    bgColor: 'bg-purple-600',
    borderColor: 'border-purple-500',
  },
];

const skills: Skill[] = [
  { name: 'React', category: 'frontend', icon: <SiReact className='w-5 h-5' /> },
  { name: 'TypeScript', category: 'frontend', icon: <SiTypescript className='w-5 h-5' /> },
  { name: 'Next.js', category: 'frontend', icon: <SiNextdotjs className='w-5 h-5' /> },
  { name: 'CSS/SCSS', category: 'frontend', icon: <SiCss3 className='w-5 h-5' /> },
  { name: 'Tailwind CSS', category: 'frontend', icon: <SiTailwindcss className='w-5 h-5' /> },
  { name: 'React Native', category: 'frontend', icon: <SiReact className='w-5 h-5' /> },

  { name: 'Node.js', category: 'backend', icon: <SiNodedotjs className='w-5 h-5' /> },
  { name: 'Go', category: 'backend', icon: <SiGo className='w-5 h-5' /> },
  { name: 'GraphQL', category: 'backend', icon: <SiGraphql className='w-5 h-5' /> },
  { name: 'NestJS', category: 'backend', icon: <SiNestjs className='w-5 h-5' /> },
  { name: 'PostgreSQL', category: 'backend', icon: <SiPostgresql className='w-5 h-5' /> },
  { name: 'Redis', category: 'backend', icon: <SiRedis className='w-5 h-5' /> },
  { name: 'MongoDB', category: 'backend', icon: <SiMongodb className='w-5 h-5' /> },

  { name: 'AWS', category: 'devops', icon: <SiAmazon className='w-5 h-5' /> },
  { name: 'Terraform', category: 'devops', icon: <SiTerraform className='w-5 h-5' /> },
  { name: 'Kubernetes', category: 'devops', icon: <SiKubernetes className='w-5 h-5' /> },
  { name: 'Docker', category: 'devops', icon: <SiDocker className='w-5 h-5' /> },
  { name: 'CI/CD', category: 'devops', icon: <SiGithubactions className='w-5 h-5' /> },
  { name: 'Github Actions', category: 'devops', icon: <SiGithubactions className='w-5 h-5' /> },

  { name: 'System Design', category: 'other', icon: <SiFigma className='w-5 h-5' /> },
  { name: 'Team Leadership', category: 'other', icon: <SiSlack className='w-5 h-5' /> },
  { name: 'Agile/Scrum', category: 'other', icon: <SiJira className='w-5 h-5' /> },
];

const Skills: FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const prefersReducedMotion = useReducedMotion();
  const categories = getCategories(t);

  const filteredSkills =
    activeCategory === 'all' ? skills : skills.filter((skill) => skill.category === activeCategory);

  const getCategoryStyle = (categoryId: string) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category || categories[0]; // fallback to 'all' category
  };

  const containerVariants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: { opacity: 1, transition: { duration: prefersReducedMotion ? 0 : 0.5 } },
  };

  return (
    <section id='skills' className='section bg-zinc-950 relative'>
      <div className='container'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={
              inView
                ? { opacity: 1, y: 0 }
                : { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }
            }
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className='text-center mb-12'
          >
            <h2 className='font-electrolize text-3xl md:text-4xl font-bold mb-4'>
              {t('skills.title')} <span className='title-gradient'>{t('skills.titleAccent')}</span>
            </h2>
            <p className='text-gray-400 max-w-3xl mx-auto'>
              {t('skills.description')}
            </p>
          </motion.div>

          <div className='mb-10'>
            <div
              className='flex flex-wrap justify-center gap-3 mb-10'
              role='tablist'
              aria-label='Filter skills by category'
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? `${category.bgColor} text-white`
                      : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                  }`}
                  role='tab'
                  aria-selected={activeCategory === category.id}
                  aria-controls={`skills-panel-${category.id}`}
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
              className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'
              role='tabpanel'
              id={`skills-panel-${activeCategory}`}
              aria-label={`${activeCategory === 'all' ? 'All' : activeCategory} skills`}
            >
              {filteredSkills.map((skill) => {
                const categoryStyle = getCategoryStyle(skill.category);
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={
                      prefersReducedMotion
                        ? {}
                        : {
                            scale: 1.05,
                            transition: { duration: 0.2 },
                          }
                    }
                    className={`glass-card p-4 relative overflow-hidden group cursor-pointer border ${categoryStyle.borderColor} hover:border-opacity-100 transition-all duration-300`}
                    tabIndex={0}
                    aria-label={`${skill.name} skill`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        // Could add interaction here if needed
                      }
                    }}
                  >
                    <div className='flex flex-col items-center text-center space-y-3'>
                      <div
                        className={`p-3 rounded-lg ${categoryStyle.bgColor} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}
                        aria-hidden='true'
                      >
                        <div className={categoryStyle.color}>{skill.icon}</div>
                      </div>
                      <h3
                        className={`text-sm font-medium ${categoryStyle.color} group-hover:text-white transition-colors duration-300`}
                      >
                        {skill.name}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
