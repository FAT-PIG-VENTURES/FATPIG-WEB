import styles from './MetricCard.module.css';

export default function MetricCard({ number, label, color = 'cyan' }) {
  const numberColor = color === 'cyan' ? 'var(--accent-primary)' : 'var(--accent-secondary)';
  
  return (
    <div className={styles.card}>
      <div className={styles.number} style={{ color: numberColor }}>
        {number}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
