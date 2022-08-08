import React from "react";
import Project from "../component/Project";
import toyShop from "../assets/images/ToyShop.png";
import { Zoom } from "react-reveal";

const Projects = () => {
  const projects = [
    {
      name: "Toy Shop",
      description: "An ecommerce website that sells toys",
      image: toyShop,
    },
    {
      name: "Toy Shop",
      description: "An ecommerce website that sells toys",
      image: toyShop,
    },
    {
      name: "Toy Shop",
      description: "An ecommerce website that sells toys",
      image: toyShop,
    },
    {
      name: "Toy Shop",
      description: "An ecommerce website that sells toys",
      image: toyShop,
    },
  ];

  return (
    <div id="projects">
      <div className="section projects">
        <h1>Projects:</h1>
        <div>
          <Zoom>
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Projects;
