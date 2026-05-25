'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';

const stats = [
  { icon: '👤', value: '1+',   label: 'Years Experience' },
  { icon: '📁', value: '10+',  label: 'Projects Completed' },
  { icon: '⭐', value: '100%', label: 'Client Satisfaction' },
];

const services = [
  { icon: '🤖', title: 'AI / LLM',    desc: 'Building intelligent agents & LLM-powered systems that work.' },
  { icon: '📚', title: 'RAG Systems',  desc: 'Retrieval pipelines over docs, DBs, and APIs at scale.' },
  { icon: '⚙️', title: 'Backend',      desc: 'FastAPI, PostgreSQL, REST APIs — clean and production-ready.' },
  { icon: '🎙️', title: 'Voice AI',     desc: 'Whisper STT + ElevenLabs TTS for real-time voice apps.' },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background warm bokeh orbs */}
      <div className={styles.orbs} aria-hidden="true">
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* ── LEFT: Text Content ── */}
        <div className={styles.content}>
          <p className={styles.greeting}>HELLO, I&apos;M</p>

          <h1 className={styles.name}>Ameer Hamza</h1>

          <p className={styles.tagline}>
            Python &amp; AI Developer.&nbsp;
            <span className={styles.taglineAccent}>Builder. Problem-Solver.</span>
          </p>

          <p className={styles.description}>
            BSc Software Engineering student (graduating 2026) with hands-on freelance
            experience building production AI systems — LLM workflows, RAG pipelines,
            multi-agent platforms, and full-stack AI applications.
          </p>

          <div className={styles.actions}>
            <Link href="/projects" className="btn btn-gold">View My Work</Link>
            <Link href="/contact" className="btn btn-outline">Contact Me</Link>
          </div>

          {/* Stats row — matching reference */}
          <div className={styles.stats}>
            {stats.map(({ icon, value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statIcon}>{icon}</span>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Profile Image ── */}
        <div className={styles.imageCol}>
          {/* Decorative arc ring */}
          <div className={styles.ring} aria-hidden="true" />
          <div className={styles.ring2} aria-hidden="true" />

          <div className={styles.imageBg}>
            <Image
              src="/profile.png"
              alt="Ameer Hamza — Python & AI Developer"
              width={520}
              height={640}
              priority
              className={styles.profileImg}
            />
          </div>

          {/* Floating badge */}
          <div className={styles.floatBadge}>
            <span className="dot-accent" />
            <span>Available for hire</span>
          </div>
        </div>
      </div>

      {/* ── Services strip at bottom ── */}
      <div className={styles.servicesStrip}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map(({ icon, title, desc }) => (
              <div key={title} className={styles.serviceItem}>
                <span className={styles.serviceIcon}>{icon}</span>
                <div>
                  <h3 className={styles.serviceTitle}>{title}</h3>
                  <p className={styles.serviceDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
