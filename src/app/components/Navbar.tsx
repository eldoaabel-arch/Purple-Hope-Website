import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-900 via-purple-600 to-blue-400 px-10 py-4 flex items-center justify-between">
      <span
        className="text-white text-2xl font-semibold leading-tight"
        style={{ fontFamily: 'var(--font-cormorant)' }}
      >
        Purple Hope <br /> Campaign
      </span>

      <div className="flex gap-8 text-white font-semibold tracking-wide">
        <a href="#about" className="hover:opacity-75">ABOUT</a>
        <a href="#research" className="hover:opacity-75">RESEARCH</a>
        <a href="#mission" className="hover:opacity-75">OUR MISSION</a>
        <a href="#contact" className="hover:opacity-75">CONTACT</a>
      </div>

      <div className="flex items-center gap-6">
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
    </nav>
  );
}