'use client';
import { useState, useTransition } from 'react';
import styles from './page.module.css';

const socials = [
  {
    icon: '📧',
    label: 'Email',
    value: 'ameer@example.com',
    href: 'mailto:ameer@example.com',
    desc: 'Best for project inquiries',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ameerhamza',
    href: 'https://linkedin.com/in/ameerhamza',
    desc: 'Professional network',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/AmeerHamza',
    href: 'https://github.com/AmeerHamza',
    desc: 'Open source work',
  },
  {
    icon: '🐦',
    label: 'Twitter / X',
    value: '@ameerhamza',
    href: 'https://twitter.com/ameerhamza',
    desc: 'AI thoughts & updates',
  },
];

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    startTransition(() => {
      setTimeout(() => {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formRow}>
        <div className={styles.fieldWrap}>
          <label className={styles.label} htmlFor="name">Name</label>
          <input
            id="name"
            className={styles.input}
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            required
          />
        </div>
        <div className={styles.fieldWrap}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            id="email"
            className={styles.input}
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            required
          />
        </div>
      </div>

      <div className={styles.fieldWrap}>
        <label className={styles.label} htmlFor="subject">Subject</label>
        <input
          id="subject"
          className={styles.input}
          type="text"
          placeholder="What is this about?"
          value={form.subject}
          onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
        />
      </div>

      <div className={styles.fieldWrap}>
        <label className={styles.label} htmlFor="message">Message</label>
        <textarea
          id="message"
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Tell me about your project or idea..."
          rows={6}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          required
        />
      </div>

      <button
        className={`btn btn-primary ${styles.submitBtn}`}
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
      >
        {status === 'idle' && 'Send Message →'}
        {status === 'sending' && 'Sending...'}
        {status === 'sent' && '✓ Message Sent!'}
        {status === 'error' && 'Try Again'}
      </button>

      {status === 'sent' && (
        <p className={styles.successMsg}>
          Thanks! I&apos;ll get back to you within 24 hours. 🚀
        </p>
      )}
    </form>
  );
}

export default function ContactClient() {
  return (
    <div className={styles.page}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="section-label">Let&apos;s Talk</span>
          <h1 className={styles.title}>
            Start a <em className={styles.em}>conversation</em>
          </h1>
          <p className={styles.subtitle}>
            Have a project in mind, want to collaborate, or just curious about AI?
            I&apos;d love to hear from you.
          </p>
        </div>

        {/* Two-column layout */}
        <div className={styles.layout}>
          {/* Left: social links */}
          <div className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>Other Ways to Connect</h2>
            <div className={styles.socialList}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className={`card ${styles.socialCard}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.socialIcon}>{s.icon}</span>
                  <div className={styles.socialInfo}>
                    <span className={styles.socialLabel}>{s.label}</span>
                    <span className={styles.socialValue}>{s.value}</span>
                    <span className={styles.socialDesc}>{s.desc}</span>
                  </div>
                  <span className={styles.socialArrow}>↗</span>
                </a>
              ))}
            </div>

            <div className={styles.availability}>
              <span className="dot-accent" />
              <div>
                <span className={styles.availTitle}>Open to opportunities</span>
                <span className={styles.availDesc}>Full-time, consulting &amp; freelance projects</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className={styles.formWrap}>
            <h2 className={styles.formTitle}>Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
