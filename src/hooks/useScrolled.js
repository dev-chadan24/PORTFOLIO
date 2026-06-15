/**
 * useScrolled.js
 * Tracks scroll position and direction for navbar scroll-blur animation.
 * Task 6: Used to trigger scroll-aware navbar transitions.
 */
import { useState, useEffect, useRef } from 'react';

export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > threshold);
      // Hide nav when scrolling DOWN past threshold; show when scrolling UP
      if (y > lastY.current && y > threshold + 40) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return { scrolled, hidden };
}
