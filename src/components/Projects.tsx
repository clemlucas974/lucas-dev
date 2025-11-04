import { type FC, useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

import { useReducedMotion } from '../utils/useReducedMotion';

interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  technologies: string[];
  link: string;
  datePublished?: string;
  client?: string;
}

const getProjects = (t: (key: string) => string): Project[] => [
  {
    id: 1,
    title: t('projects.items.naruto.title'),
    description: t('projects.items.naruto.description'),
    details: t('projects.items.naruto.details'),
    image: '/naruto-ninja-cards.webp',
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
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const prefersReducedMotion = useReducedMotion();
  const projects = getProjects(t);

  // Handle escape key and focus management for modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeProject) {
        setActiveProject(null);
      }
    };

    if (activeProject) {
      document.addEventListener('keydown', handleEscape);
      // Focus close button when modal opens
      closeButtonRef.current?.focus();
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  const containerVariants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 30 },
    visible: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.6 } },
  };

  const modalVariants = {
    initial: { opacity: prefersReducedMotion ? 1 : 0, scale: prefersReducedMotion ? 1 : 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: prefersReducedMotion ? 0 : 0, scale: prefersReducedMotion ? 1 : 0.9 },
  };

  return (
    <section id='projects' className='section bg-gradient-radial from-zinc-950 to-black relative'>
      <div className='container'>
        <motion.div
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }
          }
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='font-electrolize text-3xl md:text-4xl font-bold mb-4'>
            {t('projects.title')}{' '}
            <span className='title-gradient'>{t('projects.titleAccent')}</span>
          </h2>
          <p className='text-gray-400 max-w-3xl mx-auto'>{t('projects.description')}</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          aria-label='Portfolio projects'
        >
          {projects.map((project) => (
            <motion.article
              aria-label={`View details of ${project.title}`}
              aria-describedby={`${project.title} description`}
              key={project.id}
              variants={itemVariants}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      y: -10,
                      transition: { duration: 0.3 },
                    }
              }
              onClick={() => setActiveProject(project)}
              className='glass-card group overflow-hidden cursor-pointer relative'
              itemScope
              itemType='https://schema.org/CreativeWork'
            >
              <meta itemProp='name' content={project.title} />
              <meta itemProp='description' content={project.description} />
              {project.datePublished && (
                <meta itemProp='datePublished' content={project.datePublished} />
              )}
              {project.client && <meta itemProp='creator' content={project.client} />}

              <div className='h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.description}`}
                  className='w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110'
                  itemProp='image'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-electrolize font-semibold mb-2 text-white'>
                  {project.title}
                </h3>
                <p className='text-gray-400 mb-4 line-clamp-2'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className='tech-pill'>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className='tech-pill'>+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
              {/* Blur overlay with eye icon - covers entire card */}
              <div className='absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <div className='text-white text-center'>
                  <svg
                    className='w-12 h-12 mx-auto mb-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                  <p className='text-sm font-medium'>{t('projects.viewDetails')}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {activeProject && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
            role='dialog'
            aria-modal='true'
            aria-labelledby='project-modal-title'
            aria-describedby='project-modal-description'
            ref={modalRef}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setActiveProject(null);
              }
            }}
          >
            <motion.div
              variants={modalVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='bg-zinc-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto'
            >
              <div className='h-56 md:h-72 overflow-hidden'>
                <img
                  src={activeProject.image}
                  alt={`${activeProject.title} project screenshot`}
                  className='w-full h-full object-cover object-center'
                />
              </div>
              <div className='p-6 md:p-8'>
                <h3
                  id='project-modal-title'
                  className='text-2xl font-electrolize font-bold mb-4 text-white'
                >
                  {activeProject.title}
                </h3>
                <p id='project-modal-description' className='text-gray-300 mb-6'>
                  {activeProject.details}
                </p>
                <div className='mb-6'>
                  <h4 className='text-sm uppercase text-gray-500 mb-3 tracking-wider font-medium'>
                    {t('projects.technologies')}
                  </h4>
                  <div className='flex flex-wrap gap-2' aria-label='Technologies used'>
                    {activeProject.technologies.map((tech) => (
                      <span key={tech} className='tech-pill'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='flex justify-end space-x-4'>
                  <button
                    ref={closeButtonRef}
                    onClick={() => setActiveProject(null)}
                    className='button-outline'
                    aria-label={t('projects.close')}
                  >
                    {t('projects.close')}
                  </button>
                  <a
                    href={activeProject.link}
                    className='button-primary'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${t('projects.visitProject')} ${activeProject.title} (opens in new tab)`}
                  >
                    {t('projects.visitProject')}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
