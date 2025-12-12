import React from "react";
import { Helmet } from "react-helmet";

export default function Metreur77() {
  return (
    <>
      <Helmet>
        <title>Métreur TCE Seine-et-Marne (77) | BJD-HOME-PRO</title>
        <meta
          name="description"
          content="Métreur TCE en Seine-et-Marne (77) – BJD-HOME-PRO : métré, estimation, plans techniques, agencement intérieur, menuiserie et études BTP. Intervention sur tout le département 77."
        />
        <meta
          name="keywords"
          content="métreur 77, métreur Seine-et-Marne, métré travaux 77, estimation BTP 77, métreur TCE 77, agencement 77, BJD-HOME-PRO"
        />
      </Helmet>

      <main className="p-6 max-w-3xl mx-auto local-page">
        {/* HERO */}
        <section className="local-hero">
          <h1>Métreur TCE en Seine-et-Marne (77) – BJD-HOME-PRO</h1>
          <p>
            J&apos;interviens dans tout le département de la Seine-et-Marne (77)
            pour vos besoins en <strong>métré TCE</strong>,{" "}
            <strong>estimation de travaux</strong>,{" "}
            <strong>agencement intérieur</strong> et{" "}
            <strong>menuiserie sur-mesure</strong>.
          </p>
        </section>

        {/* PRESTATIONS */}
        <section>
          <h2>Prestations proposées en Seine-et-Marne</h2>
          <ul>
            <li>Métré TCE (tous corps d&apos;état)</li>
            <li>Relevés sur site et quantitatifs précis</li>
            <li>Plans techniques, croquis et notes d&apos;agencement</li>
            <li>Estimations et aides à la préparation de devis</li>
            <li>Études menuiserie intérieure et agencement sur-mesure</li>
            <li>Accompagnement pour artisans, architectes et particuliers</li>
          </ul>
        </section>

        {/* POURQUOI */}
        <section>
          <h2>Pourquoi choisir BJD-HOME-PRO&nbsp;?</h2>
          <ul>
            <li>Expertise en métré TCE et second œuvre</li>
            <li>Précision, rigueur et réactivité</li>
            <li>Connaissance du tissu local du 77</li>
            <li>Accompagnement sur l&apos;ensemble du projet</li>
          </ul>
        </section>

        {/* ZONES */}
        <section>
          <h2>Zones d&apos;intervention dans le 77</h2>
          <p>Intervention dans tout le département de Seine-et-Marne :</p>
          <ul>
            <li>Meaux</li>
            <li>Melun</li>
            <li>Chelles</li>
            <li>Pontault-Combault</li>
            <li>Lognes, Noisiel, Torcy, Bussy-Saint-Georges</li>
            <li>Provins, Coulommiers, Fontainebleau</li>
          </ul>
        </section>
      </main>
    </>
  );
}
