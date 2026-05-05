'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './Card.module.css';

export default function Card({ 
  title, 
  description, 
  icon: Icon, 
  linkText = 'Learn more', 
  href,
  className = ''
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={styles.cardWrapper}>
      <motion.div 
        className={`${styles.card} ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div style={{ transform: "translateZ(50px)" }}>
          {Icon && (
            <div style={{ marginBottom: '24px' }}>
              {Icon}
            </div>
          )}
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.description}>{description}</p>
          
          {href && (
            <Link href={href} className={styles.link}>
              {linkText} <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}
