import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { testimonies, getTestimony } from '@/lib/testimonies';
import { ProfileLayout } from '@/components/testimony/ProfileLayout';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return testimonies.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const testimony = getTestimony(slug);
  if (!testimony) return {};

  return {
    title: `${testimony.name}'s Story`,
    description: `Read ${testimony.name}'s personal story of balancing a geoscience career with motherhood.`,
    alternates: { canonical: `https://www.mumsingeosciences.com/testimonies/${slug}` },
    openGraph: {
      title: `${testimony.name}'s Story | Mums in Geosciences`,
      description: `Read ${testimony.name}'s personal story of balancing a geoscience career with motherhood.`,
      type: 'article',
      url: `https://www.mumsingeosciences.com/testimonies/${slug}`,
      images: [{ url: '/images/mumlogo.png', alt: 'Mums in Geosciences logo' }],
    },
    twitter: {
      card: 'summary',
      title: `${testimony.name}'s Story | Mums in Geosciences`,
      description: `Read ${testimony.name}'s personal story of balancing a geoscience career with motherhood.`,
    },
  };
}

export default async function TestimonyPage({ params }: Props) {
  const { slug } = await params;
  const testimony = getTestimony(slug);
  if (!testimony) notFound();

  return <ProfileLayout testimony={testimony} />;
}
