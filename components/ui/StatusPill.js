export default function StatusPill({ children, className = '' }) {
  return (
    <div 
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-accent)',
        borderRadius: 'var(--radius-pill)',
        padding: '5px 14px 5px 8px',
      }}
    >
      <div 
        style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: 'var(--accent-primary)',
          boxShadow: 'var(--shadow-glow)',
        }}
      />
      <span 
        style={{
          fontFamily: 'var(--font-dm-sans), sans-serif',
          fontWeight: 500,
          fontSize: '11px',
          color: 'var(--accent-light)',
        }}
      >
        {children}
      </span>
    </div>
  );
}
