
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/Home/HeroSection';
import { CardsSection } from '@/components/Home/CardsSection';
import { InteractiveSlider } from '@/components/Home/InteractiveSlider';
import { AboutSection } from '@/components/Home/AboutSection';
import { WhatWeRepresentSection } from '@/components/Home/WhatWeRepresentSection';
import { NumbersSection } from '@/components/Home/NumbersSection';
import { WhyJotecSection } from '@/components/Home/WhyJotecSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <CardsSection />
      <InteractiveSlider />
      <AboutSection />
      <WhatWeRepresentSection />
      <NumbersSection />
      <WhyJotecSection />
      <Footer />
    </div>
  );
};

export default Index;
