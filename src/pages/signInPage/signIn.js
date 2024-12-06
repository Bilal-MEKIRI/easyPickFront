import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import DOMPurify from "dompurify";
import axios from "axios";

import "../../components/resetCSS/reset.scss";
import "./signIn.scss";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [formStatusType, setFormStatusType] = useState(""); // "success" or "error"

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#])[A-Za-z\d@$!%*?&#]{8,}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading to true when sending begins

    if (!userName) {
      setFormStatus("Nom utilisateur requis.");
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

    if (!passwordRegex.test(password)) {
      setFormStatus(
        "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial parmi @$!%*?#."
      );
      setFormStatusType("error");
      setIsLoading(false);
      return;
    }

    try {
      const sanitizedUserName = DOMPurify.sanitize(userName);
      const sanitizedEmail = DOMPurify.sanitize(email);
      const sanitizedPassword = DOMPurify.sanitize(password);

      const response = await axios.post(
        "https://easypickback-production.up.railway.app/users",
        {
          userName: sanitizedUserName,
          email: sanitizedEmail,
          password: sanitizedPassword,
        }
      );

      if (response.status === 200) {
        // Account successfully posted
        setIsLoading(false); // Set loading to false when sending is done
        setFormStatus(
          "Votre compte a bien été créé. Vous pouvez vous connecter !"
        );
        setFormStatusType("success");
        setEmail("");
        setPassword("");
      } else {
        // Handling error cases
        setFormStatus(
          "Erreur lors de la création du compte, veuillez réessayer plus tard."
        );
        console.error("Error creating account: ", response.statusText);
        setIsLoading(false); // Set loading to false when sending is done
      }
    } catch (error) {
      console.error("Error creating account: ", error.message);
      setIsLoading(false); // Set loading to false when sending is done
    }
  };

  return (
    <main className="sign-in">
      <section className="sign-in-form">
        <h1 className="title">Créez votre compte EasyPick</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">UserName</label>
          <input
            required
            type="text"
            name="userName"
            id="userName"
            value={userName}
            placeholder="Nom Utilisateur"
            onChange={(event) => setUserName(event.target.value)}
          ></input>

          <label htmlFor="email">Email</label>
          <input
            required
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          ></input>

          <label htmlFor="password">Mot de passe</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Mot de passse"
            onChange={(event) => setPassword(event.target.value)}
          ></input>

          <button className="btn" disabled={isLoading}>
            {isLoading ? (
              <ClipLoader color={"#000000"} size={30} />
            ) : (
              "Créer compte"
            )}
          </button>
          {formStatus && (
            <p className={`validation-message ${formStatusType}`}>
              {formStatus}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
