// src/pages/local/ParisMetreurTCE.jsx
import React from "react";
import { Helmet } from "react-helmet";

export default function ParisMetreurTCE() {
  return (
    <>
      <Helmet>
        <title>Métreur TCE à Paris (75) | BJD-HOME-PRO</title>
        <meta
          name="description"
          content="Métreur TCE à Paris (75). BJD-HOME-PRO intervient pour le métré, le chiffrage, l’estimation de travaux, l’agencement intérieur et la menuiserie sur mesure."
        />
        <link
          rel="canonical"
          href="https://www.bjd-home-pro.fr/paris-metreur-tce"
        />
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-20 text-text-dark">
        {/* ==================== HERO ==================== */}
        <section className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Métreur TCE à Paris (75) – BJD-HOME-PRO
          </h1>

          <p className="text-lg leading-relaxed text-text-light max-w-3xl">
            BJD-HOME-PRO accompagne particuliers, professionnels et entreprises
            du BTP pour leurs projets à Paris (75) grâce à des{" "}
            <strong>métrés TCE précis</strong>, un{" "}
            <strong>chiffrage fiable</strong> et une{" "}
            <strong>estimation réaliste des travaux</strong>.
            <br />
            <br />
            Spécialiste du <strong>second œuvre</strong>, de l’{" "}
            <strong>agencement intérieur</strong> et de la{" "}
            <strong>menuiserie sur mesure</strong>, j’interviens sur l’ensemble
            des arrondissements parisiens.
          </p>
        </section>

        {/* ==================== PRESTATIONS ==================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Prestations proposées à Paris
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-text-light">
            <li>Métré TCE (tous corps d’état)</li>
            <li>Relevés sur site et quantitatifs détaillés</li>
            <li>Analyse de plans architecte et documents techniques</li>
            <li>Chiffrage, estimation et préparation des devis</li>
            <li>Études d’agencement intérieur et menuiserie sur mesure</li>
            <li>
              Conseils techniques pour architectes, artisans et maîtres
              d’ouvrage
            </li>
          </ul>
        </section>

        {/* ==================== POURQUOI ==================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Pourquoi faire appel à BJD-HOME-PRO&nbsp;?
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-text-light">
            <li>Réactivité et interventions rapides dans tout Paris</li>
            <li>Excellente connaissance des contraintes parisiennes</li>
            <li>Rigueur, précision et maîtrise du chiffrage</li>
            <li>Accompagnement fiable pour particuliers et professionnels</li>
          </ul>
        </section>

        {/* ==================== ZONE ==================== */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Zone d’intervention</h2>

          <p className="leading-relaxed text-text-light max-w-3xl">
            BJD-HOME-PRO intervient sur l’ensemble de Paris (75) : Paris Centre,
            Paris Ouest, Paris Est, Paris Nord et Paris Sud, ainsi que dans
            toute l’Île-de-France selon la nature des projets.
          </p>
        </section>
      </main>
    </>
  );
}
