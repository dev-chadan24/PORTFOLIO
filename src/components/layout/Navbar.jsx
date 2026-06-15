/**
 * Navbar.jsx — Top-right floating theme toggle
 */
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useScrolled } from '../../hooks/useScrolled';

export function Navbar({ darkMode, toggleTheme }) {
  // Use existing hook to detect when scrolling down past threshold
  const { hidden } = useScrolled(60);

  return (
    <motion.div
      className="fixed z-50 right-6 sm:right-8"
      initial={{ top: '1.5rem', opacity: 1 }}
      animate={{
        top: hidden ? '-5rem' : '1.5rem', 
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
    </motion.div>
  );
}
