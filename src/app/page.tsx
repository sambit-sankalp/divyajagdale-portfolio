import About from '@/components/home/About';
import Contributions from '@/components/home/Contributions';
import Hero from '@/components/home/Hero';
import Playtrix from '@/components/home/Playtrix';
import Navbar from '@/components/marginals/Navbar';
import Socials from '@/components/marginals/Socials';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Contributions />
      <Playtrix />
      <Socials />
    </main>
  );
}
