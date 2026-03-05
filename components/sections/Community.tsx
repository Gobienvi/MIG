import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, FileText } from 'lucide-react';

const cards = [
  {
    icon: Users,
    title: 'Find a Meetup!',
    description:
      'Join our playgroups and connect with other mums and children in geosciences. (Coming soon)',
    label: 'View Meetups',
    href: '#',
    disabled: true,
  },
  {
    icon: MessageSquare,
    title: 'Join the Community Chat',
    description:
      'Share experiences, ask questions, and support each other through our private WhatsApp chat space. (Coming soon)',
    label: 'Join the Chat Now',
    href: '#',
    disabled: true,
  },
  {
    icon: FileText,
    title: 'Start Sharing Your Story',
    description:
      'Contribute articles or personal experiences to inspire and empower our community.',
    label: 'Submit Your Story',
    href: 'https://forms.gle/HDeLcPXuku3UW5gz9',
    disabled: false,
  },
];

export function Community() {
  return (
    <section id="community" className="py-16 md:py-24 px-4 bg-[#faf8f6]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4f3c40] mb-12">
          Community Hub
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.title}
                className="border-[#e7dfd6] bg-white flex flex-col text-center"
              >
                <CardHeader className="items-center pb-2">
                  <div className="p-3 rounded-full bg-[#e7dfd6] mb-2">
                    <Icon className="h-7 w-7 text-[#748c76]" />
                  </div>
                  <h3 className="font-bold text-[#4f3c40] text-lg">{card.title}</h3>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 justify-between gap-4">
                  <p className="text-[#3a3a3a] text-sm leading-relaxed">{card.description}</p>
                  {card.disabled ? (
                    <Button
                      className="bg-[#4f3c40] text-white opacity-50 cursor-not-allowed"
                      disabled
                    >
                      {card.label}
                    </Button>
                  ) : (
                    <a href={card.href} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-[#4f3c40] hover:bg-[#3d2d30] text-white">
                        {card.label}
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
