import React from "react";
import classes from "./Project.module.scss";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

const Project = ({ project }) => {
  return (
    <div className={classes.project}>
      <div className={classes.header}>
        <FileCopyIcon className={classes.fileIcon} />
        {project.gitLink && project.appLink ? (
          <div>
            <GitHubIcon className={classes.linkIcon} />
            <LaunchIcon className={classes.linkIcon} />
          </div>
        ) : null}
      </div>
      <div className={classes.content}>
        <h3>{project.name}</h3>
        <p>{project.desc}</p>
      </div>
      <div className={classes.footer}>
        <ul>
          {project.tech.map((ele) => (
            <li key={ele}>{ele}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
