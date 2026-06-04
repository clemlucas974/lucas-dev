import { type FC, useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiX } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

import { useReducedMotion } from '../utils/useReducedMotion';

interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  /** optional background class behind the image (for transparent/overlay PNGs) */
  imageBg?: string;
  technologies: string[];
  link: string;
  datePublished?: string;
  client?: string;
}

const getProjects = (t: (key: string) => string): Project[] => [
  {
    id: 8,
    title: t('projects.items.aromazone.title'),
    description: t('projects.items.aromazone.description'),
    details: t('projects.items.aromazone.details'),
    image: '/aroma-zone.jpg',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'AI Agent', 'LangGraph', 'AWS'],
    link: 'https://aroma-zone.com/',
    datePublished: '2026',
    client: 'Aroma-Zone',
  },
  {
    id: 7,
    title: t('projects.items.jinko.title'),
    description: t('projects.items.jinko.description'),
    details: t('projects.items.jinko.details'),
    image: '/jinko.jpg',
    technologies: ['ReactJS', 'Tailwind CSS', 'OpenAI Apps SDK', 'TypeScript', 'ChatGPT'],
    link: 'https://gojinko.com/',
    datePublished: '2025',
    client: 'Jinko',
  },
  {
    id: 1,
    title: t('projects.items.naruto.title'),
    description: t('projects.items.naruto.description'),
    details: t('projects.items.naruto.details'),
    image: '/naruto-cards.png',
    imageBg: 'bg-gradient-to-br from-shell via-sand to-honey-200',
    technologies: ['React', 'Next.JS', 'TypeScript', 'Go', 'AWS', 'MongoDB', 'Nakama', 'Docker'],
    link: 'https://app.narutoninjacards.com',
    datePublished: '2025',
    client: 'Sekai',
  },
  {
    id: 2,
    title: t('projects.items.bam.title'),
    description: t('projects.items.bam.description'),
    details: t('projects.items.bam.details'),
    image: '/bam-karaoke-box.webp',
    technologies: ['NestJS', 'PostgreSQL', 'Redis', 'AWS', 'Terraform', 'GraphQL'],
    link: 'https://booking.bam-karaokebox.com/paris',
    datePublished: '2024',
    client: 'BAM Karaoke Box',
  },
  {
    id: 3,
    title: t('projects.items.popchef.title'),
    description: t('projects.items.popchef.description'),
    details: t('projects.items.popchef.details'),
    image: '/popchef.webp',
    technologies: ['React', 'TypeScript', 'React Native', 'Kubernetes', 'Terraform', 'AWS'],
    link: 'https://www.popchef.com',
    datePublished: '2023',
    client: 'Popchef',
  },
  {
    id: 4,
    title: t('projects.items.quitoque.title'),
    description: t('projects.items.quitoque.description'),
    details: t('projects.items.quitoque.details'),
    image: '/quitoque.webp',
    technologies: [
      'React',
      'React-Native',
      'Typescript',
      'PHP/Symfony',
      'MySQL',
      'Firebase',
      'Fastlane',
      'GitlabCI',
      'Kotlin',
      'Swift',
      'Management',
      'Team leadership',
    ],
    link: 'https://quitoque.fr',
    datePublished: '2022',
    client: 'Quitoque',
  },
  {
    id: 5,
    title: t('projects.items.fastory.title'),
    description: t('projects.items.fastory.description'),
    details: t('projects.items.fastory.details'),
    image: '/fastory.webp',
    technologies: [
      'React',
      'NodeJS',
      'AWS (S3, Lambda)',
      'CircleCI',
      'Docker',
      'Electron',
      'PostgreSQL',
    ],
    link: 'https://fastory.io',
    datePublished: '2019',
    client: 'Fastory',
  },
  {
    id: 6,
    title: t('projects.items.swimbot.title'),
    description: t('projects.items.swimbot.description'),
    details: t('projects.items.swimbot.details'),
    image: '/swimbot.webp',
    technologies: [
      'Android',
      'Java',
      'Python',
      'React',
      'MongoDB',
      'Embedded Systems',
      'Data visualization',
    ],
    link: 'https://www.youtube.com/@SwimBot',
    datePublished: '2016',
    client: 'Swimbot',
  },
];

