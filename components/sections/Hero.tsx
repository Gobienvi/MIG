import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="hero" className="relative py-24 md:py-40 px-4 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/mum-and-child.jpeg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        style={{ filter: 'brightness(1.05) saturate(1.1)' }}
      />
      {/* Strong overlay */}
      <div className="absolute inset-0 bg-[#faf8f6]/70 md:bg-[#faf8f6]/60" />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1a1a1a] mb-6">
          Stories from{' '}
          <span className="text-[#748c76]">Mums</span>{' '}
          working in geosciences
        </h1>
        <p className="text-lg md:text-xl text-[#546555] mb-10 leading-relaxed">
          Creating space for mothers working in geosciences to connect, reflect, and feel seen.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#yourstory">
            <Button className="bg-[#4f3c40] hover:bg-[#3d2d30] text-white px-8 py-3 text-base">
              Share your story
            </Button>
          </a>
          <a href="#testimonies">
            <Button
              variant="outline"
              className="border-[#748c76] text-[#748c76] hover:bg-[#748c76] hover:text-white px-8 py-3 text-base"
            >
              Read others&apos; stories
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
