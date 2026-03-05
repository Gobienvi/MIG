import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Quote } from 'lucide-react';
import { Testimony } from '@/lib/testimonies';

interface ProfileLayoutProps {
  testimony: Testimony;
}

export function ProfileLayout({ testimony }: ProfileLayoutProps) {
  return (
    <main className="bg-[#faf8f6] min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/#testimonies"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#4f3c40] hover:text-[#748c76] mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Testimonies
        </Link>

        {/* Profile header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
          <Avatar className="h-28 w-28 flex-shrink-0 shadow-md">
            {testimony.image ? (
              <AvatarImage src={testimony.image} alt={`Photo of ${testimony.name}`} />
            ) : null}
            <AvatarFallback className="bg-[#748c76] text-white text-4xl font-bold">
              {testimony.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold text-[#4f3c40]">{testimony.name}</h1>
            <Badge className="mt-2 bg-[#e7dfd6] text-[#546555] hover:bg-[#e7dfd6] font-normal">
              {testimony.family}
            </Badge>
            <p className="text-sm text-[#6b6b6b] mt-2">{testimony.role}</p>
          </div>
        </div>

        <Separator className="mb-8 bg-[#e7dfd6]" />

        {/* Story */}
        <article className="prose prose-lg max-w-none text-[#1a1a1a] leading-relaxed space-y-5">
          {testimony.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>

        {/* Advice */}
        {testimony.advice && (
          <Card className="mt-10 border-l-4 border-l-[#748c76] border-[#e7dfd6] bg-white shadow-sm">
            <CardContent className="pt-6 pb-5 flex gap-4">
              <Quote className="h-6 w-6 text-[#748c76] flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold text-[#748c76] mb-2 uppercase tracking-wide">
                  Advice for other mums
                </p>
                <p className="text-[#1a1a1a] leading-relaxed italic">{testimony.advice}</p>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-10">
          <Link
            href="/#testimonies"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#4f3c40] hover:text-[#748c76] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Testimonies
          </Link>
        </div>
      </div>
    </main>
  );
}
