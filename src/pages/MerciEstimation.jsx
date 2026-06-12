import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import Footer from "../components/Footer";

export default function MerciEstimation() {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const robots = document.querySelector('meta[name="robots"]');
    const previousDescription = description?.getAttribute("content");
    const previousRobots = robots?.getAttribute("content");

    document.title = "Demande envoyee | BJD-HOME-PRO";
    description?.setAttribute(
      "content",
      "Votre demande d'estimation BJD-HOME-PRO a bien ete transmise. Nous revenons vers vous pour etudier votre projet."
    );
    robots?.setAttribute("content", "noindex, follow");

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        description?.setAttribute("content", previousDescription);
      }
      if (previousRobots) {
        robots?.setAttribute("content", previousRobots);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-white text-text-dark font-title">
        <section className="px-5 py-14 sm:px-8 md:py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                <CheckCircle2 size={18} />
                Demande envoyee
              </div>

              <h1 className="mt-6 font-title text-4xl font-semibold leading-tight text-text-dark md:text-5xl">
                Merci, votre demande a bien ete transmise.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-text-dark/80">
                BJD-HOME-PRO va prendre connaissance de votre projet et revenir
                vers vous avec un premier retour personnalise. Votre demande
                sera traitee avec attention, sans engagement de votre part.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold uppercase text-white transition hover:bg-primary-dark"
                >
                  Retour a l'accueil
                </Link>
                <Link
                  to="/projets"
                  className="inline-flex h-12 items-center justify-center gap-3 rounded-xl border border-primary px-6 text-sm font-semibold uppercase text-primary transition hover:bg-primary hover:text-white"
                >
                  Voir les realisations <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-secondary p-6 shadow-card">
              <h2 className="font-title text-2xl font-semibold">
                Ce qu'il se passe maintenant
              </h2>
              <div className="mt-6 space-y-5">
                {[
                  [
                    FileText,
                    "Analyse de votre demande",
                    "Type de projet, localisation, budget et delai sont relus pour comprendre le besoin.",
                  ],
                  [
                    PhoneCall,
                    "Retour personnalise",
                    "Vous pouvez etre rappele pour preciser certains points avant l'estimation.",
                  ],
                  [
                    Clock3,
                    "Premiere orientation",
                    "Un premier retour vous aide a avancer sur la faisabilite et les prochaines etapes.",
                  ],
                  [
                    ShieldCheck,
                    "Demarche sans engagement",
                    "La demande reste confidentielle et ne vous engage pas.",
                  ],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-text-dark">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