const Projects: FC = () => {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const prefersReducedMotion = useReducedMotion();
  const projects = getProjects(t);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeProject) setActiveProject(null);
    };
    if (activeProject) {
      document.addEventListener('keydown', handleEscape);
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  const container = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: { opacity: 1, transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 } },
  };
  const item = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.6 } },
  };

  return (
    <section id='projects' className='section bg-shell'>
      <div className='container'>
        <motion.div
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className='max-w-2xl'
        >
          <span className='eyebrow mb-5'>03 — {t('projects.titleAccent')}</span>
          <h2 className='font-display text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl'>
            {t('projects.title')}{' '}
            <span className='italic text-emerald-800'>{t('projects.titleAccent')}</span>
          </h2>
          <p className='mt-5 text-lg leading-relaxed text-ink-soft'>{t('projects.description')}</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='mt-14 grid grid-cols-1 gap-7 md:grid-cols-2'
          aria-label='Portfolio projects'
        >
          {projects.map((project) => (
            <motion.article
              aria-label={`View details of ${project.title}`}
              key={project.id}
              variants={item}
              whileHover={prefersReducedMotion ? {} : { y: -8 }}
              onClick={() => setActiveProject(project)}
              className='surface group cursor-pointer overflow-hidden'
              itemScope
              itemType='https://schema.org/CreativeWork'
            >
              <meta itemProp='name' content={project.title} />
              <meta itemProp='description' content={project.description} />
              {project.datePublished && (
                <meta itemProp='datePublished' content={project.datePublished} />
              )}
              {project.client && <meta itemProp='creator' content={project.client} />}

              <div
                className={`relative m-2 h-52 overflow-hidden rounded-2xl ${project.imageBg ?? ''}`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.description}`}
                  className='h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105'
                  loading='lazy'
                  itemProp='image'
                />
                <span className='absolute right-3 top-3 rounded-full bg-paper/85 px-2.5 py-1 text-xs font-medium text-ink-soft backdrop-blur-sm'>
                  {project.datePublished}
                </span>
              </div>

              <div className='p-6 pt-4'>
                <div className='mb-3 flex items-center justify-between'>
                  <span className='text-xs font-medium uppercase tracking-[0.18em] text-taupe'>
                    {project.client}
                  </span>
                  <FiArrowUpRight className='h-5 w-5 text-taupe transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-700' />
                </div>
                <h3 className='mb-2 font-display text-2xl font-medium text-ink'>{project.title}</h3>
                <p className='mb-5 line-clamp-2 leading-relaxed text-ink-soft'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className='chip'>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className='chip'>+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm'
            role='dialog'
            aria-modal='true'
            aria-labelledby='project-modal-title'
            aria-describedby='project-modal-description'
            ref={modalRef}
            onClick={(e) => {
              if (e.target === e.currentTarget) setActiveProject(null);
            }}
          >
            <motion.div
              initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className='max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-paper'
            >
              <div
                className={`relative m-3 h-56 overflow-hidden rounded-2xl md:h-72 ${activeProject.imageBg ?? ''}`}
              >
                <img
                  src={activeProject.image}
                  alt={`${activeProject.title} project screenshot`}
                  className='h-full w-full object-cover object-center'
                />
                <button
                  ref={closeButtonRef}
                  onClick={() => setActiveProject(null)}
                  className='absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm transition-colors hover:bg-paper'
                  aria-label={t('projects.close')}
                >
                  <FiX className='h-5 w-5' />
                </button>
              </div>
              <div className='p-6 md:p-8'>
                <div className='mb-2 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-taupe'>
                  <span>{activeProject.client}</span>
                  <span className='h-1 w-1 rounded-full bg-coral-600' />
                  <span>{activeProject.datePublished}</span>
                </div>
                <h3
                  id='project-modal-title'
                  className='mb-4 font-display text-3xl font-semibold text-ink'
                >
                  {activeProject.title}
                </h3>
                <p id='project-modal-description' className='mb-6 leading-relaxed text-ink-soft'>
                  {activeProject.details}
                </p>
                <div className='mb-7'>
                  <h4 className='mb-3 text-xs font-medium uppercase tracking-[0.18em] text-taupe'>
                    {t('projects.technologies')}
                  </h4>
                  <div className='flex flex-wrap gap-2' aria-label='Technologies used'>
                    {activeProject.technologies.map((tech) => (
                      <span key={tech} className='chip'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='flex justify-end gap-3'>
                  <button onClick={() => setActiveProject(null)} className='btn-ghost'>
                    {t('projects.close')}
                  </button>
                  <a
                    href={activeProject.link}
                    className='btn-primary'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${t('projects.visitProject')} ${activeProject.title} (opens in new tab)`}
                  >
                    {t('projects.visitProject')}
                    <FiArrowUpRight className='h-4 w-4' />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
