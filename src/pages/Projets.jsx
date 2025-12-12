import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectGallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const open = (index) => setActiveIndex(index);
  const close = () => setActiveIndex(null);

  const next = () =>
    setActiveIndex((i) => (i === projectsData.length - 1 ? 0 : i + 1));

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? projectsData.length - 1 : i - 1));

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl font-bold text-text-dark mb-6">
            Réalisations
          </h2>
          <p className="text-lg text-text-light leading-relaxed">
            Une sélection de projets réalisés avec exigence, précision et souci
            du détail.
          </p>
        </div>

        {/* GALERIE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer"
              onClick={() => open(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-soft">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[260px] object-cover"
                />

                <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition flex items-end">
                  <div className="p-5 text-white opacity-0 hover:opacity-100 transition">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    {project.infos && (
                      <p className="text-sm opacity-80 mt-1">{project.infos}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-[999]
              bg-black/90 backdrop-blur-sm
              overflow-y-auto
            "
          >
            {/* CLOSE */}
            <button
              onClick={close}
              className="fixed top-6 right-6 z-[1000]
                         text-white bg-white/10
                         hover:bg-primary
                         p-3 rounded-full transition"
            >
              <X />
            </button>

            {/* PREV */}
            <button
              onClick={prev}
              className="fixed left-6 top-1/2 -translate-y-1/2 z-[1000]
                         text-white bg-white/10
                         hover:bg-primary
                         p-3 rounded-full transition"
            >
              <ArrowLeft />
            </button>

            {/* NEXT */}
            <button
              onClick={next}
              className="fixed right-6 top-1/2 -translate-y-1/2 z-[1000]
                         text-white bg-white/10
                         hover:bg-primary
                         p-3 rounded-full transition"
            >
              <ArrowRight />
            </button>

            {/* CONTENT */}
            <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
              {/* IMAGE */}
              <motion.img
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                src={projectsData[activeIndex].img}
                alt={projectsData[activeIndex].title}
                decoding="async"
                className="
                  max-w-full
                  max-h-[70vh]
                  object-contain
                  rounded-xl
                  shadow-2xl
                "
              />

              {/* TEXTE */}
              <div className="mt-8 text-center text-white max-w-3xl">
                <h3 className="text-2xl font-semibold mb-2">
                  {projectsData[activeIndex].title}
                </h3>
                {projectsData[activeIndex].infos && (
                  <p className="text-sm opacity-80">
                    {projectsData[activeIndex].infos}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
