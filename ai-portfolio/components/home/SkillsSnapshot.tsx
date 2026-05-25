import styles from './SkillsSnapshot.module.css';

const skills = [
  { icon: '🤖', name: 'LLM Engineering', desc: 'LangChain, LangGraph, CrewAI, OpenAI API, prompt engineering & tool use' },
  { icon: '📚', name: 'RAG Pipelines', desc: 'ChromaDB, pgVector, hybrid search, document ingestion, re-ranking' },
  { icon: '🐍', name: 'Python & FastAPI', desc: 'Production REST APIs, async backends, PostgreSQL, clean architecture' },
  { icon: '🎙️', name: 'Voice & Multimodal', desc: 'Whisper STT, ElevenLabs TTS, Gradio, Streamlit voice interfaces' },
  { icon: '🔬', name: 'ML / NLP', desc: 'Hugging Face Transformers, Groq, fine-tuning, model evaluation' },
  { icon: '☁️', name: 'Deployment', desc: 'Vercel, Railway, Render, Docker, Langfuse observability' },
];

export default function SkillsSnapshot() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">What I Do</span>
          <h2 className={styles.title}>Core Expertise</h2>
          <p className={styles.subtitle}>
            Hands-on across the full AI stack — from research to production
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={`card ${styles.card}`}>
              <span className={styles.icon}>{skill.icon}</span>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <p className={styles.skillDesc}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
