// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Hammer, Ruler, DraftingCompass } from "lucide-react";
import heroImage from "../assets/logo_bjd.png";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-[55vh] flex items-center justify-center bg-gradient-to-b from-black/70 to-black/40 overflow-hidden">
        <img
          src={heroImage}
          alt="BJD-HOME-PRO"
          className="absolute inset-0 w-full h-full object-contain opacity-10"
        />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl font-title font-bold tracking-wide">
            À propos de BJD-HOME-PRO
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg opacity-90">
            Expertise, précision et excellence au service de vos projets.
          </p>
        </motion.div>
      </section>

      {/* ===== SECTION BIO ===== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* TEXT */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-text-dark font-title">
              Agencement et Métré
            </h2>

            <p className="text-lg text-text-light leading-relaxed">
              Je suis <strong>Jean Danor Beaujour</strong>, fondateur de{" "}
              <strong>BJD-HOME-PRO</strong>. J’accompagne particuliers,
              architectes et entreprises grâce à une expertise qui allie
              précision du métré, maîtrise technique du bâtiment et sens du
              détail dans l’agencement intérieur.
            </p>

            <p className="text-lg text-text-light leading-relaxed">
              Fort d’une expérience confirmée et d’une formation spécialisée en{" "}
              <strong>métré TCE</strong>, je garantis des interventions fiables,
              documentées et adaptées à chaque projet, du relevé initial à la
              mise en œuvre finale.
            </p>
          </motion.div>

          {/* IMAGE — VERSION 3D PERSPECTIVE */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            className="flex justify-center"
          >
            <img
              src={heroImage}
              alt="logo BJD HOME PRO"
              className="
                rounded-2xl 
                shadow-2xl
                w-full 
                max-w-md 
                transition-transform 
                duration-700 
                hover:scale-[1.05]
                hover:rotate-y-0
              "
              style={{
                transform: `
                  perspective(1200px)
                  rotateY(-35deg)
                  translateZ(0px)
                `,
                transformStyle: "preserve-3d",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION EXPERTISE ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-title font-semibold text-text-dark mb-12">
            Mes domaines d’expertise
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition">
              <Hammer size={50} className="mx-auto text-primary mb-4" />
              <h4 className="text-xl font-bold mb-2">Agencement intérieur</h4>
              <p className="text-text-light">
                Création sur mesure, optimisation d’espace, cuisines, mobilier,
                dressing et rénovation intérieure.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition">
              <Ruler size={50} className="mx-auto text-primary mb-4" />
              <h4 className="text-xl font-bold mb-2">Métré TCE</h4>
              <p className="text-text-light">
                Relevés précis, quantitatifs, estimations et plans techniques
                pour particuliers, artisans et architectes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition">
              <DraftingCompass
                size={50}
                className="mx-auto text-primary mb-4"
              />
              <h4 className="text-xl font-bold mb-2">
                Apporteur d’affaires BTP
              </h4>
              <p className="text-text-light">
                Mise en relation fiable et sérieuse entre clients et
                professionnels du bâtiment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
