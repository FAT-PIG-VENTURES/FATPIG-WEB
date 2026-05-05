import { Code, Layers, TrendingUp, Zap, Target, BarChart2, Cloud, PenTool } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionLabel from '@/components/ui/SectionLabel';
import ServiceDetail from '@/components/sections/ServiceDetail';
import PreFooterCTA from '@/components/sections/PreFooterCTA';

export const metadata = {
  title: 'Our Services — Tech Consulting, Web Dev & Digital Marketing | Fat Pig Ventures',
  description: 'Full-service technology consulting: web development, digital marketing, cloud DevOps, UI/UX, automation, data analytics & startup advisory.',
};

const servicesList = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: '<p>We build high-performance, scalable web applications that solve real business problems. From complex SaaS platforms to enterprise portals, our engineering team focuses on robust architecture and flawless execution.</p><p>We use modern frameworks like Next.js and React to deliver lightning-fast experiences that rank well on search engines and convert visitors into customers.</p>',
    icon: <Code size={24} />,
    deliverables: [
      'Custom Web Applications & Portals',
      'SaaS Product Development',
      'E-commerce Solutions',
      'API Development & Integration',
      'Legacy System Modernisation',
      'Performance Optimisation'
    ]
  },
  {
    id: 'technology-consulting',
    title: 'Technology Consulting',
    description: '<p>Strategic guidance to align your digital infrastructure with your business goals. We help you make the right technology choices before you write a single line of code.</p><p>Whether you need a fractional CTO, architecture review, or a complete digital transformation roadmap, our experienced consultants provide actionable, execution-focused advice.</p>',
    icon: <Layers size={24} />,
    deliverables: [
      'Digital Transformation Roadmaps',
      'Architecture Review & Design',
      'Technology Stack Selection',
      'Technical Due Diligence',
      'Build vs. Buy Analysis',
      'IT Strategy Alignment'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: '<p>Data-driven growth systems designed to scale your customer base. We don\'t just run ads; we build comprehensive marketing engines that integrate with your product.</p><p>Our approach combines technical SEO, performance marketing, and conversion rate optimisation to ensure every dollar spent generates measurable ROI.</p>',
    icon: <TrendingUp size={24} />,
    deliverables: [
      'Technical & Content SEO',
      'Performance Marketing (PPC)',
      'Conversion Rate Optimisation (CRO)',
      'Marketing Automation Setup',
      'Growth Strategy & Execution',
      'Analytics & Attribution Modeling'
    ]
  },
  {
    id: 'automation',
    title: 'Automation',
    description: '<p>Custom workflows and integrations that eliminate manual work, reduce errors, and free up your team to focus on high-value tasks.</p><p>We connect your disparate software systems—CRM, ERP, marketing tools, and internal databases—into a seamless, automated ecosystem.</p>',
    icon: <Zap size={24} />,
    deliverables: [
      'Business Process Automation',
      'CRM/ERP Integrations',
      'Custom API Middleware',
      'Webhook Implementations',
      'Data Syncing & Migration',
      'No-code/Low-code Solutions'
    ]
  },
  {
    id: 'advisory',
    title: 'Startup Advisory',
    description: '<p>Strategic product and technical leadership for early and growth-stage companies. We act as an extension of your founding team to navigate critical technical challenges.</p><p>From building your first MVP to scaling your engineering team and preparing for funding rounds, we provide the experienced oversight you need.</p>',
    icon: <Target size={24} />,
    deliverables: [
      'Fractional CTO Services',
      'MVP Strategy & Scoping',
      'Product Roadmap Development',
      'Engineering Team Scaling',
      'Pitch Deck Technical Review',
      'Vendor Selection & Management'
    ]
  },
  {
    id: 'data-bi',
    title: 'Data & BI',
    description: '<p>Turn your raw data into actionable business intelligence. We build the pipelines and dashboards that give you real-time visibility into your most important metrics.</p><p>Stop guessing and start making decisions based on accurate, reliable data streams that unify information from across your entire organisation.</p>',
    icon: <BarChart2 size={24} />,
    deliverables: [
      'Data Warehouse Setup',
      'ETL Pipeline Development',
      'Custom BI Dashboards',
      'KPI Tracking & Reporting',
      'Predictive Analytics',
      'Data Governance Strategy'
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: '<p>Scalable, secure infrastructure that grows with your business. We implement the automation and practices needed to deploy code faster and more reliably.</p><p>Whether you\'re migrating to the cloud or need to optimise your current AWS/Azure/GCP setup, our DevOps engineers ensure maximum uptime and performance.</p>',
    icon: <Cloud size={24} />,
    deliverables: [
      'Cloud Architecture & Migration',
      'CI/CD Pipeline Setup',
      'Infrastructure as Code (IaC)',
      'Serverless Deployments',
      'Security & Compliance Audits',
      '24/7 Monitoring & Alerting'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: '<p>Premium, conversion-focused interface design and user experience research. We design digital products that look beautiful and function flawlessly.</p><p>Our design process is deeply integrated with our engineering team, ensuring that what we design can actually be built efficiently and performs brilliantly.</p>',
    icon: <PenTool size={24} />,
    deliverables: [
      'User Experience (UX) Research',
      'User Interface (UI) Design',
      'Interactive Prototyping',
      'Design Systems & Guidelines',
      'Usability Testing',
      'Conversion Rate Optimisation'
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Services Hero */}
        <section style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '160px 0 80px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '400px',
            background: 'var(--gradient-ambient-cyan)',
            pointerEvents: 'none',
            zIndex: 0
          }} />
          
          <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <SectionLabel>SERVICES</SectionLabel>
            <h1 style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
              Technology & Digital Services — Built Around Execution
            </h1>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '18px',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We don't just advise. We design, build, and scale the technology and marketing engines that drive your business forward.
            </p>
          </div>
        </section>

        {/* Services List */}
        {servicesList.map((service, index) => (
          <ServiceDetail 
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            deliverables={service.deliverables}
            isDark={index % 2 !== 0} // Alternate backgrounds
          />
        ))}

        {/* Not sure CTA */}
        <section style={{
          background: 'linear-gradient(to top, var(--bg-primary), rgba(79,101,241,0.05))',
          padding: '80px 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h2 style={{ marginBottom: '24px' }}>Not sure which service you need?</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
              Let's jump on a quick call to discuss your business challenges and figure out the best approach.
            </p>
            <a 
              href="/contact" 
              style={{
                display: 'inline-block',
                background: 'var(--gradient-cta)',
                color: 'var(--text-primary)',
                padding: '13px 26px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: '600',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                boxShadow: 'var(--shadow-cta)'
              }}
            >
              Get Expert Advice
            </a>
          </div>
        </section>
        
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  );
}
