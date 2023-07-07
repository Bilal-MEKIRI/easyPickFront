import React, { useState } from "react";
import "../../components/resetCSS/reset.scss";
import "./contact.scss";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // eslint-disable-next-line
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName);
    console.log(lastName);
  };

  return (
    <main className="contact-form">
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
