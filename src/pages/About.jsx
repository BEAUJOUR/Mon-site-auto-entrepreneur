// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Hammer, Ruler, DraftingCompass, ClipboardList } from "lucide-react";
import heroImage from "../assets/logo_bjd.png";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* SECTION HERO – IMAGE ENTIÈRE */}

      {/* SECTION À PROPOS */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            className="text-4xl md:text-5xl font-bold text-text-dark mb-8"
          >
            À propos de{" "}
            <span className="font-title font-semibold text-primary">
              BJD-HOME-PRO
            </span>
          </motion.h2>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            className="text-lg text-text-light leading-relaxed max-w-3xl mx-auto"
          >
            Je suis <strong>Jean Danor Beaujour</strong>, fondateur de{" "}
            <strong>BJD-HOME-PRO</strong>, une structure qui allie savoir-faire
            du bâtiment, précision du métré et innovation dans l’agencement. Mon
            parcours débute en 2007 comme apprenti maçon avant d’évoluer chef
            d’équipe, puis chef de chantier, et enfin spécialiste en menuiserie
            et agencement intérieur. Après une formation de métreur tous corps
            d’état et en dessin 2D/3D, j’ai perfectionné ma maîtrise de la
            conception et du suivi technique de chantier. Aujourd’hui,{" "}
            <strong>BJD-HOME-PRO</strong> incarne une vision : unir l’artisanat,
            la technique et la précision pour des projets modernes, fiables et
            sur mesure.
          </motion.p>
        </div>
      </section>

      {/* SECTION MÉTIER */}
      <section className="bg-secondary py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            className="order-2 md:order-1 text-left"
          >
            <h3 className="text-3xl font-bold text-text-dark mb-4 font-title">
              Un partenaire de confiance pour vos projets
            </h3>
            <p className="text-text-light text-lg leading-relaxed mb-6">
              De l’étude à la pose, BJD-HOME-PRO intervient sur tous types de
              projets d’agencement intérieur, de rénovation ou de transformation
              d’espaces. Chaque chantier est conduit avec sérieux, méthode et
              souci du détail, en respectant les délais et les exigences du
              client.
            </p>

            <ul className="space-y-3 text-text-dark font-medium">
              <li>🏗️ Travaux tous corps d’état – coordination globale</li>
              <li>🪵 Fabrication et pose de mobilier sur mesure</li>
              <li>📐 Métrage, relevés et plans d’exécution</li>
              <li>🏠 Agencement complet d’espaces professionnels ou privés</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            className="order-1 md:order-2"
          >
            <img
              src={heroImage}
              alt="logo BJD PRO"
              className="
      rounded-2xl 
      shadow-xl 
      object-cover 
      w-full 
      h-auto 
      max-h-[65vh]
      transition-transform 
      duration-700 
      hover:scale-[1.02]
    "
              style={{
                transform: `
        perspective(1100px) 
        rotateY(-35deg)   
         
        translateZ(0px)
      `,
                transformStyle: "preserve-3d",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION VALEURS */}
      <section className="bg-white py-20 px-6 text-center">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-semibold text-text-dark mb-8 font-title ">
            Nos valeurs
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <Hammer size={42} className="mx-auto text-primary mb-4" />
              <h4 className="text-xl font-bold mb-2">Savoir-faire</h4>
              <p className="text-text-light">
                Hérité de plus de 15 ans d’expérience terrain, le goût du
                travail bien fait est au cœur de chaque réalisation.
              </p>
            </div>
            <div>
              <Ruler size={42} className="mx-auto text-primary mb-4" />
              <h4 className="text-xl font-bold mb-2">Précision</h4>
              <p className="text-text-light">
                Un travail rigoureux, basé sur le détail, la mesure et la
                fiabilité technique de chaque étape.
              </p>
            </div>
            <div>
              <DraftingCompass
                size={42}
                className="mx-auto text-primary mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Accompagnement</h4>
              <p className="text-text-light">
                Une écoute attentive et un accompagnement personnalisé, de la
                conception à la livraison.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
