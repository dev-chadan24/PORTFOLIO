/**
 * SectionLabel.jsx — Premium uppercase coord label with icon
 */
export function SectionLabel({ icon: Icon, label, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 mb-5 ${className}`}>
      <span
        className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0"
        style={{
          background: 'var(--canvas-alt)',
          border: '1px solid var(--card-border)',
          boxShadow: 'var(--neuro-inset)',
        }}
      >
        <Icon size={14} />
      </span>
      <span
        className="section-label"
        style={{ color: 'var(--text-muted)' }}
      >
        {label}
      </span>
    </div>
  );
}
