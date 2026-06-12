import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Archive,
  ArrowLeft,
  ArrowRight,
  Bath,
  ChefHat,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Ellipsis,
  FileCheck2,
  Hammer,
  Headphones,
  Mail,
  Medal,
  PenLine,
  Send,
  ShieldCheck,
  Shirt,
  Sofa,
  Star,
  UserRound,
} from "lucide-react";
import Footer from "../components/Footer";
import {
  mapEstimationFormToLeadPayload,
  submitLead,
} from "../services/leadsApi";
import cuisineRenov from "../assets/photos/cuisine-renov.jpg";
import cuisineSquart from "../assets/photos/cuisine-squart.JPG";
import dressingPhoto from "../assets/photos/dressing.jpg";
import parquetSol from "../assets/photos/parquet-sol.jpg";
import salleDeBain from "../assets/photos/Salle-de-bain.jpg";

const projectTypes = [
  "Cuisine sur mesure",
  "Dressing",
  "Placard",
  "Meuble sur mesure",
  "Salle de bain",
  "Renovation interieure",
  "Autre projet",
];

const budgetOptions = [
  "Moins de 1 000 EUR",
  "1 000 a 3 000 EUR",
  "3 000 a 7 000 EUR",
  "7 000 a 15 000 EUR",
  "Plus de 15 000 EUR",
  "Je ne sais pas encore",
];

const timelineOptions = [
  "Des que possible",
  "Sous 1 mois",
  "Sous 3 mois",
  "Dans 3 a 6 mois",
  "Je prepare encore le projet",
];

const photos = [
  {
    title: "Cuisine",
    subtitle: "sur mesure",
    icon: ChefHat,
    image: cuisineRenov,
  },
  {
    title: "Dressing",
    subtitle: "sur mesure",
    icon: Shirt,
    image: dressingPhoto,
  },
  {
    title: "Placard",
    subtitle: "integre",
    icon: Archive,
    image:
      "https://res.cloudinary.com/dl3ntuzaz/image/upload/f_auto,q_auto,w_1400/DSC_0936_sqycqb.jpg",
  },
  {
    title: "Salle de bain",
    subtitle: "a renover",
    icon: Bath,
    image: salleDeBain,
  },
  {
    title: "Agencement",
    subtitle: "interieur",
    icon: Sofa,
    image: cuisineSquart,
  },
  {
    title: "Renovation",
    subtitle: "second oeuvre",
    icon: Hammer,
    image: parquetSol,
  },
];

const reassurance = [
  { icon: Medal, title: "Savoir-faire terrain", text: "agencement et finitions" },
  { icon: Clock3, title: "Retour rapide", text: "premiere lecture du besoin" },
  { icon: ShieldCheck, title: "Etude gratuite", text: "et sans engagement" },
  { icon: UserRound, title: "Accompagnement", text: "interlocuteur unique" },
];

const whyChoose = [
  ["Interlocuteur unique", "du debut a la fin", UserRound],
  ["Conseils personnalises", "budget et solutions adaptees", Medal],
  ["Materiaux et finitions", "choix coherents avec l'usage", ShieldCheck],
  ["Respect des delais", "projet mieux prepare", Clock3],
];

const processSteps = [
  ["1", "Vous decrivez votre projet", "En quelques questions : type, ville, budget, delai."],
  ["2", "Nous recevons la demande", "Les informations utiles sont regroupees."],
  ["3", "Echange et conseils", "Le besoin est affine avec un retour personnalise."],
  ["4", "Premiere estimation", "Une orientation claire pour la suite."],
  ["5", "Realisation du projet", "Preparation, suivi et finitions."],
];

const trustCards = [
  {
    quote:
      "Cuisine realisee avec soin, finitions propres et conseils utiles sur les choix.",
    author: "Projet cuisine",
  },
  {
    quote:
      "Rangements mieux optimises, projet plus clair apres le premier echange.",
    author: "Projet dressing",
  },
  {
    quote:
      "Travail serieux, bonne comprehension du besoin et suivi rassurant.",
    author: "Renovation interieure",
  },
];

