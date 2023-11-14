import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Rebirth, Pet Adoption Network",
    description:
      "I participated in an agile development team with SCRUM methodology in one-week sprints presenting to a Product Owner progress on the development of a pet adoption app, which aims to facilitate communication between users who wish to both give in adoption, and adopt pets, it has features such as CRUD, auth, integration of payment gateways (to make donations to pets), through version control with GIT / GITHUB, managed with Kanban methodology in Trello and Slack. Implemented technologies: React, Redux, Node, Sequelize, Bootstrap, Express, MercadoPago.",
    image: "/images/proyectos/Rebirth.png",
    gitUrl: "https://github.com/aaronstz/PF-Rebirth",
    previewUrl: "https://frontend-rebirth.vercel.app/"
  },
  {
    id: 2,
    title: "Pokemon API",
    description:
      "A website that allows to search for pokemons info, brought through Pokemon API, you can sort them alphabetically, by strength, type and if they come from the api or if they were created. You can create your own Pokemon, with it's own name, strength, defense, attack, image, etc. and if you want more information of him, you can access it's details. Everything was done with pure CSS without css frameworks or any external components.",
    image: "/images/proyectos/PokeApi.png",
    gitUrl: "https://github.com/aaronstz/pokeapi",
    previewUrl: "https://pokeapi-aaronstz.vercel.app"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 ">
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
    </section>
  );
};

export default ProjectsSection;
