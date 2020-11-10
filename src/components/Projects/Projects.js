import React, { useState } from "react";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import classes from "./Projects.module.scss";
import baskout2 from "../../assets/project_images/baskout2.png";
import spotify1 from "../../assets/project_images/spotify1.png";
import Project from "./Project/Project";

const Projects = (props) => {
  const [featuredProjects] = useState([
    {
      name: "baskout",
      desc:
        "A fully functional and responsive E-commerce application which accepts card payment. Built with modern React features",
      tech: ["React", "Redux", "Node.js", "Express", "Stripe Payment"],
      gitLink: "https://google.com",
      appLink: "https://google.com",
      image: baskout2,
    },
    {
      name: "Spotify Profile",
      desc:
        "A web app to view your Spotify playlists and songs. View information about your playlists alongwith detailed information about each track.",
      tech: ["React", "React Context API", "Spotify Web API"],
      gitLink: "https://google.com",
      appLink: "https://google.com",
      image: spotify1,
    },
  ]);

  const [otherProjects] = useState([
    {
      name: "E-municipal corp app",
      desc:
        "A MEAN stack enterprise project that was rewarded as the winner in the TIBCO Global Hackathon.",
      tech: ["Angular", "NgRx", "RxJs"],
      gitLink: null,
      appLink: null,
    },
    {
      name: "My Posts",
      desc: "A MEAN stack application with file upload feature to save posts",
      tech: ["Angular", "RxJs", "Node.js", "Express"],
      gitLink: "https://google.com",
      appLink: "https://google.com",
    },
    {
      name: "Notes",
      desc:
        "A weekend project to learn and implement NgRx with a basic notes app",
      tech: ["Angular", "NgRx", "RxJs"],
      gitLink: "https://google.com",
      appLink: "https://google.com",
    },
  ]);

  return (
    <div id="projects" className={classes.projects}>
      <h2 className={classes.title}>Some apps I've built</h2>
      {featuredProjects.map((project, i) => (
        <FeaturedProject key={project.name} project={project} idx={i} />
      ))}
      <h2 className={classes.title}>Other projects</h2>
      <div className={classes.otherProjects}>
        {otherProjects.map((project, i) => (
          <Project key={project.name} project={project} idx={i} />
        ))}
      </div>
      <span className={classes.msg}>More to follow..</span>
    </div>
  );
};

export default Projects;
