// src/pages/local/Metreur92.jsx
import React from "react";
import { Helmet } from "react-helmet";

export default function Metreur92() {
  return (
    <>
      <Helmet>
        <title>Métreur TCE Hauts-de-Seine (92) | BJD HOME PRO</title>
        <meta
          name="description"
          content="Métreur TCE dans les Hauts-de-Seine (92). Métré précis, quantitatifs fiables, chiffrage et agencement intérieur pour vos projets BTP."
        />
        <link
          rel="canonical"
          href="https://www.bjd-home-pro.fr/metreur-tce-hauts-de-seine-92"
        />
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-20 text-text-dark">
        {/* ==================== HERO ==================== */}
        <section className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Métreur TCE dans les Hauts-de-Seine (92)
          </h1>

          <p className="text-lg leading-relaxed text-text-light max-w-3xl">
            Vous recherchez un{" "}
            <strong>métreur TCE dans les Hauts-de-Seine (92)</strong>
            pour sécuriser votre projet de travaux&nbsp;?
            <br />
            <br />
            <strong>BJD HOME PRO</strong> accompagne particuliers,
            professionnels et entreprises du BTP dans la préparation de leurs
            chantiers grâce à des <strong>métrés précis</strong>, des{" "}
            <strong>quantitatifs fiables</strong> et un{" "}
            <strong>chiffrage clair et exploitable</strong>.
          </p>
        </section>

        {/* ==================== RÔLE DU MÉTREUR ==================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Le rôle d’un métreur TCE pour vos projets
          </h2>

          <p className="leading-relaxed text-text-light mb-6">
            En tant que <strong>métreur Tous Corps d’État</strong>, j’interviens
            dès les phases amont pour analyser les plans, effectuer les relevés
            nécessaires et établir des quantitatifs fiables.
            <br />
            <br />
            Cette approche permet d’anticiper les contraintes techniques,
            d’optimiser les coûts et de sécuriser le budget avant le démarrage
            des travaux.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-text-light">
            <li>Relevés sur site et analyse des documents techniques</li>
            <li>Quantitatifs détaillés tous corps d’état</li>
            <li>Chiffrage cohérent et exploitable</li>
            <li>Aide à la prise de décision avant travaux</li>
          </ul>
        </section>

        {/* ==================== TYPES DE PROJETS ==================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Types de projets pris en charge
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-text-light">
            <li>Rénovation de maisons et d’appartements</li>
            <li>Travaux d’agencement intérieur et menuiserie sur mesure</li>
            <li>Locaux professionnels, bureaux et commerces</li>
            <li>Second œuvre tous corps d’état</li>
          </ul>
        </section>

        {/* ==================== ZONE 92 ==================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Zone d’intervention dans les Hauts-de-Seine (92)
          </h2>

          <p className="leading-relaxed text-text-light max-w-3xl mb-6">
            J’interviens sur l’ensemble du département des Hauts-de-Seine,
            notamment dans les communes suivantes :
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-10 text-text-light">
            <li>Nanterre</li>
            <li>Boulogne-Billancourt</li>
            <li>Courbevoie</li>
            <li>La Défense</li>
            <li>Neuilly-sur-Seine</li>
            <li>Levallois-Perret</li>
            <li>Colombes</li>
            <li>Asnières-sur-Seine</li>
          </ul>
        </section>

        {/* ==================== POURQUOI ==================== */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Pourquoi faire appel à BJD HOME PRO ?
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-text-light">
            <li>Méthode rigoureuse de métreur TCE</li>
            <li>Compréhension globale des contraintes chantier</li>
            <li>Chiffrage fiable pour sécuriser votre budget</li>
            <li>
              Accompagnement professionnel pour particuliers et entreprises BTP
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
