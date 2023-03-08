import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div id="invoke" className="contact">
      {/* <div className="flex-row">
        <h2 className="section-title secondary-border">Invoke the Spirits</h2>
      </div>
        <div className="contact-form">
          <h3>Contact GhostoftheMill</h3>
          <form className="form">
            <label for="contact-name">Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Enter Name"
            />
            <label for="contact-email">Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Enter Email"
            />
            <label for="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Enter Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form> */}
    </div>
  );
}

export default Contact;