// src/pages/local/Metreur77.jsx
import React from "react";
import { Helmet } from "react-helmet";

export default function Metreur77() {
  return (
    <>
      <Helmet>
        <title>Métreur TCE Seine-et-Marne (77) | BJD-HOME-PRO</title>
        <meta
          name="description"
          content="Métreur TCE en Seine-et-Marne (77). BJD-HOME-PRO vous accompagne pour le métré, l’estimation de travaux, l’agencement intérieur et la menuiserie sur mesure. Intervention sur tout le département 77."
        />
        <link
          rel="canonical"
          href="https://www.bjd-home-pro.fr/metreur-tce-seine-et-marne-77"
        />
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-20 text-text-dark">
        {/* ==================== HERO ==================== */}
        <section className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Métreur TCE en Seine-et-Marne (77) – BJD-HOME-PRO
          </h1>

          <p className="text-lg leading-relaxed text-text-light max-w-3xl">
            BJD-HOME-PRO intervient dans tout le département de la
            Seine-et-Marne (77) pour vos besoins en <strong>métré TCE</strong>,{" "}
            <strong>estimation de travaux</strong>,{" "}
            <strong>agencement intérieur</strong> et{" "}
            <strong>menuiserie sur mesure</strong>.
            <br />
            <br />
            L’objectif : sécuriser vos projets grâce à des{" "}
            <strong>quantitatifs précis</strong> et un{" "}
            <strong>chiffrage clair et exploitable</strong>.
          </p>
        </section>

        {/* ==================== PRESTATIONS ==================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Prestations proposées en Seine-et-Marne
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-text-light">
            <li>Métré TCE (tous corps d’état)</li>
            <li>Relevés sur site et quantitatifs détaillés</li>
            <li>Analyse de plans architecte et documents techniques</li>
            <li>Estimations et aide à la préparation des devis</li>
            <li>Études d’agencement intérieur et menuiserie sur mesure</li>
            <li>Accompagnement pour artisans, architectes et particuliers</li>
          </ul>
        </section>

        {/* ==================== POURQUOI ==================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Pourquoi choisir BJD-HOME-PRO&nbsp;?
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-text-light">
            <li>Expertise en métré TCE et second œuvre</li>
            <li>Précision, rigueur et méthodologie professionnelle</li>
            <li>Connaissance du tissu local en Seine-et-Marne (77)</li>
            <li>Accompagnement fiable sur l’ensemble du projet</li>
          </ul>
        </section>

        {/* ==================== ZONES ==================== */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Zones d’intervention en Seine-et-Marne (77)
          </h2>

          <p className="leading-relaxed text-text-light mb-6">
            BJD-HOME-PRO intervient sur l’ensemble du département, notamment
            dans les secteurs suivants :
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-10 text-text-light">
            <li>Meaux</li>
            <li>Melun</li>
            <li>Chelles</li>
            <li>Pontault-Combault</li>
            <li>Lognes</li>
            <li>Noisiel</li>
            <li>Torcy</li>
            <li>Bussy-Saint-Georges</li>
            <li>Provins</li>
            <li>Coulommiers</li>
            <li>Fontainebleau</li>
          </ul>
        </section>
      </main>
    </>
  );
}
