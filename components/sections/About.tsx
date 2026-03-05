import { Card, CardContent } from '@/components/ui/card';

const forWhom = [
  'Geoscientists <strong>planning to become parents</strong> and seeking honest perspectives on what to expect.',
  'Geoscientists <strong>with young children</strong> who are balancing career aspirations with family life.',
  '<strong>Experienced professionals</strong> whose children are older and who wish to reflect on and share their journey.',
  'Mums who <strong>left the profession</strong>, to share the reasons they left and what paths they pursued next.',
  '<strong>Dads in geosciences</strong> who feel that parenting has significantly impacted their career and want to share their experiences.',
];

const aims = [
  { emoji: '💬', text: '<strong>Share testimonies</strong> from mothers working, or who have worked, in geoscience.' },
  { emoji: '🌟', text: '<strong>Celebrate</strong> the contributions of mothers in geoscience.' },
  { emoji: '🤝', text: '<strong>Encourage connection</strong> and solidarity through storytelling.' },
  { emoji: '💡', text: '<strong>Provide insights</strong> to others who are planning for, or navigating, parenthood.' },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4f3c40] mb-12">
          Welcome to Mums in Geosciences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          {/* For whom */}
          <div>
            <h3 className="text-xl font-semibold text-[#546555] mb-4">This Project Is For</h3>
            <ul className="space-y-3">
              {forWhom.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#1a1a1a]">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#748c76] flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Why */}
          <div>
            <h3 className="text-xl font-semibold text-[#546555] mb-4">Why this Project?</h3>
            <div className="space-y-4 text-[#1a1a1a] leading-relaxed">
              <p>
                Being a mum, or planning to become one, while working in a{' '}
                <strong>field-intensive profession</strong> like geoscience can feel daunting. Many
                of us face these challenges in isolation, with little visibility or open discussion
                about the impact on our careers and lives.
              </p>
              <p>
                At Mums in Geosciences, we believe that we can find{' '}
                <strong>comfort and strength</strong> in each other&apos;s stories.
              </p>
              <p>
                This project aims to create a supportive, visible, and empowering platform that
                highlights the voices and experiences of mothers in geoscience—so we can feel seen,
                heard, and connected.
              </p>
              <p className="font-semibold text-[#748c76] italic text-lg">
                You&apos;re not alone—we&apos;re stronger when we share!
              </p>
            </div>
          </div>
        </div>

        {/* Aims */}
        <div>
          <h3 className="text-xl font-semibold text-[#546555] mb-6 text-center">Our Aims</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aims.map((aim, i) => (
              <Card key={i} className="border-[#e7dfd6] bg-white">
                <CardContent className="flex items-start gap-3 pt-5">
                  <span className="text-2xl">{aim.emoji}</span>
                  <span
                    className="text-[#1a1a1a] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: aim.text }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
