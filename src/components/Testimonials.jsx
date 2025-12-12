import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

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

  // 👇 Détection mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-tr from-white to-secondary overflow-hidden">
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-text-dark text-center mb-14 md:mb-20"
      >
        Ils nous ont fait confiance
      </motion.h2>

      {/* Défilement */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 md:gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: isMobile ? 28 : 40, // 🚀 plus rapide en mobile
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <article
              key={i}
              className="
                flex-shrink-0
                w-[85vw] sm:w-[360px] md:w-[420px]
                bg-white/90
                backdrop-blur-md
                border border-primary/10
                rounded-xl
                shadow-soft
                px-6 md:px-8
                py-6 md:py-8
              "
            >
              {/* Étoiles */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Texte */}
              <p className="text-text-light italic leading-relaxed text-base md:text-lg mb-5">
                “{t.text}”
              </p>

              {/* Séparateur */}
              <div className="w-10 h-[2px] bg-primary/30 mb-3 rounded-full" />

              {/* Nom */}
              <cite className="block text-text-dark font-semibold text-sm md:text-base">
                {t.name}
              </cite>
            </article>
          ))}
        </motion.div>

        {/* Dégradés */}
        <div className="pointer-events-none absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>

      {/* Texte bas */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-14 md:mt-20 max-w-2xl mx-auto text-center text-text-light text-base md:text-lg leading-relaxed px-6"
      >
        Une exigence constante dans la qualité d’exécution, le respect des
        engagements et le soin du détail.
      </motion.p>
    </section>
  );
}
