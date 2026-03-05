import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { testimonies } from '@/lib/testimonies';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight } from 'lucide-react';

export function Testimonies() {
  return (
    <section id="testimonies" className="py-16 md:py-24 px-4 bg-[#f4f0eb] animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4f3c40] mb-12">
          Testimonies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonies.map((t) => (
            <Link key={t.slug} href={`/testimonies/${t.slug}`}>
              <Card className="h-full border-[#e7dfd6] hover:border-[#748c76] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group bg-white">
                <CardHeader className="flex flex-row items-start gap-4 pb-3">
                  <Avatar className="h-14 w-14 flex-shrink-0">
                    {t.image ? (
                      <AvatarImage src={t.image} alt={t.name} />
                    ) : null}
                    <AvatarFallback className="bg-[#748c76] text-white font-semibold text-lg">
                      {t.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#4f3c40] text-lg leading-tight">{t.name}</h3>
                    <Badge
                      variant="secondary"
                      className="mt-1 bg-[#e7dfd6] text-[#546555] hover:bg-[#e7dfd6] text-xs font-normal"
                    >
                      {t.family}
                    </Badge>
                    <p className="text-xs text-[#6b6b6b] mt-1">{t.role}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#3a3a3a] leading-relaxed line-clamp-4">
                    {t.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#748c76] text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Read story <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
