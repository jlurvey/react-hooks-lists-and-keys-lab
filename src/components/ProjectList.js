import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const ProjectItems = projects.map((project) => {
    return (
      <div className="project-item" key={project.id}>
      <h3>{project.name}</h3>
      <p>{project.about}</p>
      <div className="technologies">
        {project.technologies}
      </div>
      </div>
      );
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ProjectItems}</div>
    </div>
  );
}

export default ProjectList;
