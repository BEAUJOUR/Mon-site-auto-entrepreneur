// src/pages/Services.jsx
import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Testimonials from "../components/Testimonials";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // ⭐ PREMIUM 3 SERVICES
  const services = [
    {
      title: "Agencement intérieur et Menuiserie sur-mesure",
      desc: "Cuisines, dressings, mobilier, optimisation d’espace et rénovation haut de gamme. Créations 100% sur mesure.",
      icon: require("../assets/photos/placard.gif"),
    },
    {
      title: "Métrage TCE et Études techniques",
      desc: "Relevés précis, quantitatifs, plans 2D/3D et estimations complètes pour maîtriser budget et faisabilité.",
      icon: require("../assets/photos/dessin-de-conception.gif"),
    },
    {
      title: "Mise en relation BTP (Apporteur d’affaires)",
      desc: "Connexion fiable entre artisans, entreprises et clients. Sélection et accompagnement sérieux jusqu'au projet.",
      icon: require("../assets/photos/relation.gif"),
    },
  ];

  const steps = [
    {
      icon: require("../assets/photos/bulle.gif"),
      title: "Premier contact et devis",
      text: "Échange sur vos besoins, conseils personnalisés et devis clair et détaillé.",
    },
    {
      icon: require("../assets/photos/horloge.gif"),
      title: "Étude et conception",
      text: "Plans techniques, rendus 3D et validation des matériaux selon votre budget et vos goûts.",
    },
    {
      icon: require("../assets/photos/percer.gif"),
      title: "Fabrication et pose",
      text: "Travail artisanal, finitions soignées et respect des délais convenus.",
    },
    {
      icon: require("../assets/photos/verifie.gif"),
      title: "Contrôle et satisfaction",
      text: "Livraison conforme à vos attentes avec accompagnement après projet.",
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

  // ✨ Animations globales
  const fadeIn = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 18,
        stiffness: 120,
      },
    }),
  };

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Floating animation (montée / descente)
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div className="bg-white text-text-dark overflow-hidden font-[Didot,serif]">
      {/* ⭐ SECTION SERVICES */}
      <motion.section
        ref={sectionRef}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-gradient-to-tr from-white to-secondary px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Mes Services
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={fadeIn}
              className="
                backdrop-blur-xl bg-white/20 border border-white/30
                rounded-3xl shadow-lg p-10 text-center
                transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl"
            >
              {/* ✨ ICÔNE FLOATING 3D */}
              <motion.div
                style={{ y: floatY }}
                whileHover={{ rotateY: 15, rotateX: 10, scale: 1.12 }}
                transition={{ type: "spring", stiffness: 80 }}
                className="
                  flex items-center justify-center 
                  w-28 h-28 mx-auto mb-8 
                  rounded-full 
                  bg-white/40 backdrop-blur-xl 
                  shadow-lg ring-2 ring-primary/30 p-2
                  overflow-hidden"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain rounded-full"
                />
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ======================================================
   TIMELINE "COMMENT JE TRAVAILLE" — DESKTOP ONLY
   ====================================================== */}

      <div className="hidden lg:block">
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="py-24 bg-gradient-to-tr from-white to-secondary px-6"
        >
          <h2 className="text-4xl font-bold text-center mb-24">
            Comment je travaille
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* ┃ Ligne verticale centrale */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-primary/30 -translate-x-1/2 rounded-full" />

            {[
              {
                icon: require("../assets/photos/bulle.gif"),
                title: "Premier contact et devis",
                text: "Échange sur vos besoins, conseils personnalisés et devis clair et détaillé.",
              },
              {
                icon: require("../assets/photos/horloge.gif"),
                title: "Étude et conception",
                text: "Plans techniques, rendus 3D et validation des matériaux selon votre budget et vos goûts.",
              },
              {
                icon: require("../assets/photos/percer.gif"),
                title: "Fabrication et pose",
                text: "Travail artisanal, finitions soignées et respect des délais convenus.",
              },
              {
                icon: require("../assets/photos/verifie.gif"),
                title: "Contrôle et satisfaction",
                text: "Livraison conforme à vos attentes avec accompagnement après projet.",
              },
            ].map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative grid grid-cols-2 gap-24 mb-28 items-center"
                >
                  {/* ━ Connecteurs horizontaux */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px]">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[90px] h-[3px] bg-primary/40" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90px] h-[3px] bg-primary/40" />
                  </div>

                  {/* ● Point central */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full shadow-md z-20" />

                  {/* ───── COLONNE GAUCHE */}
                  <div className="flex justify-end pr-24">
                    {isLeft ? (
                      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white/40 backdrop-blur-xl shadow-lg ring-2 ring-primary/30 overflow-hidden">
                        <img
                          src={step.icon}
                          alt={step.title}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    ) : (
                      <div className="bg-white rounded-2xl shadow-card p-8 max-w-md">
                        <h3 className="text-2xl font-semibold mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* ───── COLONNE DROITE */}
                  <div className="flex justify-start pl-24">
                    {isLeft ? (
                      <div className="bg-white rounded-2xl shadow-card p-8 max-w-md">
                        <h3 className="text-2xl font-semibold mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white/40 backdrop-blur-xl shadow-lg ring-2 ring-primary/30 overflow-hidden">
                        <img
                          src={step.icon}
                          alt={step.title}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>

      {/* ⭐ FAQ */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        className="py-20 bg-gradient-to-tr from-secondary/70 to-white px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            FAQ
          </h2>

          <div className="space-y-6">
            {faq.map((f, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeIn}
                className="bg-white/90 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-500"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="text-primary" size={24} />
                    <h3 className="text-lg md:text-xl font-semibold">{f.q}</h3>
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
                      transition={{ duration: 0.5 }}
                      className="text-gray-700 mt-3 pl-8 leading-relaxed"
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

      {/* ⭐ Témoignages */}
      {/* <Testimonials /> */}

      {/* ⭐ CTA */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto bg-primary text-white rounded-2xl p-14 text-center shadow-soft">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="mb-8 text-white/90 max-w-2xl mx-auto">
            Contactez-moi dès aujourd’hui pour un devis gratuit et personnalisé.
            Ensemble, donnons vie à vos idées.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-primary-dark hover:text-white transition-all duration-500"
          >
            Demander un devis
          </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
