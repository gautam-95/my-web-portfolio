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
        "A fully functional and responsive e-commerce application which accepts card payment. Integrated with Stripe.js and built with modern React features, it is a complete solution for an e-commerce application.",
      tech: ["React", "Redux", "Node.js", "Express", "Stripe.js", "MongoDB"],
      gitLink: "https://github.com/gautam-95/baskout-app",
      appLink: "https://baskout-23105.web.app/login",
      image: baskout2,
    },
    {
      name: "Spotify Profile",
      desc:
        "A web app to view your Spotify playlists and songs. View information about your playlists alongwith detailed information about each track.",
      tech: ["React", "Spotify Web API", "React Context API"],
      gitLink: "https://github.com/gautam-95/my-spotify-profile",
      appLink: "https://spotify-profile-7fef8.web.app/",
      image: spotify1,
    },
  ]);

  const [otherProjects] = useState([
    {
      name: "E-complaint government app",
      desc:
        "An Angular application that emerged as the winner in the TIBCO Global Hackathon. A complete solution for a citizen to lodge a complaint to a local body in few clicks.",
      tech: ["Angular", "NgRx", "RxJs"],
      gitLink: null,
      appLink: null,
    },
    {
      name: "My Posts",
      desc:
        "A MEAN stack application with file upload feature and full user authentication to save posts",
      tech: ["Angular", "RxJs", "Node.js", "Express"],
      gitLink: null,
      appLink: null,
    },
    {
      name: "Notes",
      desc:
        "A weekend project to learn and implement NgRx with a basic notes app",
      tech: ["Angular", "NgRx", "RxJs"],
      gitLink: null,
      appLink: null,
    },
  ]);

  return (
    <div id="projects" className={classes.projects}>
      <h2 className={classes.title}>Some personal apps I've built</h2>
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
