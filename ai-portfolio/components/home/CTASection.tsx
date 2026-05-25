import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.content}>
            <span className="section-label">Ready to Build?</span>
            <h2 className={styles.title}>
              Let&apos;s create something<br />
              <em className={styles.em}>extraordinary</em> together
            </h2>
            <p className={styles.desc}>
              Looking to hire an AI developer, need a RAG system built, or want to
              collaborate on a cutting-edge LLM project? Let&apos;s make it happen.
            </p>
            <div className={styles.actions}>
              <Link href="/contact" className="btn btn-gold">Start a Conversation →</Link>
              <Link href="/projects" className="btn btn-outline">Explore My Work</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
