import React from "react";
import ProjectCard from "./ProjectCard";
import en from '../languages/en.json'
import es from '../languages/es.json'


const ProjectsSection = ({ language }) => {


  return (
    <section id="projects">
      {language === "en" ? (
        <>
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 ">
            {en[1].map((project) => (
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
        </>
      ) : (
        <>
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            Mis Proyectos
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 ">
            {es[1].map((project) => (
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
        </>
      )}
    </section>
  );
};

export default ProjectsSection;
