import React from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SEO from './components/SEO';
import Skills from './components/Skills';

// import Particles from './components/ui/Particles';

const App: React.FC = () => {
  return (
    <div className='relative min-h-screen bg-zinc-950 text-gray-100 font-electrolize selection:bg-primary-600/30 selection:text-primary-200 overflow-x-hidden'>
      <SEO />
      {/* <Particles className='absolute inset-0 z-0 pointer-events-none' /> */}

      {/* Skip to main content link for accessibility */}
      <a href='#main-content' className='skip-link'>
        Skip to main content
      </a>

      <div className='relative z-10 flex flex-col min-h-screen'>
        <Header />
        <main id='main-content' className='flex-grow' role='main' aria-label='Portfolio content'>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
