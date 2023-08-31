import React from "react";
import "./privacyPolicy.scss";
import ScrollToTopBtn from "../scrollToTopBtn/scrollToTopBtn";

export default function Privacy() {
  return (
    <main className="privacy-policy">
      <div className="first-part">
        <p className="bold">POLITIQUE DE CONFIDENTIALITÉ</p>
        <p className="bold">https://easypickmovies.fr/</p>
        <p>Bilal Mekiri</p>
        <p>Type de site : vitrine</p>
      </div>
      <div>
        <p className="title">Le but de cette politique de confidentialité</p>
        Le but de cette politique de confidentialité est d'informer les
        utilisateurs de notre site des données personnelles que nous
        recueillerons ainsi que les informations suivantes, le cas échéant :
        <ul>
          <li>a. Les données personnelles que nous recueillerons</li>
          <li>b. L’utilisation des données recueillies</li>
          <li>c. Qui a accès aux données recueillies</li>
          <li>d. Les droits des utilisateurs du site</li>
          <li>e. La politique de cookies du site</li>
        </ul>
        Cette politique de confidentialité fonctionne parallèlement aux
        conditions générales d’utilisation de notre site.
      </div>
      <div>
        <p className="title">Lois applicables</p>
        Conformément au Règlement général sur la protection des données (RGPD),
        cette politique de confidentialité est conforme aux règlements suivants.
        Les données à caractère personnel doivent être :
        <ul>
          <li>
            a. traitées de manière licite, loyale et transparente au regard de
            la personne concernée (licéité, loyauté, transparence) ;
          </li>
          <li>
            b. collectées pour des finalités déterminées, explicites et
            légitimes, et ne pas être traitées ultérieurement d'une manière
            incompatible avec ces finalités; le traitement ultérieur à des fins
            archivistiques dans l'intérêt public, à des fins de recherche
            scientifique ou historique ou à des fins statistiques n'est pas
            considéré, conformément à l'article 89, paragraphe 1, comme
            incompatible avec les finalités initiales (limitation des finalités)
            ;
          </li>
          <li>
            c. adéquates, pertinentes et limitées à ce qui est nécessaire au
            regard des finalités pour lesquelles elles sont traitées
            (minimisation des données) ;
          </li>
          <li>
            d. exactes et, si nécessaire, tenues à jour; toutes les mesures
            raisonnables doivent être prises pour que les données à caractère
            personnel qui sont inexactes, eu égard aux finalités pour lesquelles
            elles sont traitées, soient effacées ou rectifiées sans tarder
            (exactitude) ;
          </li>
          <li>
            e. conservées sous une forme permettant l'identification des
            personnes concernées pendant une durée n'excédant pas celle
            nécessaire au regard des finalités pour lesquelles elles sont
            traitées; les données à caractère personnel peuvent être conservées
            pour des durées plus longues dans la mesure où elles seront traitées
            exclusivement à des fins archivistiques dans l'intérêt public, à des
            fins de recherche scientifique ou historique ou à des fins
            statistiques conformément à l'article 89, paragraphe 1, pour autant
            que soient mises en œuvre les mesures techniques et
            organisationnelles appropriées requises par le règlement afin de
            garantir les droits et libertés de la personne concernée (limitation
            de la conservation) ;
          </li>
          <li>
            f. traitées de façon à garantir une sécurité appropriée des données
            à caractère personnel, y compris la protection contre le traitement
            non autorisé ou illicite et contre la perte, la destruction ou les
            dégâts d'origine accidentelle, à l'aide de mesures techniques ou
            organisationnelles appropriées (intégrité et confidentialité).
          </li>
        </ul>
        Le traitement n'est licite que si, et dans la mesure où, au moins une
        des conditions suivantes est remplie :
        <ul>
          <li>
            a. la personne concernée a consenti au traitement de ses données à
            caractère personnel pour une ou plusieurs finalités spécifiques ;
          </li>
          <li>
            b. le traitement est nécessaire à l'exécution d'un contrat auquel la
            personne concernée est partie ou à l'exécution de mesures
            précontractuelles prises à la demande de celle-ci ;
          </li>
          <li>
            c. le traitement est nécessaire au respect d'une obligation légale à
            laquelle le responsable du traitement est soumis ;
          </li>
          <li>
            d. le traitement est nécessaire à la sauvegarde des intérêts vitaux
            de la personne concernée ou d'une autre personne physique ;
          </li>
          <li>
            e. le traitement est nécessaire à l'exécution d'une mission
            d'intérêt public ou relevant de l'exercice de l'autorité publique
            dont est investi le responsable du traitement ;
          </li>
          <li>
            f. le traitement est nécessaire aux fins des intérêts légitimes
            poursuivis par le responsable du traitement ou par un tiers, à moins
            que ne prévalent les intérêts ou les libertés et droits fondamentaux
            de la personne concernée qui exigent une protection des données à
            caractère personnel, notamment lorsque la personne concernée est un
            enfant.
          </li>
        </ul>
        Pour les résidents de l’État de Californie, cette politique de
        confidentialité vise à se conformer à la California Consumer Privacy Act
        (CCPA). S’il y a des incohérences entre ce document et la CCPA, la
        législation de l’État s’appliquera. Si nous constatons des incohérences,
        nous modifierons notre politique pour nous conformer à la loi
        pertinente.
      </div>
      <div>
        <p className="title">Consentement</p>
        Les utilisateurs conviennent qu’en utilisant notre site, ils consentent
        à :
        <ul>
          <li>
            a. les conditions énoncées dans la présente politique de
            confidentialité et
          </li>
          <li>
            b. la collecte, l’utilisation et la conservation des données
            énumérées dans la présente politique.
          </li>
        </ul>
      </div>
      <div>
        <p className="title">Données personnelles que nous collectons</p>
        <p className="sub-title">Données collectées automatiquement</p>
        Lorsque vous visitez et utilisez notre site, nous pouvons
        automatiquement recueillir et conserver les renseignements suivants :
        <ul>
          <li>a. Adresse IP</li>
          <li>b. Liens un utilisateur clique tout en utilisant le site</li>
          <li>c. Contenu que l’utilisateur consulte sur votre site</li>
        </ul>
        <p className="sub-title">
          Données recueillies de façon non automatique
        </p>
        Nous ne collectons pas de données supplémentaires lorsque l’utilisateur
        remplit certaines fonctions sur notre site. Veuillez noter que nous ne
        collectons que les données qui nous aident à atteindre l’objectif énoncé
        dans cette politique de confidentialité. Nous ne recueillerons pas de
        données supplémentaires sans vous en informer au préalable.
      </div>
      <div>
        <p className="title">Comment nous utilisons les données personnelles</p>
        Les données personnelles recueillies sur notre site seront utilisées
        uniquement aux fins précisées dans la présente politique ou indiquées
        sur les pages pertinentes de notre site. Nous n’utiliserons pas vos
        données au-delà de ce que nous divulguerons. Les données que nous
        recueillons automatiquement sont utilisées aux fins suivantes :
        <ul>
          <li>
            a. Les pages visitées sur notre site sont automatiquement
            enregistrées par notre serveur pour analyser la popularité de
            différentes sections de notre site.
          </li>
          <li>
            b.Notre site contient des boutons de redirection vers YouTube. En
            cliquant sur ces boutons, les utilisateurs interagissent avec
            YouTube, qui peut collecter leurs données.
          </li>
          <li>
            c. L'adresse IP de chaque visiteur est automatiquement enregistrée
            par notre serveur. Ceci est une pratique standard nécessaire pour la
            gestion et la sécurité du serveur.
          </li>
        </ul>
      </div>
      <div>
        <p className="title">
          Avec qui nous partageons les données personnelles
        </p>
        <p className="sub-title">Employés</p>
        Nous pouvons divulguer à tout membre de notre organisation les données
        utilisateur dont il a raisonnablement besoin pour réaliser les objectifs
        énoncés dans la présente politique.
        <p className="sub-title">Tierces parties</p>
        Nous pouvons partager les données utilisateur avec les tiers suivants :
        <ul>
          <li>a. YouTube</li>
        </ul>
        Nous pouvons partager les données utilisateur avec des tiers aux fins
        suivantes :
        <ul>
          <li>
            a. Des données peuvent être collectées par YouTube lors de
            l'interaction avec les boutons de bande-annonce; pour plus de
            détails, consultez les termes et conditions de YouTube.
          </li>
        </ul>
        Les tiers ne seront pas en mesure d’accéder aux données des utilisateurs
        au-delà de ce qui est raisonnablement nécessaire pour atteindre
        l’objectif donné.
        <p className="sub-title">Autres divulgations</p>
        Nous nous engageons à ne pas vendre ou partager vos données avec
        d'autres tiers, sauf dans les cas suivants :
        <ul>
          <li>a. si la loi l'exige</li>
          <li>b. si elle est requise pour toute procédure judiciaire</li>
          <li>c. pour prouver ou protéger nos droits légaux</li>
          <li>
            d. à des acheteurs ou des acheteurs potentiels de cette société dans
            le cas où nous cherchons à la vendre la société
          </li>
        </ul>
        Si vous suivez des hyperliens de notre site vers un autre site, veuillez
        noter que nous ne sommes pas responsables et n’avons pas de contrôle sur
        leurs politiques et pratiques de confidentialité.
      </div>
      <div>
        <p className="title">
          Combien de temps nous stockons les données personnelles
        </p>
        Nous ne conservons pas les données des utilisateurs au-delà de ce qui
        est nécessaire pour atteindre les fins pour lesquelles elles sont
        recueillies.
      </div>
      <div>
        <p className="title">
          Comment nous protégeons vos données personnelles
        </p>
        Nous prenons plusieurs mesures pour assurer la protection des données
        des utilisateurs. Premièrement, nous utilisons le protocole HTTPS, qui
        chiffre les données échangées entre le navigateur de l'utilisateur et
        notre serveur, pour prévenir l'interception et la manipulation des
        données pendant la transmission. Deuxièmement, nous utilisons des
        méthodes de sanitation des entrées pour prévenir les attaques par
        injection de code, comme les injections SQL, qui pourraient compromettre
        la sécurité des données. Ces mesures contribuent à assurer la
        confidentialité et l'intégrité des données des utilisateurs pendant leur
        utilisation de notre site. Alors que nous prenons toutes les précautions
        raisonnables pour nous assurer que nos données d’utilisateur sont
        sécurisées et que les utilisateurs sont protégés, il reste toujours du
        risque de préjudice. L’Internet en sa totalité peut être, parfois, peu
        sûr et donc nous sommes incapables de garantir la sécurité des données
        des utilisateurs au-delà de ce qui est raisonnablement pratique.
      </div>
      <div>
        <p className="title">Transferts internationaux de données</p>
        Les données utilisateur peuvent être consultées, traitées ou collectées
        dans les pays suivants : Oui, les données des utilisateurs peuvent être
        traitées ou consultées dans d'autres pays. Par exemple, notre site
        redirige les utilisateurs vers YouTube pour visionner des
        bandes-annonces, et YouTube peut traiter les données des utilisateurs
        dans d'autres pays. De plus, notre fournisseur d'hébergement web peut
        avoir des serveurs ou des installations de sauvegarde situés dans
        d'autres pays, ce qui pourrait entraîner un traitement des données en
        dehors de la France.
      </div>
      <div>
        <p className="title">Mineurs</p>
        Le RGPD précise que les personnes de moins de 15 ans sont considérées
        comme des mineurs aux fins de la collecte de données. Les mineurs
        doivent avoir le consentement d’un représentant légal pour que leurs
        données soient recueillies, traitées et utilisées.
      </div>
      <div>
        <p className="title">Vos droits en tant qu’utilisateur</p>
        En vertu du RGPD, les utilisateurs ont les droits suivants en tant que
        personnes concernées :
        <ul>
          <li>a. droit d’accès</li>
          <li>b. droit de rectification</li>
          <li>c. droit à l’effacement</li>
          <li>d. droit de restreindre le traitement</li>
          <li>e. droit à la portabilité des données</li>
          <li>f. droit d'objection</li>
        </ul>
        Vous trouverez de plus amples informations sur ces droits au chapitre 3
        (art 12-23) du RGPD.
      </div>
      <div>
        <p className="title">
          Comment modifier, supprimer ou contester les données recueillies
        </p>
        Si vous souhaitez que vos renseignements soient supprimés ou modifiés
        d’une façon ou d’une autre, veuillez communiquer avec notre agent de
        protection de la vie privée ici : __________
      </div>
      <div>
        <p className="title">Politique sur les cookies</p>
        Un cookie est un petit fichier, stocké sur le disque dur d’un
        utilisateur par le site Web. Son but est de recueillir des données
        relatives aux habitudes de navigation de l’utilisateur. Nous n’utilisons
        pas de cookies sur notre site.
      </div>
      <div>
        <p className="title">Modifications</p>
        Cette politique de confidentialité peut être modifiée à l’occasion afin
        de maintenir la conformité avec la loi et de tenir compte de tout
        changement à notre processus de collecte de données. Nous recommandons à
        nos utilisateurs de vérifier notre politique de temps à autre pour
        s’assurer qu’ils soient informés de toute mise à jour. Au besoin, nous
        pouvons informer les utilisateurs par courriel des changements apportés
        à cette politique.
      </div>
      <div>
        <p className="title">Contact</p>
        Si vous avez des questions à nous poser, n’hésitez pas à communiquer
        avec nous en utilisant ce qui suit : mekiri70@gmail.com
      </div>
      <div className="date">
        <p>Date d’entrée en vigueur : le 29 août 2023</p>
        <p>© 2002-2023, DocumentsLégaux™ (Sequiter Inc.)</p>
      </div>
      <ScrollToTopBtn />
    </main>
  );
}
