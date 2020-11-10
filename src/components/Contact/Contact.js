import React from "react";
import classes from "./Contact.module.scss";

const Contact = (props) => {
  return (
    <div id="contact" className={classes.contact}>
      <h1>Get in Touch</h1>
      <p>
        Whether you have some feedback or want to get in touch for an
        opportunity, I' ll be more than happy to have a chat
      </p>
      <a href="mailto:gautam.puranik95@gmail.com">
        <button>Say Hello</button>
      </a>
    </div>
  );
};

export default Contact;
