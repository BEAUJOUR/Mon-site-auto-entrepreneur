import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import Footer from "../components/Footer";
import { projectsData } from "../data/projectsData";
import placardIcon from "../assets/photos/placard.gif";
import conceptionIcon from "../assets/photos/dessin-de-conception.gif";
import percerIcon from "../assets/photos/percer.gif";
import bulleIcon from "../assets/photos/bulle.gif";
import horlogeIcon from "../assets/photos/horloge.gif";
import regleIcon from "../assets/photos/regle.gif";
import verifieIcon from "../assets/photos/verifie.gif";

const cloudinary = (src, options = "f_auto,q_auto,w_1400") =>
  typeof src === "string" && src.includes("/upload/")
    ? src.replace("/upload/", `/upload/${options}/`)
    : src;

const heroProject = projectsData.find((project) => project.id === 14);
const detailProject = projectsData.find((project) => project.id === 10);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const services = [
  {
    icon: placardIcon,
    title: "Agencement interieur sur mesure",
    text: "Cuisine, dressing, placard, meuble TV, rangements et mobilier integre pour optimiser chaque espace.",
    details: ["Conception adaptee a l'usage", "Choix des finitions", "Pose et ajustements soignes"],
  },
  {
    icon: percerIcon,
    title: "Renovation interieure second oeuvre",
    text: "Travaux de finition, salle de bain, sols, cloisons, habillage et remise en valeur des pieces existantes.",
    details: ["Preparation du chantier", "Finitions propres", "Coordination des etapes"],
  },
  {
    icon: conceptionIcon,
    title: "Metre, conseil et estimation",
    text: "Releves, quantitatifs, lecture technique et premier cadrage du budget pour avancer sans approximation.",
    details: ["Releves precis", "Faisabilite", "Orientation budget"],
  },
];

const processSteps = [
  {
    number: "01",
    icon: bulleIcon,
    title: "Comprendre votre besoin",
    text: "On part de votre usage reel : ce que vous voulez changer, ce qui bloque aujourd'hui, et le resultat attendu.",
  },
  {
    number: "02",
    icon: regleIcon,
    title: "Relever et cadrer",
    text: "Les dimensions, contraintes techniques, priorites et pistes de budget sont clarifiees avant d'aller plus loin.",
  },
  {
    number: "03",
    icon: horlogeIcon,
    title: "Proposer une solution",
    text: "Vous obtenez une orientation concrete : implantation, materiaux, finitions et points a valider.",
  },
  {
    number: "04",
    icon: verifieIcon,
    title: "Preparer la realisation",
    text: "Le projet est structure pour passer au devis, a la commande et a la pose avec un suivi propre.",
  },
];

const guarantees = [
  ["Interlocuteur unique", "Un contact clair pour suivre le projet du premier echange a la suite."],
  ["Conseil utile", "Des choix expliques simplement, selon votre besoin et votre budget."],
  ["Finitions soignees", "Une attention portee aux details visibles et a l'usage quotidien."],
  ["Demarche sans engagement", "Une premiere demande ne vous engage pas a lancer les travaux."],
];

