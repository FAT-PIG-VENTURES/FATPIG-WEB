export default function IconContainer({ 
  children, 
  size = 'standard', // 'standard' | 'large'
  className = '' 
}) {
  const dimensions = size === 'large' ? '46px' : '42px';
  
  return (
    <div 
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dimensions,
        height: dimensions,
        background: 'var(--accent-glow)',
        border: '1px solid var(--border-default)',
        borderRadius: '10px',
        color: 'var(--accent-primary)',
      }}
    >
      {children}
    </div>
  );
}
