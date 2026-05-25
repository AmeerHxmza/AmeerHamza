'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/projects',  label: 'Projects' },
  { href: '/skills',    label: 'Skills' },
  { href: '/contact',   label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.inner} container`}>

        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Home">
          <span className={styles.logoMark}>AH</span>
          <span className={styles.logoText}>Ameer Hamza</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
            >
              {label}
              {pathname === href && <span className={styles.activeIndicator} />}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.actions}>
          <a
            href="mailto:hxmzadev@gmail.com"
            className="btn btn-gold"
          >
            Let&apos;s Talk
          </a>
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.mobileLink} ${pathname === href ? styles.mobileLinkActive : ''}`}
            >
              {label}
            </Link>
          ))}
          <a href="mailto:hxmzadev@gmail.com" className={`btn btn-gold ${styles.mobileCta}`}>
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
