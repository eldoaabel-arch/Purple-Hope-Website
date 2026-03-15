'use client';

import { useState } from 'react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-900 via-purple-600 to-blue-400">

      {/* Main bar */}
      <div className="px-6 md:px-10 py-4 flex items-center justify-between">
        <span
          className="text-white text-xl md:text-2xl font-semibold leading-tight"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          Purple Hope <br /> Campaign
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-white font-semibold tracking-wide">
          <a href="#about" className="hover:opacity-75">ABOUT</a>
          <a href="#research" className="hover:opacity-75">RESEARCH</a>
          <a href="#mission" className="hover:opacity-75">OUR MISSION</a>
          <a href="#contact" className="hover:opacity-75">CONTACT</a>
        </div>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-white">
            <a href="https://tiktok.com/@purplehope.ca" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
              <FaTiktok size={20} />
            </a>
            <a href="https://instagram.com/purplehope.ca" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
              <FaInstagram size={20} />
            </a>
            <a href="mailto:purplehope.ca@gmail.com" className="hover:opacity-75 transition">
              <SiGmail size={20} />
            </a>
          </div>
          
            <a href="https://fundraisemyway.cancer.ca/teams/10421/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-purple-900 transition px-6 py-2 rounded-full font-bold tracking-wide cursor-pointer"
          >
            DONATE NOW
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-purple-900 px-6 py-6 flex flex-col gap-5">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-white font-semibold tracking-wide hover:opacity-75">ABOUT</a>
          <a href="#research" onClick={() => setMenuOpen(false)} className="text-white font-semibold tracking-wide hover:opacity-75">RESEARCH</a>
          <a href="#mission" onClick={() => setMenuOpen(false)} className="text-white font-semibold tracking-wide hover:opacity-75">OUR MISSION</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white font-semibold tracking-wide hover:opacity-75">CONTACT</a>

          <div className="flex items-center gap-4 text-white pt-2">
            <a href="https://tiktok.com/@purplehope.ca" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
              <FaTiktok size={20} />
            </a>
            <a href="https://instagram.com/purplehope.ca" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
              <FaInstagram size={20} />
            </a>
            <a href="mailto:purplehope.ca@gmail.com" className="hover:opacity-75 transition">
              <SiGmail size={20} />
            </a>
          </div>

          
            <a href="https://fundraisemyway.cancer.ca/teams/10421/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white text-center py-2 rounded-full font-bold tracking-wide cursor-pointer hover:bg-white hover:text-purple-900 transition"
          >
            DONATE NOW
          </a>
        </div>
      )}

    </nav>
  );
}