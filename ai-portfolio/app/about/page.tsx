import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About — Ameer Hamza | Python & AI Developer',
  description: 'BSc Software Engineering student building production AI systems. LangChain, LangGraph, RAG pipelines, voice AI — real work, not just theory.',
};

const timeline = [
  {
    year: 'Nov 2025 – Present',
    role: 'AI Systems Developer',
    company: 'Part-Time Remote (Senior Software Engineer)',
    loc: 'Islamabad, Pakistan (Remote)',
    desc: 'Built a Next.js + FastAPI AI agent platform with AI avatars, ElevenLabs TTS voice interaction, LangGraph multi-agent workflows, and RAG pipelines over PostgreSQL and document stores.',
  },
  {
    year: 'Jul 2022 – 2026',
    role: 'BSc Software Engineering',
    company: 'Mirpur University of Science & Technology (MUST)',
    loc: 'AJK, Pakistan',
    desc: 'Graduating 2026. Specialized in AI/ML, software architecture, and data systems. Active participant in AI hackathons including Hugging Face Medical Hackathon.',
  },
];

const certs = [
  'Generative AI App Developer — HEC',
  'RAG and Agentic AI — IBM',
  'Agentic AI Bootcamp — AtomCamp',
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <span className="section-label">About Me</span>
            <h1 className={styles.heroTitle}>
              Building AI that<br />
              <em className={styles.heroEm}>actually works</em>
            </h1>
            <p className={styles.heroPara}>
              I&apos;m Ameer Hamza — a BSc Software Engineering student (graduating 2026) with
              real-world freelance experience shipping production AI systems. I don&apos;t just
              study AI; I build it, deploy it, and make it work for users.
            </p>
            <p className={styles.heroPara}>
              My focus is the intersection of LLMs, agentic workflows, and voice AI —
              building full-stack applications that integrate research-grade models with
              production-grade reliability.
            </p>
            <div className={styles.heroMeta}>
              <span className={styles.metaItem}>📍 Islamabad, Pakistan</span>
              <span className={styles.metaItem}>✉ hxmzadev@gmail.com</span>
              <span className={styles.metaItem}>📞 +(92) 348-9694917</span>
            </div>
            <div className={styles.heroActions}>
              <Link href="/projects" className="btn btn-gold">View My Work →</Link>
              <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>

          <div className={styles.heroImage}>
            <div className={styles.imageBorder}>
              <Image
                src="/profile.png"
                alt="Ameer Hamza"
                width={440}
                height={520}
                className={styles.image}
                priority
              />
            </div>
            <div className={styles.imageAccent} aria-hidden="true" />
          </div>
        </div>

        <div className="divider" />

        {/* Philosophy */}
        <section className={styles.section}>
          <span className="section-label">My Approach</span>
          <h2 className={styles.sectionTitle}>How I think about AI development</h2>
          <div className={styles.philosophyGrid}>
            {[
              { icon: '🎯', title: 'Production-First',    desc: 'A model that works in a notebook but fails in production is worthless. I build for reliability, latency, and real users.' },
              { icon: '🔬', title: 'Empirical Builder',   desc: 'I experiment, measure, and iterate. No premature optimization — data and user feedback guide every decision.' },
              { icon: '⚡', title: 'Full-Stack Mindset',  desc: 'From LLM prompt engineering to FastAPI endpoints to Next.js UIs — I own the full stack and ship complete products.' },
              { icon: '🌱', title: 'Continuous Learner',  desc: 'AI moves fast. I stay current through building real projects, reading papers, and engaging with the community.' },
            ].map(item => (
              <div key={item.title} className={`card ${styles.philosophyCard}`}>
                <span className={styles.philosophyIcon}>{item.icon}</span>
                <h3 className={styles.philosophyTitle}>{item.title}</h3>
                <p className={styles.philosophyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Timeline */}
        <section className={styles.section}>
          <span className="section-label">Journey</span>
          <h2 className={styles.sectionTitle}>Experience &amp; Education</h2>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineLeft}>
                  <span className={styles.timelineYear}>{item.year}</span>
                </div>
                <div className={styles.timelineDot}><span /></div>
                <div className={styles.timelineRight}>
                  <h3 className={styles.timelineRole}>{item.role}</h3>
                  <span className={styles.timelineCompany}>{item.company}</span>
                  <span className={styles.timelineLoc}>{item.loc}</span>
                  <p className={styles.timelineDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* Certifications */}
        <section className={styles.section}>
          <span className="section-label">Credentials</span>
          <h2 className={styles.sectionTitle}>Certifications &amp; Training</h2>
          <div className={styles.certGrid}>
            {certs.map(c => (
              <div key={c} className={`card ${styles.certCard}`}>
                <span className={styles.certIcon}>🏆</span>
                <span className={styles.certName}>{c}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
