import { useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DeveloperIdentity from './components/DeveloperIdentity';
import HowIBuild from './components/HowIBuild';
import Skills from './components/Skills';
import AIBuilding from './components/AIBuilding';
import Projects from './components/Projects';
import Research from './components/Research';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Education from './components/Education';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Close modals on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        // modals handle their own escape — handled in ProjectModal
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <DeveloperIdentity />
        <HowIBuild />
        <Skills />
        <AIBuilding />
        <Projects />
        <Research />
        <Timeline />
        <Achievements />
        <Education />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
