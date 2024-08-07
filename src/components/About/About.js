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
          <p>
            Hey there! I'm Gautam, a Pune (India)-based JS developer
            who's been on the coding adventure for the past 7 years.
          </p>
          <p>
           With a strong passion for user interface design and a commitment to continuous learning,
           I focus on developing efficient, clean, and DRY (Don't Repeat Yourself) code 
           while prioritizing simplicity in my work.
          </p>
          <p>
            When I'm not busy coding, you'll find me exploring new destinations,
            documenting my travel escapades on my budding travel page. Water is
            my happy place and I've recently acquired the PADI certification for Open water Scuba diving.
          </p>
          <p>
            I find joy in exploring astrophysics, mythology, practicing yoga, dancing, playing
            guitar, swimming, and reading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
