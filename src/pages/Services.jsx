import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonials from "../components/Testimonials";
import {
  Wrench,
  Hammer,
  ShowerHead,
  PencilRuler,
  Ruler,
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const services = [
    {
      title: "Agencement intérieur",
      desc: "Optimisation d’espace, cloisonnement, peinture et finitions haut de gamme pour sublimer vos pièces.",
      icon: Wrench,
    },
    {
      title: "Cuisine & Dressing",
      desc: "Création sur mesure alliant esthétique, durabilité et fonctionnalité. Fabrication et pose clé en main.",
      icon: Hammer,
    },
    {
      title: "Salle de bain",
      desc: "Rénovation complète avec pose de carrelage, plomberie, meuble vasque et accessoires modernes.",
      icon: ShowerHead,
    },
    {
      title: "Mobilier sur mesure",
      desc: "Tables, étagères, bureaux et rangements uniques réalisés selon vos envies et vos dimensions.",
      icon: PencilRuler,
    },
    {
      title: "Dessin technique",
      desc: "Conception de plans précis, croquis techniques et visualisations pour garantir une exécution parfaite.",
      icon: Ruler,
    },
    {
      title: "Métrage & devis",
      desc: "Mesures exactes, calculs précis et estimations détaillées pour un budget clair et maîtrisé.",
      icon: Ruler,
    },
  ];

  const faq = [
    {
      q: "Quels sont vos délais pour une cuisine sur-mesure ?",
      a: "En moyenne 4 à 6 semaines selon la complexité, incluant fabrication et installation.",
    },
    {
      q: "Travaillez-vous dans toute l’Île-de-France ?",
      a: "Oui, je couvre toute l’Île-de-France et peux me déplacer au-delà selon le projet.",
    },
    {
      q: "Quels matériaux utilisez-vous ?",
      a: "Bois massif, MDF, stratifié, finitions laquées ou vernies, selon le style souhaité.",
    },
    {
      q: "Proposez-vous des plans 3D avant réalisation ?",
      a: "Oui, je réalise des rendus 3D pour visualiser votre projet avant le lancement.",
    },
  ];

  // Animation fluide unifiée
  const fadeIn = {
    hidden: { opacity: 0, y: 60, scale: 0.97 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 22,
        stiffness: 100,
        duration: 0.9,
      },
    }),
  };

  return (
    <div
      className="bg-white text-text-dark overflow-hidden"
      style={{ fontFamily: "Didot, Garamond, 'Times New Roman', serif" }}
    >
      {/* === SECTION INTRO === */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="py-28 bg-gradient-to-tr from-secondary to-white text-center"
      >
        <h1 className="text-5xl font-bold mb-6 tracking-wide">
          Mes Services d’Artisan Polyvalent
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-xl leading-relaxed">
          Je mets mon savoir-faire à votre service pour vos projets
          d’aménagement, de rénovation et de menuiserie sur mesure. Chaque
          réalisation est pensée pour allier élégance, durabilité et
          fonctionnalité.
        </p>
      </motion.section>

      {/* === SECTION SERVICES === */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        className="py-20 bg-gradient-to-tr from-white to-secondary px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Mes Services</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              className="bg-white/85 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-md p-10 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 text-primary-dark shadow-inner">
                <service.icon size={42} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed max-w-xs mx-auto">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* === SECTION COMMENT JE TRAVAILLE === */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        className="py-24 bg-gradient-to-tr from-white to-secondary px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-20">
          Comment je travaille
        </h2>

        <div className="max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-primary/20 transform -translate-x-1/2"></div>

          {[
            {
              icon: "💬",
              title: "Premier contact & devis",
              text: "Échange sur vos besoins, conseils personnalisés et devis clair et détaillé.",
            },
            {
              icon: "🧭",
              title: "Étude & conception",
              text: "Plans techniques, rendus 3D et validation des matériaux selon votre budget et vos goûts.",
            },
            {
              icon: "🪚",
              title: "Fabrication & pose",
              text: "Travail artisanal, finitions soignées et respect des délais convenus.",
            },
            {
              icon: "✅",
              title: "Contrôle & satisfaction",
              text: "Livraison conforme à vos attentes avec accompagnement après projet.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-14 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full shadow-md z-10"></div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white text-3xl shadow-lg">
                  {step.icon}
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left bg-white rounded-2xl shadow-card p-8">
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* === SECTION TÉMOIGNAGES === */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Testimonials />
      </motion.div>

      {/* === SECTION FAQ === */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="py-28 bg-gradient-to-tr from-secondary/70 to-white px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">FAQ</h2>
          <div className="space-y-6">
            {faq.map((f, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.25 }}
                className="bg-white/90 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-500"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="text-primary" size={26} />
                    <h3 className="text-xl font-semibold">{f.q}</h3>
                  </div>
                  {openIndex === i ? (
                    <ChevronUp className="text-primary-dark" />
                  ) : (
                    <ChevronDown className="text-primary-dark" />
                  )}
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="text-gray-700 text-lg mt-4 pl-9 pr-2 leading-relaxed"
                    >
                      {f.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* === SECTION APPEL À L’ACTION === */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto bg-primary text-white rounded-2xl p-14 text-center shadow-soft">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="mb-8 text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
            Contactez-moi dès aujourd’hui pour un devis gratuit et personnalisé.
            Ensemble, donnons vie à vos idées.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-primary-dark hover:text-white transition-all duration-500"
          >
            Demander un devis
          </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
