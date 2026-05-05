import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata = {
  title: 'Terms & Conditions | Fat Pig Ventures LLP',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: '160px 0 80px', backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <AnimatedSection>
              <h1 style={{ marginBottom: '24px' }}>Terms & Conditions</h1>
              <p style={{ color: 'var(--text-secondary)' }}>Last updated: April 2026</p>
            </AnimatedSection>
          </div>
        </section>

        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <AnimatedSection delay={0.1}>
              <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <h3 style={{ color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>1. Agreement to Terms</h3>
                <p>By accessing our website, you agree to be bound by these terms of service and agree that you are responsible for compliance with any applicable local laws.</p>
                
                <h3 style={{ color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>2. Use License</h3>
                <p>Permission is granted to temporarily download one copy of the materials on Fat Pig Ventures LLP's website for personal, non-commercial transitory viewing only.</p>

                <h3 style={{ color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>3. Disclaimer</h3>
                <p>The materials on Fat Pig Ventures LLP's website are provided on an 'as is' basis. Fat Pig Ventures LLP makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
