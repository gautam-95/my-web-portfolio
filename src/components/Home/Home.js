import React from "react";
import classes from "./Home.module.scss";

const Home = (props) => {
  return (
    <div className={classes.home}>
      <h2 className={classes.greeting}>Hi, I'm</h2>
      <h1 className={classes.title}>Gautam Puranik.</h1>
      <h2 className={classes.subTitle}>I build and develop for the web.</h2>
      <p className={classes.summary}>
        Experienced and slightly JavaScript-obsessed developer with a knack for crafting awesome web experiences.
        My expertise spans across React, Node.js, GraphQL, and the entire JavaScript ecosystem.
        With a passion for clean and efficient solutions, I love turning complex problems into elegant applications.
      </p>
      <a href="mailto:gautam.puranik95@gmail.com">
        <button>Get in Touch</button>
      </a>
    </div>
  );
};

export default Home;
