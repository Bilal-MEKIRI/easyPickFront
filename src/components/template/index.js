// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import "../resetCSS/reset.scss";
import "./index.scss";
import Categories from "../categories/categories";
import ResponsiveMenu from "../responsiveMenu/responsiveMenu";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Template() {
  const [displayCategories, setDisplayCategories] = useState(false); // State for displaying Categories component
  const [activeNavItem, setActiveNavItem] = useState(""); // State for active navigation item
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(
    location.state?.currentPage || 1
  );

  // Function to toggle Categories component visibility
  const toggleCategories = () => {
    setDisplayCategories(!displayCategories);
  };

  /**
   * Callback function for handling navigation item clicks.
   * Updates the active navigation item state to reflect the clicked item.
   *
   * @param {string} itemName - The name of the clicked navigation item.
   */
  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
    if (navItem === "Films") {
      setCurrentPage(1); // Reset currentPage to 1 when navigating to the Movies page
    }
  };

  const handleBurgerMenuClick = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };

  useEffect(() => {
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
  }, []);

  return (
    <>
      <header>
        <section className="header">
          <div id="logo">
            <Link to="/">
              <img
                id="logo-header"
                src="/assets/images/logo.png"
                alt="logo du site internet"
              />
            </Link>
          </div>
          <Link
            className="btn-burger-menu"
            id="login-btn-responsive"
            onClick={() => handleBurgerMenuClick(burgerMenuActive)}
          >
            <img src="/assets/icons/burger_menu.png" alt="login icon"></img>
          </Link>
          {burgerMenuActive && (
            <ResponsiveMenu
              burgerMenuActive={burgerMenuActive}
              handleBurgerMenuClick={
                isSmallScreen ? handleBurgerMenuClick : null
              }
            />
          )}
          <nav id="nav-bar">
            <ul>
              <li>
                <Link
                  to="/"
                  className={`link ${activeNavItem === "Home" ? "active" : ""}`}
                  onClick={() => {
                    handleNavItemClick("Home");
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                onClick={toggleCategories} // Show Categories on hover
              >
                Categories {displayCategories && <Categories />}{" "}
                {/* Show Categories component */}
              </li>
              <li>
                <Link
                  to="/series"
                  state={{ currentPage: currentPage }}
                  className={`link ${
                    activeNavItem === "Series" ? "active" : ""
                  }`}
                  onClick={() => {
                    handleNavItemClick("Series");
                  }}
                >
                  Series
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  state={{ currentPage: 1 }}
                  className={`link ${
                    activeNavItem === "Movies" ? "active" : ""
                  }`}
                  onClick={() => {
                    handleNavItemClick("Movies");
                  }}
                >
                  Movies
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="login" className="btn" id="loginBtn">
            Connexion
          </Link>
          <Link to="login" className="btn-responsive" id="login-btn-responsive">
            <img src="/assets/icons/login.png" alt="login icon"></img>
          </Link>
        </section>
      </header>
      <section>
        <Outlet />
      </section>
      <footer>
        <section className="footer1">
          <div className="info-responsive">
            <div className="info">
              <Link className="link">Terms of Use</Link>
              <Link className="link">Privacy Policy</Link>
            </div>
            <div className="info">
              <Link to="contact" className="link">
                Contact
              </Link>
              <Link className="link">Site map</Link>
            </div>
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
          <Link to="/">
            <img
              id="logo-footer"
              src="/assets/images/logo.png"
              alt="logo du site"
            />
          </Link>
          <div>© easyPick 2023</div>
        </section>
      </footer>
    </>
  );
}
