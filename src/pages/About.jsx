// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Hammer, Ruler, DraftingCompass, ClipboardList } from "lucide-react";

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
      title: "Métrage & Devis",
      desc: "Relevés précis, calculs rigoureux et estimations détaillées pour une vision claire de votre projet dès le départ.",
      icon: <ClipboardList size={40} className="text-primary" />,
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 22,
        stiffness: 100,
        duration: 0.8,
      },
    }),
  };

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        variants={fadeIn}
        className="bg-white py-20 px-4 text-center"
      >
        <div className="max-w-7xl mx-auto">
          {/* TITRE + INTRO */}
          <motion.h2
            custom={0}
            variants={fadeIn}
            className="text-4xl md:text-5xl font-title font-bold text-text-dark mb-6"
          >
            Polyvalence et passion au service de vos projets
          </motion.h2>

          <motion.p
            custom={1}
            variants={fadeIn}
            className="text-md md:text-lg text-text-light max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Depuis plus de 10 ans, je conçois, fabrique et transforme les
            espaces de vie ou de travail. D’un chantier de rénovation à une
            solution technique sur mesure, j’apporte une vision globale,
            pratique et moderne.
          </motion.p>

          {/* CARTES */}
          <motion.div
            custom={2}
            variants={fadeIn}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
                className="bg-secondary rounded-2xl shadow-card p-6 hover:translate-y-[-5px] transition-all duration-500"
              >
                <div className="mb-4 flex justify-center">{c.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-text-dark mb-2">
                  {c.title}
                </h3>
                <p className="text-base md:text-md text-text-light leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* MON HISTOIRE */}
          <motion.div
            custom={3}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="mt-16 text-left max-w-4xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">
              Mon histoire
            </h3>
            <p className="text-md md:text-lg text-text-light leading-relaxed">
              Tout a commencé dans l’atelier de mon père, artisan menuisier.
              Très jeune, j’ai appris à manier les outils, à comprendre les
              matières et à respecter le travail bien fait. Cette passion pour
              le concret ne m’a jamais quitté. Après plusieurs années dans le
              bâtiment, j’ai élargi mes compétences au dessin technique et à
              l’informatique. Aujourd’hui, je suis fier d’allier tradition
              artisanale et innovation. Mon objectif ? Offrir à mes clients une
              prise en charge complète, humaine et efficace, du premier croquis
              à la livraison finale.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
}
