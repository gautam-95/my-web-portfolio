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
            Amazed by the power of user interfaces and curious to learn web
            development, I started my career as a Web Developer around 3.5 years
            back and have grown significantly as a professional.
          </p>
          <p>
            I believe in following a simplistic approach with a learning
            attitude and aim to write efficient, clean, DRY code and enhance
            user expererience.
          </p>
          <p>
            I have been working with a dynamic startup -
            <span>RIA Advisory</span>
            {/* <a
              href="https://www.riaadvisory.com/"
              target="_blank"
              rel="noreferrer"
            >
              RIA Advisory
            </a> */}
            where I work on a wide range of interesting projects and exciting
            technologies on a daily basis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

// and as a professional and to be Developing web apps is more of a hobby for me as I enjoy seing a visual feedback of my code.
