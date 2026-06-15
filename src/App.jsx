/**
 * App.jsx — Root application shell with theme-aware layout
 */
import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import { SplashScreen } from './components/layout/SplashScreen';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FluidBackground } from './components/ui/FluidBackground';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { ResearchEducation } from './components/sections/ResearchEducation';
import { Contact } from './components/sections/Contact';

function App() {
  const { darkMode, toggleTheme } = useTheme();
  const [splashComplete, setSplashComplete] = useState(false);

  /* Smooth scrolling via Lenis */
  useEffect(() => {
    if (!splashComplete) return;
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, [splashComplete]);

  return (
    <>
      {!splashComplete && (
        <SplashScreen onComplete={() => setSplashComplete(true)} />
      )}

      {splashComplete && (
        <motion.div
          className={`relative min-h-screen bg-dot-grid noise-layer transition-colors duration-500`}
          style={{ background: 'var(--canvas)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Ambient blob layer */}
          <FluidBackground darkMode={darkMode} />

          {/* Floating navbar */}
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

          {/* Main content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20">
            <motion.main
              className="glass-card p-5 sm:p-8 md:p-10 space-y-5"
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Hero />
              <Experience />
              <Skills />
              <Projects />
              <ResearchEducation />
              <Contact />
              <Footer />
            </motion.main>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default App;
