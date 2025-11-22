// src/components/Hero.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/photos/DSC_0960.JPG";
import acceuil from "../assets/photos/DSC_0960.JPG";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const smoothY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const y = useTransform(smoothY, [0, 1], [0, 150]);

  return (
    <motion.section
      ref={ref}
      className="relative overflow-hidden min-h-screen flex items-center px-4 bg-primary"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Arrière-plan parallaxe doux */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/85 to-white/95" />

      {/* Contenu Hero */}
      <div className="relative z-20 mx-auto max-w-7xl grid items-center gap-12 md:grid-cols-2">
        {/* Texte gauche */}
        <div className="text-center md:text-left">
          <motion.h1 className="text-2xl sm:text-4xl md:text-5xl font-title font-extrabold uppercase tracking-tight text-text-dark leading-[1.4] sm:leading-[1.25]">
            TRANSFORMER VOS IDÉES
            <br />
            EN ESPACES VIVANTS ET BIEN PENSÉS
          </motion.h1>

          <motion.p className="mt-6 text-md md:text-lg text-text-light max-w-prose mx-auto md:mx-0 leading-relaxed">
            Derrière chaque cloison posée, chaque meuble monté, il y a une
            intention : créer un lieu qui vous ressemble. Je suis artisan et
            métreur, je vous accompagne avec écoute, rigueur et passion, du
            premier croquis jusqu’à la dernière finition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
            className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          >
            <Link
              to="/services"
              className="bg-primary text-white px-6 py-3 rounded-2xl font-semibold shadow-soft hover:bg-primary-dark transition-all duration-500"
            >
              Découvrir mes services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-primary text-primary px-6 py-3 rounded-2xl font-semibold hover:bg-primary hover:text-white transition-all duration-500"
            >
              Me contacter
            </Link>
          </motion.div>
        </div>

        {/* Image flottante 3D droite */}
        <motion.div
          className="flex justify-center items-center"
          animate={{
            x: [0, 6, 0, -6, 0],
            y: [0, -4, 0, 4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full max-w-sm md:max-w-md"
            style={{ perspective: "1200px" }}
          >
            <motion.img
              src={logo}
              alt="Atelier outillage"
              className="
    rounded-2xl shadow-card
    w-full
    object-cover
    h-auto
    max-h-[70vh]   /* ⬅️ Limite la hauteur sur TOUTES les tailles d’écran */
  "
              initial={{ rotateY: -35, opacity: 0 }}
              whileInView={{ rotateY: -40, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, type: "spring" }}
              style={{ transformStyle: "preserve-3d" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
