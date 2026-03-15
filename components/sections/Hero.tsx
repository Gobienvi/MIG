import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="hero" className="bg-[linear-gradient(135deg,#faf8f6,#f0ece6,#e7dfd6,#d4e4d4,#faf8f6)] animate-gradient py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1a1a1a] mb-6">
            Stories from{' '}
            <span className="text-[#748c76]">Mums</span>{' '}
            working in geosciences
          </h1>
          <p className="text-lg text-[#546555] mb-8 leading-relaxed">
            Creating space for mothers working in geosciences to connect, reflect, and feel seen.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#yourstory">
              <Button className="bg-[#4f3c40] hover:bg-[#3d2d30] text-white px-6 py-3 text-base">
                Share your story
              </Button>
            </a>
            <a href="#testimonies">
              <Button
                variant="outline"
                className="border-[#748c76] text-[#748c76] hover:bg-[#748c76] hover:text-white px-6 py-3 text-base"
              >
                Read others&apos; stories
              </Button>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-xl ring-4 ring-[#e7dfd6] ring-offset-4 ring-offset-[#faf8f6]">
            <Image
              src="/images/mum-and-child.jpeg"
              alt="Mum and child walking together"
              width={500}
              height={620}
              priority
              className="w-full max-h-[400px] md:max-h-[620px] object-cover object-center hover:scale-105 transition-transform duration-500"
              style={{ filter: 'brightness(1.05) contrast(1.05) saturate(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#054622]/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
