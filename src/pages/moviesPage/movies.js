import React from "react";
import "../../components/resetCSS/reset.scss";
import "./movies.scss";

export default function Movies() {
  return (
    <main className="movies">
      <section className="main">
        <section className="intro">
          <h1 className="title">Trouvez votre film préférée</h1>
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
        </section>
        <section className="pages">
          <div className="page-number">1</div>
          <div className="page-number">2</div>
          <div className="page-number">3</div>
          <div className="page-number" id="next-page">
            {">"}
          </div>
        </section>
        <section className="trending">
          <h2>Les plus populaires</h2>
          <section className="content-container">
            <div className="content">
              <img src="/assets/images/The Mount 2.jpg" alt="" />
              <p className="info">The Mount 2 - 142m</p>
            </div>
            <div className="content">
              <img src="/assets/images/robots.jpg" alt="" />
              <p className="info">robots 120m</p>
            </div>
            <div className="content">
              <img src="/assets/images/Rally Road Racers.jpg" alt="" />
              <p className="info">Rally Road Racers 110m</p>
            </div>
            <div className="content">
              <img src="/assets/images/One Ranger.jpg" alt="" />
              <p className="info">One Ranger 100</p>
            </div>
            <div className="content">
              <img src="/assets/images/My Everest.jpg" alt="" />
              <p className="info">My Everest 130m</p>
            </div>
            <div className="content">
              <img src="/assets/images/mario.jpg" alt="" />
              <p className="info">The Super Mario Bros. Movie 92m</p>
            </div>
          </section>
          <section className="content-container">
            <div className="content">
              <img src="/assets/images/Hunger.jpg" alt="" />
              <p className="info">Hunger 130m</p>
            </div>
            <div className="content">
              <img src="/assets/images/guardians of the galaxy.jpg" alt="" />
              <p className="info">Guardians of the Galaxy Volume 3 150m</p>
            </div>
            <div className="content">
              <img src="/assets/images/65.jpg" alt="" />
              <p className="info">65 123m</p>
            </div>
            <div className="content">
              <img src="/assets/images/Hypnotic.jpg" alt="" />
              <p className="info">Hypnotic</p>
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
          <section className="content-container">
            <div className="content">
              <img src="/assets/images/Dead Shot.jpg" alt="" />
              <p className="info">Dead Shot 100m</p>
            </div>
            <div className="content">
              <img src="/assets/images/BlackBerry.jpg" alt="" />
              <p className="info">BlackBerry 150m</p>
            </div>
            <div className="content">
              <img src="/assets/images/the covenant.jpg" alt="" />
              <p className="info">The Covenant 123m</p>
            </div>
            <div className="content">
              <img src="/assets/images/Air.jpg" alt="" />
              <p className="info">Air</p>
            </div>
            <div className="content">
              <img src="/assets/images/avatar.jpg" alt="" />
              <p className="info">Avatar 150m</p>
            </div>
            <div className="content">
              <img src="/assets/images/Champions.jpg" alt="" />
              <p className="info">Champions 119m</p>
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
              <img src="/assets/images/Plane.jpg" alt="" />
              <p className="info">Plane 100m</p>
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
        <section className="pages">
          <div className="page-number">1</div>
          <div className="page-number">2</div>
          <div className="page-number">3</div>
          <div className="page-number" id="next-page">
            {">"}
          </div>
        </section>
      </section>
    </main>
  );
}
