// src/components/Hero.jsx

import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-secondary to-white px-4 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Texte */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-dark mb-6 leading-tight tracking-tight">
            Créateur d’espaces <span className="text-primary">techniques</span>
            <br />
            et esthétiques
          </h1>

          <p className="text-base sm:text-lg text-text-light mb-6">
            Agencement intérieur, mobilier sur mesure, conception 2D/3D et
            développement web : un seul interlocuteur pour des projets pensés,
            réalisés et livrés avec précision.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="/services"
              className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition"
            >
              Découvrir mes services
            </a>
            <a
              href="/contact"
              className="border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.ctfassets.net/j4m9q0fykyy4/1ueLP85DJ1Fh3gHwzOeB4T/1e3810d41a84d8a5ab2b197ec18bc436/2021-10-Outils-electroportatifs-scaled.jpg"
            alt="Atelier outillage"
            className="rounded-2xl shadow-soft object-cover w-full max-w-full sm:max-w-[90%] md:max-w-[80%] h-auto"
            style={{
              transform: "perspective(1000px) rotateY(-35deg)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
