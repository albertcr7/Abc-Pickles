import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeatureBar from '../components/home/FeatureBar';
import OurPickleCollection from '../components/OurPickleCollection/OurPickleCollection';
import ProductsGrid from '../components/home/ProductsGrid';
import BannerSection from '../components/home/BannerSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AboutPreview from '../components/home/AboutPreview';
import ReviewSlider from '../components/home/ReviewSlider';
import InstagramGallery from '../components/home/InstagramGallery';
import CTASection from '../components/home/CTASection';

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeatureBar />
      <ProductsGrid />
      <OurPickleCollection />
      <BannerSection />
      <WhyChooseUs />
      <AboutPreview />
      <ReviewSlider />
      <InstagramGallery />
      <CTASection />
    </main>
  );
};

export default Home;
