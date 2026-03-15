'use client';

import { useEffect, useRef, useState } from 'react';

const graphs = [
  '1444770916',
  '347038184',
  '741296072',
  '681385519',
  '1886455665',
  '377945879',
  '1004751843',
];

const baseUrl =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTR4qHsJIaKTPi_Mbn578flNsTlro-uKDkSQ5mmc57fky-4GWnAogyY3v6rVbBoU-aTnV5xsY9ksa26/pubchart';

const CHART_W = 600;
const CHART_H = 371;

function ScaledChart({ src, title }: { src: string; title: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function update() {
      if (wrapperRef.current) {
        setScale(wrapperRef.current.offsetWidth / CHART_W);
      }
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full rounded-xl shadow-md overflow-hidden"
      style={{ height: CHART_H * scale }}
    >
      <iframe
        width={CHART_W}
        height={CHART_H}
        src={src}
        title={title}
        style={{
          border: 0,
          display: 'block',
          transformOrigin: 'top left',
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
}

export function GraphSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#f4f0eb]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4f3c40] mb-10">
          Testimonies Graph
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {graphs.map((oid, i) => (
            <ScaledChart
              key={oid}
              src={`${baseUrl}?oid=${oid}&format=interactive`}
              title={`Graph ${i + 1}`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-[#748c76] mt-8">
          Charts are automatically updated with the latest survey data. Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>
    </section>
  );
}
