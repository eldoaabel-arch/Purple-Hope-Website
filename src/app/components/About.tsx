'use client';

import { useState, useEffect, useRef } from 'react';

export default function About() {
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
    <section id="about" className="bg-zinc-900 text-white py-24 px-10">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>

        <div className="mb-16">
          <h2 style={{ fontFamily: 'var(--font-bebas)', ...fadeUp(0) }} className="text-6xl leading-tight mb-6">
            We Are Purple Hope.
          </h2>
          <div style={fadeUp(0.1)} className="w-16 h-1 bg-purple-500 mb-6" />
          <p style={fadeUp(0.2)} className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            We are five high school students from London, Ontario, united by loss, purpose, and the belief that no family should go through what ours did. When one of our own lost his aunt to pancreatic cancer, we knew we had to do something. Purple Hope is our answer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div style={fadeUp(0.2)}>
            <h3 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>Our Story</h3>
            <div className="w-10 h-1 bg-purple-500 mb-4" />
            <p className="text-gray-300 leading-relaxed mb-4">
              Pancreatic cancer is one of the deadliest and most underfunded cancers in Canada. It took someone we loved. It has taken too many others. We refuse to stand by and do nothing.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              As students in high school, we partnered with the Canadian Cancer Society to launch Purple Hope — a fundraising campaign dedicated to funding pancreatic cancer research. Every dollar raised goes directly to the Canadian Cancer Society's research programs.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We may be young, but we know that change starts somewhere. This is where ours starts.
            </p>
          </div>

          <div style={fadeUp(0.3)} className="flex flex-col justify-center gap-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <p className="text-6xl font-black text-white">88%</p>
              <p className="text-gray-400 mt-1">of pancreatic cancer patients do not survive past 5 years</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <p className="text-6xl font-black text-white">#1</p>
              <p className="text-gray-400 mt-1">most lethal major cancer — the lowest survival rate of any common cancer</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <p className="text-6xl font-black text-white">$1,000</p>
              <p className="text-gray-400 mt-1">our fundraising goal — every dollar goes directly to the Canadian Cancer Society</p>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ fontFamily: 'var(--font-bebas)', ...fadeUp(0.2) }} className="text-4xl mb-4">Meet The Team</h3>
          <div style={fadeUp(0.3)} className="w-10 h-1 bg-purple-500 mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Ajil', role: 'Campaign Coordinator', photo: '/images/team/ajil.png' },
              { name: 'Aabel', role: 'Web Developer & Campaign Registrar', photo: '/images/team/aabel.png' },
              { name: 'Zac', role: 'Digital Marketing & Social Media', photo: '/images/placeholder.jpg' },
              { name: 'Noel', role: 'Graphic Designer & Branding', photo: '/images/team/noel.png' },
              { name: 'Kevin', role: 'Accounting & Bookkeeping', photo: '/images/team/kevin.png' },
            ].map(({ name, role, photo }, i) => (
              <div key={name} style={fadeUp(0.1 * i)} className="flex flex-col items-center text-center">
                <img src={photo} alt={name} className="w-28 h-28 rounded-full object-cover mb-4" />
                <p className="text-white font-semibold text-lg">{name}</p>
                <p className="text-gray-500 text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}