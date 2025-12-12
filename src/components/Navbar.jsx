// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import BJDProTitle from "./BJDProTitle";

import logo from '../assets/logo_bjd.png';



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Accueil", to: "/" },
    { label: "À propos", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projets", to: "/projets" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo_bjd.webp"
            alt="Logo BJD-HOME-PRO"
            width="96"
            height="96"
            loading="eager"
            decoding="async"
            className="h-14 w-auto"
          />

          <BJDProTitle />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-sm text-text-dark font-medium uppercase">
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="hover:text-primary transition-colors duration-300 hover:scale-105"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA & Burger */}
        <div className="flex items-center gap-2">
          {/* Bouton visible seulement en desktop */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark hover:scale-105 transition uppercase"
          >
            Demander un devis
          </Link>
          <button
            className="md:hidden p-2"
            aria-label="Ouvrir le menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-border shadow-md"
          >
            <ul className="flex flex-col text-center text-text-dark font-medium text-base px-4 py-4 space-y-4 uppercase">
              {navItems.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => setIsOpen(false)}
                    className="block hover:text-primary transition-colors duration-300 hover:scale-105"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
