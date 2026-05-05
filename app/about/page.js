import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import Card from '@/components/ui/Card';
import IconContainer from '@/components/ui/IconContainer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PreFooterCTA from '@/components/sections/PreFooterCTA';
import { Target, Users, Zap, Shield } from 'lucide-react';

export const metadata = {
  title: 'About Fat Pig Ventures LLP — Execution-First Tech Consulting | Kolkata',
  description: 'Fat Pig Ventures LLP is an execution-focused technology consultancy and digital agency based in Kolkata, India. We build solutions that drive real business outcomes.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* About Hero */}
        <section style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '160px 0 80px',
          position: 'relative'
        }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <AnimatedSection>
              <SectionLabel>ABOUT</SectionLabel>
              <h1 style={{ maxWidth: '800px', margin: '0 auto' }}>
                We're the team that stays until the job is actually done.
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Who We Are */}
        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '48px'
            }} className="md-grid-about">
              <AnimatedSection>
                <div>
                  <h2 style={{ marginBottom: '24px' }}>Who We Are</h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '16px' }}>
                    Fat Pig Ventures LLP is an execution-focused technology consulting firm and digital agency based in Kolkata, India. We were born out of frustration with the traditional consulting model — where agencies deliver slide decks and walk away, leaving you to figure out the implementation.
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
                    We believe that strategy is meaningless without execution. That's why we've built a cross-functional team of engineers, designers, and growth marketers who not only map out the technical strategy but actually write the code, launch the campaigns, and iterate based on real-world data.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div style={{
                  backgroundColor: 'var(--bg-elevated)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-default)',
                  height: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-dimmed)',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>
                  [ Team Photo Placeholder ]
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section style={{ padding: '100px 0', backgroundColor: 'var(--bg-secondary)', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <AnimatedSection>
              <SectionLabel>OUR MISSION</SectionLabel>
              <h2 style={{ fontSize: '36px', lineHeight: '1.3', marginBottom: '24px' }}>
                To bridge the gap between business strategy and technical execution, helping companies build products and systems that drive measurable growth.
              </h2>
            </AnimatedSection>
          </div>
        </section>

        {/* Approach */}
        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <SectionLabel>OUR APPROACH</SectionLabel>
              <h2>How we operate differently</h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px'
            }}>
              {[
                { num: '01', title: 'Speed to Value', desc: 'We prioritise shipping quickly and iterating based on data rather than over-engineering in isolation.' },
                { num: '02', title: 'Zero Handoffs', desc: 'Designers, engineers, and marketers work in the same pod to ensure nothing gets lost in translation.' },
                { num: '03', title: 'Skin in the Game', desc: 'We align our incentives with your business outcomes, treating your product as if it were our own.' },
                { num: '04', title: 'Radical Candor', desc: 'We will tell you if an idea is bad or a feature is unnecessary, even if it means less billable hours for us.' }
              ].map((item, index) => (
                <AnimatedSection key={item.num} delay={index * 0.1}>
                  <div style={{
                    backgroundColor: 'var(--bg-elevated)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-md)',
                    padding: '32px 24px',
                    height: '100%'
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '32px',
                      fontWeight: '700',
                      color: 'var(--border-hover)',
                      marginBottom: '16px'
                    }}>
                      {item.num}
                    </div>
                    <h4 style={{ marginBottom: '12px' }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <SectionLabel>CORE VALUES</SectionLabel>
              <h2>The principles that guide our work</h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <AnimatedSection delay={0.1}>
                <Card 
                  title="Ship It"
                  description="Perfection is the enemy of progress. We believe in getting real products into the hands of real users as fast as possible."
                  icon={<IconContainer><Zap size={20} /></IconContainer>}
                />
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <Card 
                  title="Own the Outcome"
                  description="We don't just complete tasks; we take responsibility for the final business result. If the product ships but fails, we failed."
                  icon={<IconContainer><Target size={20} /></IconContainer>}
                />
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <Card 
                  title="Team Before Ego"
                  description="The best idea wins, regardless of who it came from. We foster an environment of intense collaboration and low ego."
                  icon={<IconContainer><Users size={20} /></IconContainer>}
                />
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <Card 
                  title="Uncompromising Quality"
                  description="While we move fast, we don't cut corners on architecture or security. We build foundations that can actually scale."
                  icon={<IconContainer><Shield size={20} /></IconContainer>}
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{
          background: 'var(--gradient-cta)',
          padding: '80px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h2 style={{ color: '#000', marginBottom: '32px' }}>
              Want to work with a team that delivers?
            </h2>
            <a 
              href="/contact" 
              style={{
                display: 'inline-block',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                padding: '13px 32px',
                borderRadius: 'var(--radius-pill)',
                fontWeight: '600',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              Start a Conversation
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
