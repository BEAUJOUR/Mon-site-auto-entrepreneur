// src/pages/Services.jsx

import React from "react";
import { Wrench, Hammer, ShowerHead, PencilRuler, Ruler, MonitorSmartphone } from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    { title: "Agencement intérieur", desc: "Cloisons, placo, peinture, optimisation d’espace", icon: Wrench },
    { title: "Cuisine & Dressing", desc: "Conception et installation de meubles fonctionnels et esthétiques", icon: Hammer },
    { title: "Salle de bain", desc: "Rénovation complète, plomberie, carrelage, accessoires modernes", icon: ShowerHead },
    { title: "Mobilier sur mesure", desc: "Fabrication artisanale en bois ou métal pour chaque espace", icon: PencilRuler },
    { title: "Dessin & Métrage", desc: "Plans techniques précis, devis détaillés, métrage exact pour vos projets", icon: Ruler },
    { title: "Développement Web", desc: "Sites vitrines, outils métiers, UX design et déploiement optimisé", icon: MonitorSmartphone },
  ];

  const reviews = [
    { name: "Jean Dupont", text: "Travail impeccable, respect des délais, finition parfaite. Je recommande vivement." },
    { name: "Marie Leduc", text: "Mobilier sur mesure magnifique, très professionnel du plan à la pose." },
    { name: "Eric Martin", text: "Le site web qu’il a conçu m’a apporté des clients, très bon travail technique et esthétique." },
  ];

  const faq = [
    { q: "Quels sont vos délais pour une cuisine sur‑mesure ?", a: "En général, entre 4 à 6 semaines selon complexité, fabrication et pose incluses." },
    { q: "Travaillez‑vous dans toute l’Île‑de‑France ?", a: "Oui, je couvre l’Île‑de‑France, parfois au-delà selon le projet. Me contacter pour devis." },
    { q: "Quels matériaux utilisez‑vous pour vos meubles ?", a: "Bois massif, contreplaqué de qualité, finitions laquées, métaux selon besoin." },
    { q: "Faites‑vous les plans 3D avant construction ?", a: "Oui, je réalise des rendus 3D pour vous donner une vision réaliste avant la réalisation." },
  ];

  return (
    <div className="bg-white px-4">
      {/* Intro Services */}
      <section className="py-16 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-text-dark mb-4">Mes Services Complets</h1>
        <p className="text-text-light max-w-2xl mx-auto mb-10 text-lg">
          Artisan & développeur : je propose une gamme complète de services
          allant de l’aménagement intérieur à la création digitale. Chaque projet est unique, chaque solution sur mesure.
        </p>
      </section>

      {/* Bloc icônes + services */}
      <section className="py-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="bg-secondary rounded-2xl shadow-card p-6 hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-primary text-white mx-auto">
              <Icon size={32} />
            </div>
            <h2 className="text-xl font-semibold text-text-dark mb-2">{title}</h2>
            <p className="text-text-light text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </section>

      {/* Processus de travail */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-text-dark text-center mb-8">Comment je travaille</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3 text-center md:text-left">
                <span className="inline-block bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</span>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-text-dark mb-2">Premier échange & devis</h3>
                <p className="text-text-light">Nous discutons de votre projet, de vos besoins, de votre budget. Je réalise un devis détaillé avec plans ou croquis selon la nécessité.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3 text-center md:text-left">
                <span className="inline-block bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</span>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-text-dark mb-2">Validation & conception technique</h3>
                <p className="text-text-light">Création des plans 2D/3D, choix des matériaux, validations avant fabrication ou démarrage des travaux.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3 text-center md:text-left">
                <span className="inline-block bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</span>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-text-dark mb-2">Fabrication & pose</h3>
                <p className="text-text-light">Réalisation en atelier ou sur chantier, coordination des interventions, respect des délais et finitions qualité.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3 text-center md:text-left">
                <span className="inline-block bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">4</span>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-text-dark mb-2">Livraison & suivi</h3>
                <p className="text-text-light">Je m’assure que tout est parfait : livraison, installation, vérifications, et suivi client après‑travail si besoin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-text-dark text-center mb-8">Témoignages de clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <blockquote key={i} className="bg-secondary p-6 rounded-2xl shadow-card">
              <p className="text-text-light mb-4 italic">“{r.text}”</p>
              <cite className="block text-text-dark font-semibold">— {r.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-dark text-center mb-6">FAQ</h2>
          <div className="space-y-4">
            {faq.map((f, i) => (
              <div key={i} className="border border-border rounded-xl p-4">
                <h3 className="text-lg font-semibold text-text-dark mb-1">{f.q}</h3>
                <p className="text-text-light">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appel à l’action */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto bg-primary text-white rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre projet ?</h2>
          <p className="mb-6">Contactez-moi pour un devis gratuit personnalisé. Chaque projet mérite un soin particulier.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-6 py-3 rounded-2xl font-semibold hover:bg-primary-dark hover:text-white transition"
          >
            Demander un devis
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
