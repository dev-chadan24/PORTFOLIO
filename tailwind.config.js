/** @type {import('tailwindcss').Config} */
export default {
  // Use class-based dark mode — toggled via .dark / .light on <html>
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ─── Font families ───────────────────────────────────────────
      fontFamily: {
        sans:      ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        display:   ['"DM Serif Display"', 'Georgia', 'serif'],
        editorial: ['"Playfair Display"', 'Georgia', 'serif'],
        grotesk:   ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono:      ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },

      // ─── Design tokens (mapped to CSS variables) ─────────────────
      colors: {
        canvas:       'var(--canvas)',
        canvasAlt:    'var(--canvas-alt)',
        cardBg:       'var(--card-bg)',
        cardBorder:   'var(--card-border)',
        textPrimary:  'var(--text-primary)',
        textSecondary:'var(--text-secondary)',
        textMuted:    'var(--text-muted)',
        textAccent:   'var(--text-accent)',
        accent:       'var(--accent)',
        emerald:      'var(--emerald)',

        // Legacy tokens — keep for compatibility
        darkCanvas:   '#0e0e14',
        darkCard:     '#12121a',
        lightCanvas:  '#edf0f7',
        lightCard:    '#e8ecf4',
      },

      // ─── Neumorphic box shadows ───────────────────────────────────
      boxShadow: {
        'neuro':       'var(--neuro-shadow)',
        'neuro-inset': 'var(--neuro-inset)',
        'neuro-hover': 'var(--neuro-hover)',
        'glass':       'var(--glass-shadow)',
        // Legacy
        'card-hover':      '0 20px 60px rgba(0,0,0,0.12)',
        'card-hover-dark': '0 20px 60px rgba(0,0,0,0.5)',
        'glow-indigo':     '0 0 24px rgba(99,102,241,0.3)',
        'glow-emerald':    '0 0 24px rgba(16,185,129,0.25)',
      },

      // ─── Border radius ────────────────────────────────────────────
      borderRadius: {
        '2.5xl': '20px',
        '3xl':   '24px',
        '4xl':   '32px',
      },

      // ─── Custom animations ────────────────────────────────────────
      animation: {
        'pulse-slow':    'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':         'float 6s ease-in-out infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
        'status-ping':   'status-ping 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse':    'glow-pulse 2.5s ease-in-out infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'status-ping': {
          '0%':   { transform: 'scale(1)', opacity: '0.85' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 var(--accent-glow)' },
          '50%':      { boxShadow: '0 0 0 8px transparent' },
        },
      },

      // ─── Background images ────────────────────────────────────────
      backgroundImage: {
        'dot-grid':   'radial-gradient(circle, var(--grid-dot) 1px, transparent 1px)',
        'grid-light': 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)',
        'grid-dark':  'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
      },

      backgroundSize: {
        'dot-24':  '24px 24px',
        'dot-28':  '28px 28px',
      },

      // ─── Backdrop blur ────────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '24px',
      },
    },
  },
  plugins: [],
};
