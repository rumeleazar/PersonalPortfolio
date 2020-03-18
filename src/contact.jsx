import React from "react";
import github from "./images/githubLogo.png";
import linkedin from "./images/linkedinLogo.png";
import email from "./images/emailLogo.png";

function Contact(props) {
  return (
    <div className="contactSection" id="Contact">
      <div className="contactHeader">
        <h1>Contact me</h1>
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
        </form>
      </div>

      <div className="contactLogos">
        <img src={github} alt="github"></img>
        <img src={linkedin} alt="linkedin"></img>
        <img src={email} alt="email"></img>
      </div>
    </div>
  );
}

export default Contact;
