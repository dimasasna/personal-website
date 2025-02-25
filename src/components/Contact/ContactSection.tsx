import React from "react";
import { FlipText } from "../magicui/flip-text";
import { IconCloud } from "../magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const ContactSection = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="bg-black text-white py-20">
      <FlipText className="text-2xl font-bold -tracking-widest text-white dark:text-white md:text-5xl md:leading-[5rem] uppercase">
        Get In Touch
      </FlipText>
      <div className="grid grid-cols-8 gap-4 mx-40 mt-12">
        <div className="col-span-4 justify-items-center">
          <IconCloud images={images} />
        </div>
        <div className="col-span-4">Input</div>
      </div>
    </div>
  );
};

export default ContactSection;
