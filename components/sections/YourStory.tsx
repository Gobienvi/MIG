import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export function YourStory() {
  return (
    <section id="yourstory" className="py-16 md:py-24 px-4 bg-[#748c76]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Share Your Story</h2>
        <p className="text-white/80 mb-8 leading-relaxed">
          Your experience matters. Whether you&apos;re navigating fieldwork with a newborn,
          returning from maternity leave, or reflecting on a career shaped by motherhood — we want
          to hear from you.
        </p>
        <a
          href="https://forms.gle/HDeLcPXuku3UW5gz9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-white text-[#4f3c40] hover:bg-[#faf8f6] hover:scale-105 active:scale-95 font-semibold px-8 py-3 text-base gap-2 shadow-lg hover:shadow-white/40 transition-all duration-200 animate-pulse hover:animate-none">
            Click here to share your story <ExternalLink className="h-4 w-4" />
          </Button>
        </a>
        <p className="text-white/60 text-sm mt-6">
          * This questionnaire works with a Google account. If you do not have one, email us at{' '}
          <a
            href="mailto:mumsingeosciences@gmail.com"
            className="underline text-white/80 hover:text-white"
          >
            mumsingeosciences@gmail.com
          </a>{' '}
          to receive a PDF version.
        </p>
      </div>
    </section>
  );
}
