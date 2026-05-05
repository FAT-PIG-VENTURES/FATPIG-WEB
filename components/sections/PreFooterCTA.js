'use client';

import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

export default function PreFooterCTA() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, rgba(79,101,241,0.08), #050505)',
      borderTop: '1px solid rgba(79,101,241,0.1)',
      borderBottom: '1px solid rgba(79,101,241,0.1)',
      padding: '72px 0',
      textAlign: 'center'
    }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <AnimatedSection animation="scaleUp">
          <h2 style={{ marginBottom: '16px' }}>Your next move starts here.</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
            Ready to build products that matter and growth systems that scale? Let's talk about your project.
          </p>
          <Button href="/contact" variant="primary" style={{ boxShadow: 'var(--shadow-cta)' }}>
            Get In Touch
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
