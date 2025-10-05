// src/components/Hero.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

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
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1581092588422-4c9c4f3cf1d5?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/85 to-white/95" />

      {/* Contenu Hero */}
      <div className="relative z-20 mx-auto max-w-7xl grid items-center gap-12 md:grid-cols-2">
        {/* Texte gauche */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-dark leading-[1.4] sm:leading-[1.25]"
          >
            CRÉATEUR D’ESPACES <span className="text-primary">TECHNIQUES</span>
            <br />
            ET ESTHÉTIQUES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="mt-6 text-base sm:text-lg text-text-light max-w-prose mx-auto md:mx-0"
          >
            Agencement intérieur, mobilier sur mesure, conception 2D/3D et
            développement web : un seul interlocuteur pour des projets pensés,
            réalisés et livrés avec précision.
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
              src="https://images.ctfassets.net/j4m9q0fykyy4/1ueLP85DJ1Fh3gHwzOeB4T/1e3810d41a84d8a5ab2b197ec18bc436/2021-10-Outils-electroportatifs-scaled.jpg"
              alt="Atelier outillage"
              className="rounded-2xl shadow-card w-full object-cover"
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
