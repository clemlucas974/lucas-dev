import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/ui/Particles';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-gray-100 font-inter selection:bg-indigo-500/30 selection:text-indigo-200">
      <Particles className="absolute inset-0 z-0" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;