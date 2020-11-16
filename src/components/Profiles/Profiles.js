import React from "react";
import classes from "./Profiles.module.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import { animateScroll as scroll } from "react-scroll";

const Profiles = (props) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className={classes.profiles}>
      <ul className={classes.profile}>
        <li onClick={scrollToTop}>
          <div className={classes.myLogo}>GP</div>
        </li>
        <li>
          <a
            href="https://github.com/gautam-95"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className={classes.profileIcon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gautamraj-puranik-711b3012a/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className={classes.profileIcon} />
          </a>
        </li>
        <li>
          <a href="mailto:gautam.puranik95@gmail.com">
            <MailIcon className={classes.profileIcon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Profiles;
