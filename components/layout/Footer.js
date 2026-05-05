import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1 */}
          <div className={styles.logoCol}>
            <Link href="/" className={styles.logo}>
              <img src="/logo.svg" alt="Fat Pig Ventures Logo" className={styles.logoIcon} width={32} height={32} />
              <span className={styles.logoGradient}>Fat Pig</span>&nbsp;Ventures
            </Link>
            <p className={styles.description}>
              Execution-focused technology consulting and digital agency based in Kolkata, India.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className={styles.heading}>COMPANY</h3>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/services" className={styles.link}>Services</Link></li>
              <li><Link href="/about" className={styles.link}>About</Link></li>
              <li><Link href="/careers" className={styles.link}>Careers</Link></li>
              <li><Link href="/blog" className={styles.link}>Blog</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className={styles.heading}>SERVICES</h3>
            <ul className={styles.linkList}>
              <li><Link href="/services#web-development" className={styles.link}>Web Development</Link></li>
              <li><Link href="/services#technology-consulting" className={styles.link}>Tech Consulting</Link></li>
              <li><Link href="/services#digital-marketing" className={styles.link}>Digital Marketing</Link></li>
              <li><Link href="/services#cloud-devops" className={styles.link}>Cloud & DevOps</Link></li>
              <li><Link href="/services#ui-ux-design" className={styles.link}>UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className={styles.contactCol}>
            <h3 className={styles.heading}>CONTACT</h3>
            <div className={styles.contactItem}>hello@fatpigventures.com</div>
            <div className={styles.contactItem}>Kolkata, India</div>
            <Link href="/contact" className={styles.bookCallBtn}>
              Book a Call
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContent}`}>
          <div>© {currentYear} Fat Pig Ventures LLP</div>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy</Link>
            <span>·</span>
            <Link href="/terms" className={styles.legalLink}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
