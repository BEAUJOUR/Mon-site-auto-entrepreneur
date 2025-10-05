import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jean Dupont",
      text: "Travail impeccable, respect des délais et finitions parfaites. Je recommande vivement cet artisan.",
    },
    {
      name: "Marie Leduc",
      text: "Cuisine et dressing réalisés sur mesure avec goût et précision. Le résultat dépasse mes attentes.",
    },
    {
      name: "Eric Martin",
      text: "Très professionnel, ponctuel et à l’écoute. Mon salon a totalement changé grâce à son agencement.",
    },
    {
      name: "Claire Thomas",
      text: "Le travail du bois est magnifique, des détails impeccables et une grande propreté du chantier.",
    },
    {
      name: "Sophie Bernard",
      text: "Réalisation exceptionnelle. Détail, écoute et passion dans chaque étape du projet.",
    },
    {
      name: "David Rousseau",
      text: "Un artisan de confiance, travail rapide et soigné. Résultat final exceptionnel.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-tr from-white to-secondary overflow-hidden relative">
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-text-dark text-center mb-14"
      >
        Témoignages clients
      </motion.h2>

      {/* Conteneur horizontal avec effet défilement visible */}
      <div className="relative w-full overflow-hidden">
        {/* Ligne de cartes (animation infinie droite -> gauche) */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 40, // plus la durée est grande, plus c’est lent
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px] bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-soft p-6 text-center hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                <Quote size={20} />
              </div>
              <p className="text-text-light italic mb-3 text-sm leading-relaxed">
                “{t.text}”
              </p>
              <cite className="block text-text-dark font-semibold text-sm">
                — {t.name}
              </cite>
              <div className="mt-3 w-12 h-[2px] bg-primary/50 mx-auto rounded-full" />
            </div>
          ))}
        </motion.div>

        {/* Effet dégradé sur les bords */}
        <div className="pointer-events-none absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>

      {/* Texte de bas de section */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center text-text-light mt-16 max-w-2xl mx-auto px-6"
      >
        Des clients satisfaits par la qualité, la précision et la passion du
        travail bien fait. Merci pour leur confiance.
      </motion.p>
    </section>
  );
}
