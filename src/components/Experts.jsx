// src/components/Experts.jsx

import { Wrench, ShowerHead, LayoutTemplate, ThumbsUp, PackageCheck, UserCheck, Smile, ClipboardList, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Experts() {
  return (
    <>
      {/* Section principale : Expertise */}
    <section className="bg-secondary py-20 px-4">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
   <div className="md:w-1/2">
  <img
    src="https://cdn.manomano.com/promo-pages/inspirational-images/V2/FR/salle-de-bain-contemporain/image_0_0.jpg"
    alt="Salle de bain rénovée"
    className="rounded-2xl shadow-xl object-cover w-full h-auto transition-transform duration-500 hover:rotate-y-0"
    style={{
      transform: "perspective(1000px) rotateY(45deg)",
    }}
  />
</div>


    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6 uppercase">
        Expert dans la transformation<br />
        <span className="text-primary">des espaces du quotidien</span>
      </h2>
      <p className="text-text-light mb-6 text-lg">
        Chaque pièce mérite une attention unique. Mon approche allie fonctionnalité, esthétisme
        et savoir-faire artisanal pour des intérieurs qui durent.
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-4">
          <LayoutTemplate className="text-primary w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-text-dark uppercase">Conception sur-mesure</h4>
            <p className="text-text-light text-sm">
              Plans précis et choix des matériaux adaptés à votre usage quotidien.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <ShowerHead className="text-primary w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-text-dark uppercase">Rénovation complète</h4>
            <p className="text-text-light text-sm">
              Démolition, plomberie, carrelage, mobilier... je m’occupe de tout.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Wrench className="text-primary w-6 h-6 mt-1" />
          <div>
            <h4 className="font-semibold text-text-dark uppercase">Installation professionnelle</h4>
            <p className="text-text-light text-sm">
              Pose soignée et finitions robustes, prêtes à durer dans le temps.
            </p>
          </div>
        </div>
      </div>

     

      <Link
        to="/services"
        className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition"
      >
        Voir mes réalisations
      </Link>
    </div>
  </div>
</section>


      {/* Pourquoi choisir BJD PRO ? */}
      <section className="bg-white py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-text-dark mb-10 uppercase">Pourquoi choisir <span className="text-primary">BJD-PRO</span> ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-secondary shadow-card">
              <ThumbsUp className="text-primary w-10 h-10 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-text-dark mb-2 uppercase">Satisfaction Garantie</h4>
              <p className="text-text-light text-sm">Je m’engage à livrer un travail soigné, conforme à vos attentes, dans les délais convenus.</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary shadow-card">
              <PackageCheck className="text-primary w-10 h-10 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-text-dark mb-2 uppercase">Solution Complète</h4>
              <p className="text-text-light text-sm">De la conception au montage, tout est pris en charge avec précision et transparence.</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary shadow-card">
              <UserCheck className="text-primary w-10 h-10 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-text-dark mb-2 uppercase">Un seul interlocuteur</h4>
              <p className="text-text-light text-sm">Plus de perte de temps ou de malentendus, vous parlez directement à celui qui conçoit et réalise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mon engagement au-delà des travaux */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-dark mb-10 uppercase">Mon engagement au-delà des travaux</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <ClipboardList className="text-primary w-10 h-10 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-text-dark mb-2 uppercase">Accompagnement</h4>
              <p className="text-sm text-text-light">Je vous accompagne à chaque étape : conseil, planification, choix des matériaux, suivi de chantier.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <ShieldCheck className="text-primary w-10 h-10 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-text-dark mb-2 uppercase">Fiabilité & transparence</h4>
              <p className="text-sm text-text-light">Des devis clairs, des délais respectés, une qualité irréprochable à chaque livraison.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <Smile className="text-primary w-10 h-10 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-text-dark mb-2 uppercase">Écoute & proximité</h4>
              <p className="text-sm text-text-light">Je prends le temps de comprendre votre besoin et d’y répondre au plus juste, avec attention.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <UserCheck className="text-primary w-10 h-10 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-text-dark mb-2 uppercase">Polyvalence rare</h4>
              <p className="text-sm text-text-light">Allier artisanat, design, technique et digital me permet d’offrir une réponse complète et unique.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
