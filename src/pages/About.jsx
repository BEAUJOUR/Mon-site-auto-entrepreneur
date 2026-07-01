import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardCheck,
  DraftingCompass,
  Hammer,
  MapPin,
  Ruler,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import Footer from "../components/Footer";
import { projectsData } from "../data/projectsData";

const cloudinary = (src, options = "f_auto,q_auto,w_1400") =>
  typeof src === "string" && src.includes("/upload/")
    ? src.replace("/upload/", `/upload/${options}/`)
    : src;

const heroProject = projectsData.find((project) => project.id === 10);
const secondaryProject = projectsData.find((project) => project.id === 13);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const expertises = [
  {
    icon: Hammer,
    title: "Agencement interieur",
    text: "Cuisine, dressing, placard, meuble sur mesure, salle de bain et renovation second oeuvre.",
  },
  {
    icon: Ruler,
    title: "Metre et estimation",
    text: "Releves, quantitatifs, lecture technique et aide au cadrage du budget avant de se lancer.",
  },
  {
    icon: DraftingCompass,
    title: "Conseil terrain",
    text: "Un regard pratique sur la faisabilite, les contraintes, les materiaux et les finitions.",
  },
];

const methodSteps = [
  ["01", "Ecouter", "Comprendre votre besoin, vos contraintes et votre budget."],
  ["02", "Mesurer", "Verifier les volumes, les usages et les points techniques."],
  ["03", "Conseiller", "Proposer une orientation claire et realiste pour avancer."],
  ["04", "Accompagner", "Garder un suivi propre jusqu'au devis et a la realisation."],
];

const trustItems = [
  ["Interlocuteur unique", "Un contact clair pour suivre le projet sans dispersion."],
  ["Experience terrain", "Une approche concrete issue du chantier et du metre."],
  ["Demarche transparente", "Des conseils adaptes au besoin, sans pousser a la depense inutile."],
  ["Intervention locale", "Accompagnement en Ile-de-France selon la nature du projet."],
];

export default function About() {
  return (
    <>
      <main className="bg-white text-text-dark font-title">
        <section className="relative overflow-hidden bg-secondary">
          <div className="absolute inset-0">
            <img
              src={cloudinary(heroProject?.img || projectsData[0].img, "f_auto,q_auto,w_1800")}
              alt="Agencement interieur realise par BJD-HOME-PRO"
              className="h-full w-full object-cover"
              width="1800"
              height="1100"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/20" />
          </div>

          <div className="relative mx-auto grid min-h-[560px] max-w-7xl grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                A propos
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-text-dark sm:text-5xl">
                Un interlocuteur terrain pour cadrer votre projet avec precision.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-text-dark/75">
                BJD-HOME-PRO accompagne les particuliers et professionnels dans
                leurs projets d'agencement interieur, de mobilier sur mesure et
                de renovation second oeuvre, avec une approche simple : ecouter,
                mesurer, conseiller et suivre.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/estimation-projet"
                  className="inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-primary px-6 text-sm font-semibold uppercase text-white transition hover:bg-primary-dark"
                >
                  Demande devis <ArrowRight size={16} />
                </Link>
                <Link
                  to="/projets"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-primary px-6 text-sm font-semibold uppercase text-primary transition hover:bg-primary hover:text-white"
                >
                  Voir les realisations
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="hidden rounded-2xl bg-white/88 p-5 shadow-2xl ring-1 ring-white/70 backdrop-blur-sm lg:block"
            >
              <img
                src={cloudinary(secondaryProject?.img || projectsData[1].img)}
                alt="Mobilier sur mesure et agencement interieur"
                className="h-[340px] w-full rounded-xl object-cover"
                width="900"
                height="620"
                loading="lazy"
                decoding="async"
              />
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  ["Etude", "du besoin"],
                  ["Conseil", "budget"],
                  ["Suivi", "projet"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-xl bg-secondary px-3 py-4">
                    <p className="text-sm font-bold text-primary">{title}</p>
                    <p className="mt-1 text-xs text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Qui suis-je ?
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Jean Danor Beaujour, fondateur de BJD-HOME-PRO.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-text-dark/75">
              <p>
                Mon role est d'aider chaque client a transformer une idee en
                projet clair. Avant de parler travaux, je cherche a comprendre
                l'usage, les contraintes, le budget et le resultat attendu.
              </p>
              <p>
                Mon experience terrain et ma pratique du metre permettent de
                cadrer les demandes avec precision : dimensions, faisabilite,
                quantites, finitions et priorites. L'objectif est d'eviter les
                approximations et de construire une base serieuse avant le devis.
              </p>
              <p>
                BJD-HOME-PRO intervient sur les projets de cuisine, dressing,
                placard, meuble sur mesure, salle de bain et renovation
                interieure de second oeuvre.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Expertise
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Une approche technique, mais lisible pour le client.
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {expertises.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                >
                  <Icon className="text-primary" size={34} />
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Methode
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Une demarche claire avant de s'engager.
              </h2>
              <p className="mt-5 text-base leading-8 text-text-dark/75">
                Une bonne realisation commence par une demande bien comprise.
                La methode BJD-HOME-PRO reduit les zones floues et facilite les
                decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {methodSteps.map(([number, title, text]) => (
                <div key={number} className="rounded-xl border border-gray-200 p-5">
                  <p className="text-sm font-bold text-primary">{number}</p>
                  <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-text-dark px-5 py-16 text-white sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Confiance
                </p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                  Ce que vous pouvez attendre de BJD-HOME-PRO.
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {trustItems.map(([title, text]) => (
                  <div key={title} className="rounded-xl bg-white/8 p-5">
                    <ShieldCheck className="text-primary" size={26} />
                    <h3 className="mt-4 font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 rounded-2xl bg-secondary p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Vous avez un projet d'agencement ou de renovation ?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-700">
                Decrivez votre besoin en quelques etapes et recevez un premier
                retour personnalise, sans engagement.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-gray-700">
                {[
                  [UserRound, "Interlocuteur unique"],
                  [ClipboardCheck, "Etude du besoin"],
                  [MapPin, "Ile-de-France"],
                ].map(([Icon, text]) => (
                  <span key={text} className="inline-flex items-center gap-2">
                    <Icon className="text-primary" size={18} />
                    {text}
                  </span>
                ))}
              </div>
            </div>
            <Link
              to="/estimation-projet"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-primary px-6 text-sm font-semibold uppercase text-white transition hover:bg-primary-dark"
            >
              Demande devis <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
