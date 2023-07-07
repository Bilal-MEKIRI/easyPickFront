import React, { useState } from "react";
import "../../components/resetCSS/reset.scss";
import "./login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  // eslint-disable-next-line
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <main className="login">
      <section className="login-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              required
              type="text"
              name="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>
          <div className="input-container">
            <label htmlFor="password">Mot de passe</label>
            <input
              required
              type="password"
              name="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <button className="btn">Se connecter</button>
          <Link className="create-account">Créer un compte</Link>
        </form>
      </section>
    </main>
  );
}
