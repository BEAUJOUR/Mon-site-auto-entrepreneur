// src/components/Hero.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const smoothY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const y = useTransform(smoothY, [0, 1], [0, 150]);

  return (
    <motion.section
      ref={ref}
      className="relative overflow-hidden min-h-screen flex items-center px-4 bg-primary"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        aria-hidden="true"
      />

      {/* Overlay plus contrasté */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/90 to-white/100" />

      {/* Contenu */}
      <div className="relative z-20 mx-auto max-w-7xl grid items-center gap-12 md:grid-cols-2">
        {/* Texte */}
        <div className="text-center md:text-left">
          <motion.h1 className="text-2xl sm:text-4xl md:text-5xl font-title font-extrabold uppercase tracking-tight text-text-dark leading-[1.35] sm:leading-[1.25]">
            Transformer vos idées
            <br />
            en espaces vivants et bien pensés
          </motion.h1>

          <motion.p className="mt-6 text-base md:text-lg text-text-dark/80 max-w-prose mx-auto md:mx-0 leading-relaxed">
            Derrière chaque cloison posée, chaque meuble monté, il y a une
            intention : créer un lieu qui vous ressemble. Artisan et métreur, je
            vous accompagne avec écoute, rigueur et passion, du premier croquis
            jusqu’à la dernière finition.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
            className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          >
            <Link
              to="/services"
              aria-label="Découvrir les services BJD-HOME-PRO"
              className="
                bg-primary text-white
                px-6 py-3 rounded-2xl font-semibold
                shadow-soft
                hover:bg-primary-dark
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-primary-dark
                transition-all duration-300
              "
            >
              Découvrir mes services
            </Link>

            <Link
              to="/contact"
              aria-label="Contacter BJD-HOME-PRO"
              className="
                border-2 border-primary text-primary
                px-6 py-3 rounded-2xl font-semibold
                hover:bg-primary hover:text-white
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-primary
                transition-all duration-300
              "
            >
              Me contacter
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          className="flex justify-center items-center mb-12 sm:mb-0"
          animate={{
            x: [0, 6, 0, -6, 0],
            y: [0, -4, 0, 4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full max-w-sm md:max-w-md"
            style={{ perspective: "1200px" }}
          >
            <motion.img
              src="https://res.cloudinary.com/dl3ntuzaz/image/upload/f_auto,q_auto,w_800/DSC_0960_i8ogjk.jpg"
              srcSet="
    https://res.cloudinary.com/dl3ntuzaz/image/upload/f_auto,q_auto,w_400/DSC_0960_i8ogjk.jpg 400w,
    https://res.cloudinary.com/dl3ntuzaz/image/upload/f_auto,q_auto,w_800/DSC_0960_i8ogjk.jpg 800w,
    https://res.cloudinary.com/dl3ntuzaz/image/upload/f_auto,q_auto,w_1200/DSC_0960_i8ogjk.jpg 1200w
  "
              sizes="(max-width: 768px) 90vw, 800px"
              alt="Atelier et outillage professionnel"
              width="900"
              height="600"
              fetchpriority="high"
              loading="eager"
              decoding="async"
              className="rounded-2xl shadow-card w-full object-cover h-auto max-h-[70vh]"
              initial={{ rotateY: -35, opacity: 0 }}
              whileInView={{ rotateY: -40, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, type: "spring" }}
              style={{ transformStyle: "preserve-3d" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
