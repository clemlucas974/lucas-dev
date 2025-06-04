import { type ChangeEvent, type FormEvent, useState } from 'react';

import { type Variants, motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: JSX.Element;
  title: string;
  content: string;
  link: string | null;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <FiMail className='h-6 w-6 text-indigo-400' />,
    title: 'Email',
    content: 'clement.lucas.dev@gmail.com',
    link: 'mailto:clement.lucas.dev@gmail.com',
  },
  {
    icon: <FiMapPin className='h-6 w-6 text-purple-400' />,
    title: 'Location',
    content: 'Saint-Paul, La Réunion',
    link: null,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset submitted status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id='contact'
      className='section bg-gradient-to-b from-slate-950 to-slate-900 relative py-16 sm:py-20'
    >
      <div className='container px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12 sm:mb-16'
        >
          <h2 className='font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4'>
            Let's <span className='title-gradient'>Connect</span>
          </h2>
          <p className='text-sm sm:text-base text-gray-400 max-w-2xl mx-auto'>
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from
            you. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 max-w-6xl mx-auto'
        >
          <motion.div variants={itemVariants} className='lg:col-span-2'>
            <div className='glass-card p-5 sm:p-6 md:p-8'>
              <h3 className='text-lg sm:text-xl font-display font-semibold mb-4 sm:mb-6'>
                Contact Information
              </h3>

              <div className='space-y-4 sm:space-y-6'>
                {contactInfo.map((info, index) => (
                  <div key={index} className='flex items-start'>
                    <div className='mt-1 bg-slate-800 rounded-lg p-2 sm:p-3'>{info.icon}</div>
                    <div className='ml-3 sm:ml-4'>
                      <h4 className='text-xs sm:text-sm font-medium text-gray-400'>{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className='text-sm sm:text-base text-white hover:text-indigo-400 transition-colors'
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className='text-sm sm:text-base text-white'>{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-8 sm:mt-10'>
                <h3 className='text-lg sm:text-xl font-display font-semibold mb-3 sm:mb-4'>
                  Follow Me
                </h3>
                <div className='flex space-x-3 sm:space-x-4'>
                  <a
                    href='#'
                    className='bg-slate-800 p-2.5 sm:p-3 rounded-lg text-gray-300 hover:text-white hover:bg-indigo-600 transition-colors'
                  >
                    <svg
                      className='h-4 w-4 sm:h-5 sm:w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='bg-slate-800 p-2.5 sm:p-3 rounded-lg text-gray-300 hover:text-white hover:bg-indigo-600 transition-colors'
                  >
                    <svg
                      className='h-4 w-4 sm:h-5 sm:w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'></path>
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='bg-slate-800 p-2.5 sm:p-3 rounded-lg text-gray-300 hover:text-white hover:bg-indigo-600 transition-colors'
                  >
                    <svg
                      className='h-4 w-4 sm:h-5 sm:w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='bg-slate-800 p-2.5 sm:p-3 rounded-lg text-gray-300 hover:text-white hover:bg-indigo-600 transition-colors'
                  >
                    <svg
                      className='h-4 w-4 sm:h-5 sm:w-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className='lg:col-span-3'>
            <div className='glass-card p-5 sm:p-6 md:p-8 h-full'>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='flex flex-col items-center justify-center h-full text-center'
                >
                  <div className='w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4 rounded-full bg-green-500/20 flex items-center justify-center'>
                    <svg
                      className='w-7 h-7 sm:w-8 sm:h-8 text-green-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl sm:text-2xl font-semibold text-white mb-2'>
                    Message Sent!
                  </h3>
                  <p className='text-sm sm:text-base text-gray-400'>
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
                  <h3 className='text-lg sm:text-xl font-display font-semibold mb-4 sm:mb-6'>
                    Send a Message
                  </h3>

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-xs sm:text-sm font-medium text-gray-400 mb-1'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className='w-full bg-slate-800 border border-slate-700 text-sm sm:text-base text-white placeholder:text-gray-500 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition'
                        placeholder='Your name'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-xs sm:text-sm font-medium text-gray-400 mb-1'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className='w-full bg-slate-800 border border-slate-700 text-sm sm:text-base text-white placeholder:text-gray-500 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition'
                        placeholder='Your email'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-xs sm:text-sm font-medium text-gray-400 mb-1'
                    >
                      Subject
                    </label>
                    <input
                      type='text'
                      id='subject'
                      name='subject'
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className='w-full bg-slate-800 border border-slate-700 text-sm sm:text-base text-white placeholder:text-gray-500 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition'
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-xs sm:text-sm font-medium text-gray-400 mb-1'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className='w-full bg-slate-800 border border-slate-700 text-sm sm:text-base text-white placeholder:text-gray-500 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none'
                      placeholder='Your message here...'
                    />
                  </div>

                  <div className='pt-2'>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className={`button-primary w-full text-sm sm:text-base py-2 sm:py-2.5 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <div className='flex items-center justify-center'>
                          <svg
                            className='animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                          >
                            <circle
                              className='opacity-25'
                              cx='12'
                              cy='12'
                              r='10'
                              stroke='currentColor'
                              strokeWidth='4'
                            ></circle>
                            <path
                              className='opacity-75'
                              fill='currentColor'
                              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                            ></path>
                          </svg>
                          Sending...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
