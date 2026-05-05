'use client';

import { Code, Layers, TrendingUp, Zap, Target, BarChart2, Cloud, PenTool } from 'lucide-react';
import Card from '../ui/Card';
import SectionLabel from '../ui/SectionLabel';
import IconContainer from '../ui/IconContainer';
import AnimatedSection from '../ui/AnimatedSection';

const services = [
  {
    title: 'Web Development',
    description: 'High-performance web applications built with modern frameworks like Next.js and React.',
    icon: <Code size={20} />,
    href: '/services#web-development'
  },
  {
    title: 'Technology Consulting',
    description: 'Strategic technical guidance to align your digital infrastructure with business goals.',
    icon: <Layers size={20} />,
    href: '/services#technology-consulting'
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven growth systems, SEO, and paid acquisition to scale your customer base.',
    icon: <TrendingUp size={20} />,
    href: '/services#digital-marketing'
  },
  {
    title: 'Automation',
    description: 'Custom workflows and integrations that eliminate manual work and reduce errors.',
    icon: <Zap size={20} />,
    href: '/services#automation'
  },
  {
    title: 'Startup Advisory',
    description: 'Fractional CTO services and product strategy for early and growth-stage companies.',
    icon: <Target size={20} />,
    href: '/services#advisory'
  },
  {
    title: 'Data & BI',
    description: 'Dashboards, analytics setups, and data pipelines to make business metrics actionable.',
    icon: <BarChart2 size={20} />,
    href: '/services#data-bi'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure, CI/CD pipelines, and cloud migration for robust delivery.',
    icon: <Cloud size={20} />,
    href: '/services#cloud-devops'
  },
  {
    title: 'UI/UX Design',
    description: 'Premium, conversion-focused interface design and user experience research.',
    icon: <PenTool size={20} />,
    href: '/services#ui-ux-design'
  }
];

export default function ServicesGrid() {
  return (
    <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px 0' }}>
      <div className="container">
        <AnimatedSection>
          <div className="text-center" style={{ marginBottom: '64px', maxWidth: '800px', margin: '0 auto 64px' }}>
            <SectionLabel>WHAT WE DO</SectionLabel>
            <h2>Eight capabilities. One team. Zero handoff problems.</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Integrated service lines under one roof — your web app talks to your marketing engine, your data feeds your decisions.
            </p>
          </div>
        </AnimatedSection>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '24px' 
        }}>
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <Card 
                title={service.title}
                description={service.description}
                href={service.href}
                icon={<IconContainer>{service.icon}</IconContainer>}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
