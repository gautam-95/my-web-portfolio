import React from "react";
import classes from "./Skills.module.scss";
import html from "../../assets/skill_images/html.png";
import css from "../../assets/skill_images/css.png";
import sass from "../../assets/skill_images/sass.png";
import js from "../../assets/skill_images/js.png";
import react from "../../assets/skill_images/react.png";
import graphql from "../../assets/skill_images/graphql.png";
import angular from "../../assets/skill_images/angular.png";
import node from "../../assets/skill_images/node.png";
import express from "../../assets/skill_images/express.jpg";
import mongo from "../../assets/skill_images/mongo.png";
import docker from "../../assets/skill_images/docker.png";
import materialui from "../../assets/skill_images/materialui.png";
import ts from "../../assets/skill_images/ts.png";
import rxjs from "../../assets/skill_images/rxjs.png";
import aws from "../../assets/skill_images/aws.png";
import mern from "../../assets/skill_images/mern.png";
import mean from "../../assets/skill_images/mean.png";
import chatgpt from "../../assets/skill_images/chatgpt.png";
import grafana from "../../assets/skill_images/grafana.png";
import k8s from "../../assets/skill_images/k8s.png";
import prometheus from "../../assets/skill_images/prometheus.png";
import socketio from "../../assets/skill_images/socketio.png";
import Tooltip from "@material-ui/core/Tooltip";

const Skills = (props) => {
  return (
    <div id="skills" className={classes.skills}>
      <h2 className={classes.title}>Technology Exposure</h2>
      <div className={classes.skillsSection}>
        <div className={classes.sectionLeft}>
          <div className={classes.skillsSection}>
            <Tooltip title="HTML">
              <img src={html} alt="html" />
            </Tooltip>
            <Tooltip title="CSS">
              <img src={css} alt="css" />
            </Tooltip>
            <Tooltip title="JavaScript">
              <img src={js} alt="js" />
            </Tooltip>
            <Tooltip title="TypeScript">
              <img src={ts} alt="ts" />
            </Tooltip>
            <Tooltip title="React">
              <img src={react} alt="react" />
            </Tooltip>
            <Tooltip title="Angular">
              <img src={angular} alt="angular" />
            </Tooltip>
            <Tooltip title="GraphQL">
              <img src={graphql} alt="graphql" />
            </Tooltip>
            <Tooltip title="ChatGPT">
              <img src={chatgpt} alt="chatgpt" />
            </Tooltip>
            <Tooltip title="RxJs">
              <img src={rxjs} alt="rxjs" />
            </Tooltip>
            <Tooltip title="Node.js">
              <img src={node} alt="node" />
            </Tooltip>
            <Tooltip title="Express.js">
              <img src={express} alt="express" />
            </Tooltip>
            <Tooltip title="MongoDB">
              <img src={mongo} alt="mongo" />
            </Tooltip>
            <Tooltip title="SASS">
              <img src={sass} alt="sass" />
            </Tooltip>
            <Tooltip title="Socket.io">
              <img src={socketio} alt="socket.io" />
            </Tooltip>
            <Tooltip title="AWS">
              <img src={aws} alt="aws" />
            </Tooltip>
            <Tooltip title="Grafana">
              <img src={grafana} alt="grafana" />
            </Tooltip>
            <Tooltip title="Prometheus">
              <img src={prometheus} alt="prometheus" />
            </Tooltip>
            <Tooltip title="Docker">
              <img src={docker} alt="docker" />
            </Tooltip>
            <Tooltip title="Kubernetes">
              <img src={k8s} alt="kubernetes" />
            </Tooltip>
            <Tooltip title="Material UI">
              <img src={materialui} alt="materialui" />
            </Tooltip>
          </div>
        </div>
        <div className={classes.sectionRight}>
          <Tooltip title="MEAN Stack">
            <img src={mean} alt="mean" />
          </Tooltip>
          <Tooltip title="MERN Stack">
            <img src={mern} alt="mern" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Skills;
