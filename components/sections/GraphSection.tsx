import Image from 'next/image';

export function GraphSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#f4f0eb]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4f3c40] mb-10">
          Testimonies Graph
        </h2>
        <div className="flex justify-center">
          <Image
            src="/images/graph2.png"
            alt="Graph showing survey responses from mums in geosciences"
            width={900}
            height={600}
            className="w-full max-w-3xl rounded-xl shadow-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
