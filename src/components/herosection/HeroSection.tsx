
import Profil from "../../assets/profil.jpeg";
import TiltedCard from "../../blocks/Components/TiltedCard/TiltedCard";
import FuzzyText from "../../blocks/TextAnimations/FuzzyText/FuzzyText";
import { Download, Github, Instagram, Linkedin, Mail, MoveRight } from "lucide-react";
import { Particles } from "../magicui/particles";


const HeroSection = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Particles sebagai background */}
      <div className="absolute inset-0 z-0">
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={80}
        refresh
      />
      </div>

      {/* Hero Section */}
      <div className="w-full h-screen flex flex-col justify-center items-center text-white z-50 bg-black">
        <TiltedCard
          imageSrc={Profil}
          altText="Dimas Asna Nugraha"
          captionText="@dimasasna"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="200px"
          imageWidth="200px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="border py-2 px-4 border-none rounded-2xl ml-4 mt-4 text-sm font-bold bg-zinc-600">
              @dimasasna
            </p>
          }
        />
        
        <div data-aos="fade-right" className="text-sm z-50">
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover={true}
          >
            Dimas Asna Nugraha
          </FuzzyText>
        </div>
        <div data-aos="fade-left" className="my-4 text-lg font-medium text-center z-50">
          <span className="font-extrabold italic">1 years experience</span> in
          fullstack development, using{" "}
          <span className="font-extrabold italic">
            Laravel, React
            <br /> and NextJS
          </span>{" "}
          for developing a website and web application.
        </div>
        <div data-aos="fade-up" className="mt-4 flex flex-row gap-5 z-50">
          <a
            href="google.com"
            className="py-2 px-4 bg-white text-black font-bold rounded-2xl cursor-pointer flex gap-2 hover:bg-black hover:border hover:text-white"
          >
            Contact me here <MoveRight />
          </a>
          <a className="py-2 px-4 border font-bold border-white rounded-2xl cursor-pointer flex gap-2 items-center hover:bg-white hover:text-black">
            Download CV <Download size={20} />
          </a>
        </div>
        <div className="z-50 mt-8 flex flex-row gap-4">
          <a
            href="https://linkedin.com/in/dimasasna"
            target="_blank"
            className="border border-white py-2 px-4 rounded-full hover:bg-white hover:text-black"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://linkedin.com/in/dimasasna"
            target="_blank"
            className="border border-white py-2 px-4 rounded-full hover:bg-white hover:text-black"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://linkedin.com/in/dimasasna"
            target="_blank"
            className="border border-white py-2 px-4 rounded-full hover:bg-white hover:text-black"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://linkedin.com/in/dimasasna"
            target="_blank"
            className="border border-white py-2 px-4 rounded-full hover:bg-white hover:text-black"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


