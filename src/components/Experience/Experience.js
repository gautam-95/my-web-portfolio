import React from "react";
import classes from "./Experience.module.scss";

const Experience = (props) => {
  return (
    <div id="experience" className={classes.experience}>
      <h2 className={classes.title}>Where I 've worked</h2>
      <div className={classes.expSection}>
        <div className={[classes.row, classes.flAlign1].join(" ")}>
          <div className={classes.expBlock}>
            <h4>RIA Advisory</h4>
            <h5>FullStak Developer - Consultant</h5>
            <p>
              Worked as a Full time employee in several project with Angular
              React, Node and Express
            </p>
          </div>
          <div>
            <p className={classes.expDt}>Feb, 2019 - Present</p>
          </div>
        </div>
        <div className={[classes.row, classes.flAlign2].join(" ")}>
          <div>
            <p className={classes.expDt}>Jul, 2017 - Feb, 2019</p>
          </div>
          <div className={[classes.expBlock, classes.flRight].join(" ")}>
            <div>
              <h4>TIBCO Software</h4>
              <h5>Application Developer - Associate Consultant</h5>
              <p>
                Worked as a Full time employee in a middleware project with
                JavaScript, Java and SQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
