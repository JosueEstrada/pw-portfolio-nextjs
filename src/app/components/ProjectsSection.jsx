"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Cortometraje 1",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["Todos", "Fotografía"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Cortometraje 2",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["Todos", "Fotografía"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Cortometraje 3",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["Todos", "Fotografía"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Cortometraje 4",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["Todos", "Cortometraje"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Cortometraje 5",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["Todos", "Fotografía"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Cortometraje 6",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["Todos", "Fotografía"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    console.log("Clicked on tag:", newTag);
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  console.log("Filtered Projects:", filteredProjects);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Fotografía"
          isSelected={tag === "Fotografía"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cortometraje"
          isSelected={tag === "Cortometraje"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
