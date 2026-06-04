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
    <div className='relative min-h-screen overflow-x-hidden bg-paper font-sans text-ink'>
      <SEO />

      {/* Paper grain texture overlay */}
      <div className='grain' aria-hidden='true' />

      {/* Skip to main content link for accessibility */}
      <a href='#main-content' className='skip-link'>
        Skip to main content
      </a>

      <div className='relative z-10 flex min-h-screen flex-col'>
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
