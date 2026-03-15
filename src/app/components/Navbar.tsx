'use client';

import { useState } from 'react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 50,
      background: 'linear-gradient(to right, #581c87, #9333ea, #60a5fa)'
    }}>
      <div style={{ padding: '0.6rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Mobile left — hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 0, flexShrink: 0, fontSize: '1.75rem', lineHeight: 1 }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Logo */}
        <span style={{ fontFamily: 'var(--font-cormorant)', color: 'white', fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.2, flexShrink: 0 }}
          className="hamburger-btn"
        >
          Purple Hope <br /> Campaign
        </span>

        {/* Desktop logo — only on desktop */}
        <span style={{ fontFamily: 'var(--font-cormorant)', color: 'white', fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.2, flexShrink: 0 }}
          className="desktop-only"
        >
          Purple Hope <br /> Campaign
        </span>

        {/* Desktop nav */}
        <div className="desktop-only" style={{ gap: '2rem', fontWeight: 600, letterSpacing: '0.05em' }}>
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>ABOUT</a>
          <a href="#research" style={{ color: 'white', textDecoration: 'none' }}>RESEARCH</a>
          <a href="#mission" style={{ color: 'white', textDecoration: 'none' }}>OUR MISSION</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>CONTACT</a>
        </div>

        {/* Right side — donate + socials on desktop, just donate on mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="desktop-only" style={{ gap: '1rem' }}>
            <a href="https://tiktok.com/@purplehope.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <FaTiktok size={20} />
            </a>
            <a href="https://instagram.com/purplehope.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <FaInstagram size={20} />
            </a>
            <a href="mailto:purplehope.ca@gmail.com" style={{ color: 'white' }}>
              <SiGmail size={20} />
            </a>
          </div>
          
            <a href="https://fundraisemyway.cancer.ca/teams/10421/donate"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border: '2px solid white', color: 'white', padding: '0.4rem 1rem', borderRadius: '9999px', fontWeight: 700, textDecoration: 'none', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
          >
            DONATE NOW
          </a>
        </div>
      </div>

      {/* Dropdown */}
      {menuOpen && (
        <div style={{ background: 'linear-gradient(to right, #581c87, #9333ea, #60a5fa)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <a href="#about" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>ABOUT</a>
          <a href="#research" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>RESEARCH</a>
          <a href="#mission" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>OUR MISSION</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>CONTACT</a>
          <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
            <a href="https://tiktok.com/@purplehope.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <FaTiktok size={20} />
            </a>
            <a href="https://instagram.com/purplehope.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
              <FaInstagram size={20} />
            </a>
            <a href="mailto:purplehope.ca@gmail.com" style={{ color: 'white' }}>
              <SiGmail size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}