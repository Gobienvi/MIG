import { Card, CardContent } from '@/components/ui/card';
import { testimonies } from '@/lib/testimonies';
import { Quote } from 'lucide-react';

export function Advice() {
  const advices = testimonies
    .filter((t) => t.advice)
    .map((t) => ({ text: t.advice!, name: t.name }));

  return (
    <section className="py-16 md:py-24 px-4 bg-[#faf8f6]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4f3c40] mb-12">
          Advice from Mums
        </h2>
        <div className="space-y-6">
          {advices.map((advice, i) => (
            <Card
              key={i}
              className="border-l-4 border-l-[#748c76] border-[#e7dfd6] bg-white shadow-sm"
            >
              <CardContent className="pt-6 pb-5 flex gap-4">
                <Quote className="h-6 w-6 text-[#748c76] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#1a1a1a] leading-relaxed italic mb-3">{advice.text}</p>
                  <p className="text-sm font-semibold text-[#546555]">— {advice.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
