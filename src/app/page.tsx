import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Mission from './components/Mission';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
}