'use client';

import SectionLabel from '../ui/SectionLabel';
import AnimatedSection from '../ui/AnimatedSection';
import styles from './ValueProposition.module.css';

const features = [
  {
    title: 'Execution-first DNA',
    description: 'We don\'t just deliver slide decks. We build, ship, and iterate until the business outcome is achieved.'
  },
  {
    title: 'Cross-functional teams',
    description: 'Engineers, marketers, and designers working in a single pod to eliminate silos and handoff delays.'
  },
  {
    title: 'Radical transparency',
    description: 'Direct access to the team building your product. No account managers playing telephone.'
  },
  {
    title: 'Outcome obsession',
    description: 'We measure success by your metrics: revenue generated, hours saved, and growth unlocked.'
  }
];

export default function ValueProposition() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <AnimatedSection>
              <SectionLabel>WHY US</SectionLabel>
              <h2>Strategy is easy. Execution is everything.</h2>
              <p>
                In a world full of consultants who only advise, we actually build. 
                Our team acts as your execution engine, turning complex business 
                problems into deployed technology and active marketing campaigns.
              </p>
              <p>
                We believe that the best strategy is the one that gets shipped. 
                That's why we focus on speed to value, robust engineering, and 
                data-backed decisions from day one.
              </p>
            </AnimatedSection>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={styles.featureCard}>
                  <div className={styles.dot} />
                  <div>
                    <div className={styles.featureTitle}>{feature.title}</div>
                    <p className={styles.featureDesc}>{feature.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
