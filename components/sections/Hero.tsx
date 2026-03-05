import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-br from-[#faf8f6] via-[#f0ece6] to-[#e7dfd6] py-16 md:py-24 px-4">
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
          <Image
            src="/images/hands.jpeg"
            alt="Mum and child"
            width={500}
            height={400}
            className="rounded-2xl object-cover shadow-lg w-full max-w-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
