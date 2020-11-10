import React from "react";
import classes from "./Home.module.scss";

const Home = (props) => {
  return (
    <div className={classes.home}>
      <h2 className={classes.greeting}>Hi, I'm</h2>
      <h1 className={classes.title}>Gautam Puranik.</h1>
      <h2 className={classes.subTitle}>I build and develop for the web.</h2>
      <p className={classes.summary}>
        I'm a FullStack developer based in Pune, India who specializes in
        JavaScript technologies across the whole stack (Angular, React, Node.js
        , Express) and passionate about building web apps.
      </p>
      <a href="mailto:gautam.puranik95@gmail.com">
        <button>Get in Touch</button>
      </a>
    </div>
  );
};

export default Home;
