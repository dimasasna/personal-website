import AboutSection from '../components/About/AboutSection.tsx';
import EducationSection from '../components/Education/EducationSection.tsx';
import HeroSection from '../components/herosection/HeroSection.tsx';
// import MarqueeSection from '../components/Marquee/MarqueeSection.tsx';
// import ThreadSection from '../components/Threads/ThreadSection.tsx';
import Velocity from '../components/Velocity/Velocity.tsx';

export default function HomePage() {
  return (
    <div>
        <HeroSection />
        <Velocity />
        <AboutSection />
        <EducationSection />
        
    </div>
  )
}