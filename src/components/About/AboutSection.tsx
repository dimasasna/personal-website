// import TrueFocus from "../../blocks/TextAnimations/TrueFocus/TrueFocus";
// import { GithubDark } from "@fdorantesm/react-skill-icons";

import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

const images1 = [
  "https://skillicons.dev/icons?i=html&theme=dark&perline=15",
  "https://skillicons.dev/icons?i=css&theme=dark&perline=15",
  "https://skillicons.dev/icons?i=js&theme=dark&perline=15",
  "https://skillicons.dev/icons?i=typescript&theme=dark&perline=15",
  "https://skillicons.dev/icons?i=php&theme=dark&perline=15",
  "https://skillicons.dev/icons?i=tailwindcss&theme=dark&perline=15",
];

const images2 = [
  "https://skillicons.dev/icons?i=react&theme=dark&perline=15",
  "https://skillicons.dev/icons?i=nodejs&theme=dark&perline=15",
  "https://skillicons.dev/icons?i=nextjs&theme=dark&perline=15",
  "https://skillicons.dev/icons?i=laravel&theme=dark&perline=15",
  "https://skillicons.dev/icons?i=git&theme=dark&perline=15",
  "https://skillicons.dev/icons?i=figma&theme=dark&perline=15",
];

export default function AboutSection() {
  const controls = useAnimation();

  // Fungsi untuk mengatur infinity loop
  useEffect(() => {
    const startAnimation = async () => {
      while (true) {
        await controls.start({
          filter: "grayscale(0)",
          transition: { duration: 3 },
        });
        await controls.start({
          filter: "grayscale(1)",
          transition: { duration: 2 },
        });
      }
    };

    startAnimation();
  }, [controls]);
  return (
    <div className="bg-black w-full h-full text-white py-20">
      <div className="grid grid-cols-6 justify-items-end mx-40">
        <div data-aos="fade-right" className="flex flex-col col-span-3 gap-6">
          <div id="about-me" className="mt-2">
            <h1 className="font-bold italic text-4xl">About Me</h1>
            <p className="font-thin text-lg/7 mt-2">
              Hi there! Im Dimas Asna Nugraha, a passionate about Fullstack
              Developer. Whether its crafting beautiful frontend interfaces or
              diving into the complexities of backend development.
            </p>
          </div>
          <div>
            <h1 className="font-bold italic text-4xl">Education</h1>
            <div className="flex flex-row mt-2 gap-4">
              <div className="font-normal text-lg/7">2020 - 2024</div>
              <div className="flex flex-col justify-center">
                <p>Ahmad Dahlan University</p>
                <p className="text-muted-foreground">Informatics Engineering</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="col-span-3">
          <h1 className="font-bold italic text-4xl">Technical Skills</h1>
          <div className="flex flex-row gap-4 mt-4">
            {images1.map((src, index) => (
              <motion.img
                key={index}
                className="grayscale hover:grayscale-0 cursor-pointer w-18"
                animate={controls}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                src={src}
                alt={`Skill ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex flex-row gap-4 mt-4">
            {images2.map((src, index) => (
              <motion.img
                key={index}
                className="grayscale hover:grayscale-0 cursor-pointer w-18"
                animate={controls}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                src={src}
                alt={`Skill ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
