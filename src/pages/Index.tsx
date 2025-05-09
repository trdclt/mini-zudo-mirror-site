
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutBrand from '@/components/AboutBrand';
import SpecialOffer from '@/components/SpecialOffer';
import HowItWorks from '@/components/HowItWorks';
import CreateMini from '@/components/CreateMini';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Scroll to top when the component mounts (page loads/refreshes)
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <AboutBrand />
        <SpecialOffer />
        <HowItWorks />
        <CreateMini />
        <Gallery />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
