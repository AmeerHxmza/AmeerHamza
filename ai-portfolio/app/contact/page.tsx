import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact — Ameer Hamza | AI Engineer',
  description: 'Get in touch with Ameer Hamza for AI engineering projects, consulting, or collaborations.',
};

export default function ContactPage() {
  return <ContactClient />;
}
