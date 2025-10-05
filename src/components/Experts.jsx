// src/components/Experts.jsx
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
      {/* SECTION PRINCIPALE */}
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
              src="https://cdn.manomano.com/promo-pages/inspirational-images/V2/FR/salle-de-bain-contemporain/image_0_0.jpg"
              alt="Salle de bain rénovée"
              className="rounded-2xl shadow-xl object-cover w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
              style={{
                transform: "perspective(1000px) rotateY(45deg)",
              }}
            />
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeIn}
            className="md:w-1/2 w-full text-center md:text-left"
          >
            <h2 className="font-bold text-text-dark mb-6 leading-snug text-[clamp(1.5rem,4vw,2.5rem)] sm:text-[clamp(2rem,3vw,2.8rem)]">
              <span className="block">Expert dans la transformation</span>
              <span className="block text-primary">
                des espaces du quotidien
              </span>
            </h2>

            <p className="text-text-light mb-6 text-md md:text-lg leading-relaxed">
              Chaque pièce mérite une attention unique. Mon approche allie
              fonctionnalité, esthétisme et savoir-faire artisanal pour des
              intérieurs qui durent.
            </p>

            <div className="space-y-5 mb-8">
              {[
                {
                  icon: (
                    <LayoutTemplate className="text-primary w-6 h-6 mt-1 shrink-0" />
                  ),
                  title: "Conception sur-mesure",
                  desc: "Plans précis et choix des matériaux adaptés à votre usage quotidien.",
                },
                {
                  icon: (
                    <ShowerHead className="text-primary w-6 h-6 mt-1 shrink-0" />
                  ),
                  title: "Rénovation complète",
                  desc: "Démolition, plomberie, carrelage, mobilier... je m’occupe de tout.",
                },
                {
                  icon: (
                    <Wrench className="text-primary w-6 h-6 mt-1 shrink-0" />
                  ),
                  title: "Installation professionnelle",
                  desc: "Pose soignée et finitions robustes, prêtes à durer dans le temps.",
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
                    <h4 className="font-semibold text-text-dark  text-lg md:text-xl">
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
              to="/services"
              className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all duration-500 text-base"
            >
              Voir mes réalisations
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* POURQUOI CHOISIR */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-10 ">
            Pourquoi choisir <span className="text-primary">BJD-PRO</span> ?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <ThumbsUp className="text-primary w-10 h-10 mx-auto mb-4" />
                ),
                title: "Satisfaction garantie",
                desc: "Je m’engage à livrer un travail soigné, conforme à vos attentes, dans les délais convenus.",
              },
              {
                icon: (
                  <PackageCheck className="text-primary w-10 h-10 mx-auto mb-4" />
                ),
                title: "Solution complète",
                desc: "De la conception au montage, tout est pris en charge avec précision et transparence.",
              },
              {
                icon: (
                  <UserCheck className="text-primary w-10 h-10 mx-auto mb-4" />
                ),
                title: "Un seul interlocuteur",
                desc: "Plus de perte de temps ou de malentendus, vous parlez directement à celui qui conçoit et réalise.",
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

      {/* ENGAGEMENT */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-secondary py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-10 ">
            Mon engagement au-delà des travaux
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <ClipboardList className="text-primary w-10 h-10 mx-auto mb-4" />
                ),
                title: "Accompagnement",
                desc: "Je vous accompagne à chaque étape : conseil, planification, choix des matériaux, suivi de chantier.",
              },
              {
                icon: (
                  <ShieldCheck className="text-primary w-10 h-10 mx-auto mb-4" />
                ),
                title: "Fiabilité & transparence",
                desc: "Des devis clairs, des délais respectés, une qualité irréprochable à chaque livraison.",
              },
              {
                icon: <Smile className="text-primary w-10 h-10 mx-auto mb-4" />,
                title: "Écoute & proximité",
                desc: "Je prends le temps de comprendre votre besoin et d’y répondre au plus juste, avec attention.",
              },
              {
                icon: (
                  <UserCheck className="text-primary w-10 h-10 mx-auto mb-4" />
                ),
                title: "Polyvalence rare",
                desc: "Allier artisanat, design, technique et digital me permet d’offrir une réponse complète et unique.",
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
