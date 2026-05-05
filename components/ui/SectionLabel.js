export default function SectionLabel({ children, className = '' }) {
  return (
    <div 
      className={className}
      style={{
        fontFamily: 'var(--font-dm-sans), sans-serif',
        fontWeight: 600,
        fontSize: '11px',
        color: 'var(--accent-primary)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: '14px',
      }}
    >
      {children}
    </div>
  );
}
