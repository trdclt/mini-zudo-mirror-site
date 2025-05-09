
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowToPlay from '@/components/HowToPlay';
import Prizes from '@/components/Prizes';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowToPlay />
        <Prizes />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
