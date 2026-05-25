import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import SkillsSnapshot from '@/components/home/SkillsSnapshot';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Ameer Hamza — AI Engineer | LLMs, RAG & ML Systems',
  description: 'AI Engineer specializing in LLMs, RAG pipelines, and production ML systems. Building intelligent applications that bridge research and real-world impact.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSnapshot />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
