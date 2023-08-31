import React from "react";
import "./termsOfuse.scss";
import ScrollToTopBtn from "../scrollToTopBtn/scrollToTopBtn";

export default function Terms() {
  return (
    <main className="privacy-policy">
      <div className="first-part">
        <h1>CONDITIONS GÉNÉRALES</h1>
        <p>
          Les présentes conditions générales régissent l’utilisation de ce site
          https://easypickmovies.fr/.
        </p>
        <p>Ce site appartient et est géré par Bilal Mekiri</p>
        <p>
          En utilisant ce site, vous indiquez que vous avez lu et compris les
          conditions d’utilisation et que vous acceptez de les respecter en tout
          temps.
        </p>
        <p>Type de site : vitrine</p>
      </div>
      <div>
        <h2 className="title">Le but de cette politique de confidentialité</h2>
        <p>
          Le but de cette politique de confidentialité est d'informer les
          utilisateurs de notre site des données personnelles que nous
          recueillerons ainsi que les informations suivantes, le cas échéant :
        </p>
      </div>
      <div>
        <h2 className="title">Limitation de responsabilité</h2>
        <p>
          Bilal Mekiri ou l’un de ses employés sera tenu responsable de tout
          problème découlant de ce site. Néanmoins, Bilal Mekiri et ses employés
          ne seront pas tenus responsables de tout problème découlant de toute
          utilisation irrégulière de ce site.
        </p>
      </div>
      <div>
        <h2 className="title">Indemnité</h2>
        <p>
          En tant qu’utilisateur, vous indemnisez par les présentes Bilal Mekiri
          de toute responsabilité, de tout coût, de toute cause d’action, de
          tout dommage ou de toute dépense découlant de votre utilisation de ce
          site ou de votre violation de l’une des dispositions énoncées dans le
          présent document.
        </p>
      </div>
      <div>
        <h2 className="title">Lois applicables</h2>
        <p>
          Ce document est soumis aux lois applicables en France et vise à se
          conformer à ses règles et règlements nécessaires. Cela inclut la
          réglementation à l’échelle de l’UE énoncée dans le RGPD.
        </p>
      </div>
      <div>
        <h2 className="title">Divisibilité</h2>
        <p>
          Si, à tout moment, l’une des dispositions énoncées dans le présent
          document est jugée incompatible ou invalide en vertu des lois
          applicables, ces dispositions seront considérées comme nulles et
          seront retirées du présent document. Toutes les autres dispositions ne
          seront pas touchées par les lois et le reste du document sera toujours
          considéré comme valide.
        </p>
      </div>
      <div>
        <h2 className="title">Modifications</h2>
        <p>
          Ces conditions générales peuvent être modifiées de temps à autre afin
          de maintenir le respect de la loi et de refléter tout changement à la
          façon dont nous gérons notre site et la façon dont nous nous attendons
          à ce que les utilisateurs se comportent sur notre site. Nous
          recommandons à nos utilisateurs de vérifier ces conditions générales
          de temps à autre pour s’assurer qu’ils sont informés de toute mise à
          jour. Au besoin, nous informerons les utilisateurs par courriel des
          changements apportés à ces conditions ou nous afficherons un avis sur
          notre site.
        </p>
      </div>
      <div>
        <h2 className="title">Contact</h2>
        <p>
          Veuillez communiquer avec nous si vous avez des questions ou des
          préoccupations. Nos coordonnées sont les suivantes :
          mekiri70@gmail.com
        </p>
      </div>
      <div className="date">
        <p>Date d’entrée en vigueur : le 29 août 2023</p>
        <p>© 2002-2023, DocumentsLégaux™ (Sequiter Inc.)</p>
      </div>
      <ScrollToTopBtn />
    </main>
  );
}
