// eslint-disable-next-line
import React, { useState } from "react";
import "../resetCSS/reset.scss";
import "./index.scss";
import { Link, Outlet } from "react-router-dom";

export default function Template() {
  // const [activePage, setActivePage] = useState("");

  // const handleClick = (activePage) => {
  //   setActivePage(activePage);
  // };

  return (
    <>
      <header>
        <section className="header">
          <div id="logo">
            <img
              id="logo-header"
              src="/assets/images/logo.png"
              alt="logo du site internet"
            />
          </div>
          <nav id="nav-bar">
            <ul>
              <li>
                <Link to="/" className="link">
                  Accueil
                </Link>
              </li>
              <li>Catégorie</li>
              <li>
                <Link to="series" className="link">
                  Séries
                </Link>
              </li>
              <li>
                <Link to="movies" className="link">
                  Films
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="login" className="btn" id="loginBtn">
            Connexion
          </Link>
        </section>
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <section className="footer1">
          <div className="info">
            <Link className="link">Conditions d'utilisation</Link>
            <Link className="link">Politique de confidentialité</Link>
          </div>
          <div className="info">
            <Link to="contact" className="link">
              Contact
            </Link>
            <Link className="link">Site map</Link>
          </div>
          <div className="social">
            <img
              className="img"
              id="facebook-logo"
              src="/assets/icons/Facebook.png"
              alt="facebook logo"
            />
            <img
              className="img"
              id="instagram-logo"
              src="/assets/icons/Instagram.png"
              alt="Instagram logo"
            />
          </div>
        </section>
        <section className="footer2">
          <img
            id="logo-footer"
            src="/assets/images/logo.png"
            alt="logo du site"
          />
          <div>© easyPick 2023</div>
        </section>
      </footer>
    </>
  );
}
