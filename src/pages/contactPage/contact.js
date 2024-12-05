import React, { useState } from "react";
import "../../components/resetCSS/reset.scss";
import ScrollToTopBtn from "../../components/scrollToTopBtn/scrollToTopBtn";
import "./contact.scss";
import axios from "axios";
import DOMPurify from "dompurify";
import { ClipLoader } from "react-spinners";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [formStatusType, setFormStatusType] = useState(""); // "success" or "error"
  const [isLoading, setIsLoading] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleSubmit = async (event) => {
    setIsLoading(true); // Set loading to true when sending begins
    event.preventDefault();

    // Vérifications des champs
    if (!firstName) {
      setFormStatus("Nom requis.");
      setFormStatusType("error");
      setIsLoading(false);
      return;
    }

    if (!lastName) {
      setFormStatus("Prénom requis.");
      setFormStatusType("error");
      setIsLoading(false);
      return;
    }

    if (!emailRegex.test(email)) {
      setFormStatus("Format d'email invalide.");
      setFormStatusType("error");
      setIsLoading(false);
      return;
    }

    if (!message) {
      setFormStatus("Message requis.");
      setFormStatusType("error");
      setIsLoading(false);
      return;
    }

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
        setIsLoading(false); // Set loading to false when sending is done
        setFormStatus("Votre message a bien été envoyé!");
        setFormStatusType("success");
        console.log("Email sent successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        // Handling error cases
        setFormStatus("Erreur lors de l'envoi du message");
        console.error("Error sending email: ", response.statusText);
        setIsLoading(false); // Set loading to false when sending is done
      }
    } catch (error) {
      console.error("Error sending email: ", error.message);
      setIsLoading(false); // Set loading to false when sending is done
    }
  };

  return (
    <main className="contact-form">
      <ScrollToTopBtn />
      <section className="contact-form-container">
        <div className="main-grid" id="paiment">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="lastName">Last Name</label>
            <input
              className="input"
              required
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Nom"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            ></input>
            <label htmlFor="firstName">First Name</label>
            <input
              className="input"
              required
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Prénom"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            ></input>
            <label htmlFor="email">Email</label>
            <input
              className="input"
              required
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            <label htmlFor="message">Message</label>
            <textarea
              className="text"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Votre message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>

            <button className="btn" disabled={isLoading}>
              {isLoading ? (
                <ClipLoader color={"#000000"} size={30} />
              ) : (
                "Envoyer"
              )}
            </button>
            {formStatus && (
              <p className={`validation-message ${formStatusType}`}>
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
