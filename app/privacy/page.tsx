import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Mums in Geosciences.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#faf8f6] min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#4f3c40] hover:text-[#748c76] mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-[#4f3c40] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#6b6b6b] mb-8">Last updated: March 2026</p>

        <Separator className="mb-8 bg-[#e7dfd6]" />

        <div className="space-y-8 text-[#1a1a1a] leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-[#546555] mb-3">Who we are</h2>
            <p>
              Mums in Geosciences is a community project that shares personal stories, advice, and
              resources for mothers working in geosciences. Our website is{' '}
              <a href="https://www.mumsingeosciences.com" className="text-[#748c76] hover:underline">
                www.mumsingeosciences.com
              </a>
              . You can contact us at{' '}
              <a href="mailto:mumsingeosciences@gmail.com" className="text-[#748c76] hover:underline">
                mumsingeosciences@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#546555] mb-3">What data we collect</h2>
            <p>
              When you submit your story through our Google Form, you may provide personal
              information such as your name, professional role, and personal experiences. This
              information is collected voluntarily.
            </p>
            <p className="mt-3">
              We do not collect any data automatically through this website (no cookies, no
              analytics trackers, no login systems).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#546555] mb-3">How we use your data</h2>
            <p>Information submitted via the Google Form is used solely to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Publish your story on this website (with your consent)</li>
              <li>Contact you if we have questions about your submission</li>
            </ul>
            <p className="mt-3">
              We will never sell, share, or use your personal information for any commercial
              purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#546555] mb-3">Google Form</h2>
            <p>
              Our story submission form is hosted by Google. When you use it, Google&apos;s own
              privacy policy applies. You can read it at{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#748c76] hover:underline"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#546555] mb-3">Your rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Request that your story be removed from the website at any time</li>
              <li>Ask what personal data we hold about you</li>
              <li>Request corrections to your published story</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{' '}
              <a href="mailto:mumsingeosciences@gmail.com" className="text-[#748c76] hover:underline">
                mumsingeosciences@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#546555] mb-3">Changes to this policy</h2>
            <p>
              We may update this policy occasionally. Any changes will be posted on this page with
              an updated date at the top.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
