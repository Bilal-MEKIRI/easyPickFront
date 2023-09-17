// eslint-disable-next-line
import React, { useState, useEffect, useCallback } from "react";
import "../resetCSS/reset.scss";
import "./index.scss";
import ResponsiveMenu from "../responsiveMenu/responsiveMenu";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Template() {
  const [activeNavItem, setActiveNavItem] = useState("Accueil"); // State for active navigation item
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();

  const handleNavItemClick = useCallback((navItem) => {
    setActiveNavItem(navItem);
  }, []);

  const handleBurgerMenuClick = () => {
    setBurgerMenuActive(!burgerMenuActive);
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

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleNavItemClick, location.pathname]);

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
