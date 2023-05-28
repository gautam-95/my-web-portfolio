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
              Led full lifecycle development and delivery of a feature-rich,
              widget-based dashboard module using React and GraphQL, including
              recent major upgrade.
            </p>
            <p>
              Designed and developed a sub-system for real-time notifications
              using AWS architecture
            </p>
            <p>
              Implemented completely automated self-monitoring and alerts system
              using Grafana and Prometheus metrics.
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
              Successfully built and integrated the frontend of a billing portal
              using Angular, and seamlessly incorporated the Stripe.js payment
              platform for secure payment transactions.
            </p>
            <p>
              Volunteered to research and implement the project as a
              Micro-Frontend leveraging single-spa framework.
            </p>
            <p>
              Volunteered to develop 3 in-house apps (Timesheet, Employee
              onboarding and Leave application) used globally by the employees.
            </p>
          </div>
        </div>
        <div className={[classes.row, classes.flAlign1].join(" ")}>
          <div className={[classes.expBlock, classes.flRight].join(" ")}>
            <div>
              <h4>TIBCO Software</h4>
              <h5>Application Developer</h5>
              <p>
                Developed a JavaScript-based solution for a bank in Mexico,
                collaborating with cross-functional teams and engaging in
                regular client interactions.
              </p>
              <p>
                Triumphed in the TIBCO Global Hackathon with an integrated
                Angular app for citizens and local governance.
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
