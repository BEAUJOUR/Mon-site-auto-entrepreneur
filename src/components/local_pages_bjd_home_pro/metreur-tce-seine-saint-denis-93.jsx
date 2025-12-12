// src/pages/local/Metreur93.jsx
import React from "react";
import { Helmet } from "react-helmet";

export default function Metreur93() {
  return (
    <>
      <Helmet>
        <title>Métreur TCE Seine-Saint-Denis (93) | BJD-HOME-PRO</title>
        <meta
          name="description"
          content="Métreur TCE en Seine-Saint-Denis (93). BJD-HOME-PRO vous accompagne pour le métré, le chiffrage, l’estimation de travaux, l’agencement intérieur et la menuiserie sur mesure."
        />
        <link
          rel="canonical"
          href="https://www.bjd-home-pro.fr/metreur-tce-seine-saint-denis-93"
        />
      </Helmet>

      <main className="max-w-5xl mx-auto px-6 py-20 text-text-dark">
        {/* ==================== HERO ==================== */}
        <section className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Métreur TCE en Seine-Saint-Denis (93) – BJD-HOME-PRO
          </h1>

          <p className="text-lg leading-relaxed text-text-light max-w-3xl">
            BJD-HOME-PRO intervient dans tout le département de la
            Seine-Saint-Denis (93) pour vos besoins en{" "}
            <strong>métré TCE</strong>,{" "}
            <strong>chiffrage et estimation de travaux</strong>,{" "}
            <strong>plans techniques</strong>,{" "}
            <strong>agencement intérieur</strong> et{" "}
            <strong>menuiserie sur mesure</strong>.
            <br />
            <br />
            L’objectif est de sécuriser vos projets grâce à des{" "}
            <strong>quantitatifs fiables</strong> et un{" "}
            <strong>budget maîtrisé</strong>, avant le lancement des travaux.
          </p>
        </section>

        {/* ==================== PRESTATIONS ==================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Prestations proposées en Seine-Saint-Denis
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-text-light">
            <li>Métré TCE (tous corps d’état)</li>
            <li>Relevés sur site et quantitatifs détaillés</li>
            <li>Analyse de plans architecte et documents techniques</li>
            <li>Chiffrage, estimation et préparation des devis</li>
            <li>Études d’agencement intérieur et menuiserie sur mesure</li>
            <li>
              Accompagnement pour particuliers, architectes et entreprises du
              BTP
            </li>
          </ul>
        </section>

        {/* ==================== POURQUOI ==================== */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4">
            Pourquoi faire appel à BJD-HOME-PRO&nbsp;?
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-text-light">
            <li>Expertise en métré TCE et second œuvre</li>
            <li>Précision, rigueur et réactivité</li>
            <li>Bonne connaissance du terrain en Seine-Saint-Denis (93)</li>
            <li>Accompagnement complet : métré, plans et estimation</li>
          </ul>
        </section>

        {/* ==================== ZONES ==================== */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Zones d’intervention en Seine-Saint-Denis (93)
          </h2>

          <p className="leading-relaxed text-text-light mb-6">
            BJD-HOME-PRO intervient sur l’ensemble du département, notamment
            dans les communes suivantes :
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-10 text-text-light">
            <li>Saint-Denis</li>
            <li>Aubervilliers</li>
            <li>La Courneuve</li>
            <li>Pantin</li>
            <li>Bobigny</li>
            <li>Bondy</li>
            <li>Noisy-le-Sec</li>
            <li>Montreuil</li>
            <li>Drancy</li>
            <li>Le Blanc-Mesnil</li>
          </ul>
        </section>
      </main>
    </>
  );
}
