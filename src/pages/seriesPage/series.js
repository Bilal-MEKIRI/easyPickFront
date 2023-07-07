import React from "react";
import "../../components/resetCSS/reset.scss";
import "./series.scss";

export default function Series() {
  return (
    <main className="series">
      <section className="main">
        <section className="intro">
          <h1 className="title">Trouvez votre série préférée</h1>
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
              <img src="/assets/images/Black Snow.jpg" alt="" />
              <p className="info">Black Snow SS2 - EPS 5</p>
            </div>
            <div className="content">
              <img src="/assets/images/Gotham Knights.jpg" alt="" />
              <p className="info">Gotham Knights SS1 - EPS 8</p>
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
              <img src="/assets/images/Kaleidoscope.jpg" alt="" />
              <p className="info">Kaleidoscope SS1 - EPS 9</p>
            </div>
          </section>
          <section className="content-container">
            <div className="content">
              <img src="/assets/images/platonic.jpg" alt="" />
              <p className="info">Platonic SS1-EPS 3</p>
            </div>
            <div className="content">
              <img src="/assets/images/Shrinking.jpg" alt="" />
              <p className="info">Shrinking SS1 - EPS 14</p>
            </div>
            <div className="content">
              <img src="/assets/images/the covenant.jpg" alt="" />
              <p className="info">The Covenant</p>
            </div>
            <div className="content">
              <img src="/assets/images/The Snow Girl.jpg" alt="" />
              <p className="info">The Snow Girl SS1 - EPS 8</p>
            </div>
            <div className="content">
              <img src="/assets/images/the mother.jpg" alt="" />
              <p className="info">The Mother</p>
            </div>
            <div className="content">
              <img src="/assets/images/The Watchful Eye.jpg" alt="" />
              <p className="info">The Watchful Eye</p>
            </div>
          </section>
          <section className="content-container">
            <div className="content">
              <img src="/assets/images/Decoy.jpg" alt="" />
              <p className="info">Decoy SS1 - EPS 10</p>
            </div>
            <div className="content">
              <img src="/assets/images/Duty After School.jpg" alt="" />
              <p className="info">Duty After School SS1 - EPS 5</p>
            </div>
            <div className="content">
              <img src="/assets/images/Outlast.jpg" alt="" />
              <p className="info">Outlast SS1 - EPS 11</p>
            </div>
            <div className="content">
              <img src="/assets/images/Air.jpg" alt="" />
              <p className="info">Air SS1 - EPS 4</p>
            </div>
            <div className="content">
              <img src="/assets/images/avatar.jpg" alt="" />
              <p className="info">Avatar SS1 - EPS 9</p>
            </div>
            <div className="content">
              <img src="/assets/images/War Sailor.jpg" alt="" />
              <p className="info">War Sailor SS2 - EPS 5</p>
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