const faq = [
  {
    q: "Quels projets prenez-vous en charge ?",
    a: "Cuisine, dressing, placard, meuble sur mesure, salle de bain, renovation interieure et travaux de second oeuvre.",
  },
  {
    q: "Intervenez-vous en Ile-de-France ?",
    a: "Oui, BJD-HOME-PRO accompagne principalement les projets en Ile-de-France selon la nature de la demande.",
  },
  {
    q: "Puis-je demander un premier avis sans etre engage ?",
    a: "Oui. La demande permet de comprendre le besoin, d'evaluer la faisabilite et de preparer un premier retour.",
  },
  {
    q: "Pourquoi faire un releve ou une estimation avant de commencer ?",
    a: "Cela evite les mauvaises surprises : dimensions, contraintes, quantites et budget sont mieux cadres avant le devis.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="overflow-hidden bg-white text-text-dark font-title">
      <section className="bg-secondary px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.22em]">
              Services
            </p>
            <h1 className="mt-4 max-w-full text-3xl font-semibold leading-tight sm:text-5xl">
              Des solutions claires pour vos projets d'agencement et de renovation.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-text-dark/75 sm:text-base sm:leading-8">
              BJD-HOME-PRO vous accompagne pour cadrer, concevoir et realiser
              vos amenagements interieurs : cuisine, dressing, placard, meuble
              sur mesure, salle de bain et second oeuvre.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/estimation-projet"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-primary px-5 py-3 text-center text-xs font-semibold uppercase leading-5 text-white transition hover:bg-primary-dark sm:w-auto sm:px-6 sm:text-sm"
              >
                <span>Demande devis</span>
                <ArrowRight className="shrink-0" size={16} />
              </Link>
              <Link
                to="/projets"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-primary px-5 py-3 text-center text-xs font-semibold uppercase leading-5 text-primary transition hover:bg-primary hover:text-white sm:w-auto sm:px-6 sm:text-sm"
              >
                Voir les realisations
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-[0.9fr_1.1fr] sm:gap-5">
              <div className="space-y-4 sm:space-y-5 sm:pt-10">
                <img
                  src={cloudinary(detailProject?.img || projectsData[1].img)}
                  alt="Cuisine et mobilier sur mesure"
                  className="h-44 w-full rounded-2xl object-cover shadow-card sm:h-56"
                  width="640"
                  height="520"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-bold text-primary">Etude</p>
                  <p className="mt-1 text-sm text-gray-600">
                    besoin, budget et faisabilite
                  </p>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-5">
                <img
                  src={cloudinary(heroProject?.img || projectsData[0].img, "f_auto,q_auto,w_1200")}
                  alt="Agencement interieur et meuble sur mesure"
                  className="h-56 w-full rounded-2xl object-cover shadow-2xl sm:h-[430px]"
                  width="760"
                  height="900"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="grid grid-cols-2 gap-4 text-center">
                  {["Conseil", "Realisation"].map((item) => (
                    <div key={item} className="rounded-2xl bg-white px-2 py-4 shadow-sm sm:px-3">
                      <p className="text-sm font-bold text-primary">{item}</p>
                      <p className="mt-1 text-xs text-gray-600">sur mesure</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm sm:tracking-[0.2em]">
              Prestations
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-4xl">
              Trois domaines pour construire un projet coherent.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {services.map(({ icon, title, text, details }) => (
              <article
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-secondary p-2">
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-contain"
                    width="64"
                    height="64"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{text}</p>
                <div className="mt-5 space-y-2">
                  {details.map((detail) => (
                    <p key={detail} className="flex items-start gap-2 text-sm leading-6 text-gray-700">
                      <CheckCircle2 className="mt-1 shrink-0 text-primary" size={17} />
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm sm:tracking-[0.2em]">
              Comment je travaille
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-4xl">
              Une methode simple pour avancer sans flou.
            </h2>
            <p className="mt-4 text-sm leading-7 text-text-dark/70 sm:text-base sm:leading-8">
              Le concept reste le meme : un parcours par etapes. La difference,
              c'est une lecture plus claire, plus professionnelle et plus
              rassurante pour le client.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-5xl">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-primary/25 lg:left-1/2 lg:block" />
            <div className="space-y-6 lg:space-y-10">
              {processSteps.map(({ number, icon, title, text }, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.article
                    key={number}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className={`relative grid grid-cols-1 lg:grid-cols-2 ${
                      isLeft ? "" : "lg:[&>div]:col-start-2"
                    }`}
                  >
                    <div
                      className={`rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 sm:p-6 ${
                        isLeft ? "lg:mr-14" : "lg:ml-14"
                      }`}
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-secondary p-2 ring-1 ring-primary/15">
                          <img
                            src={icon}
                            alt=""
                            aria-hidden="true"
                            className="h-full w-full object-contain"
                            width="64"
                            height="64"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-primary">{number}</p>
                          <h3 className="mt-1 text-lg font-semibold leading-snug sm:text-xl">{title}</h3>
                          <p className="mt-3 text-sm leading-7 text-gray-600">
                            {text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm sm:tracking-[0.2em]">
              Garanties
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-4xl">
              Une prestation serieuse, lisible et accompagnee.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {guarantees.map(([title, text]) => (
              <div key={title} className="rounded-xl border border-gray-200 p-5">
                <ShieldCheck className="text-primary" size={26} />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm sm:tracking-[0.2em]">
              Questions frequentes
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-4xl">FAQ</h2>
          </div>

          <div className="mt-10 space-y-4">
            {faq.map((item, index) => (
              <div
                key={item.q}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="flex min-w-0 items-start gap-3 text-sm font-semibold leading-6 sm:text-base">
                    <HelpCircle className="shrink-0 text-primary" size={22} />
                    <span className="min-w-0 break-words">{item.q}</span>
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="shrink-0 text-primary" />
                  ) : (
                    <ChevronDown className="shrink-0 text-primary" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-9 pt-3 text-sm leading-7 text-gray-600"
                    >
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 rounded-2xl bg-primary p-6 text-white shadow-soft sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
              Pret a cadrer votre projet ?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85">
              Decrivez votre besoin et recevez un premier retour personnalise,
              sans engagement.
            </p>
          </div>
          <Link
            to="/estimation-projet"
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 text-center text-xs font-semibold uppercase leading-5 text-primary transition hover:bg-secondary sm:w-auto sm:px-6 sm:text-sm"
          >
            <span>Demande devis</span>
            <ArrowRight className="shrink-0" size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
