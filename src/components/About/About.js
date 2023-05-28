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
            Hey there! I'm Gautam, a Pune (India)-based FullStack developer
            who's been on an epic coding adventure for the past almost 6 years.
          </p>
          <p>
            Blending a love for user interfaces with a curious and learning
            mindset, I'm all about crafting efficient, clean, and DRY code while
            also keeping things simple.
          </p>
          <p>
            When I'm not busy coding, you'll find me exploring new destinations,
            documenting my travel escapades on my budding travel page. Water is
            my happy place, so I'm diving into the goal of becoming a certified
            open water diver this year!
          </p>
          <p>
            I find joy in exploring Mythology, practicing Yoga, Dancing, playing
            Cricket, Swimming, and indulging in Reading.
          </p>
          <p>
            Additionally, I also have a keen interest in languages. Apart from
            the 3 local languages, I have a beginner's grasp of Spanish and
            current pursuit of learning German.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
