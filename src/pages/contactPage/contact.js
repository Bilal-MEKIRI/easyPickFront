import React, { useState } from "react";
import "../../components/resetCSS/reset.scss";
import ScrollToTopBtn from "../../components/scrollToTopBtn/scrollToTopBtn";
import "./contact.scss";
import axios from "axios";
import DOMPurify from "dompurify";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const sanitizedFirstName = DOMPurify.sanitize(firstName);
      const sanitizedLastName = DOMPurify.sanitize(lastName);
      const sanitizedEmail = DOMPurify.sanitize(email);
      const sanitizedMessage = DOMPurify.sanitize(message);

      const response = await axios.post("http://localhost:3030/emails", {
        firstName: sanitizedFirstName,
        lastName: sanitizedLastName,
        email: sanitizedEmail,
        message: sanitizedMessage,
      });

      if (response.status === 200) {
        // Email successfully posted
        console.log("Email sent successfully!");
      } else {
        // Handling error cases
        console.error("Error sending email: ", response.statusText);
      }
    } catch (error) {
      console.error("Error sending email: ", error.message);
    }
  };

  return (
    <main className="contact-form">
      <ScrollToTopBtn />
      <section className="contact-form-container">
        <div className="main-grid" id="paiment">
          <form onSubmit={handleSubmit}>
            <label htmlFor="lastName">Nom</label>
            <input
              required
              type="text"
              name="lastName"
              id="lastName"
              onChange={(event) => setLastName(event.target.value)}
            ></input>
            <br />
            <label htmlFor="firstName">Prénom</label>
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              onChange={(event) => setFirstName(event.target.value)}
            ></input>
            <br />
            <label htmlFor="email">Email</label>
            <input
              required
              type="text"
              name="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <br />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>

            <button className="btn">Envoyer</button>
          </form>
        </div>
      </section>
    </main>
  );
}