const initialFormData = {
  projectType: "",
  city: "",
  postalCode: "",
  budget: "",
  timeline: "",
  description: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

const steps = [
  {
    label: "Projet",
    title: "Quel type de projet ?",
    hint: "Selectionnez la categorie la plus proche.",
  },
  {
    label: "Localisation",
    title: "Ou se situe le projet ?",
    hint: "Ville et code postal.",
  },
  {
    label: "Budget et delai",
    title: "Quel budget et quel delai ?",
    hint: "Une fourchette suffit pour commencer.",
  },
  {
    label: "Details",
    title: "Ajoutez quelques precisions",
    hint: "Dimensions, contraintes, style, photos disponibles.",
  },
  {
    label: "Coordonnees",
    title: "Vos coordonnees",
    hint: "Pour vous recontacter au sujet du projet.",
  },
  {
    label: "Validation",
    title: "Recapitulatif",
    hint: "Verifiez avant envoi.",
  },
];

export default function EstimationProjet() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSendingLead, setIsSendingLead] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [realizationIndex, setRealizationIndex] = useState(0);

  const progress = useMemo(
    () => Math.round(((currentStep + 1) / steps.length) * 100),
    [currentStep]
  );

  useEffect(() => {
    const previousTitle = document.title;
    const canonical = document.querySelector('link[rel="canonical"]');
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content");

    document.title = "Estimation gratuite agencement interieur | BJD-HOME-PRO";
    description?.setAttribute(
      "content",
      "Demandez une estimation pour votre projet de cuisine, dressing, placard, meuble sur mesure, renovation interieure ou second oeuvre avec BJD-HOME-PRO."
    );
    canonical?.setAttribute(
      "href",
      "https://www.bjd-home-pro.fr/estimation-projet"
    );

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        description?.setAttribute("content", previousDescription);
      }
      canonical?.setAttribute("href", "https://www.bjd-home-pro.fr/");
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRealizationIndex((index) => (index + 1) % 5);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setSubmitError("");
  };

  const validateStep = () => {
    const nextErrors = {};

    if (currentStep === 0 && !formData.projectType) {
      nextErrors.projectType = "Choisissez un type de projet.";
    }

    if (currentStep === 1 && !formData.city.trim()) {
      nextErrors.city = "Indiquez la ville du projet.";
    }

    if (currentStep === 4) {
      if (!formData.firstName.trim()) {
        nextErrors.firstName = "Indiquez votre prenom.";
      }
      if (!formData.phone.trim()) {
        nextErrors.phone = "Indiquez votre telephone.";
      }
      if (!formData.email.trim()) {
        nextErrors.email = "Indiquez votre email.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        nextErrors.email = "Indiquez un email valide.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goNext = () => {
    if (!validateStep()) return;
    setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
    window.setTimeout(scrollToForm, 60);
  };

  const goBack = () => {
    setErrors({});
    setCurrentStep((step) => Math.max(step - 1, 0));
    window.setTimeout(scrollToForm, 60);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateStep()) return;

    setIsSendingLead(true);
    setSubmitError("");

    try {
      const leadPayload = mapEstimationFormToLeadPayload(formData);
      const leadResponse = await submitLead(leadPayload);
      console.info("Lead BJD-HOME-PRO cree", leadResponse);
      setIsSubmitted(true);
      window.setTimeout(() => navigate("/merci-estimation"), 300);
    } catch (error) {
      setSubmitError(
        error.message ||
          "Impossible d'envoyer votre demande pour le moment. Reessayez dans quelques instants."
      );
    } finally {
      setIsSendingLead(false);
    }
  };

  const renderError = (field) =>
    errors[field] ? (
      <p className="mt-2 text-xs font-semibold text-red-700">{errors[field]}</p>
    ) : null;

  const inputClass =
    "mt-1.5 h-11 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary";

  const renderStep = () => {
    if (isSubmitted) {
      return (
        <div className="py-8 text-center">
          <CheckCircle2 className="mx-auto text-primary" size={42} />
          <h2 className="mt-4 text-2xl font-bold text-text-dark">
            Votre demande est prete.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-gray-600">
            Les informations sont transmises pour une premiere lecture. Vous
            allez etre redirige vers la page de confirmation.
          </p>
          <button
            type="button"
            onClick={() => {
              setFormData(initialFormData);
              setCurrentStep(0);
              setIsSubmitted(false);
            }}
            className="mt-6 rounded-xl bg-primary px-5 py-3 text-sm font-semibold uppercase text-white transition hover:bg-primary-dark"
          >
            Nouvelle demande
          </button>
        </div>
      );
    }

    switch (currentStep) {
      case 0:
        return (
          <fieldset>
            <legend className="sr-only">Type de projet</legend>
            <select
              value={formData.projectType}
              onChange={(event) => updateField("projectType", event.target.value)}
              className={inputClass}
              aria-label="Type de projet"
            >
              <option value="">Selectionnez votre projet</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {renderError("projectType")}
          </fieldset>
        );

      case 1:
        return (
          <div className="space-y-3">
            <div>
              <label htmlFor="city" className="text-xs font-bold text-text-dark">
                Ville ou code postal
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={(event) => updateField("city", event.target.value)}
                className={inputClass}
                placeholder="Ville"
              />
              {renderError("city")}
            </div>
            <div>
              <label
                htmlFor="postalCode"
                className="text-xs font-bold text-text-dark"
              >
                Code postal
              </label>
              <input
                id="postalCode"
                name="postalCode"
                type="text"
                inputMode="numeric"
                value={formData.postalCode}
                onChange={(event) =>
                  updateField("postalCode", event.target.value)
                }
                className={inputClass}
                placeholder="75008"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="budget" className="text-xs font-bold text-text-dark">
                Budget estime
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={(event) => updateField("budget", event.target.value)}
                className={inputClass}
              >
                <option value="">Selectionnez</option>
                {budgetOptions.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="timeline"
                className="text-xs font-bold text-text-dark"
              >
                Delai souhaite
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={(event) =>
                  updateField("timeline", event.target.value)
                }
                className={inputClass}
              >
                <option value="">Selectionnez</option>
                {timelineOptions.map((timeline) => (
                  <option key={timeline} value={timeline}>
                    {timeline}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <label
              htmlFor="description"
              className="text-xs font-bold text-text-dark"
            >
              Details du projet
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={(event) =>
                updateField("description", event.target.value)
              }
              className="mt-1.5 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Dimensions, style, contraintes, photos disponibles..."
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-xs font-bold text-text-dark"
                >
                  Votre prenom
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(event) =>
                    updateField("firstName", event.target.value)
                  }
                  className={inputClass}
                />
                {renderError("firstName")}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="text-xs font-bold text-text-dark"
                >
                  Votre nom
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(event) =>
                    updateField("lastName", event.target.value)
                  }
                  className={inputClass}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="text-xs font-bold text-text-dark">
                  Telephone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className={inputClass}
                  placeholder="06 00 00 00 00"
                />
                {renderError("phone")}
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-bold text-text-dark">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className={inputClass}
                  placeholder="email@exemple.fr"
                />
                {renderError("email")}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="max-h-[260px] space-y-2 overflow-auto pr-1 text-sm">
            {[
              ["Projet", formData.projectType],
              ["Ville", formData.city],
              ["Code postal", formData.postalCode || "Non precise"],
              ["Budget", formData.budget || "Non precise"],
              ["Delai", formData.timeline || "Non precise"],
              ["Prenom", formData.firstName],
              ["Nom", formData.lastName || "Non precise"],
              ["Telephone", formData.phone],
              ["Email", formData.email],
              ["Details", formData.description || "Non precise"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 border-b py-2">
                <span className="font-bold text-text-dark">{label}</span>
                <span className="text-right text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        );
    }
  };

  const activeStep = steps[currentStep];

  return (
    <>
      <div className="bg-white text-text-dark font-title">
        <section className="relative bg-secondary">
          <div className="absolute inset-0">
            <img
              src={photos[0].image}
              alt="Cuisine et agencement sur mesure"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/62 to-white/18" />
          </div>

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-7 sm:px-8 md:py-9 lg:min-h-[660px] lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-2xl">
              <h1 className="font-title text-3xl font-extrabold leading-[1.08] tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                Votre projet merite une etude{" "}
                <span className="text-primary">serieuse</span>
              </h1>
              <p className="mt-3 max-w-xl text-sm font-semibold leading-6 text-text-dark sm:mt-5 sm:text-base sm:leading-7">
                Cuisine, dressing, placard, salle de bain, meuble sur mesure,
                agencement interieur et renovation second oeuvre.
              </p>
              <p className="mt-2 hidden max-w-xl text-sm leading-6 text-text-dark sm:mt-3 sm:block sm:leading-7">
                BJD-HOME-PRO vous accompagne de l'etude a la realisation avec
                un interlocuteur unique et un suivi personnalise.
              </p>

              <div className="mt-8 hidden max-w-xl grid-cols-2 gap-4 sm:grid sm:grid-cols-4">
                {reassurance.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="text-center">
                    <Icon className="mx-auto text-primary-dark" size={34} />
                    <p className="mt-3 text-xs font-extrabold leading-4">
                      {title}
                    </p>
                    <p className="mt-1 text-[11px] leading-4 text-gray-700">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 hidden items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg sm:inline-flex">
                <div className="flex text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm font-bold">4,9/5</span>
                <span className="text-sm text-gray-600">retours clients</span>
              </div>
            </div>

            <div
              ref={formRef}
              id="demande-etude"
              className="rounded-2xl bg-white p-5 shadow-2xl sm:p-6 lg:ml-auto lg:w-[520px]"
            >
              <div className="text-center">
                <h2 className="font-title text-2xl font-semibold text-text-dark">
                  Obtenez votre estimation gratuite
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Remplissez le formulaire en quelques etapes
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-5">
                {!isSubmitted && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-primary">
                        {activeStep.label}
                      </p>
                      <p className="text-xs text-gray-500">{progress}%</p>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-gray-100">
                      <div
                        className="h-1.5 rounded-full bg-primary"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {!isSubmitted && (
                  <div className="mb-4">
                    <h3 className="text-sm font-extrabold text-text-dark">
                      {activeStep.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {activeStep.hint}
                    </p>
                  </div>
                )}

                {renderStep()}

                {!isSubmitted && (
                  <div className="mt-5 flex gap-3">
                    <button
                      type="button"
                      onClick={goBack}
                      disabled={currentStep === 0}
                      className="flex h-12 flex-1 items-center justify-center rounded-xl border border-gray-300 text-xs font-semibold uppercase text-text-dark transition hover:border-primary hover:text-primary disabled:opacity-40"
                    >
                      <ArrowLeft size={15} /> Retour
                    </button>
                    {currentStep < steps.length - 1 ? (
                      <button
                        type="button"
                        onClick={goNext}
                        className="flex h-12 flex-[1.5] items-center justify-center gap-4 rounded-xl bg-primary text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-primary-dark"
                      >
                        Continuer <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSendingLead}
                        className="flex h-12 flex-[1.5] items-center justify-center gap-4 rounded-xl bg-primary text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSendingLead ? "Envoi en cours..." : "Recevoir mon estimation"}
                        <Send size={16} />
                      </button>
                    )}
                  </div>
                )}

                {submitError && (
                  <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-center text-xs font-semibold text-red-700">
                    {submitError}
                  </p>
                )}

                {!isSubmitted && (
                  <p className="mt-4 text-center text-xs text-gray-500">
                    Vos donnees restent confidentielles.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-200 bg-secondary">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-5 sm:px-8 md:grid-cols-5">
            <div className="text-xs font-extrabold uppercase text-primary">
              Pourquoi nous choisir ?
            </div>
            {whyChoose.map(([title, text, Icon]) => (
              <div key={title} className="flex items-center gap-3">
                <Icon className="shrink-0 text-primary" size={28} />
                <div>
                  <p className="text-sm font-extrabold">{title}</p>
                  <p className="text-xs text-gray-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-6 sm:px-8 md:py-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="font-title text-3xl font-semibold text-text-dark">
                Quels travaux souhaitez-vous realiser ?
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Une seule demande, plusieurs solutions sur mesure.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
              {[
                ...photos,
                {
                  title: "Autres projets",
                  subtitle: "sur demande",
                  icon: Ellipsis,
                  image: photos[4].image,
                },
              ].map((photo) => {
                const Icon = photo.icon;

                return (
                <a
                  key={photo.title}
                  href="#demande-etude"
                  className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="h-28 w-full object-cover md:h-32"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute left-1/2 top-[5.75rem] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-secondary text-primary shadow-sm md:top-[6.75rem]">
                    <Icon size={18} strokeWidth={1.9} />
                  </span>
                  <div className="p-3 pt-6 text-center">
                    <p className="font-extrabold text-text-dark">
                      {photo.title}
                    </p>
                    <p className="text-xs text-gray-600">{photo.subtitle}</p>
                  </div>
                </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-4 sm:px-8 md:py-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-title text-3xl font-semibold text-text-dark">
              Comment ca se passe ?
            </h2>
            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-5">
              {processSteps.map(([number, title, text], index) => (
                <div key={title} className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                    {index === 0 && <PenLine size={28} />}
                    {index === 1 && <Mail size={28} />}
                    {index === 2 && <Headphones size={28} />}
                    {index === 3 && <ClipboardList size={28} />}
                    {index === 4 && <FileCheck2 size={28} />}
                  </div>
                  <span className="absolute -top-4 left-1/2 -ml-16 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-primary text-xs font-bold text-white shadow-sm">
                    {number}
                  </span>
                  <h3 className="mt-4 text-sm font-extrabold">{title}</h3>
                  <p className="mx-auto mt-2 max-w-[190px] text-xs leading-5 text-gray-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-7 sm:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-[1fr_2.7fr_1fr]">
            <div className="rounded-lg bg-secondary p-6">
              <h2 className="font-title text-2xl font-semibold leading-tight">
                Des realisations qui parlent d'elles-memes
              </h2>
              <p className="mt-4 text-sm leading-6 text-gray-700">
                Qualite, precision et savoir-faire sur chaque projet.
              </p>
            </div>
            <div className="relative h-56 overflow-hidden rounded-lg md:h-full md:min-h-[250px]">
              {photos.slice(0, 5).map((photo, index) => (
                <img
                  key={photo.title}
                  src={photo.image}
                  alt={photo.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    realizationIndex % 5 === index ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {photos.slice(0, 5).map((photo, index) => (
                  <span
                    key={photo.title}
                    className={`h-2 w-2 rounded-full transition ${
                      realizationIndex % 5 === index
                        ? "bg-white"
                        : "bg-white/45"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-text-dark p-6 text-white md:min-h-[250px]">
              <p className="text-3xl font-extrabold text-primary">Projets</p>
              <p className="text-sm">realises</p>
              <div className="my-5 border-t border-white/20" />
              <p className="text-3xl font-extrabold text-primary">Terrain</p>
              <p className="text-sm">experience chantier</p>
              <div className="my-5 border-t border-white/20" />
              <p className="text-3xl font-extrabold text-primary">Suivi</p>
              <p className="text-sm">personnalise</p>
            </div>
          </div>
        </section>

        <section className="px-5 pb-8 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-title text-2xl font-semibold">
              Ils nous font confiance
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
              {trustCards.map((card) => (
                <div
                  key={card.author}
                  className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm italic leading-6 text-gray-700">
                    "{card.quote}"
                  </p>
                  <p className="mt-4 text-sm font-extrabold text-text-dark">
                    {card.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-0 sm:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-t-lg bg-primary-dark text-white">
            <div className="grid grid-cols-1 items-center gap-5 p-6 md:grid-cols-[1.5fr_1fr]">
              <div>
                <h2 className="font-title text-2xl font-semibold">
                  Pret a concretiser votre projet ?
                </h2>
                <p className="mt-2 text-sm text-white/85">
                  Remplissez le formulaire et recevez un premier retour.
                </p>
              </div>
              <a
                href="#demande-etude"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold uppercase text-primary-dark transition hover:bg-secondary"
              >
                Recevoir mon estimation <ArrowRight size={16} />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-5 bg-text-dark px-6 py-5 md:grid-cols-4">
              {[
                ["Expertise reconnue", "Metre, dessiner, projeter et suivre."],
                ["Intervention locale", "Paris et Ile-de-France."],
                ["Suivi chantier", "Preparation et coordination."],
                ["Donnees securisees", "Pas de transmission commerciale."],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="font-extrabold">{title}</p>
                  <p className="mt-1 text-sm text-white/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
