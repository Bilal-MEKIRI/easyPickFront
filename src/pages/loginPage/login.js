import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import DOMPurify from "dompurify";

import "../../components/resetCSS/reset.scss";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [formStatusType, setFormStatusType] = useState(""); // "success" or "error"
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#])[A-Za-z\d@$!%*?&#]{8,}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

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

      const response = await axios.post("http://localhost:3030/users/check", {
        userName: sanitizedUserName,
        email: sanitizedEmail,
        password: sanitizedPassword,
      });

      setIsLoading(false); // Set loading to false after getting the response

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);

        // Save token expiration time (current time + 1 hour) in milliseconds
        const expirationTime = Date.now() + 1 * 60 * 60 * 1000; // Adding 1 hour to the current time
        localStorage.setItem("token_expiration", expirationTime.toString());

        // Remove the token from localStorage after 1 hour (3600000 milliseconds)
        setTimeout(() => {
          localStorage.removeItem("token");
        }, 3600000); // 1 hour in milliseconds

        setFormStatus("Connexion réussie");
        setFormStatusType("success");
        setUserName("");
        setEmail("");
        setPassword("");

        setTimeout(() => {
          navigate("/"); // This will redirect to the home page after 3 seconds
        }, 3000);
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      setIsLoading(false);
      if (error.response) {
        // The request was made and the server responded with a status code outside of the range of 2xx
        switch (error.response.status) {
          case 404:
            setFormStatus(
              "Utilisateur introuvable. Veuillez vérifier votre email."
            );
            break;
          case 429:
            setFormStatus(error.response.data.message); // Assuming the server returns the exact lockout message.
            break;
          case 401:
            setFormStatus("Mot de passe incorrect.");
            break;
          case 500:
          default:
            setFormStatus(
              "Erreur lors de la connexion. Veuillez réessayer plus tard."
            );
            break;
        }
      } else if (error.request) {
        // The request was made but no response was received
        setFormStatus(
          "Erreur lors de la connexion. Veuillez réessayer plus tard."
        );
      } else {
        // Something happened in setting up the request that triggered an error
        setFormStatus("Une erreur est survenue. Veuillez réessayer.");
      }
      setFormStatusType("error");
    }
  };

  return (
    <main className="login">
      <section className="login-form">
        <h1 className="title">Connectez-vous à votre compte EasyPick</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">UserName</label>
          <input
            required
            type="text"
            name="UserName"
            id="UserName"
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
              "Se connecter"
            )}
          </button>
          <Link to="/signin" className="create-account">
            Créer un compte
          </Link>
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
