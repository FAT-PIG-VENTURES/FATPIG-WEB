import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PreFooterCTA from '@/components/sections/PreFooterCTA';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const { frontmatter } = getPostBySlug(slug);
    return {
      title: `${frontmatter.title} | Fat Pig Ventures Blog`,
      description: frontmatter.excerpt,
    };
  } catch (e) {
    return { title: 'Post Not Found | Fat Pig Ventures' };
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  
  let post;
  try {
    post = getPostBySlug(slug);
  } catch (e) {
    notFound();
  }

  const { frontmatter, content } = post;

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
                <SectionLabel>{frontmatter.category}</SectionLabel>
                <span style={{ color: 'var(--text-dimmed)', fontSize: '13px' }}>
                  {new Date(frontmatter.publishedAt).toLocaleDateString()}
                </span>
              </div>
              
              <h1 style={{ marginBottom: '24px', fontSize: '40px', lineHeight: '1.2' }}>
                {frontmatter.title}
              </h1>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>
                {frontmatter.excerpt}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-primary)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <AnimatedSection delay={0.1}>
              <div className="prose prose-invert" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <MDXRemote source={content} />
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
