import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
 const testimonials = [
   {
     name: "Amélie Rey",
     text: "Très satisfaite de l’aménagement de mon séjour. Les conseils ont été précieux et les finitions impeccables.",
   },
   {
     name: "Karim Boussada",
     text: "Pose d’un dressing sur mesure dans ma chambre. Travail propre, précis et conforme à ce qui avait été annoncé.",
   },
   {
     name: "Lucie Morel",
     text: "Rénovation complète de ma salle de bain. Le résultat est moderne et fonctionnel. Chantier bien géré du début à la fin.",
   },
   {
     name: "Thomas Arnal",
     text: "Fabrication d’un bureau et d’étagères sur mesure pour mon activité. Très bon sens du détail et délais respectés.",
   },
   {
     name: "Mélissa Lefèvre",
     text: "Cuisine entièrement repensée. Matériaux de qualité et finitions vraiment propres. Je recommande sans hésiter.",
   },
   {
     name: "Patrick Gomes",
     text: "Travail sérieux pour la pose de portes intérieures et d’un meuble TV. Artisan ponctuel et à l’écoute.",
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
        className="text-3xl md:text-4xl font-bold text-text-dark text-center mb-14"
      >
        Témoignages clients
      </motion.h2>

      {/* Marquee horizontale */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
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
              <p className="text-text-light italic mb-3 text-base md:text-lg leading-relaxed">
                “{t.text}”
              </p>
              <cite className="block text-text-dark font-semibold text-base">
                — {t.name}
              </cite>
              <div className="mt-3 w-12 h-[2px] bg-primary/50 mx-auto rounded-full" />
            </div>
          ))}
        </motion.div>

        {/* Dégradés latéraux */}
        <div className="pointer-events-none absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>

      {/* Légende */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center text-text-light mt-16 max-w-2xl mx-auto px-6 text-base md:text-lg"
      >
        Des clients satisfaits par la qualité, la précision et la passion du
        travail bien fait. Merci pour leur confiance.
      </motion.p>
    </section>
  );
}
