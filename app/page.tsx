import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { YourStory } from '@/components/sections/YourStory';
import { Testimonies } from '@/components/sections/Testimonies';
import { Advice } from '@/components/sections/Advice';
import { GraphSection } from '@/components/sections/GraphSection';
import { Community } from '@/components/sections/Community';

export const metadata: Metadata = {
  title: 'Mums in Geosciences: Support & Stories for Working Mothers in Geology',
  description:
    'Join the community for Mums in Geosciences. Read honest stories, share advice, and find support for balancing your career in geology, fieldwork, and parenthood.',
  alternates: { canonical: 'https://www.mumsingeosciences.com/' },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <YourStory />
      <Testimonies />
      <Advice />
      <GraphSection />
      <Community />
    </main>
  );
}
