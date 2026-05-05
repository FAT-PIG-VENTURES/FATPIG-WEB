import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PreFooterCTA from '@/components/sections/PreFooterCTA';
import JobListing from '@/components/sections/JobListing';
import Link from 'next/link';
import { getAllInternships } from '@/lib/blog';

export const metadata = {
  title: 'Internships — Join Our Team | Fat Pig Ventures LLP',
  description: 'Explore internship opportunities at Fat Pig Ventures. We are looking for motivated students and graduates to join our team in Kolkata or Remote.',
};

export default function InternshipsPage() {
  const openRoles = getAllInternships();
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
                <SectionLabel>INTERNSHIPS</SectionLabel>
                <h1 style={{ marginBottom: '24px' }}>
                  Launch your career with us.
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>
                  We offer hands-on internships where you'll work on real projects, learn from experts, and make a tangible impact.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <AnimatedSection>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <SectionLabel>OPPORTUNITIES</SectionLabel>
                <h2 style={{ marginBottom: '32px' }}>Current Internships</h2>
                
                {/* Toggle Switch */}
                <div style={{
                  display: 'inline-flex',
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--border-default)',
                  borderRadius: '100px',
                  padding: '4px',
                  gap: '4px'
                }}>
                  <Link href="/careers" style={{
                    padding: '8px 24px',
                    borderRadius: '100px',
                    color: 'var(--text-secondary)',
                    fontSize: '14px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}>
                    Full-time Roles
                  </Link>
                  <Link href="/careers/internships" style={{
                    padding: '8px 24px',
                    borderRadius: '100px',
                    backgroundColor: 'rgba(79, 101, 241, 0.1)',
                    color: 'var(--accent-primary)',
                    fontSize: '14px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}>
                    Internships
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {openRoles.length > 0 ? (
                openRoles.map((role, index) => (
                  <AnimatedSection key={role.id} delay={index * 0.1}>
                    <JobListing {...role} />
                  </AnimatedSection>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-dimmed)' }}>
                  No active internships at the moment. Check back soon!
                </div>
              )}
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
