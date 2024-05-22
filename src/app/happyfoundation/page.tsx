import Contact from '@/components/happyfoundation/Contact';
import Hero from '@/components/happyfoundation/Hero';
import Mission from '@/components/happyfoundation/Mission';
import Story from '@/components/happyfoundation/Story';
import Footer from '@/components/marginals/happyfoundation/Footer';
import Navbar from '@/components/marginals/happyfoundation/Navbar';
import React from 'react';

type Props = {};

const happyfoundation = (props: Props) => {
  return (
    <main className="relative w-full bg-white">
      <div className="w-full bg-bodybg">
        <Navbar />
        <Hero />
        <Story />
        <Mission />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default happyfoundation;
