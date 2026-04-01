'use client';

import { useState } from 'react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        background: 'linear-gradient(to right, rgba(88, 28, 135, 0.75), rgba(147, 51, 234, 0.75), rgba(96, 165, 250, 0.75))',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'stretch',
      }}>
        <div style={{ padding: '0.6rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>

          {/* Logo */}
          <span style={{ fontFamily: 'var(--font-cormorant)', color: 'white', fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.2, flexShrink: 0 }}>
            Purple Hope <br /> Campaign
          </span>

          {/* Desktop nav */}
          <div className="desktop-only" style={{ gap: '2rem', fontWeight: 600, letterSpacing: '0.05em' }}>
            <a href="#about" style={{ color: 'white', textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >ABOUT</a>
            <a href="#research" style={{ color: 'white', textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >RESEARCH</a>
            <a href="#mission" style={{ color: 'white', textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >OUR MISSION</a>
            <a href="#contact" style={{ color: 'white', textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >CONTACT</a>
          </div>

          {/* Desktop socials */}
          <div className="desktop-only" style={{ gap: '1rem' }}>
            <a href="https://tiktok.com/@purplehope.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <FaTiktok size={20} />
            </a>
            <a href="https://instagram.com/purplehope.ca" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <FaInstagram size={20} />
            </a>
            <a href="mailto:purplehope.ca@gmail.com" style={{ color: 'white', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <SiGmail size={20} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 0, flexShrink: 0, fontSize: '1.75rem', lineHeight: 1 }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Donate button */}
        
          <a href="https://fundraisemyway.cancer.ca/teams/10421/donate"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'rgba(255,255,255,0.15)',
            color: 'white',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '0.85rem',
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 1.25rem',
            borderLeft: '1px solid rgba(255,255,255,0.3)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        >
          GIVE TODAY
        </a>
      </nav>

      {/* Mobile dropdown — smooth slide animation */}
      <div style={{
        position: 'fixed',
        top: '53px',
        left: 0,
        width: '100%',
        zIndex: 49,
        background: 'linear-gradient(to right, rgba(88, 28, 135, 0.9), rgba(147, 51, 234, 0.9), rgba(96, 165, 250, 0.9))',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        maxHeight: menuOpen ? '500px' : '0px',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
      }}>
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
      </div>
    </>
  );
}