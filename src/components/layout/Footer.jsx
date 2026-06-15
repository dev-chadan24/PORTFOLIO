/**
 * Footer.jsx — Minimal editorial footer
 */
import { PERSONAL } from '../../data/portfolio';

export function Footer() {
  return (
    <footer
      className="pt-6 pb-8 flex flex-col items-center gap-2"
      style={{ borderTop: '1px solid var(--card-border)', marginTop: '8px' }}
    >
      <p
        className="text-xs font-medium"
        style={{
          color: 'var(--text-muted)',
          fontFamily: '"JetBrains Mono", monospace',
          letterSpacing: '0.06em',
        }}
      >
        Designed & built by {PERSONAL.name}
      </p>
    </footer>
  );
}
