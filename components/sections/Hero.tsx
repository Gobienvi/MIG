import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="hero" className="relative bg-[linear-gradient(135deg,#faf8f6,#f0ece6,#e7dfd6,#d4e4d4,#faf8f6)] animate-gradient py-16 md:py-24 px-4 overflow-hidden">

      {/* Decorative rock texture SVGs */}
      {/* Rock 1 */}
      <svg className="absolute top-[8%] left-[18%] opacity-15 w-40 h-40 rock-float-1" viewBox="0 0 160 160" fill="none">
        <path d="M30,140 L10,100 L18,72 L8,50 L25,30 L45,18 L70,22 L88,10 L110,20 L125,38 L140,35 L150,55 L145,80 L155,105 L140,130 L115,145 L85,150 L55,148 Z" fill="#748c76"/>
        <path d="M30,140 L10,100 L18,72 L8,50 L25,30 L45,18 L70,22 L88,10 L110,20 L125,38 L140,35 L150,55 L145,80 L155,105 L140,130 L115,145 L85,150 L55,148 Z" stroke="#054622" strokeWidth="1.5" fill="none"/>
        <path d="M45,18 L60,55 L88,10" stroke="#054622" strokeWidth="1" opacity="0.4"/>
        <path d="M60,55 L125,38" stroke="#054622" strokeWidth="1" opacity="0.4"/>
        <path d="M60,55 L85,150" stroke="#054622" strokeWidth="0.8" opacity="0.3"/>
        <circle cx="75" cy="70" r="2" fill="#054622" opacity="0.3"/>
        <circle cx="100" cy="90" r="1.5" fill="#054622" opacity="0.3"/>
        <circle cx="55" cy="100" r="1.5" fill="#054622" opacity="0.3"/>
        <circle cx="120" cy="65" r="1" fill="#054622" opacity="0.3"/>
      </svg>

      {/* Rock 2 */}
      <svg className="absolute top-[55%] left-[8%] opacity-15 w-32 h-24 rock-float-2" viewBox="0 0 130 100" fill="none">
        <path d="M15,65 L8,45 L18,25 L38,12 L62,8 L88,14 L108,28 L118,50 L112,72 L95,88 L68,95 L40,90 L20,80 Z" fill="#4f3c40"/>
        <path d="M15,65 L8,45 L18,25 L38,12 L62,8 L88,14 L108,28 L118,50 L112,72 L95,88 L68,95 L40,90 L20,80 Z" stroke="#3d2d30" strokeWidth="1.5" fill="none"/>
        <path d="M38,12 L55,48 L112,50" stroke="#faf8f6" strokeWidth="0.8" opacity="0.2"/>
        <path d="M55,48 L68,95" stroke="#faf8f6" strokeWidth="0.8" opacity="0.2"/>
        <circle cx="70" cy="45" r="2" fill="#faf8f6" opacity="0.15"/>
        <circle cx="45" cy="60" r="1.5" fill="#faf8f6" opacity="0.15"/>
        <circle cx="90" cy="65" r="1" fill="#faf8f6" opacity="0.15"/>
      </svg>

      {/* Rock 3 */}
      <svg className="absolute top-[5%] right-[0%] opacity-15 w-44 h-36 rock-float-3 z-10" viewBox="0 0 180 140" fill="none">
        <path d="M20,130 L5,100 L12,75 L5,50 L20,28 L45,15 L75,10 L105,15 L135,10 L160,25 L175,50 L170,80 L175,108 L158,130 Z" fill="#546555"/>
        <path d="M20,130 L5,100 L12,75 L5,50 L20,28 L45,15 L75,10 L105,15 L135,10 L160,25 L175,50 L170,80 L175,108 L158,130 Z" stroke="#054622" strokeWidth="1.5" fill="none"/>
        <path d="M5,95 Q50,82 100,88 Q140,92 175,78" stroke="#faf8f6" strokeWidth="1.5" opacity="0.2"/>
        <path d="M8,72 Q55,58 105,64 Q145,68 170,52" stroke="#faf8f6" strokeWidth="1.5" opacity="0.2"/>
        <path d="M12,48 Q60,34 110,40 Q148,44 172,30" stroke="#faf8f6" strokeWidth="1.2" opacity="0.15"/>
        <circle cx="80" cy="75" r="2" fill="#faf8f6" opacity="0.2"/>
        <circle cx="130" cy="60" r="1.5" fill="#faf8f6" opacity="0.2"/>
        <circle cx="50" cy="90" r="1" fill="#faf8f6" opacity="0.2"/>
      </svg>

      {/* Rock 4 */}
      <svg className="absolute bottom-[8%] left-[25%] opacity-15 w-36 h-28 rock-float-4" viewBox="0 0 140 110" fill="none">
        <path d="M5,90 L2,65 L15,42 L35,28 L58,22 L78,28 L88,20 L105,30 L115,48 L112,70 L120,88 L105,102 L80,108 L52,105 L25,100 Z" fill="#748c76"/>
        <path d="M5,90 L2,65 L15,42 L35,28 L58,22 L78,28 L88,20 L105,30 L115,48 L112,70 L120,88 L105,102 L80,108 L52,105 L25,100 Z" stroke="#054622" strokeWidth="1.5" fill="none"/>
        <path d="M35,28 L58,70 L120,88" stroke="#054622" strokeWidth="0.8" opacity="0.3"/>
        <path d="M58,22 L58,70" stroke="#054622" strokeWidth="0.8" opacity="0.3"/>
        <path d="M58,70 L25,100" stroke="#054622" strokeWidth="0.8" opacity="0.3"/>
        <circle cx="58" cy="70" r="2.5" fill="#054622" opacity="0.3"/>
        <circle cx="85" cy="55" r="1.5" fill="#054622" opacity="0.25"/>
        <circle cx="38" cy="75" r="1.5" fill="#054622" opacity="0.25"/>
      </svg>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
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
              className="w-full max-h-[400px] md:max-h-[620px] object-cover object-[center_30%] hover:scale-105 transition-transform duration-500"
              style={{ filter: 'brightness(1.05) contrast(1.05) saturate(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#054622]/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
