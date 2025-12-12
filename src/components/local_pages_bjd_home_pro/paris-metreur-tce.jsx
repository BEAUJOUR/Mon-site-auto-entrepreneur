import React from "react";
import { Helmet } from "react-helmet";

export default function ParisMetreurTCE() {
  return (
    <>
      <Helmet>
        <title>Métreur TCE à Paris | BJD-HOME-PRO</title>
        <meta
          name="description"
          content="Métreur TCE à Paris – BJD-HOME-PRO : métré, estimation, plans techniques, agencement intérieur, menuiserie sur mesure et études BTP. Intervention rapide dans tout Paris (75) et l'Île-de-France."
        />
        <meta
          name="keywords"
          content="métreur Paris, métreur TCE Paris, métré travaux Paris, estimation BTP Paris, agencement intérieur Paris, BJD-HOME-PRO"
        />
      </Helmet>

      <main className="p-6 max-w-3xl mx-auto local-page">
        <section className="local-hero">
          <h1>Métreur TCE à Paris – BJD-HOME-PRO</h1>
          <p>
            Spécialiste du <strong>métré TCE</strong>, de l&apos;
            <strong>agencement intérieur</strong> et de l&apos;
            <strong>estimation de travaux BTP</strong>, BJD-HOME-PRO intervient
            dans tous les arrondissements de Paris et en Île-de-France.
          </p>
        </section>

        <section>
          <h2>Prestations proposées à Paris</h2>
          <ul>
            <li>Métré TCE (tous corps d&apos;état)</li>
            <li>Quantitatifs &amp; relevés précis sur site</li>
            <li>Estimations et devis détaillés</li>
            <li>Plans techniques, croquis et notes d&apos;agencement</li>
            <li>Études menuiserie intérieure &amp; agencement sur mesure</li>
            <li>
              Conseils techniques pour architectes, artisans et maîtres
              d&apos;ouvrage
            </li>
          </ul>
        </section>

        <section>
          <h2>Pourquoi faire appel à BJD-HOME-PRO&nbsp;?</h2>
          <ul>
            <li>Réactivité et intervention rapide dans tout Paris</li>
            <li>Expertise en rénovation, agencement et second œuvre</li>
            <li>Rigueur, précision et maîtrise du chiffrage</li>
            <li>Accompagnement fiable pour particuliers et professionnels</li>
          </ul>
        </section>

        <section>
          <h2>Zone d&apos;intervention</h2>
          <p>
            Intervention dans l&apos;ensemble de Paris (75) : Paris Centre,
            Paris Ouest, Paris Est, Paris Nord, Paris Sud, ainsi que toute
            l&apos;Île-de-France.
          </p>
        </section>
      </main>
    </>
  );
}
