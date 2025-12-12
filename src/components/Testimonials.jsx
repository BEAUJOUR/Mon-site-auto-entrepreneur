import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Amélie Rey",
      text: "Très satisfaite de l’aménagement de mon séjour. Les conseils ont été précieux et les finitions impeccables.",
      rating: 5,
    },
    {
      name: "Karim Boussada",
      text: "Pose d’un dressing sur mesure dans ma chambre. Travail propre, précis et conforme à ce qui avait été annoncé.",
      rating: 5,
    },
    {
      name: "Lucie Morel",
      text: "Rénovation complète de ma salle de bain. Le résultat est moderne et fonctionnel. Chantier bien géré du début à la fin.",
      rating: 5,
    },
    {
      name: "Thomas Arnal",
      text: "Fabrication d’un bureau et d’étagères sur mesure pour mon activité. Très bon sens du détail et délais respectés.",
      rating: 5,
    },
    {
      name: "Mélissa Lefèvre",
      text: "Cuisine entièrement repensée. Matériaux de qualité et finitions vraiment propres. Je recommande sans hésiter.",
      rating: 5,
    },
    {
      name: "Patrick Gomes",
      text: "Travail sérieux pour la pose de portes intérieures et d’un meuble TV. Artisan ponctuel et à l’écoute.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-tr from-white to-secondary overflow-hidden">
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-text-dark text-center mb-20 tracking-tight"
      >
        Ils nous ont fait confiance
      </motion.h2>

      {/* Défilement horizontal premium */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.article
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="
                flex-shrink-0
                w-[440px]
                bg-white/85
                backdrop-blur-md
                border border-primary/10
                rounded-xl
                shadow-soft
                px-10
                py-8
                hover:shadow-card
              "
            >
              {/* Étoiles */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Texte */}
              <p className="text-text-light italic leading-relaxed text-lg mb-6">
                “{t.text}”
              </p>

              {/* Séparateur */}
              <div className="w-12 h-[2px] bg-primary/30 mb-4 rounded-full" />

              {/* Nom */}
              <cite className="block text-text-dark font-semibold tracking-wide">
                {t.name}
              </cite>
            </motion.article>
          ))}
        </motion.div>

        {/* Dégradés latéraux */}
        <div className="pointer-events-none absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>

      {/* Phrase de crédibilité */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-20 max-w-2xl mx-auto text-center text-text-light text-lg leading-relaxed px-6"
      >
        Une exigence constante dans la qualité d’exécution, le respect des
        engagements et le soin du détail.
      </motion.p>
    </section>
  );
}
