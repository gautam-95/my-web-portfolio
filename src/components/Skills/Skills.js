import React from "react";
import classes from "./Skills.module.scss";
import html from "../../assets/skill_images/html.png";
import css from "../../assets/skill_images/css.png";
import sass from "../../assets/skill_images/sass.png";
import js from "../../assets/skill_images/js.png";
import react from "../../assets/skill_images/react.png";
import angular from "../../assets/skill_images/angular.png";
import node from "../../assets/skill_images/node.png";
import express from "../../assets/skill_images/express.jpg";
import mongo from "../../assets/skill_images/mongo.png";
import docker from "../../assets/skill_images/docker.png";
import pcf from "../../assets/skill_images/pcf.png";
import materialui from "../../assets/skill_images/materialui.png";
import java from "../../assets/skill_images/java.png";
import ts from "../../assets/skill_images/ts.png";
import rxjs from "../../assets/skill_images/rxjs.png";
import redux from "../../assets/skill_images/redux.png";
import firebase from "../../assets/skill_images/firebase.png";
import aws from "../../assets/skill_images/aws.png";
import mern from "../../assets/skill_images/mern.png";
import mean from "../../assets/skill_images/mean.png";

const Skills = (props) => {
  return (
    <div id="skills" className={classes.skills}>
      <h2 className={classes.title}>Some technologies I've worked on</h2>
      <div className={classes.skillsSection}>
        <div className={classes.sectionLeft}>
          <div className={classes.skillsSection}>
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="js" />
            <img src={ts} alt="ts" />
            <img src={sass} alt="sass" />
            <img src={angular} alt="angular" />
            <img src={rxjs} alt="rxjs" />
            <img src={react} alt="react" />
            <img src={redux} alt="redux" />
            <img src={node} alt="node" />
            <img src={express} alt="express" />
            <img src={mongo} alt="mongo" />
            <img src={firebase} alt="firebase" />
            <img src={java} alt="java" />
            <img src={aws} alt="aws" />
            <img src={docker} alt="docker" />
            <img src={pcf} alt="pcf" />
            <img src={materialui} alt="materialui" />
          </div>
        </div>
        <div className={classes.sectionRight}>
          <img src={mean} alt="mean" />
          <img src={mern} alt="mern" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
