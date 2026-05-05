'use client';

import SectionLabel from '../ui/SectionLabel';
import AnimatedSection from '../ui/AnimatedSection';
import styles from './ProcessTimeline.module.css';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep dive into your business metrics, technical constraints, and competitive landscape.'
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Architecting the solution and defining the exact roadmap to reach your business goals.'
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Cross-functional engineering and design sprints with radical transparency.'
  },
  {
    num: '04',
    title: 'Optimise',
    desc: 'Launch, measure against KPIs, and iterate to maximize your return on investment.'
  }
];

export default function ProcessTimeline() {
  return (
    <section className={styles.section}>
      <div className="container">
        <AnimatedSection>
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <SectionLabel>PROCESS</SectionLabel>
            <h2>From first call to measurable impact</h2>
          </div>
        </AnimatedSection>

        <div className={styles.timelineGrid}>
          <div className={styles.connectingLine} />
          
          {steps.map((step, index) => (
            <AnimatedSection key={step.num} delay={index * 0.15}>
              <div className={styles.step}>
                <div className={styles.numberCircle}>{step.num}</div>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
