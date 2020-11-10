import React from "react";
import classes from "./About.module.scss";
import myImg from "../../assets/images/my-img.png";

const About = (props) => {
  return (
    <div id="about" className={classes.about}>
      <div className={classes.sectionLeft}>
        <img src={myImg} alt="myImg" />
      </div>
      <div className={classes.sectionRight}>
        <h2>About me</h2>
        <div>
          <p>Hello! I'm Gautam, a FullStack developer based in Pune, India.</p>
          <p>
            Developing web apps is more of a hobby for me as I enjoy seing a
            visual feedback of my code. I belive in keeping things simple and
            aim to write efficient, clean and DRY code and to improve user
            expererience.
          </p>
          <p>
            I have been working with a dynamic startup -{" "}
            <a href="https://www.riaadvisory.com/" target="_blank" rel="noreferrer">
              {" "}
              RIA Advisory
            </a>{" "}
            where I work on a wide variety of projects and exciting technologies
            on a daily basis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
