import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata = {
  title: 'Privacy Policy | Fat Pig Ventures LLP',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: '160px 0 80px', backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <AnimatedSection>
              <h1 style={{ marginBottom: '24px' }}>Privacy Policy</h1>
              <p style={{ color: 'var(--text-secondary)' }}>Last updated: April 2026</p>
            </AnimatedSection>
          </div>
        </section>

        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <AnimatedSection delay={0.1}>
              <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <h3 style={{ color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>1. Introduction</h3>
                <p>Welcome to Fat Pig Ventures LLP. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
                
                <h3 style={{ color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>2. The data we collect</h3>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '24px', margin: '16px 0' }}>
                  <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                  <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                </ul>

                <h3 style={{ color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px' }}>3. How we use your personal data</h3>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to respond to your inquiries, provide our services, or for analytics to improve our website.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
