import Contact from '@/components/happyfoundation/Contact';
import Hero from '@/components/happyfoundation/Hero';
import Mission from '@/components/happyfoundation/Mission';
import Story from '@/components/happyfoundation/Story';
import Footer from '@/components/marginals/happyfoundation/Footer';
import Navbar from '@/components/marginals/happyfoundation/Navbar';
import { Metadata } from 'next';
import React from 'react';

type Props = {};

export const metadata: Metadata = {
  title: 'Happy Foundation',
  description:
    'To empower and improve the quality of life for the children with ependymoma cancer.',
};

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
