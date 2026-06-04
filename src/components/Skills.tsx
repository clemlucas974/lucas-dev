import { type FC, useState } from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  SiAmazon,
  SiClaude,
  SiCss3,
  SiDocker,
  SiFigma,
  SiGithubactions,
  SiGo,
  SiGoogle,
  SiGraphql,
  SiJira,
  SiKubernetes,
  SiLangchain,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSlack,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';

import { useReducedMotion } from '../utils/useReducedMotion';

interface Skill {
  name: string;
  category: 'all' | 'frontend' | 'backend' | 'devops' | 'ai' | 'other';
  icon: React.ReactNode;
}

const getCategories = (t: (key: string) => string) => [
  { id: 'all', label: t('skills.categories.all') },
  { id: 'frontend', label: t('skills.categories.frontend') },
  { id: 'backend', label: t('skills.categories.backend') },
  { id: 'devops', label: t('skills.categories.devops') },
  { id: 'ai', label: t('skills.categories.ai') },
  { id: 'other', label: t('skills.categories.other') },
];

const skills: Skill[] = [
  { name: 'React', category: 'frontend', icon: <SiReact className='h-5 w-5' /> },
  { name: 'TypeScript', category: 'frontend', icon: <SiTypescript className='h-5 w-5' /> },
  { name: 'Next.js', category: 'frontend', icon: <SiNextdotjs className='h-5 w-5' /> },
  { name: 'CSS/SCSS', category: 'frontend', icon: <SiCss3 className='h-5 w-5' /> },
  { name: 'Tailwind CSS', category: 'frontend', icon: <SiTailwindcss className='h-5 w-5' /> },
  { name: 'React Native', category: 'frontend', icon: <SiReact className='h-5 w-5' /> },

  { name: 'Node.js', category: 'backend', icon: <SiNodedotjs className='h-5 w-5' /> },
  { name: 'Go', category: 'backend', icon: <SiGo className='h-5 w-5' /> },
  { name: 'GraphQL', category: 'backend', icon: <SiGraphql className='h-5 w-5' /> },
  { name: 'NestJS', category: 'backend', icon: <SiNestjs className='h-5 w-5' /> },
  { name: 'PostgreSQL', category: 'backend', icon: <SiPostgresql className='h-5 w-5' /> },
  { name: 'Redis', category: 'backend', icon: <SiRedis className='h-5 w-5' /> },
  { name: 'MongoDB', category: 'backend', icon: <SiMongodb className='h-5 w-5' /> },

  { name: 'AWS', category: 'devops', icon: <SiAmazon className='h-5 w-5' /> },
  { name: 'Terraform', category: 'devops', icon: <SiTerraform className='h-5 w-5' /> },
  { name: 'Kubernetes', category: 'devops', icon: <SiKubernetes className='h-5 w-5' /> },
  { name: 'Docker', category: 'devops', icon: <SiDocker className='h-5 w-5' /> },
  { name: 'CI/CD', category: 'devops', icon: <SiGithubactions className='h-5 w-5' /> },
  { name: 'Github Actions', category: 'devops', icon: <SiGithubactions className='h-5 w-5' /> },

  { name: 'Claude Code', category: 'ai', icon: <SiClaude className='h-5 w-5' /> },
  { name: 'LangGraph', category: 'ai', icon: <SiLangchain className='h-5 w-5' /> },
  { name: 'Python', category: 'ai', icon: <SiPython className='h-5 w-5' /> },
  { name: 'Google ADK', category: 'ai', icon: <SiGoogle className='h-5 w-5' /> },

  { name: 'System Design', category: 'other', icon: <SiFigma className='h-5 w-5' /> },
  { name: 'Team Leadership', category: 'other', icon: <SiSlack className='h-5 w-5' /> },
  { name: 'Agile/Scrum', category: 'other', icon: <SiJira className='h-5 w-5' /> },
];

const Skills: FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const prefersReducedMotion = useReducedMotion();
  const categories = getCategories(t);

  const filteredSkills =
    activeCategory === 'all' ? skills : skills.filter((skill) => skill.category === activeCategory);

  const container = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: { opacity: 1, transition: { staggerChildren: prefersReducedMotion ? 0 : 0.04 } },
  };
  const item = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.4 } },
  };

  return (
    <section id='skills' className='section bg-paper'>
      <div className='container'>
        <motion.div
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className='max-w-2xl'
        >
          <span className='eyebrow mb-5'>02 — {t('skills.titleAccent')}</span>
          <h2 className='font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl'>
            {t('skills.title')}{' '}
            <span className='italic text-emerald-800'>{t('skills.titleAccent')}</span>
          </h2>
          <p className='mt-5 text-lg leading-relaxed text-ink-soft'>{t('skills.description')}</p>
        </motion.div>

        <div className='mt-12'>
          {/* Filters */}
          <div
            className='mb-9 flex flex-wrap gap-2.5'
            role='tablist'
            aria-label='Filter skills by category'
          >
            {categories.map((category) => {
              const active = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    active
                      ? 'border-emerald-700 bg-emerald-700 text-paper'
                      : 'border-line bg-card text-ink-soft hover:border-emerald-600/40 hover:text-emerald-800'
                  }`}
                  role='tab'
                  aria-selected={active}
                  aria-controls={`skills-panel-${category.id}`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <motion.div
            ref={ref}
            key={activeCategory}
            variants={container}
            initial='hidden'
            animate='visible'
            className='grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'
            role='tabpanel'
            id={`skills-panel-${activeCategory}`}
            aria-label={`${activeCategory === 'all' ? 'All' : activeCategory} skills`}
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={prefersReducedMotion ? {} : { y: -3 }}
                className='surface group flex flex-col items-center gap-2 p-3.5 text-center'
                tabIndex={0}
                aria-label={`${skill.name} skill`}
              >
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600/10 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-700 group-hover:text-paper'>
                  {skill.icon}
                </span>
                <h3 className='font-sans text-xs font-medium leading-tight text-ink'>
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
