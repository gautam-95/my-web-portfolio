import React from "react";
import classes from "./FeaturedProject.module.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';


const FeaturedProject = ({ project, idx }) => {
  const rootClasses = [classes.featuredProject];
  if (idx % 2 !== 0) {
    rootClasses.push(classes.reverse);
  }
  return (
    <div className={rootClasses.join(" ")}>
      <div className={classes.sectionLeft}>
        <img src={project.image} alt={project.name} />
      </div>
      <div className={classes.sectionRight}>
        <h4>Featured Project</h4>
        <h1>{project.name}</h1>
        <p>{project.desc}</p>
        <ul>
          {project.tech.map((ele) => (
            <li key={ele}>{ele}</li>
          ))}
        </ul>
        <div className={classes.links}>
            <GitHubIcon className={classes.linkIcon}/>
            <LaunchIcon className={classes.linkIcon}/>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
