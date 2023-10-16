// eslint-disable-next-line
import React, { useState, useEffect, useCallback } from "react";
import "../resetCSS/reset.scss";
import "./index.scss";
import ResponsiveMenu from "../responsiveMenu/responsiveMenu";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function Template() {
  const [activeNavItem, setActiveNavItem] = useState("Accueil"); // State for active navigation item
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isUserConnected, setIsUserConnected] = useState(false);
  const location = useLocation();
  // Decode the JWT token
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwt_decode(token) : null;

  const handleNavItemClick = useCallback((navItem) => {
    setActiveNavItem(navItem);
  }, []);

  const handleBurgerMenuClick = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };

  const isTokenValid = () => {
    const token = localStorage.getItem("token");
    const expiration = localStorage.getItem("token_expiration");

    if (token && Date.now() < parseInt(expiration)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === "/") {
      handleNavItemClick("Accueil");
    } else if (currentPath.includes("/series")) {
      handleNavItemClick("Séries");
    } else if (currentPath.includes("/movies")) {
      handleNavItemClick("Films");
    }

    const handleResize = () => {
      if (window.innerWidth <= 777) {
        // Adjust the width threshold as needed
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Check if the user is connected
    if (isTokenValid()) {
      setIsUserConnected(true);
    } else {
      setIsUserConnected(false);
      localStorage.removeItem("token"); // Removing the expired token
      localStorage.removeItem("token_expiration"); // Removing its associated expiration time
    }

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleNavItemClick, location.pathname, isUserConnected]);

  return (
    <div className="template-container">
      <header>
        <section className="header">
          <div id="logo">
            <Link to="/">
              <img
                id="logo-header"
                src="/assets/images/logo.png"
                alt="logo du site internet"
                onClick={() => {
                  handleNavItemClick("Accueil");
                }}
              />
            </Link>
          </div>
          <Link
            className="btn-burger-menu"
            id="login-btn-responsive"
            onClick={() => handleBurgerMenuClick(burgerMenuActive)}
          >
            {!burgerMenuActive && (
              <img
                src="/assets/icons/burger_menu.png"
                alt="burger menu icone"
              ></img>
            )}
            {burgerMenuActive && (
              <img
                className="burger_menu_close"
                src="/assets/icons/burger_menu_close.png"
                alt="burger menu icone"
              ></img>
            )}
          </Link>
          <ResponsiveMenu
            burgerMenuActive={burgerMenuActive}
            handleBurgerMenuClick={isSmallScreen ? handleBurgerMenuClick : null}
          />
          <nav id="nav-bar">
            <ul>
              <li>
                <Link
                  to="/"
                  className={`link ${
                    activeNavItem === "Accueil" ? "active" : ""
                  }`}
                  onClick={() => {
                    handleNavItemClick("Accueil");
                  }}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/series"
                  // state={{ currentPage: currentPage }}
                  className={`link ${
                    activeNavItem === "Séries" ? "active" : ""
                  }`}
                  onClick={() => {
                    handleNavItemClick("Séries");
                  }}
                >
                  Séries
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className={`link ${
                    activeNavItem === "Films" ? "active" : ""
                  }`}
                  onClick={() => {
                    handleNavItemClick("Films");
                  }}
                >
                  Films
                </Link>
              </li>
            </ul>
          </nav>
          {!isSmallScreen ? (
            isUserConnected ? (
              <span className="welcome-msg">
                {decodedToken ? `Bienvenue, ${decodedToken.userName}!` : ""}
              </span>
            ) : (
              <Link to="/login" className="log-in-btn">
                connexion
              </Link>
            )
          ) : (
            ""
          )}
        </section>
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <section className="footer1">
          <div className="info-responsive">
            <div className="info">
              <Link to="/terms" className="link">
                Conditions d'utilisation
              </Link>
              <Link to="/privacy" className="link">
                Politique de confidentialité
              </Link>
            </div>
            <div className="info">
              <Link to="contact" className="link">
                Contact
              </Link>
            </div>
          </div>
        </section>
        <section className="footer2">
          <Link to="/">
            <img
              id="logo-footer"
              src="/assets/images/logo.png"
              alt="logo du site"
              onClick={() => {
                handleNavItemClick("Home");
              }}
            />
          </Link>
          <div>© easyPick 2023</div>
        </section>
      </footer>
    </div>
  );
}
