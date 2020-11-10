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
          <GitHubIcon className={classes.profileIcon} />
        </li>
        <li>
          <LinkedInIcon className={classes.profileIcon} />
        </li>
        <li>
          <MailIcon className={classes.profileIcon} />
        </li>
      </ul>
    </div>
  );
};

export default Profiles;
