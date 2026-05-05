import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedSection from '@/components/ui/AnimatedSection';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ContactForm from '@/components/sections/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata = {
  title: 'Contact Us — Fat Pig Ventures LLP | Let\'s Build Something',
  description: 'Ready to discuss your next project? Get in touch with the Fat Pig Ventures team in Kolkata. We usually respond within 24 hours.',
};

const faqs = [
  {
    question: "Do you work with startups or established enterprises?",
    answer: "We work with both. For startups, we often act as fractional technical co-founders, building the MVP and establishing scalable systems. For enterprises, we handle complex digital transformation projects, integrations, and performance marketing."
  },
  {
    question: "What is your typical project timeline?",
    answer: "It depends entirely on the scope. A focused MVP or a website build can take 4-8 weeks. Comprehensive platforms or ongoing growth marketing retainers operate on multi-month or annual timelines. We prioritise getting a v1 live quickly to gather real data."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We typically work on fixed-price contracts for well-defined scopes (like a website or specific MVP build) and transition to monthly retainers for ongoing development, marketing, or fractional CTO advisory. We'll outline all costs transparently after our discovery call."
  },
  {
    question: "Are you a remote team?",
    answer: "We are headquartered in Kolkata, India, with a hybrid setup. We work with clients globally (US, UK, Middle East, APAC) and have established asynchronous workflows to handle timezone differences seamlessly."
  }
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Contact Hero & Form Section */}
        <section style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '160px 0 80px',
          position: 'relative'
        }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '64px'
            }} className="md-grid-contact">
              
              <AnimatedSection>
                <div>
                  <SectionLabel>GET IN TOUCH</SectionLabel>
                  <h1 style={{ marginBottom: '24px' }}>Let's build something.</h1>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '48px', lineHeight: '1.6' }}>
                    Fill out the form to tell us about your project. We'll review your requirements and schedule a discovery call within 24 hours.
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ color: 'var(--accent-primary)', marginTop: '4px' }}>
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 style={{ marginBottom: '4px' }}>Email Us</h4>
                        <a href="mailto:hello@fatpigventures.com" style={{ color: 'var(--text-secondary)' }}>hello@fatpigventures.com</a>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{ color: 'var(--accent-primary)', marginTop: '4px' }}>
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 style={{ marginBottom: '4px' }}>Visit Us</h4>
                        <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Kolkata, West Bengal, India<br />(By appointment only)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <ContactForm />
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* FAQs */}
        <section style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <AnimatedSection>
              <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <SectionLabel>FAQ</SectionLabel>
                <h2>Common questions</h2>
              </div>
            </AnimatedSection>

            <div>
              {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <FAQAccordion question={faq.question} answer={faq.answer} />
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection delay={0.4}>
              <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Still have questions? <a href="mailto:hello@fatpigventures.com" style={{ color: 'var(--accent-primary)' }}>Send us an email</a>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
