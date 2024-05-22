import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Contributions from '@/components/home/Contributions';
import Gallery from '@/components/home/Gallery';
import Hero from '@/components/home/Hero';
import News from '@/components/home/News';
import Playtrix from '@/components/home/Playtrix';
import Footer from '@/components/marginals/Footer';
import Navbar from '@/components/marginals/Navbar';
import Socials from '@/components/marginals/Socials';

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <Hero />
      <About />
      <Contributions />
      <Playtrix />
      <Gallery />
      <News />
      <Contact />
      <Footer />
      <Socials />
    </main>
  );
}
