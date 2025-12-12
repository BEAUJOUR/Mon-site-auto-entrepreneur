import React from "react";
import { Helmet } from "react-helmet";

export default function Metreur93() {
  return (
    <>
      <Helmet>
        <title>Métreur TCE Seine-Saint-Denis (93) | BJD-HOME-PRO</title>
        <meta
          name="description"
          content="Métreur TCE en Seine-Saint-Denis (93) – BJD-HOME-PRO : métré, estimation de travaux, plans techniques, menuiserie sur mesure et agencement intérieur. Intervention rapide dans tout le 93."
        />
        <meta
          name="keywords"
          content="métreur 93, métreur Seine-Saint-Denis, métré travaux 93, estimation BTP 93, métreur TCE 93, agencement 93, BJD-HOME-PRO"
        />
      </Helmet>

      <main className="p-6 max-w-3xl mx-auto local-page">
        {/* HERO */}
        <section className="local-hero">
          <h1>Métreur TCE en Seine-Saint-Denis (93) – BJD-HOME-PRO</h1>
          <p>
            J&apos;interviens dans tout le département du{" "}
            <strong>Seine-Saint-Denis (93)</strong> pour vos besoins en métré
            TCE, chiffrage, plans techniques, menuiserie intérieure et
            agencement sur-mesure.
          </p>
        </section>

        {/* PRESTATIONS */}
        <section>
          <h2>Prestations proposées en Seine-Saint-Denis</h2>
          <ul>
            <li>Métré TCE (tous corps d&apos;état)</li>
            <li>Relevés sur site et quantitatifs détaillés</li>
            <li>Plans techniques, croquis et notes d&apos;agencement</li>
            <li>Estimation, préparation de devis et analyse budgétaire</li>
            <li>Études menuiserie intérieure &amp; agencement sur-mesure</li>
            <li>
              Accompagnement pour particuliers, architectes et entreprises du
              BTP
            </li>
          </ul>
        </section>

        {/* POURQUOI */}
        <section>
          <h2>Pourquoi faire appel à BJD-HOME-PRO&nbsp;?</h2>
          <ul>
            <li>Expertise en métré TCE et second œuvre</li>
            <li>Précision, réactivité et sérieux</li>
            <li>Connaissance du terrain en Seine-Saint-Denis</li>
            <li>Accompagnement complet : métré, plans, estimation</li>
          </ul>
        </section>

        {/* ZONES */}
        <section>
          <h2>Zones d&apos;intervention dans le 93</h2>
          <p>Intervention dans tout le département du 93 :</p>
          <ul>
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
