// src/pages/Contact.jsx

import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="relative bg-secondary overflow-hidden">
      {/* Effet spotlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-accent/10 pointer-events-none" />

      <section className="relative z-10 py-24 px-4 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary-dark mb-4">
          Contactez-moi
        </h1>
        <p className="text-text-light max-w-xl mx-auto mb-12">
          Une idée, un projet, une rénovation ou un besoin web ?
          Parlons-en. Je réponds sous 24h.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <form className="bg-white rounded-2xl shadow-card p-8 text-left space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-1">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border border-border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-1">Email</label>
              <input
                type="email"
                placeholder="exemple@domaine.com"
                className="w-full border border-border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-1">Message</label>
              <textarea
                placeholder="Décrivez votre besoin..."
                rows="5"
                className="w-full border border-border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary-dark transition"
            >
              Envoyer le message
            </button>
          </form>

          <div className="flex flex-col items-start justify-center gap-6 text-left px-4">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <span className="text-text-dark font-medium">
                contact@bjd-build.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary" />
              <span className="text-text-dark font-medium">+33 6 12 34 56 78</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary" />
              <span className="text-text-dark font-medium">
                Lyon, France
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
