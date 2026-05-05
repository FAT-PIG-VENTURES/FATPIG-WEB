'use client';

import Button from '../ui/Button';
import IconContainer from '../ui/IconContainer';
import AnimatedSection from '../ui/AnimatedSection';

export default function ServiceDetail({ 
  id,
  title, 
  description, 
  icon: Icon,
  deliverables,
  isDark = false
}) {
  return (
    <section 
      id={id}
      style={{ 
        backgroundColor: isDark ? 'var(--bg-primary)' : 'var(--bg-secondary)', 
        padding: '80px 0',
        borderBottom: '1px solid var(--border-default)'
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px'
        }} className="md-grid-service">
          
          <AnimatedSection>
            <div>
              <div style={{ marginBottom: '24px' }}>
                <IconContainer size="large">
                  {Icon}
                </IconContainer>
              </div>
              <h2 style={{ marginBottom: '24px' }}>{title}</h2>
              <div 
                style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: '32px',
                  fontSize: '16px',
                  lineHeight: '1.7'
                }}
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <Button href="/contact" variant="primary">Discuss your project</Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div style={{
              backgroundColor: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px'
            }}>
              <div style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontWeight: 600,
                fontSize: '11px',
                color: 'var(--accent-primary)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}>
                WHAT WE DELIVER
              </div>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {deliverables.map((item, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ color: 'var(--accent-primary)', marginTop: '2px' }}>▸</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

        </div>
        
      </div>
    </section>
  );
}
