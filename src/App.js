import React from 'react';
import HeroSection from './pages/HeroSection'; // Adjust the path based on your folder structure
import './App.css'; // Optional: Add global styles if needed
import AboutSection from './pages/AboutSection';
import ServiceSection from './pages/ServiceSection';
import GallerySection from './pages/GallerySection';
import Slideshow from './pages/SlideShow';
import Collage from './pages/Collage';
import FramesSection from './pages/FrameSection';
import Instagram from './pages/Instagram';
import Birthday from './pages/Birthday';
import BirthdaySection from './pages/BirthdaySection';
import CorporateEvents from './pages/CorporateEvents';
import Event1 from './pages/Event1'
import Event2 from './pages/Event2';
import Event3 from './pages/Event3'
import Event4 from './pages/Event4';
import Event5 from './pages/Event5';
import PrenupRates from './pages/Pricing';
import PricingWed from './pages/PricingWed';
import PricingMore from './pages/PricingMore'
import PricingCorpo from './pages/PricingCorpo';
import Outro from './pages/Outro';
import Faqs from './pages/Faqs';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <GallerySection/>
      <Slideshow/>
      <Collage/>
      <FramesSection/>
      <Instagram />
      <BirthdaySection/>
      <Birthday/>
      <CorporateEvents/>
      <Event1/>
      <Event2/>
      <Event3/>
      <Event4/>
      <Event5/>
      <PrenupRates/>
      <PricingWed/>
      <PricingMore/>
      <PricingCorpo/>
      <Outro/>
      <Faqs/>
    </div>
  );
}

export default App;
