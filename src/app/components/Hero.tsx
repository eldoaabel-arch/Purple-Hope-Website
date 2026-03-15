'use client';

import React, { useState } from 'react';

const videos = [
  '/videos/ribbon.mp4',
  '/videos/community.mp4',
  '/videos/lab.mp4',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const handleEnded = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        key={current}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 pointer-events-none"
        autoPlay
        loop={false}
        muted
        playsInline
        onEnded={handleEnded}
      >
        <source src={videos[current]} type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col justify-end h-full text-white px-6 md:px-10 pb-16">
        <h1
          style={{ fontFamily: 'var(--font-bebas)', lineHeight: 1, textTransform: 'uppercase', letterSpacing: '-0.02em' }}
          className="drop-shadow-lg text-[5rem] md:text-[12rem]"
        >
          LIGHT THE WAY.
        </h1>
        <p className="text-lg md:text-2xl font-bold uppercase mb-6 max-w-lg tracking-wide">
          Pancreatic cancer can't wait. Neither can we.
        </p>
        <div className="flex gap-4 flex-wrap">
          
            <a href="https://fundraisemyway.cancer.ca/teams/10421/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-blue-400 hover:opacity-90 text-white px-8 py-4 text-lg font-bold uppercase rounded-full tracking-wide cursor-pointer"
          >
            Donate
          </a>
          
            <a href="#mission"
            className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg font-bold uppercase rounded-full tracking-wide cursor-pointer"
          >
            Our Mission
          </a>
        </div>
      </div>
    </section>
  );
}