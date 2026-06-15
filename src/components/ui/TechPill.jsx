/**
 * TechPill.jsx
 * Beautiful pill-shaped technology/label tag with color variants.
 */
import { motion } from 'framer-motion';

const COLOR_MAP = {
  indigo: 'tech-pill-indigo',
  emerald: 'tech-pill-emerald',
  yellow: 'tech-pill-yellow',
  blue: 'tech-pill-blue',
  rose: 'tech-pill-rose',
  violet: 'tech-pill-violet',
  gray: 'tech-pill-gray',
};

export function TechPill({ label, color = 'emerald', dot = false }) {
  return (
    <motion.span
      className={`tech-pill ${COLOR_MAP[color] ?? COLOR_MAP.emerald}`}
      whileHover={{ scale: 1.07, y: -1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
    >
      {dot && (
        <span
          className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: 'currentColor', opacity: 0.65 }}
        />
      )}
      {label}
    </motion.span>
  );
}
