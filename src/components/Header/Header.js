import React, { useRef, useState } from "react";
import classes from "./Header.module.scss";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";

const Header = (props) => {
  const inputEl = useRef(null);

  const onLinkClick = () => {
    console.log(inputEl);
    inputEl.current.checked = false;
  };

  return (
    <div id="home" className={classes.header}>
      <div className={classes.navigation}>
        <input type="checkbox" id="navi-toggle" ref={inputEl} />
        <label for="navi-toggle">
          <span className={classes.navigationIcon}>&nbsp;</span>
        </label>
        <div className={classes.navigationBackground}>&nbsp;</div>
        <nav>
          <ul>
          <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => onLinkClick()}
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onClick={() => onLinkClick()}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={1500}
              onClick={() => onLinkClick()}
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              duration={2000}
              onClick={() => onLinkClick()}
            >
              Experience
            </Link>

            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={2500}
              onClick={() => onLinkClick()}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={3000}
              onClick={() => onLinkClick()}
            >
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
