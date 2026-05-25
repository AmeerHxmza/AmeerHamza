import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects — Ameer Hamza | AI Engineer',
  description: 'Explore AI projects including RAG systems, LLM applications, ML pipelines, and intelligent automation tools built by Ameer Hamza.',
};

const projects = [
  {
    id: 'rag-enterprise',
    image: '/project-rag.png',
    tag: 'Featured',
    title: 'Enterprise RAG Pipeline',
    description: 'A production-grade Retrieval-Augmented Generation system processing 100K+ documents with hybrid search and re-ranking. Serves 50+ enterprise clients with sub-second response times.',
    tech: ['LangChain', 'Pinecone', 'GPT-4o', 'FastAPI', 'Redis', 'Docker'],
    github: 'https://github.com/AmeerHamza',
    live: '#',
    featured: true,
  },
  {
    id: 'llm-chatbot',
    image: '/project-chatbot.png',
    tag: 'AI Application',
    title: 'Multi-Agent LLM Chatbot',
    description: 'Sophisticated conversational AI leveraging LangGraph for multi-step reasoning, tool use, and persistent memory. Handles complex queries requiring multiple data sources.',
    tech: ['LangGraph', 'OpenAI', 'Redis', 'Next.js', 'TypeScript'],
    github: 'https://github.com/AmeerHamza',
    live: '#',
    featured: true,
  },
  {
    id: 'ml-monitor',
    image: '/project-ml.png',
    tag: 'MLOps',
    title: 'ML Model Monitor',
    description: 'Real-time model performance monitoring platform with data drift detection, automated alerting, and A/B testing support. Monitors 15+ deployed models in production.',
    tech: ['PyTorch', 'MLflow', 'Grafana', 'Prometheus', 'FastAPI'],
    github: 'https://github.com/AmeerHamza',
    live: '#',
    featured: false,
  },
  {
    id: 'nlp-classifier',
    image: '/project-rag.png',
    tag: 'NLP',
    title: 'Intent Classification System',
    description: 'Fine-tuned BERT model for multi-class intent classification achieving 94% accuracy. Deployed with TorchServe for 100ms inference latency at scale.',
    tech: ['HuggingFace', 'BERT', 'TorchServe', 'AWS', 'Python'],
    github: 'https://github.com/AmeerHamza',
    live: '#',
    featured: false,
  },
  {
    id: 'doc-ai',
    image: '/project-chatbot.png',
    tag: 'Document AI',
    title: 'Intelligent Document Processor',
    description: 'Automated document understanding pipeline using vision-language models for extraction, classification, and structured data generation from unstructured PDFs.',
    tech: ['GPT-4 Vision', 'LangChain', 'Unstructured', 'PostgreSQL'],
    github: 'https://github.com/AmeerHamza',
    live: '#',
    featured: false,
  },
  {
    id: 'recommendation',
    image: '/project-ml.png',
    tag: 'Recommendation',
    title: 'Neural Recommendation Engine',
    description: 'Deep learning recommendation system using collaborative filtering and content-based signals. Serves personalized recommendations to 10K+ daily active users.',
    tech: ['PyTorch', 'Faiss', 'Redis', 'Kafka', 'Docker'],
    github: 'https://github.com/AmeerHamza',
    live: '#',
    featured: false,
  },
];

export default function ProjectsPage() {
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <div className={styles.page}>
      {/* Page header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <span className="section-label">Portfolio</span>
          <h1 className={styles.pageTitle}>
            <span className={styles.titleLine1}>Imagination</span>
            <span className={styles.titleLine2}>
              Drives <em className={styles.titleEm}>Innovation</em>
            </span>
          </h1>
          <p className={styles.pageSubtitle}>
            A collection of AI systems, ML pipelines, and intelligent applications
            built with rigour, creativity, and real-world impact in mind.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Featured 2-column grid */}
        <section className={styles.featuredSection}>
          {featured.map((project) => (
            <article key={project.id} className={`card ${styles.featuredCard}`}>
              <div className={styles.cardImageWrap}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={680}
                  height={400}
                  className={styles.cardImage}
                  priority
                />
                <div className={styles.cardImageOverlay} />
              </div>
              <div className={styles.cardBody}>
                <span className="tag">{project.tag}</span>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.techRow}>
                  {project.tech.map(t => (
                    <span key={t} className={styles.techBadge}>{t}</span>
                  ))}
                </div>
                <div className={styles.cardActions}>
                  <a href={project.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                  <a href={project.live} className="btn btn-primary">
                    Visit Project →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <div className="divider" />

        {/* Smaller grid */}
        <section>
          <h2 className={styles.gridHeading}>More Projects</h2>
          <div className={styles.grid}>
            {rest.map((project) => (
              <article key={project.id} className={`card ${styles.gridCard}`}>
                <div className={styles.gridImageWrap}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={220}
                    className={styles.gridImage}
                  />
                </div>
                <div className={styles.gridBody}>
                  <span className={styles.gridTag}>{project.tag}</span>
                  <h3 className={styles.gridTitle}>{project.title}</h3>
                  <p className={styles.gridDesc}>{project.description}</p>
                  <div className={styles.techRow}>
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className={styles.techBadge}>{t}</span>
                    ))}
                  </div>
                  <div className={styles.gridLinks}>
                    <a href={project.live} className={styles.gridVisit}>Visit →</a>
                    <a href={project.github} className={styles.gridGithub} target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
