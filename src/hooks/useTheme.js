/**
 * useTheme.js
 * Custom hook — manages dark/light mode state.
 * Persists preference to localStorage and syncs <html> class + meta theme-color.
 */
import { useState, useEffect } from 'react';

export function useTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const meta = document.getElementById('meta-theme-color');

    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      if (meta) meta.setAttribute('content', '#0e0e14');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
      if (meta) meta.setAttribute('content', '#edf0f7');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return { darkMode, toggleTheme };
}
