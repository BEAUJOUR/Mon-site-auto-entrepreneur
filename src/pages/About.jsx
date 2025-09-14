// src/components/About.jsx

import React from "react";
import Footer from "../components/Footer";
import { Hammer, Ruler, DraftingCompass, Globe } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Agencement intérieur",
      desc: "Pose de cloisons, faux plafonds, isolation, optimisation de l’espace. Chaque projet est pensé pour maximiser confort, esthétique et fonctionnalité.",
      icon: <Hammer size={40} className="text-primary" />,
    },
    {
      title: "Mobilier sur mesure",
      desc: "Cuisine, dressing, meubles personnalisés selon vos besoins. Chaque pièce est conçue avec précision et souci du détail.",
      icon: <Ruler size={40} className="text-primary" />,
    },
    {
      title: "Conception & dessin 2D/3D",
      desc: "Plans techniques, rendus 3D réalistes, relevés précis — je donne vie à vos idées avant même le premier coup de marteau.",
      icon: <DraftingCompass size={40} className="text-primary" />,
    },
    {
      title: "Développement Web",
      desc: "Sites vitrines, outils métier, présence digitale professionnelle. J’accompagne les artisans et indépendants dans leur transition numérique.",
      icon: <Globe size={40} className="text-primary" />,
    },
  ];

  return (
    <>
      <section className="bg-white py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-text-dark mb-6">Polyvalence et passion au service de vos projets</h2>
          <p className="text-text-light max-w-3xl mx-auto mb-12 text-lg">
            Depuis plus de 10 ans, je conçois, fabrique et transforme les espaces de vie ou de travail. D’un chantier de rénovation à une application web sur-mesure, j’apporte une vision globale, pratique et moderne.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((c) => (
              <div key={c.title} className="bg-secondary rounded-2xl shadow-card p-6 hover:translate-y-[-5px] transition">
                <div className="mb-4 flex justify-center">{c.icon}</div>
                <h3 className="text-xl font-semibold text-text-dark mb-2">{c.title}</h3>
                <p className="text-text-light text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-left max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text-dark mb-4">Mon histoire</h3>
            <p className="text-text-light text-base leading-relaxed">
              Tout a commencé dans l’atelier de mon père, artisan menuisier. Très jeune, j’ai appris à manier les outils, à comprendre les matières et à respecter le travail bien fait. Cette passion pour le concret ne m’a jamais quitté. Après plusieurs années dans le bâtiment, j’ai élargi mes compétences au dessin technique et à l’informatique. Aujourd’hui, je suis fier d’allier tradition artisanale et innovation numérique. Mon objectif ? Offrir à mes clients une prise en charge complète, humaine et efficace, du premier croquis à la livraison finale.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
