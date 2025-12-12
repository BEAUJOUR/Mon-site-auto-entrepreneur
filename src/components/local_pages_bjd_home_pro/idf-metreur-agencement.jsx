// src/pages/local/IDFMetreurAgencement.jsx
import React from "react";

export default function IDFMetreurAgencement() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 text-text-dark">
      {/* ==================== HERO ==================== */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Métreur &amp; agencement intérieur en Île-de-France
        </h1>

        <p className="text-lg leading-relaxed text-text-light max-w-3xl">
          J’interviens sur toute l’Île-de-France pour vos projets d’
          <strong>agencement intérieur</strong> et de{" "}
          <strong>menuiserie sur mesure</strong> : étude, relevés, métré,
          conception, chiffrage et accompagnement technique, avec une approche
          précise et orientée résultat.
        </p>
      </section>

      {/* ==================== INTERLOCUTEUR UNIQUE ==================== */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">
          Un interlocuteur unique pour vos projets en Île-de-France
        </h2>

        <p className="leading-relaxed text-text-light mb-6">
          En tant que <strong>métreur TCE</strong> spécialisé en menuiserie
          intérieure et agencement, je sécurise votre projet avec une méthode
          claire : relevés précis, quantitatifs, estimation réaliste, et
          accompagnement dans les choix techniques.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-text-light">
          <li>Métreur TCE orienté agencement / menuiserie intérieure</li>
          <li>
            Optimisation d’espaces : cuisines, dressings, rangements, bureaux,
            locaux professionnels
          </li>
          <li>
            Travail collaboratif avec architectes, décorateurs, artisans et
            entreprises BTP
          </li>
          <li>Relevés, quantitatifs, notes techniques et estimations</li>
        </ul>
      </section>

      {/* ==================== PRESTATIONS ==================== */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">Prestations proposées</h2>

        <ul className="list-disc pl-6 space-y-2 text-text-light">
          <li>Métré complet TCE ou spécialisé menuiserie/agencement</li>
          <li>Analyse des plans architecte et CCTP</li>
          <li>Étude de faisabilité et optimisation du budget</li>
          <li>
            Conception : plans, croquis techniques, modélisation si besoin
          </li>
          <li>Vérification des éléments et cohérence avant fabrication</li>
        </ul>
      </section>

      {/* ==================== ZONES ==================== */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">
          Zones d’intervention en Île-de-France
        </h2>

        <p className="leading-relaxed text-text-light mb-6">
          Intervention sur l’ensemble de la région Île-de-France, selon la
          nature du projet et les contraintes chantier.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-10 text-text-light">
          <li>Paris (75)</li>
          <li>Seine-et-Marne (77)</li>
          <li>Yvelines (78)</li>
          <li>Essonne (91)</li>
          <li>Hauts-de-Seine (92)</li>
          <li>Seine-Saint-Denis (93)</li>
          <li>Val-de-Marne (94)</li>
          <li>Val-d’Oise (95)</li>
        </ul>
      </section>

      {/* ==================== POURQUOI NOUS ==================== */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Pourquoi choisir BJD HOME PRO ?
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-text-light">
          <li>
            Expertise en agencement intérieur et menuiserie sur mesure, avec un
            niveau de finition exigeant
          </li>
          <li>
            Méthode de métreur TCE : précision, rigueur, quantitatifs fiables,
            chiffrage cohérent
          </li>
          <li>
            Accompagnement clair du premier contact jusqu’au chiffrage final
          </li>
          <li>
            Approche professionnelle pour particuliers, architectes et
            entreprises du BTP
          </li>
        </ul>
      </section>
    </main>
  );
}
