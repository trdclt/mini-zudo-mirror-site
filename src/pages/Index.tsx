
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutBrand from '@/components/AboutBrand';
import SpecialOffer from '@/components/SpecialOffer';
import HowItWorks from '@/components/HowItWorks';
import Catalog from '@/components/Catalog';
import CreateMini from '@/components/CreateMini';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <AboutBrand />
        <SpecialOffer />
        <HowItWorks />
        <Catalog />
        <CreateMini />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
