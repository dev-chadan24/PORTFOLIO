/**
 * SplashScreen.jsx — "HELLO THERE" Theater Curtain Loader
 */
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function SplashScreen({ onComplete }) {
  const [phase, setPhase] = useState('in');   // 'in' | 'out'

  useEffect(() => {
    // Crisp 2.2 second delay before fading out
    const t1 = setTimeout(() => setPhase('out'), 2200);
    const t2 = setTimeout(() => onComplete(), 3000); // Allow fade out to finish
    return () => [t1, t2].forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'out' && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FDFBF9]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Typographic Mask Container */}
          <div className="relative overflow-hidden flex flex-col items-center">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 400,
                color: '#1C1A19',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                marginBottom: '0.2em'
              }}
            >
              HELLO THERE.
            </motion.h1>

            {/* Expanding Gradient Line */}
            <motion.div
              className="h-[2px] w-full"
              style={{
                background: 'linear-gradient(90deg, #F43F5E, #06B6D4)'
              }}
              initial={{ width: '0%', opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
