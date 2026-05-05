'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MetricCard from '../ui/MetricCard';
import StatusPill from '../ui/StatusPill';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Flux Background */}
      <div className={styles.fluxBackground}>
        <motion.div 
          className={styles.orb1}
          animate={{ 
            x: [0, 150, -50, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.orb2}
          animate={{ 
            x: [0, -150, 100, 0],
            y: [0, 150, -100, 0],
            scale: [1, 0.8, 1.1, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.orb3}
          animate={{ 
            x: [0, 100, -100, 0],
            y: [0, 50, -50, 0],
            scale: [1, 1.5, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Subtle Grid Overlay */}
      <div className={styles.gridOverlay}></div>

      <div className="container">
        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.pillContainer}
          >
            <StatusPill>Next-Gen Tech Consulting</StatusPill>
          </motion.div>
          
          <motion.h1 
            className={styles.headline}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Build the future.<br/>
            <span className={styles.fluxText}>Scale the present.</span>
          </motion.h1>
          
          <motion.p 
            className={styles.subheadline}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            We design, engineer, and launch intelligent products and growth systems that move your business forward — from first prototype to full scale.
          </motion.p>
          
          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/services" className={styles.primaryBtn}>
              <span style={{ position: 'relative', zIndex: 1 }}>Explore Services</span>
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Book a Call
            </Link>
          </motion.div>
          
          <motion.div 
            className={styles.metricsGlass}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.metricsGrid}>
              <MetricCard number="8+" label="Service verticals" color="cyan" />
              <MetricCard number="50+" label="Projects delivered" color="purple" />
              <MetricCard number="100%" label="Execution focused" color="cyan" />
              <MetricCard number="Global" label="Delivery reach" color="purple" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
