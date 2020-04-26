import React from "react";
import github from "./images/githubLogo.png";
import linkedin from "./images/linkedinLogo.png";

function Contact(props) {
  return (
    <div className="contactSection" id="Contact">
      <div className="contactHeader">
        <h1>Contact me</h1>
        <p>rumeleazar@gmail.com</p>
      </div>
      <div className="inputForms">
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="emailForm">
            <label>
              Name:
              <input type="text" name="name" />
            </label>
          </div>
          <div className="subjectForm">
            <label>
              E-mail:
              <input type="email" name="email" />
            </label>
          </div>
          <div className="messageForm">
            <label>Message:</label>
            <br></br>
            <textarea name="message"></textarea>
          </div>
          <div className="buttonForm">
            <button type="submit" className="submitButton">
              Submit
            </button>
          </div>
        </form>
        <div className="contactLogos">
          <a
            href="https://github.com/rumeleazar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github"></img>
          </a>
          <a
            href="https://www.linkedin.com/in/ryaneleazar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
