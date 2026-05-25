import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Skills — Ameer Hamza | AI Engineer',
  description: 'Technical skills and expertise of Ameer Hamza — AI/ML, Python, LLMs, MLOps, cloud platforms, and more.',
};

const skillGroups = [
  {
    category: 'AI & Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'Large Language Models (LLMs)', level: 95 },
      { name: 'RAG & Retrieval Systems', level: 92 },
      { name: 'Fine-tuning & RLHF', level: 85 },
      { name: 'Computer Vision', level: 78 },
      { name: 'NLP & Text Processing', level: 90 },
      { name: 'Reinforcement Learning', level: 70 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚙️',
    skills: [
      { name: 'LangChain / LangGraph', level: 95 },
      { name: 'HuggingFace Transformers', level: 92 },
      { name: 'PyTorch', level: 88 },
      { name: 'TensorFlow / Keras', level: 80 },
      { name: 'scikit-learn', level: 85 },
      { name: 'FastAPI', level: 90 },
    ],
  },
  {
    category: 'Languages & Tools',
    icon: '🐍',
    skills: [
      { name: 'Python', level: 98 },
      { name: 'TypeScript / JavaScript', level: 82 },
      { name: 'SQL', level: 85 },
      { name: 'Bash / Shell', level: 75 },
      { name: 'Go', level: 65 },
      { name: 'R', level: 60 },
    ],
  },
  {
    category: 'MLOps & Infrastructure',
    icon: '☁️',
    skills: [
      { name: 'Docker & Kubernetes', level: 88 },
      { name: 'MLflow / DVC', level: 85 },
      { name: 'AWS (SageMaker, Lambda)', level: 85 },
      { name: 'GCP (Vertex AI)', level: 78 },
      { name: 'CI/CD (GitHub Actions)', level: 82 },
      { name: 'Vector DBs (Pinecone, Chroma)', level: 92 },
    ],
  },
];

const techBadges = [
  'GPT-4o', 'Claude', 'Gemini', 'Llama', 'Mistral',
  'LangChain', 'LangGraph', 'Pinecone', 'Weaviate', 'Chroma',
  'PyTorch', 'HuggingFace', 'FastAPI', 'Docker', 'Kubernetes',
  'AWS', 'GCP', 'MLflow', 'Redis', 'PostgreSQL',
  'Next.js', 'Python', 'TypeScript', 'TensorFlow', 'Kafka',
];

export default function SkillsPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">Technical Profile</span>
          <h1 className={styles.title}>Skills &amp; Expertise</h1>
          <p className={styles.subtitle}>
            A comprehensive overview of my technical toolkit — built through years of
            shipping real AI products to production.
          </p>
        </div>

        {/* Tech badges cloud */}
        <div className={styles.badgeCloud}>
          {techBadges.map((badge) => (
            <span key={badge} className={styles.badge}>{badge}</span>
          ))}
        </div>

        <div className="divider" />

        {/* Skill groups with bars */}
        <div className={styles.skillsGrid}>
          {skillGroups.map((group) => (
            <div key={group.category} className={`card ${styles.skillGroup}`}>
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon}>{group.icon}</span>
                <h2 className={styles.groupTitle}>{group.category}</h2>
              </div>
              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillMeta}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        style={{ '--target-width': `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
