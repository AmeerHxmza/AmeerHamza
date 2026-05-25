import Link from 'next/link';
import styles from './Footer.module.css';

const links = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills',   href: '/skills' },
  { label: 'Contact',  href: '/contact' },
];

const socials = [
  { label: 'GitHub',   href: 'https://github.com/AmeerHxmza',              icon: '🐙' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ameerhxmza',          icon: '💼' },
  { label: 'Email',    href: 'mailto:hxmzadev@gmail.com',                   icon: '✉️' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>AH</span>
              <span className={styles.logoText}>Ameer Hamza</span>
            </Link>
            <p className={styles.tagline}>
              Python &amp; AI Developer — Building production AI systems
              that bridge research and real-world impact.
            </p>
            <div className={styles.contact}>
              <a href="mailto:hxmzadev@gmail.com" className={styles.contactLink}>hxmzadev@gmail.com</a>
              <a href="tel:+923489694917" className={styles.contactLink}>+(92) 348-9694917</a>
            </div>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <span className={styles.colTitle}>Navigation</span>
              {links.map(l => (
                <Link key={l.href} href={l.href} className={styles.footLink}>{l.label}</Link>
              ))}
            </div>
            <div className={styles.col}>
              <span className={styles.colTitle}>Connect</span>
              {socials.map(s => (
                <a key={s.label} href={s.href} className={styles.footLink} target="_blank" rel="noopener noreferrer">
                  {s.icon} {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <span className={styles.copy}>© {year} Ameer Hamza. All rights reserved.</span>
          <span className={styles.built}>BSc Software Engineering, MUST (Graduating 2026)</span>
        </div>
      </div>
    </footer>
  );
}
