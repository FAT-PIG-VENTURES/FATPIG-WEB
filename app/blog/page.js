import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export const metadata = {
  title: 'Blog & Insights | Fat Pig Ventures LLP',
  description: 'Thoughts on technology, engineering, growth marketing, and building digital products from the team at Fat Pig Ventures.',
};

const placeholderPosts = [
  {
    id: 1,
    slug: 'building-mvps-that-scale',
    title: 'Building MVPs That Actually Scale',
    category: 'Engineering',
    excerpt: 'The common mistake founders make is treating an MVP as throwaway code. Here\'s how to build fast without accumulating crippling tech debt.',
    publishedAt: '2026-04-15',
  },
  {
    id: 2,
    slug: 'growth-marketing-playbook',
    title: 'The Growth Marketing Playbook for B2B SaaS',
    category: 'Marketing',
    excerpt: 'Forget vanity metrics. We break down the exact funnel strategy we use to drive qualified leads for early-stage SaaS companies.',
    publishedAt: '2026-04-02',
  },
  {
    id: 3,
    slug: 'why-we-chose-nextjs',
    title: 'Why We Chose Next.js for Every Client Project in 2026',
    category: 'Engineering',
    excerpt: 'After evaluating dozens of frameworks, here\'s our opinionated take on why Next.js remains the best choice for production web apps.',
    publishedAt: '2026-03-20',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '160px 0 80px',
          position: 'relative'
        }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <AnimatedSection>
                <SectionLabel>INSIGHTS</SectionLabel>
                <h1 style={{ marginBottom: '24px' }}>
                  Thoughts on building better products.
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>
                  Engineering deep dives, growth marketing experiments, and lessons learned from the trenches of product development.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)', minHeight: '400px' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '32px'
            }}>
              {placeholderPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.1}>
                  <Link href={`/blog/${post.slug}`} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
                    <div style={{
                      backgroundColor: 'var(--bg-elevated)',
                      border: '1px solid var(--border-default)',
                      borderRadius: 'var(--radius-md)',
                      overflow: 'hidden',
                      height: '100%',
                      transition: 'all 0.3s ease',
                    }}>
                      <div style={{
                        height: '200px',
                        backgroundColor: 'rgba(79, 101, 241, 0.03)',
                        borderBottom: '1px solid var(--border-default)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-dimmed)',
                        fontSize: '13px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}>
                        Featured Image
                      </div>
                      
                      <div style={{ padding: '24px' }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          marginBottom: '16px'
                        }}>
                          <span style={{ 
                            fontSize: '12px', 
                            fontWeight: '600',
                            color: 'var(--accent-primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}>
                            {post.category}
                          </span>
                          <span style={{ color: 'var(--text-dimmed)', fontSize: '13px' }}>
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <h3 style={{ fontSize: '20px', marginBottom: '12px', lineHeight: '1.4', color: 'var(--text-primary)' }}>
                          {post.title}
                        </h3>
                        
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
