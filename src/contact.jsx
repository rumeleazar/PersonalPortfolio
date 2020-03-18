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
        <form>
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
            <textarea></textarea>
          </div>
          <div className="buttonForm">
            <input type="button" className="submitButton" value="Submit" />
          </div>
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
        </form>
      </div>
    </div>
  );
}

export default Contact;