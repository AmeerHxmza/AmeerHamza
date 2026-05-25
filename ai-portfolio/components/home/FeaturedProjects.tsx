import Link from 'next/link';
import Image from 'next/image';
import styles from './FeaturedProjects.module.css';

const projects = [
  {
    id: 'recruit360',
    image: '/project-recruit360.png',
    tag: 'Featured Project',
    title: 'AI Recruit360 — Intelligent Hiring Platform',
    description: 'Full-stack AI recruitment platform (Next.js + FastAPI) with LLM-based CV screening, job-description matching, and automated candidate ranking. Deployed on Vercel with a real-time hiring dashboard powered by LangChain and OpenAI API.',
    tech: ['Next.js', 'FastAPI', 'LangChain', 'OpenAI API', 'PostgreSQL', 'Vercel'],
    github: 'https://github.com/AmeerHxmza',
    live: '#',
    featured: true,
  },
  {
    id: 'awaz',
    image: '/project-awaz.png',
    tag: 'Voice AI',
    title: 'AWAZ — AI Voice Assistant Platform',
    description: 'Full-stack voice AI app (Next.js + FastAPI) with Whisper STT and ElevenLabs TTS for real-time conversational interactions. Context-aware multi-turn AI agent deployed via Vercel and Render.',
    tech: ['Next.js', 'FastAPI', 'Whisper STT', 'ElevenLabs', 'LangChain'],
    github: 'https://github.com/AmeerHxmza',
    live: '#',
    featured: false,
  },
  {
    id: 'diagnova',
    image: '/project-diagnova.png',
    tag: 'Health AI',
    title: 'Diagnova — Lab Report Interpreter',
    description: 'Streamlit health-tech app (Hugging Face Medical Hackathon) using Groq LLaMA 3.3 for lab report analysis with RAG-grounded explanations, risk scoring, and Urdu/Arabic/Spanish support.',
    tech: ['Streamlit', 'Groq LLaMA 3.3', 'RAG', 'Hugging Face', 'Python'],
    github: 'https://github.com/AmeerHxmza',
    live: '#',
    featured: false,
  },
];

export default function FeaturedProjects() {
  const featured = projects.find(p => p.featured)!;
  const rest = projects.filter(p => !p.featured);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Selected Work</span>
          <h2 className={styles.title}>Featured Projects</h2>
        </div>

        {/* Big featured card */}
        <article className={styles.featuredCard}>
          <div className={styles.featuredImageWrap}>
            <Image
              src={featured.image}
              alt={featured.title}
              width={680}
              height={400}
              className={styles.featuredImage}
            />
          </div>
          <div className={styles.featuredContent}>
            <span className="tag">{featured.tag}</span>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.featuredDesc}>{featured.description}</p>
            <div className={styles.techList}>
              {featured.tech.map(t => (
                <span key={t} className={styles.techBadge}>{t}</span>
              ))}
            </div>
            <div className={styles.featuredActions}>
              <a href={featured.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a href={featured.live} className="btn btn-gold">
                Visit Project →
              </a>
            </div>
          </div>
        </article>

        {/* Rest */}
        <div className={styles.grid}>
          {rest.map((project) => (
            <article key={project.id} className={`card ${styles.projectCard}`}>
              <div className={styles.projectImageWrap}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={240}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectContent}>
                <span className={styles.projectTag}>{project.tag}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <div className={styles.techList}>
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className={styles.techBadge}>{t}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.live} className={styles.projectLinkBtn}>View →</a>
                  <a href={project.github} className={styles.projectGithub} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href="/projects" className="btn btn-outline">View All Projects →</Link>
        </div>
      </div>
    </section>
  );
}
