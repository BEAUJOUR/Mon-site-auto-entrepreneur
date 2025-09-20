// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-secondary to-white py-16 px-4">
      <div className="mx-auto max-w-7xl grid items-center gap-12 md:grid-cols-2">
        {/* Bloc texte */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-dark leading-[1.4] sm:leading-[1.25]"
          >
            CRÉATEUR D’ESPACES <span className="text-primary">TECHNIQUES</span>
            <br />
            ET ESTHÉTIQUES
          </motion.h1>

          <p className="mt-6 text-base sm:text-lg text-text-light max-w-prose mx-auto md:mx-0">
            Agencement intérieur, mobilier sur mesure, conception 2D/3D et
            développement web : un seul interlocuteur pour des projets pensés,
            réalisés et livrés avec précision.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="/services"
              className="bg-primary text-white px-6 py-3 rounded-2xl font-semibold shadow-soft hover:bg-primary-dark transition"
            >
              Découvrir mes services
            </a>
            <a
              href="/contact"
              className="border-2 border-primary text-primary px-6 py-3 rounded-2xl font-semibold hover:bg-primary hover:text-white transition"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Image 3D stylée */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src="https://images.ctfassets.net/j4m9q0fykyy4/1ueLP85DJ1Fh3gHwzOeB4T/1e3810d41a84d8a5ab2b197ec18bc436/2021-10-Outils-electroportatifs-scaled.jpg"
            alt="Atelier outillage"
            className="rounded-2xl shadow-card w-full max-w-sm md:max-w-md object-cover"
            style={{
              transform: "perspective(1200px) rotateY(-30deg)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
