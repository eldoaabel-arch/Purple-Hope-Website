'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => { if (s) observer.observe(s); });
    return () => observer.disconnect();
  }, []);

  // Move the pill to whichever link is active
  useEffect(() => {
    const activeIndex = NAV_LINKS.findIndex((l) => l.href === activeSection);
    const activeEl = linkRefs.current[activeIndex];
    const navEl = navRef.current;

    if (activeEl && navEl) {
      const navRect = navEl.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      setPillStyle({
        left: elRect.left - navRect.left,
        width: elRect.width,
        opacity: 1,
      });
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-purple-950/90 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          
            <a href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group"
          >
            <img
              src="/images/logo.png"
              alt="Purple Hope"
              className="h-15 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
          </a>

          {/* Desktop links */}
          <nav ref={navRef} className="hidden md:flex items-center gap-1 relative">

            {/* Sliding pill — sits behind all links */}
            <span
              className="absolute top-1/2 -translate-y-1/2 h-9 rounded-full bg-white/10 border border-white/10 pointer-events-none transition-all duration-300 ease-in-out"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
              }}
            />

            {NAV_LINKS.map((link, i) => {
              const isActive = activeSection === link.href;
              return (
                
                  <a key={link.href}
                  href={link.href}
                  ref={(el) => { linkRefs.current[i] = el; }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Social icons */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-white/20">
              <a href="https://tiktok.com/@purplehope.ca" target="_blank" rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200">
                <FaTiktok size={18} />
              </a>
              <a href="https://instagram.com/purplehope.ca" target="_blank" rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200">
                <FaInstagram size={18} />
              </a>
              <a href="mailto:purplehope.ca@gmail.com"
                className="text-white/60 hover:text-white transition-colors duration-200">
                <SiGmail size={18} />
              </a>
            </div>

            {/* CTA */}
            
              <a href="https://fundraisemyway.cancer.ca/teams/10421/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold rounded-full transition-all duration-200 shadow-lg shadow-purple-900/40 hover:scale-105"
            >
              Give Today
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
          >
            <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'}`} />
            <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
            <span className={`block h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6'}`} />
          </button>

        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-purple-950/80 backdrop-blur-xl" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

        <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
          <div className={`mb-8 text-center transition-all duration-500 delay-100 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-white/20 text-xs uppercase tracking-[0.4em] font-semibold">Purple Hope</p>
          </div>

          {NAV_LINKS.map((link, i) => (
            
              <a key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`relative text-5xl font-bold font-serif text-white/80 hover:text-white transition-all duration-500 group ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms' }}
            >
              <span className="absolute -bottom-1 left-0 h-[3px] w-0 bg-purple-500 rounded-full transition-all duration-300 group-hover:w-full" />
              {link.label}
            </a>
          ))}

          <div
            className={`flex items-center gap-5 mt-8 transition-all duration-500 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: menuOpen ? `${150 + NAV_LINKS.length * 70}ms` : '0ms' }}
          >
            <a href="https://tiktok.com/@purplehope.ca" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-200"><FaTiktok size={22} /></a>
            <a href="https://instagram.com/purplehope.ca" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-200"><FaInstagram size={22} /></a>
            <a href="mailto:purplehope.ca@gmail.com" className="text-white/60 hover:text-white transition-colors duration-200"><SiGmail size={22} /></a>
          </div>

          
            <a href="https://fundraisemyway.cancer.ca/teams/10421/donate"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-full shadow-2xl shadow-purple-900/60 transition-all duration-500 hover:scale-105 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: menuOpen ? `${150 + (NAV_LINKS.length + 1) * 70}ms` : '0ms' }}
          >
            Give Today
          </a>
        </nav>
      </div>
    </>
  );
}