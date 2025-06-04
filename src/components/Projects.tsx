import { type FC, useState } from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Naruto Ninja Cards',
    description: 'The only official Naruto digital collection.',
    details:
      'Collect the most iconic Naruto moments and characters. Naruto Ninja Cards is built in partnerships with major Japanese Anime licensors (Shūeisha, TV-Tokyo) and backed by world-class investors and public figures including Alexis Ohanian (Reddit) and Mike Shinoda (Linkin Park), Xavier Niel (New Wave) and Alexandre Yazdi (Voodoo Games). The company has offices in Paris and Tokyo.',
    image: '/naruto-ninja-cards.png',
    technologies: ['React', 'Next.JS', 'TypeScript', 'Go', 'AWS', 'MongoDB', 'Nakama', 'Docker'],
    link: 'https://app.narutoninjacards.com',
  },
  {
    id: 2,
    title: 'BAM Karaoke Box',
    description:
      "As Lead Tech, I developed BAM Karaoke Box's new tech system, focusing on Admin, Booking websites and AWS infrastructure.",
    details:
      'Led migration process from PHP/Symfony monolith and legacy data to the new architecture. Designed and led freelance on AWS infrastructure re-work with Terraform/Terragrunt. Developed internal algorithm for efficient booking management. Worked with Marketing team on Analytics Tagging Plan and built GraphQL Admin API and REST APIs based on SOLID principles.',
    image: '/bam-karaoke-box.webp',
    technologies: ['NestJS', 'PostgreSQL', 'Redis', 'AWS', 'Terraform', 'GraphQL'],
    link: 'https://booking.bam-karaokebox.com/paris',
  },
  {
    id: 3,
    title: 'Popchef',
    description:
      'Paired with product teams to translate requirements into technical specifications and led DevOps transformation.',
    details:
      'Created DevOps team to migrate AWS infrastructure to Terraform/k8s/helm and automate CI/CD pipelines for the entire stack. Reduced technical debt while developing new scalable products. Reworked the desktop web app, created a cash register React-Native Android app prototype, and stabilized the delivery man mobile app.',
    image: '/popchef.jpg',
    technologies: ['React', 'TypeScript', 'React Native', 'Kubernetes', 'Terraform', 'AWS'],
    link: 'https://www.popchef.com',
  },
];

const Projects: FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id='projects' className='section bg-gradient-radial from-slate-950 to-black relative'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='font-electrolize text-3xl md:text-4xl font-bold mb-4'>
            Featured <span className='title-gradient'>Projects</span>
          </h2>
          <p className='text-gray-400 max-w-3xl mx-auto'>
            A showcase of my recent work with innovative companies, where I've led development
            efforts and created impactful technical solutions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className='glass-card group overflow-hidden'
            >
              <div className='h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110'
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
                <button
                  onClick={() => setActiveProject(project)}
                  className='text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors'
                >
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {activeProject && (
          <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className='bg-slate-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto'
            >
              <div className='h-56 md:h-72 overflow-hidden'>
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className='w-full h-full object-cover object-center'
                />
              </div>
              <div className='p-6 md:p-8'>
                <h3 className='text-2xl font-electrolize font-bold mb-4 text-white'>
                  {activeProject.title}
                </h3>
                <p className='text-gray-300 mb-6'>{activeProject.details}</p>
                <div className='mb-6'>
                  <h4 className='text-sm uppercase text-gray-500 mb-3 tracking-wider font-medium'>
                    Technologies
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {activeProject.technologies.map((tech) => (
                      <span key={tech} className='tech-pill'>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='flex justify-end space-x-4'>
                  <button onClick={() => setActiveProject(null)} className='button-outline'>
                    Close
                  </button>
                  <a href={activeProject.link} className='button-primary'>
                    Visit Project
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
