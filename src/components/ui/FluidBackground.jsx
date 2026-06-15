/**
 * FluidBackground.jsx
 * Premium animated orb system — dual-theme aware.
 * Dark: deep jewel-tone blobs. Light: pastel shimmer.
 */
import { motion } from 'framer-motion';

const DARK_BLOBS = [
  {
    id: 'b1', size: 750, x: '-18%', y: '-12%',
    color: 'radial-gradient(circle at 40% 40%, rgba(99,102,241,0.22), rgba(99,102,241,0.04) 60%, transparent)',
    duration: 20, delay: 0,
    rotate: [0, 14, -9, 0], scale: [1, 1.07, 0.95, 1],
  },
  {
    id: 'b2', size: 640, x: '58%', y: '-18%',
    color: 'radial-gradient(circle at 60% 35%, rgba(16,185,129,0.18), rgba(16,185,129,0.03) 60%, transparent)',
    duration: 24, delay: 4,
    rotate: [0, -13, 10, 0], scale: [1, 0.93, 1.08, 1],
  },
  {
    id: 'b3', size: 520, x: '22%', y: '58%',
    color: 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.12), rgba(245,158,11,0.02) 60%, transparent)',
    duration: 28, delay: 8,
    rotate: [0, 20, -7, 0], scale: [1, 1.1, 0.93, 1],
  },
  {
    id: 'b4', size: 420, x: '72%', y: '62%',
    color: 'radial-gradient(circle at 45% 55%, rgba(244,63,94,0.12), rgba(244,63,94,0.02) 60%, transparent)',
    duration: 22, delay: 12,
    rotate: [0, -17, 11, 0], scale: [1, 1.04, 0.97, 1],
  },
];

const LIGHT_BLOBS = [
  {
    id: 'lb1', size: 700, x: '-12%', y: '-8%',
    color: 'radial-gradient(circle at 40% 40%, rgba(99,102,241,0.12), rgba(99,102,241,0.02) 60%, transparent)',
    duration: 20, delay: 0,
    rotate: [0, 12, -8, 0], scale: [1, 1.06, 0.96, 1],
  },
  {
    id: 'lb2', size: 580, x: '60%', y: '-15%',
    color: 'radial-gradient(circle at 60% 35%, rgba(16,185,129,0.10), rgba(16,185,129,0.02) 60%, transparent)',
    duration: 24, delay: 4,
    rotate: [0, -11, 9, 0], scale: [1, 0.95, 1.06, 1],
  },
  {
    id: 'lb3', size: 480, x: '25%', y: '60%',
    color: 'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.08), transparent 60%)',
    duration: 28, delay: 8,
    rotate: [0, 18, -6, 0], scale: [1, 1.08, 0.94, 1],
  },
];

export function FluidBackground({ darkMode }) {
  const blobs = darkMode ? DARK_BLOBS : LIGHT_BLOBS;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
      style={{ perspective: '1400px' }}
    >
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: blob.color,
            borderRadius: '62% 38% 68% 32% / 48% 62% 38% 52%',
            filter: 'blur(52px)',
            willChange: 'transform',
          }}
          animate={{
            rotate: blob.rotate,
            scale: blob.scale,
            borderRadius: [
              '62% 38% 68% 32% / 48% 62% 38% 52%',
              '38% 62% 32% 68% / 62% 38% 72% 28%',
              '72% 28% 52% 48% / 38% 72% 28% 62%',
              '62% 38% 68% 32% / 48% 62% 38% 52%',
            ],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${darkMode ? 'rgba(255,255,255,0.028)' : 'rgba(0,0,0,0.04)'} 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}
