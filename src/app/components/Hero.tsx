'use client';

import React, { useState, useEffect, useRef } from 'react';

const videos = [
  '/videos/ribbon.mp4',
  '/videos/community.mp4',
  '/videos/lab.mp4',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleEnded = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isVisible) {
      videoRef.current.play().catch(() => {});
      setVideoReady(true);
    } else {
      videoRef.current.pause();
    }
  }, [isVisible]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[current];
      videoRef.current.load();
      if (isVisible) {
        videoRef.current.play().catch(() => {});
        setVideoReady(true);
      }
    }
  }, [current]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[60vh] md:h-screen w-full overflow-hidden"
    >
      {/* Fallback image — always shown */}
      <img
        src="/images/fallback.jpg"
        alt="Purple Hope"
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      />

      {/* Video — only rendered when ready */}
      {videoReady && (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 pointer-events-none"
          loop={false}
          muted
          playsInline
          controls={false}
          onEnded={handleEnded}
        >
          <source src={videos[0]} type="video/mp4" />
        </video>
      )}

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