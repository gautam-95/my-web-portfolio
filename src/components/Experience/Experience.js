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
              Spearheaded the full architecture, design and development of a
              feature-rich widget-based dashboard module using React and GraphQL,
              including a recent major upgrade.
            </p>
            <p>
              Orchestrated two major feature additions from scratch which improved
              the user engagement by around 40%.
            </p>
            <p>
              Accomplished 50% increase in performance by implementing caching
              techniques, efficient schema design and optimizing code execution,
              along-with setting up an auto self-monitoring system.
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
              Proactively researched and implemented a Micro-Frontend project
              leveraging the single-spa framework.
            </p>
            <p>
              Independently developed the complete frontend app for a billing portal
              for a US real estate client, and seamlessly integrated the
              Stripe.js payment platform to facilitate payments.
            </p>
            <p>
              Volunteered to build inhouse apps like Timesheet, leave application
              which is being used by global employees.
            </p>
          </div>
        </div>
        <div className={[classes.row, classes.flAlign1].join(" ")}>
          <div className={[classes.expBlock, classes.flRight].join(" ")}>
            <div>
              <h4>TIBCO Software</h4>
              <h5>Application Developer</h5>
              <p>
               Engineered a JavaScript-based business process for a Mexican bank,
               collaborating across functions and clients.
              </p>
              <p>
                Triumphed in the TIBCO Global Hackathon with an integrated Angular
                app for citizens and local governance.
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
