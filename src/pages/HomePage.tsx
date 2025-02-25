import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutSection from '../components/About/AboutSection.tsx';
import ExperienceSection from '../components/Experience/ExperienceSection.tsx';
import HeroSection from '../components/herosection/HeroSection.tsx';
// import MarqueeSection from '../components/Marquee/MarqueeSection.tsx';
import Velocity from '../components/Velocity/Velocity.tsx';
import { useEffect } from 'react';
import ContactSection from '../components/Contact/ContactSection.tsx';
export default function HomePage() {
  useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div>
        <HeroSection />
        <Velocity />
        <AboutSection />
        <ExperienceSection />
        <ContactSection/> 
    </div>
  )
}