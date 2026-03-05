import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-[#4f3c40] text-white px-4 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <Image
              src="/images/mumlogo-removebg.png"
              alt="Mums in Geosciences Logo"
              width={64}
              height={64}
              className="object-contain brightness-200"
            />
            <p className="text-white/70 text-sm leading-relaxed text-center sm:text-left">
              A community for mothers working in geosciences — sharing stories, advice, and support.
            </p>
          </div>

          {/* Get Involved */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-1">
              Get Involved
            </h3>
            <p className="text-white/70 text-sm">Have a story to tell?</p>
            <a
              href="https://forms.gle/HDeLcPXuku3UW5gz9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#748c76] hover:bg-[#546555] text-white text-sm">
                Share Your Story
              </Button>
            </a>
            <a
              href="mailto:mumsingeosciences@gmail.com"
              className="text-[#20c997] hover:underline text-sm"
            >
              mumsingeosciences@gmail.com
            </a>
          </div>

        </div>

        <Separator className="bg-white/20 mb-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-xs">
            © 2025 Mums in Geosciences. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-white/50 hover:text-white text-xs transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

      </div>
    </footer>
  );
}
