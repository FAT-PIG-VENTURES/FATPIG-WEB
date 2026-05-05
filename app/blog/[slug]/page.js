import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PreFooterCTA from '@/components/sections/PreFooterCTA';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const posts = {
  'building-mvps-that-scale': {
    title: 'Building MVPs That Actually Scale',
    category: 'Engineering',
    excerpt: 'The common mistake founders make is treating an MVP as throwaway code. Here\'s how to build fast without accumulating crippling tech debt.',
    publishedAt: '2026-04-15',
    content: 'Coming soon — this post is under development. Full article content will be available once the CMS integration is complete.',
  },
  'growth-marketing-playbook': {
    title: 'The Growth Marketing Playbook for B2B SaaS',
    category: 'Marketing',
    excerpt: 'Forget vanity metrics. We break down the exact funnel strategy we use to drive qualified leads for early-stage SaaS companies.',
    publishedAt: '2026-04-02',
    content: 'Coming soon — this post is under development. Full article content will be available once the CMS integration is complete.',
  },
  'why-we-chose-nextjs': {
    title: 'Why We Chose Next.js for Every Client Project in 2026',
    category: 'Engineering',
    excerpt: 'After evaluating dozens of frameworks, here\'s our opinionated take on why Next.js remains the best choice for production web apps.',
    publishedAt: '2026-03-20',
    content: 'Coming soon — this post is under development. Full article content will be available once the CMS integration is complete.',
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Post Not Found | Fat Pig Ventures' };
  return {
    title: `${post.title} | Fat Pig Ventures Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '160px 0 80px',
          position: 'relative'
        }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <AnimatedSection>
              <Link href="/blog" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                color: 'var(--text-secondary)',
                fontSize: '14px',
                marginBottom: '32px',
                textDecoration: 'none'
              }}>
                <ArrowLeft size={16} /> Back to Insights
              </Link>
              
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
                <SectionLabel>{post.category}</SectionLabel>
                <span style={{ color: 'var(--text-dimmed)', fontSize: '13px' }}>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </div>
              
              <h1 style={{ marginBottom: '24px', fontSize: '40px', lineHeight: '1.2' }}>
                {post.title}
              </h1>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>
                {post.excerpt}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <AnimatedSection delay={0.1}>
              <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <p>{post.content}</p>
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
