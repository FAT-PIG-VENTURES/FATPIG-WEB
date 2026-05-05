import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PreFooterCTA from '@/components/sections/PreFooterCTA';
import JobListing from '@/components/sections/JobListing';

export const metadata = {
  title: 'Careers — Join Our Team | Fat Pig Ventures LLP',
  description: 'Join Fat Pig Ventures in Kolkata. We are hiring engineers, designers, and marketers who are obsessed with execution and delivering real value.',
};

const openRoles = [
  { id: '1', title: 'Senior Frontend Engineer (Next.js/React)', location: 'Kolkata (Hybrid)', type: 'Full-time' },
  { id: '2', title: 'Technical SEO Specialist', location: 'Remote (India)', type: 'Full-time' },
  { id: '3', title: 'UI/UX Designer', location: 'Kolkata (Hybrid)', type: 'Full-time' },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        {/* Careers Hero */}
        <section style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '160px 0 80px',
          position: 'relative'
        }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <AnimatedSection>
                <SectionLabel>CAREERS</SectionLabel>
                <h1 style={{ marginBottom: '24px' }}>
                  Come build the internet with us.
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>
                  We're looking for high-agency individuals who care deeply about their craft and want to see the direct impact of their work.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Culture / Perks */}
        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px'
            }}>
              <AnimatedSection delay={0.1}>
                <div>
                  <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Impact over Hours</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    We care about what you ship, not how long you sit at a desk. We offer flexible working hours and focus on outcomes.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div>
                  <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Direct Client Exposure</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    No layers of management hiding you from the client. You talk directly to the founders and teams using your work.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div>
                  <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Continuous Learning</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    We work across a variety of tech stacks and industries. The learning curve is steep, but you'll never be bored.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <AnimatedSection>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <SectionLabel>OPEN ROLES</SectionLabel>
                <h2>Current Opportunities</h2>
              </div>
            </AnimatedSection>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {openRoles.map((role, index) => (
                <AnimatedSection key={role.id} delay={index * 0.1}>
                  <JobListing {...role} />
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4}>
              <div style={{ 
                marginTop: '48px', 
                padding: '32px', 
                backgroundColor: 'rgba(79,101,241,0.03)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>Don't see a fit?</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0' }}>
                  We're always looking for talented people. Send your resume and portfolio to <a href="mailto:careers@fatpigventures.com" style={{ color: 'var(--accent-primary)' }}>careers@fatpigventures.com</a>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  );
}
