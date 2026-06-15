/**
 * ThemeToggle.jsx — 3D Mechanical Stick Switch
 */
import { motion } from 'framer-motion';

export default function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative flex items-center p-1 w-14 h-7 rounded-full cursor-pointer overflow-hidden ${
        darkMode ? 'justify-end' : 'justify-start'
      }`}
      style={{
        background: 'var(--canvas-alt)',
        border: '1px solid var(--card-border)',
        boxShadow: 'var(--neuro-inset)',
        perspective: '400px', // needed for rotateX to have depth
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92, rotateX: 18 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Dynamic background highlight */}
      <motion.div
        className="absolute inset-0 z-0 rounded-full"
        initial={false}
        animate={{
          background: darkMode 
            ? 'linear-gradient(90deg, rgba(99,102,241,0.2), rgba(99,102,241,0))'
            : 'linear-gradient(90deg, rgba(124,58,237,0), rgba(124,58,237,0.2))'
        }}
        transition={{ duration: 0.4 }}
      />

      {/* The Stick Handle */}
      <motion.div
        layout
        className="w-5 h-5 rounded-full z-10 flex items-center justify-center"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--glass-border)',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2), 0 1px 1px rgba(255,255,255,0.8) inset',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Micro-detail indicator on the stick */}
        <motion.div 
          className="w-1.5 h-1.5 rounded-full"
          initial={false}
          animate={{
            backgroundColor: darkMode ? '#818CF8' : '#06B6D4',
            boxShadow: darkMode ? '0 0 4px #818CF8' : '0 0 4px #06B6D4'
          }}
        />
      </motion.div>
    </motion.button>
  );
}
