import { FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const DONATE_URL = 'https://give.wellspring.ca/purple-hope';

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="md:col-span-1">
          <img
            src="/images/logo.png"
            alt="Purple Hope"
            style={{ height: '200px', width: 'auto', objectFit: 'contain', transform: 'scaleX(1.15)', marginBottom: '0.75rem' }}
          />
          <p className="text-gray-400 text-sm mt-3 max-w-xs">
            A student-led fundraising campaign supporting pancreatic cancer patients and families in partnership with Wellspring Cancer Support London.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 md:contents">

          <div>
            <h4 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-4">About</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-purple-400 transition">Our Campaign</a></li>
              <li><a href="#research" className="hover:text-purple-400 transition">Why Pancreatic Cancer</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition">Meet The Team</a></li>
              <li><a href="#mission" className="hover:text-purple-400 transition">Our Goal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-4">Get Involved</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={DONATE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                  Donate Now
                </a>
              </li>
              <li><a href="#contact" className="hover:text-purple-400 transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="https://wellspringlondon.ca" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Wellspring Cancer Support London</a></li>
              <li><a href="#research" className="hover:text-purple-400 transition">About Pancreatic Cancer</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-gray-800" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">© 2026 Purple Hope. All rights reserved.</p>
        <div className="flex items-center gap-5 text-gray-400">
          <a href="https://instagram.com/purplehope.ca" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaInstagram size={20} /></a>
          <a href="https://tiktok.com/@purplehope.ca" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaTiktok size={20} /></a>
          <a href="mailto:purplehope.ca@gmail.com" className="hover:text-white transition"><SiGmail size={20} /></a>
        </div>
      </div>

    </footer>
  );
}