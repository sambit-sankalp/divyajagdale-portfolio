import Hero from '@/components/happyfoundation/Hero';
import Story from '@/components/happyfoundation/Story';
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
      </div>
    </main>
  );
};

export default happyfoundation;
