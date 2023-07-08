import React, { useState } from "react";
import MyButton from "./MyButton/MyButton";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // validation
    let hasError = false;
    if (!name) {
      setNameError(true);
      hasError = true;
    }
    if (!email) {
      setEmailError(true);
      hasError = true;
    }
    if (!message) {
      setMessageError(true);
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // Call a function to handle form submission
    submitForm();

    // Clear fields
    setName("");
    setEmail("");
    setMessage("");
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError(false);
  };

  const submitForm = () => {
    //send request to server
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        // response from server
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Inline CSS styles
  const formStyles = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "0 auto",
    marginTop: "50px",
  };

  const inputStyles = {
    marginBottom: "10px",
    padding: "16px",
    fontSize: "16px",
  };

  const labelStyles = {
    marginBottom: "6px",
    // fontWeight: "bold",
    alignSelf: "flex-start",
  };

  const errorStyles = {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  };

  return (
    <form style={formStyles} onSubmit={handleSubmit}>
      <label htmlFor="name" style={labelStyles}>
        Your name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        style={inputStyles}
      />
      {nameError && <span style={errorStyles}>Your name is required.</span>}

      <label htmlFor="email" style={labelStyles}>
        Email address:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        style={inputStyles}
      />
      {emailError && (
        <span style={errorStyles}>Provide a valid email address.</span>
      )}

      <label htmlFor="message" style={labelStyles}>
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
        style={inputStyles}
      />
      {messageError && (
        <span style={errorStyles}>Your message is required.</span>
      )}

      <MyButton type="submit">Send your message</MyButton>
    </form>
  );
}

export default ContactForm;
