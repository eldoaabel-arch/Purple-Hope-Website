'use client';

import { useState, useEffect, useRef } from 'react';

export default function Research() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section id="research" className="bg-zinc-800 text-white py-24 px-6 md:px-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>

        <div className="mb-16">
          <h2 style={{ fontFamily: 'var(--font-bebas)', ...fadeUp(0) }} className="text-4xl md:text-6xl leading-tight mb-6">
            Why Pancreatic Cancer?
          </h2>
          <div style={fadeUp(0.1)} className="w-16 h-1 bg-purple-500 mb-6" />
          <p style={fadeUp(0.2)} className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Pancreatic cancer is one of the most devastating diagnoses a person can receive. Yet it remains one of the least talked about and least funded cancers in Canada. Here is why that needs to change.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { stat: '11%', desc: '5-year survival rate — one of the lowest of any cancer' },
            { stat: '7,100+', desc: 'Canadians diagnosed with pancreatic cancer every year' },
            { stat: '80%', desc: 'of cases are diagnosed at a late stage when treatment is least effective' },
            { stat: '#4', desc: 'leading cause of cancer death in Canada despite relatively lower incidence' },
          ].map(({ stat, desc }, i) => (
            <div key={stat} style={fadeUp(0.1 * i)} className="bg-zinc-900 p-4 md:p-8 rounded-lg">
              <p className="text-4xl md:text-5xl font-black text-purple-400 mb-2">{stat}</p>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {[
            { title: 'The Detection Problem', body: 'The pancreas is located deep within the abdomen, making tumours nearly impossible to detect early. There is currently no standard screening test for pancreatic cancer. Most patients have no symptoms until the cancer has already spread, which is why so many cases are caught too late for surgery or curative treatment.' },
            { title: 'The Funding Gap', body: 'Despite being the fourth leading cause of cancer death in Canada, pancreatic cancer receives a disproportionately small share of cancer research funding compared to cancers like breast or prostate cancer. This means fewer clinical trials, fewer treatment breakthroughs, and fewer options for patients and their families.' },
            { title: 'How Your Donation Helps', body: "Every dollar raised through Purple Hope goes directly to the Canadian Cancer Society, one of Canada's most trusted and transparent charitable organizations. Your donation funds research into earlier detection methods, new treatments, and improved care for patients and families affected by pancreatic cancer across Canada." },
          ].map(({ title, body }, i) => (
            <div key={title} style={fadeUp(0.15 * i)}>
              <h3 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-bebas)' }}>{title}</h3>
              <div className="w-10 h-1 bg-purple-500 mb-4" />
              <p className="text-gray-300 leading-relaxed text-sm">{body}</p>
            </div>
          ))}
        </div>

        <div style={fadeUp(0.2)} className="bg-zinc-900 rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>Ready to make a difference?</h3>
            <p className="text-gray-400 text-sm">Your donation goes directly to the Canadian Cancer Society's pancreatic cancer research programs.</p>
          </div>
          
            <a href="https://fundraisemyway.cancer.ca/teams/10421/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-blue-400 hover:opacity-90 text-white px-8 py-4 text-lg font-bold uppercase rounded-full tracking-wide whitespace-nowrap cursor-pointer"
          >
            Donate Now
          </a>
        </div>

      </div>
    </section>
  );
}