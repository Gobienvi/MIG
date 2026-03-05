import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mumsingeosciences.com'),
  title: {
    default: 'Mums in Geosciences: Support & Stories for Working Mothers in Geology',
    template: '%s | Mums in Geosciences',
  },
  description:
    'Join the community for Mums in Geosciences. Read honest stories, share advice, and find support for balancing your career in geology, fieldwork, and parenthood.',
  openGraph: {
    siteName: 'Mums in Geosciences',
    type: 'website',
    url: 'https://www.mumsingeosciences.com',
    images: [{ url: '/images/mumlogo.png', alt: 'Mums in Geosciences logo' }],
  },
  twitter: {
    card: 'summary',
    images: ['/images/mumlogo.png'],
  },
  icons: {
    icon: '/images/mumlogo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-[family-name:var(--font-montserrat)] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
