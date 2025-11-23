import {
  Wrench,
  ShowerHead,
  LayoutTemplate,
  ThumbsUp,
  PackageCheck,
  UserCheck,
  Smile,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Experts() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 22,
        stiffness: 100,
        duration: 0.8,
      },
    }),
  };

  const slideIn = (direction = "left", delay = 0) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -60 : 60,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay,
        type: "spring",
        damping: 22,
        stiffness: 100,
        duration: 0.9,
      },
    },
  });

  const Card = ({ children }) => {
    const [transform, setTransform] = useState("");

    const handleMouseMove = (e) => {
      if (isMobile) return;
      const { offsetX, offsetY, target } = e.nativeEvent;
      const { clientWidth, clientHeight } = target;
      const x = (offsetX / clientWidth - 0.5) * 10;
      const y = (offsetY / clientHeight - 0.5) * -10;
      setTransform(`rotateX(${y}deg) rotateY(${x}deg)`);
    };

    const handleMouseLeave = () => setTransform("");

    return (
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease-out",
        }}
        className="h-full"
      >
        {children}
      </div>
    );
  };

  return (
    <>
      {/* EXPERTISE */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-secondary py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div custom={0} variants={fadeIn} className="md:w-1/2 w-full">
            <img
              src="https://res.cloudinary.com/dl3ntuzaz/image/upload/v1763819839/DSC_0959_rj7mdy.jpg"
              alt="Salle de bain rénovée"
              className="
      rounded-2xl 
      shadow-xl 
      object-cover 
      w-full 
      h-auto 
      max-h-[75vh]      /* ⬅️ limite la hauteur en mobile + desktop */
      transition-transform 
      duration-700 
      hover:scale-[1.02]
    "
              style={{
                transform: "perspective(1000px) rotateY(35deg)",
              }}
            />
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeIn}
            className="md:w-1/2 w-full text-center md:text-left"
          >
            <h2 className="font-title font-semibold text-text-dark mb-6 leading-snug text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(2rem,3vw,2.8rem)]">
              <span className="block text-primary">
                L’utile devient esthétique
              </span>
            </h2>

            {/* <p className="text-text-light mb-6 text-md md:text-lg leading-relaxed">
              Artisan du second œuvre, je conçois et rénove chaque pièce avec
              soin et précision.
            </p> */}

            <div className="space-y-5 mb-8">
              {[
                {
                  icon: (
                    <LayoutTemplate className="text-primary w-6 h-6 mt-1 shrink-0" />
                  ),
                  title: "Conception sur-mesure",
                  desc: "Plans clairs, choix de matériaux adaptés, et solutions pensées pour votre quotidien.",
                },
                {
                  icon: (
                    <ShowerHead className="text-primary w-6 h-6 mt-1 shrink-0" />
                  ),
                  title: "Rénovation complète",
                  desc: "Du sol au plafond : démontage, cloisons, carrelage, mobilier. Je gère tout, sans sous-traitance.",
                },
                {
                  icon: (
                    <Wrench className="text-primary w-6 h-6 mt-1 shrink-0" />
                  ),
                  title: "Installation professionnelle",
                  desc: "Finitions robustes et soignées, pour un résultat net, fiable, et sans surprise.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i + 2}
                  variants={slideIn(i % 2 === 0 ? "left" : "right", i * 0.2)}
                  className="flex items-start gap-4"
                >
                  {item.icon}
                  <div>
                    <h4 className="font-semibold text-text-dark text-lg md:text-xl">
                      {item.title}
                    </h4>
                    <p className="text-text-light text-base md:text-md leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/projets"
              className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all duration-500 text-base"
            >
              Voir mes réalisations
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* POURQUOI ME CHOISIR */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl  text-text-dark mb-10 font-title font-semibold">
            Pourquoi choisir{" "}
            <span className="text-primary font-title font-semibold">
              BJD-HOME-PRO
            </span>{" "}
            ?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <ThumbsUp className="text-primary w-10 h-10 mx-auto mb-4" />
                ),
                title: "Satisfaction garantie",
                desc: "Un engagement clair : un travail rigoureux, dans les temps, conforme à vos attentes.",
              },
              {
                icon: (
                  <PackageCheck className="text-primary w-10 h-10 mx-auto mb-4" />
                ),
                title: "Solution clé en main",
                desc: "Un accompagnement complet : je prends en charge toutes les étapes, de l’idée à la pose.",
              },
              {
                icon: (
                  <UserCheck className="text-primary w-10 h-10 mx-auto mb-4" />
                ),
                title: "Un seul interlocuteur",
                desc: "Un gain de temps et de clarté : je conçois, réalise et vous informe à chaque étape.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={slideIn(i % 2 === 0 ? "left" : "right", i * 0.15)}
                className="h-full"
              >
                <Card>
                  <div className="p-6 sm:p-8 min-h-[320px] flex flex-col justify-between rounded-2xl bg-secondary shadow-card hover:shadow-xl transition-all duration-500 group cursor-pointer">
                    {card.icon}
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-text-dark mb-2 relative inline-block">
                        {card.title}
                        <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
                      </h4>
                      <p className="text-text-light text-base md:text-md leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ENGAGEMENT FINAL */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-secondary py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-title font-semibold text-text-dark mb-10">
            Mon engagement au-delà des travaux
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <ClipboardList className="text-primary w-10 h-10 mx-auto mb-4" />
                ),
                title: "Présence",
                desc: "Présent à chaque étape : conseils, plans, choix de matériaux, suivi chantier.",
              },
              {
                icon: (
                  <ShieldCheck className="text-primary w-10 h-10 mx-auto mb-4" />
                ),
                title: "Fiabilité",
                desc: "Des devis lisibles, des délais réalistes, et un rendu qui respecte vos exigences.",
              },
              {
                icon: <Smile className="text-primary w-10 h-10 mx-auto mb-4" />,
                title: "Écoute",
                desc: "Je prends le temps de comprendre votre projet et vos envies, sans jamais forcer.",
              },
              {
                icon: (
                  <UserCheck className="text-primary w-10 h-10 mx-auto mb-4" />
                ),
                title: "Polyvalence",
                desc: "Mon profil hybride (dessin, technique, terrain) me permet une réponse unique et cohérente.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={slideIn(i % 2 === 0 ? "right" : "left", i * 0.2)}
                className="h-full"
              >
                <Card>
                  <div className="bg-white p-6 sm:p-8 min-h-[320px] flex flex-col justify-between rounded-2xl shadow-card hover:shadow-xl transition-all duration-500 group cursor-pointer">
                    {item.icon}
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-text-dark mb-2 relative inline-block">
                        {item.title}
                        <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
                      </h4>
                      <p className="text-base md:text-md text-text-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
