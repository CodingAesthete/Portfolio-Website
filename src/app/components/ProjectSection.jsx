import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: "Ski Jumping Website",
    description: "MERN & Websockets Project",
    image: "/images/projects/ski.png",
    gitUrl: "https://github.com/CodingAesthete/Ski-Jumping",
    previewUrl: "https://ski-jumping.onrender.com",
  },
  {
    id: 2,
    title: "Vans Website",
    description: "React Router Project",
    image: "/images/projects/vans.png",
    gitUrl: "https://github.com/CodingAesthete/Van-Life",
    previewUrl: "https://master--starlit-choux-2918bb.netlify.app/",
  },
  {
    id: 3,
    title: "Zoo Site",
    description: "HTML & CSS Project",
    image: "/images/projects/zoo.png",
    gitUrl: "https://github.com/CodingAesthete/Zooland",
    previewUrl: "https://coding-aesthete.free.bg",

  },
  {
    id: 4,
    title: "Real Estate Site",
    description: "MERN Project",
    image: "/images/projects/estate.png",
    gitUrl: "https://github.com/CodingAesthete/Mern-Estate",
    previewUrl: "https://mern-estate-rqzp.onrender.com/",
  },
  {
    id: 5,
    title: "Speedway Page",
    description: "jQuery Slider Project",
    image: "/images/projects/speedway.png",
    gitUrl: "https://github.com/CodingAesthete/Mern-Estate",
    previewUrl: "https://speedway-gp.vercel.app/",
  },
  {
    id: 6,
    title: "Rock Paper Scissors Game",
    description: "JS Game Project",
    image: "/images/projects/rps.jpg",
    gitUrl: "https://github.com/CodingAesthete/Rock-Paper-Scissors",
    previewUrl: "https://rock-paper-scissors-tawny-beta.vercel.app/",
  },
];

export default function ProjectSection() {
  return (
    <div id='projects'>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  )
}
