import React, { useState } from "react";
import FeaturedProject from "./FeaturedProject/FeaturedProject";
import classes from "./Projects.module.scss";
import baskout2 from "../../assets/project_images/baskout2.png";
import spotify1 from "../../assets/project_images/spotify1.png";
import instachat from "../../assets/project_images/instachat.png";
import Project from "./Project/Project";

const Projects = (props) => {
  const [featuredProjects] = useState([
    {
      name: "InstaChat",
      desc:
        "A dynamic chat web-app with real-time notifications, group chat support and more. Powered by Web sockets.",
      tech: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      gitLink: "https://github.com/gautam-95/insta-chat-app",
      appLink: "https://insta-chat-app.onrender.com/",
      image: instachat,
    },
    {
      name: "baskout",
      desc:
        "A seamless and dynamic e-commerce application with Stripe.js integration for secure card payments, offering a comprehensive solution.",
      tech: ["React", "Redux", "Node.js", "Express", "Stripe.js", "MongoDB"],
      gitLink: "https://github.com/gautam-95/baskout-app",
      appLink: "https://baskout-app-fe.onrender.com",
      image: baskout2,
    },
    {
      name: "Mini Spotify",
      desc:
        "A mini Spotify clone. Connect with your spotify account to view detailed information about your playlists and their tracks.",
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
        "Award-winning Angular app that triumphed in the TIBCO Global Hackathon, empowering users to report issues effortlessly.",
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
      <h2 className={classes.title}>Personal Apps Portfolio</h2>
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
