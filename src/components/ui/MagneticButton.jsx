/**
 * MagneticButton.jsx
 * Reusable button/link with spring-physics hover and tap animations.
 */
import { motion } from 'framer-motion';

export function MagneticButton({ children, className, href, onClick, ariaLabel, style, ...rest }) {
  const isExternal = href && href.startsWith('http');
  const Tag = href ? motion.a : motion.button;

  const tagProps = href
    ? {
        href,
        target: isExternal ? '_blank' : undefined,
        rel: isExternal ? 'noopener noreferrer' : undefined,
      }
    : { onClick };

  return (
    <Tag
      {...tagProps}
      {...rest}
      className={className}
      style={style}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 420, damping: 22 }}
      aria-label={ariaLabel}
    >
      {children}
    </Tag>
  );
}
