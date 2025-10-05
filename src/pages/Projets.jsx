import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Project() {
  const [index, setIndex] = useState(0);
  const [left, setLeft] = useState("0px");
  const [top, setTop] = useState("0px");
  const [size, setSize] = useState("scale(1)");

  const project = projectsData[index];

  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  const nextProject = () => setIndex((i) => (i + 1) % projectsData.length);
  const prevProject = () =>
    setIndex((i) => (i === 0 ? projectsData.length - 1 : i - 1));

  const variants = {
    initial: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.03, 0.87, 0.73, 0.9] },
    },
    exit: { opacity: 0, x: -150, transition: { duration: 0.4 } },
  };

  const imgAnim = {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 50,
    },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-10 py-16 bg-white overflow-hidden">
      {/* Cercle décoratif */}
      <span
        className="absolute bg-secondary rounded-full w-[380px] h-[380px] z-[-1] animate-[circleAnim_16s_infinite_alternate] hidden md:block"
        style={{ left, top, transform: size }}
      ></span>

      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          className="w-full grid md:grid-cols-[38%,62%] gap-6 items-center max-w-6xl mx-auto"
          variants={variants}
          initial="initial"
          animate="visible"
          exit="exit"
        >
          {/* Texte à gauche */}
          <div className="text-center md:text-left space-y-4 px-2">
            <motion.h1
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold font-title text-primary-dark origin-right"
            >
              {project.title}
            </motion.h1>

            <p className="text-text-light text-base md:text-lg">
              {project.date}
            </p>

            <ul className="space-y-1 text-lg text-text-dark font-medium">
              {project.languages?.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </div>

          {/* Image immersive avec boutons intégrés */}
          <div className="relative flex justify-center items-center group w-full">
            {/* Image */}
            <motion.div
              className="rounded-3xl shadow-xl overflow-hidden w-full max-w-[800px] h-[460px] relative"
              initial="initial"
              animate="visible"
              variants={imgAnim}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent text-white p-6 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <h3 className="text-2xl font-semibold text-primary mb-1">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed">{project.infos}</p>
              </div>

              {/* Bouton gauche sur image */}
              <button
                onClick={prevProject}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-primary-dark text-white backdrop-blur-sm border border-white/20 p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <ArrowLeft size={26} />
              </button>

              {/* Bouton droite sur image */}
              <button
                onClick={nextProject}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-primary-dark text-white backdrop-blur-sm border border-white/20 p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <ArrowRight size={26} />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bouton Voir le site */}
      <div className="mt-10 text-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary-dark transition-all duration-300 shadow-md"
        >
          Voir le projet
        </a>
      </div>
    </section>
  );
}
