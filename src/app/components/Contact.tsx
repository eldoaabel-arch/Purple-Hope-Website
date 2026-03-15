'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-zinc-800 text-white py-24 px-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <h2
            className="text-6xl leading-tight mb-6"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-purple-500 mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Have a question about our campaign or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left — contact info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3
                className="text-2xl mb-4"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                Contact Info
              </h3>
              <div className="w-10 h-1 bg-purple-500 mb-6" />
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                We are a group of five high school students from London, Ontario. Reach out to us anytime — we typically respond within 24 hours.
              </p>
              
                <a href="mailto:purplehope.ca@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition text-sm"
              >
                purplehope.ca@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div>
              <h3
                className="text-2xl mb-4"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                Follow Us
              </h3>
              <div className="w-10 h-1 bg-purple-500 mb-6" />
              <div className="flex gap-6 text-white">
                <a href="https://instagram.com/purplehope.ca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-400 transition">
                  <FaInstagram size={22} />
                  <span className="text-sm">@purplehope.ca</span>
                </a>
                <a href="https://tiktok.com/@purplehope.ca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-400 transition">
                  <FaTiktok size={22} />
                  <span className="text-sm">@purplehope.ca</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <h3
              className="text-2xl mb-4"
              style={{ fontFamily: 'var(--font-bebas)' }}
            >
              Send Us a Message
            </h3>
            <div className="w-10 h-1 bg-purple-500 mb-6" />
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-zinc-900 text-white px-4 py-3 rounded-lg text-sm outline-none border border-zinc-700 focus:border-purple-500 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-zinc-900 text-white px-4 py-3 rounded-lg text-sm outline-none border border-zinc-700 focus:border-purple-500 transition"
              />
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="bg-zinc-900 text-white px-4 py-3 rounded-lg text-sm outline-none border border-zinc-700 focus:border-purple-500 transition resize-none"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-gradient-to-r from-purple-600 to-blue-400 hover:opacity-90 text-white px-8 py-4 text-lg font-bold uppercase rounded-full tracking-wide transition disabled:opacity-50 cursor-pointer"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}