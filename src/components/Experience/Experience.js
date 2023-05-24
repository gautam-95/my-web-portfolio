import React from "react";
import classes from "./Experience.module.scss";

const Experience = (props) => {
  return (
    <div id="experience" className={classes.experience}>
      <h2 className={classes.title}>Professional Experience</h2>
      <div className={classes.expSection}>
        <div className={[classes.row, classes.flAlign1].join(" ")}>
          <div className={classes.expBlock}>
            <h4>AlphaSense</h4>
            <h5>Senior Software Engineer</h5>
            <p>
              Led end-to-end creation and delivery of a robust feature-rich
              dashboard module from inception with a recent major upgrade.
            </p>
            <p>
              Designed and developed a sub-system for real-time notifications
              using AWS architecture
            </p>
          </div>
          <div>
            <p className={classes.expDt}>Mar, 2021 - Present</p>
          </div>
        </div>
        <div className={[classes.row, classes.flAlign2].join(" ")}>
          <div>
            <p className={classes.expDt}>Feb, 2019 - Mar, 2021</p>
          </div>
          <div className={classes.expBlock}>
            <h4>RIA Advisory</h4>
            <h5>FullStak Developer</h5>
            <p>
              Lead Developer in a complex rules engine product for a banking
              client in finance domain.
            </p>
            <p>
              Developed, deployed and delivered a billing portal for a US Real
              Estate client.
            </p>
          </div>
        </div>
        <div className={[classes.row, classes.flAlign1].join(" ")}>
          <div className={[classes.expBlock, classes.flRight].join(" ")}>
            <div>
              <h4>TIBCO Software</h4>
              <h5>Application Developer</h5>
              <p>
                Developed a complaint operations application for a major banking
                client in Mexico.
              </p>
              <p>
                Worked on migrating product architecture to cloud using AWS and
                Docker solutions.
              </p>
            </div>
          </div>
          <div>
            <p className={classes.expDt}>Jul, 2017 - Feb, 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
