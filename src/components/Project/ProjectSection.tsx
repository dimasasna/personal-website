import React from "react";
import ProjectCard from "./ProjectCard";
import Profil from "../../assets/profil.jpeg";

export default function ProjectSection() {
  return (
    <div className="text-white bg-black pb-20">
      <h1
        data-aos="fade-down"
        className="font-bold text-5xl italic text-center"
      >
        PROJECT
      </h1>
      <div className="grid grid-cols-3 px-40 gap-5">
        <div data-aos="fade-right" >
            
          <ProjectCard img={Profil} />
        </div>

        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
