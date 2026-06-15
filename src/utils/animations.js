/**
 * animations.js — Premium Spring Physics Library
 * Fluid, weighted motion variants across the entire portfolio.
 */

/* ─── Elastic Ease Curves ──────────────────────────────────────── */
export const EASE_FLUID   = [0.22, 1, 0.36, 1];
export const EASE_BACK    = [0.34, 1.56, 0.64, 1];
export const EASE_SMOOTH  = [0.4, 0, 0.2, 1];

/* ─── Fade Up — general stagger child ─────────────────────────── */
export const fadeUp = {
  hidden:  { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 28,
      mass: 0.8,
      delay: i * 0.09,
    },
  }),
};

/* ─── Fade In — pure opacity ───────────────────────────────────── */
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.07, ease: EASE_SMOOTH },
  }),
};

/* ─── Card Reveal — scroll-triggered section cards ─────────────── */
export const cardReveal = {
  hidden:  { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 220,
      damping: 26,
      mass: 0.9,
    },
  },
};

/* ─── Slide In Left/Right ──────────────────────────────────────── */
export const slideInLeft = {
  hidden:  { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 240, damping: 28, delay: i * 0.08 },
  }),
};

export const slideInRight = {
  hidden:  { opacity: 0, x: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 240, damping: 28, delay: i * 0.08 },
  }),
};

/* ─── Stagger Container ────────────────────────────────────────── */
export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

/* ─── Scale Pop — for pills, badges ───────────────────────────── */
export const scalePop = {
  hidden:  { opacity: 0, scale: 0.7 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 420, damping: 22, delay: i * 0.04 },
  }),
};

/* ─── Viewport config ──────────────────────────────────────────── */
export const viewportConfig     = { once: true, margin: '-60px' };
export const viewportConfigEager = { once: true, margin: '-20px' };
