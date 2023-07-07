import React from "react";
import "../../components/resetCSS/reset.scss";
import "./home.scss";
import Slider from "../../components/autoSlider/slider.js";

export default function Home() {
  return (
    <main className="home">
      <section className="main">
        <section className="intro">
          <h1 className="title">
            Trouvez des films & séries adaptées à vos goûts
          </h1>
          <div className="search-bar">
            <img
              className="search-icon"
              src="/assets/icons/magnifiying-glass.png"
              alt=""
            />
            <input
              className="search-input"
              type="text"
              name="search-bar"
              id="search-bar"
              placeholder="Chercher"
            ></input>
          </div>

          <p className="description">
            Bienvenue sur notre site de streaming de films et séries ! Facilitez
            votre recherche et découvrez des contenus passionnants grâce à notre
            interface conviviale. Utilisez nos filtres puissants pour trouver le
            film ou la série qui correspond à vos goûts. Consultez les synopsis
            détaillés et regardez les bandes-annonces pour prendre une décision
            éclairée. Créez un compte pour partager vos avis et recommandations
            avec la communauté. Rejoignez-nous et plongez dans un univers infini
            de divertissement ! Profitez d'une expérience utilisateur optimale
            avec une navigation fluide et intuitive. Notre vaste bibliothèque
            vous offre un choix illimité de films et de séries captivants, des
            dernières sorties aux classiques intemporels. Explorez des genres
            variés, des thrillers palpitants aux comédies hilarantes en passant
            par les drames émouvants. Merci de nous avoir choisis comme votre
            destination ultime pour le divertissement cinématographique.
            Préparez-vous à vivre des émotions intenses et des moments
            mémorables, juste à quelques clics de souris.
          </p>
        </section>
        <div className="slider1">
          <Slider />
        </div>
        <section className="trending">
          <h2>Les plus populaires</h2>
          <section className="content-container">
            <div className="content">
              <img src="/assets/images/fastX.jpg" alt="" />
              <p className="info">Fast X 142m</p>
            </div>
            <div className="content">
              <img src="/assets/images/John-Wick-trailer.jpg" alt="" />
              <p className="info">John Wick: Chapter 4 120m</p>
            </div>
            <div className="content">
              <img src="/assets/images/chainSawMan.jpg" alt="" />
              <p className="info">Chainsaw Man SS1 -EPS 12</p>
            </div>
            <div className="content">
              <img src="/assets/images/missing.jpg" alt="" />
              <p className="info">Missing: Dead or Alive SS 1 - EPS 4 1h00</p>
            </div>
            <div className="content">
              <img src="/assets/images/muted.jpg" alt="" />
              <p className="info">Muted SS1-EPS 6</p>
            </div>
            <div className="content">
              <img src="/assets/images/mario.jpg" alt="" />
              <p className="info">The Super Mario Bros. Movie 92m</p>
            </div>
          </section>
          <section className="content-container">
            <div className="content">
              <img src="/assets/images/platonic.jpg" alt="" />
              <p className="info">Platonic SS1-EPS 3</p>
            </div>
            <div className="content">
              <img src="/assets/images/guardians of the galaxy.jpg" alt="" />
              <p className="info">Guardians of the Galaxy Volume 3 150m</p>
            </div>
            <div className="content">
              <img src="/assets/images/the covenant.jpg" alt="" />
              <p className="info">The Covenant 123m</p>
            </div>
            <div className="content">
              <img src="/assets/images/jujutsu.jpg" alt="" />
              <p className="info">Jujutsu Kaisen 1h00</p>
            </div>
            <div className="content">
              <img src="/assets/images/the mother.jpg" alt="" />
              <p className="info">The Mother 115m</p>
            </div>
            <div className="content">
              <img src="/assets/images/tocatchakiller.jpg" alt="" />
              <p className="info">To Catch a Killer 119m</p>
            </div>
          </section>
        </section>
        <section className="movies">
          <h2>Films sortis récemment</h2>
          <section className="content-container">
            <div className="content">
              <img src="/assets/images/noise.jpg" alt="" />
              <p className="info">Noise 142m</p>
            </div>
            <div className="content">
              <img src="/assets/images/scream6.jpg" alt="" />
              <p className="info">Scream VI 120m</p>
            </div>
            <div className="content">
              <img src="/assets/images/Black Knight.jpg" alt="" />
              <p className="info">Black Knight 100min</p>
            </div>
            <div className="content">
              <img src="/assets/images/Death Roulette.jpg" alt="" />
              <p className="info">Death Roulette 110min</p>
            </div>
            <div className="content">
              <img src="/assets/images/muted.jpg" alt="" />
              <p className="info">Muted SS1 - EPS 6</p>
            </div>
            <div className="content">
              <img src="/assets/images/mario.jpg" alt="" />
              <p className="info">The Super Mario Bros. Movie 92m</p>
            </div>
          </section>
        </section>
        <section className="series">
          <h2>Nouvelles Séries</h2>
          <section className="content-container">
            <div className="content">
              <img src="/assets/images/Steel Town Murdereers.jpg" alt="" />
              <p className="info">Steel Town Murdereers SS1</p>
            </div>
            <div className="content">
              <img src="/assets/images/Attack On Titan.jpg" alt="" />
              <p className="info">Attack On Titan SS3</p>
            </div>
            <div className="content">
              <img src="/assets/images/Chimp Empire.jpg" alt="" />
              <p className="info">Chimp Empire SS1 -EPS 12</p>
            </div>
            <div className="content">
              <img
                src="/assets/images/Demon Slayer Kimetsu no Yaiba.jpg"
                alt=""
              />
              <p className="info">Demon Slayer Kimetsu no Yaiba</p>
            </div>
            <div className="content">
              <img src="/assets/images/The last Thing he told me.jpg" alt="" />
              <p className="info">The last Thing he told me SS1 - EPS 6</p>
            </div>
            <div className="content">
              <img src="/assets/images/Nier automata.jpg" alt="" />
              <p className="info">Nier automata</p>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
