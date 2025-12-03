import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const bubbleVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Contact() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copié dans le presse-papier !");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-secondary to-white px-4 py-12"
      >
        <div className="max-w-6xl w-full bg-white rounded-2xl shadow-card overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Bloc gauche */}
          <div className="relative bg-gradient-to-br from-primary/70 via-primary-dark/70 to-[#004e45]/70 text-white p-10 flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <motion.div
                className="absolute -top-20 -left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
                variants={bubbleVariants}
                animate="float"
              />
              <motion.div
                className="absolute bottom-10 right-0 w-48 h-48 bg-white/15 rounded-full blur-2xl"
                variants={bubbleVariants}
                animate="float"
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
                variants={bubbleVariants}
                animate="float"
              />
            </div>

            <div className="relative z-10 max-w-md space-y-5">
              <h2 className="text-xl md:text-2xl font-title font-semibold ">
                BJD‑HOME-PRO
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-white/90">
                Artisan polyvalent, je transforme vos espaces avec soin,
                précision et efficacité — de la menuiserie à la rénovation, chez
                vous ou au travail.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm md:text-base mt-6">
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  🔨 <strong>Menuiserie</strong>
                  <p className="text-white/80 text-xs md:text-sm">
                    Pose, découpe, sur mesure
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  🏠 <strong>Agencement</strong>
                  <p className="text-white/80 text-xs md:text-sm">
                    Placards, cuisines, bureaux
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  ⚙️ <strong>Dépannage</strong>
                  <p className="text-white/80 text-xs md:text-sm">
                    Petits travaux rapides
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                  🎨 <strong>Finitions</strong>
                  <p className="text-white/80 text-xs md:text-sm">
                    Peinture, joints, entretien
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire & contacts */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-10 space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-title font-semibold text-text-dark uppercase">
              Contactez-moi
            </h3>
            <p className="text-base md:text-lg text-text-light">
              Décrivez-moi votre besoin — je vous réponds vite avec une solution
              claire et sur mesure.
            </p>
  
            <form
              action="https://formspree.io/f/xanpbndr"
              method="POST"
              className="space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Votre nom complet"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre adresse e-mail"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Décrivez vos besoins, vos travaux ou votre projet..."
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary-dark transition"
              >
                <Send size={18} /> Envoyer
              </button>
            </form>

            <div className="text-sm md:text-base text-text-light border-t pt-4 space-y-2">
              <div
                className="flex items-center gap-2 cursor-pointer hover:underline"
                onClick={() => handleCopy("contact@bjd-pro.fr")}
              >
                <Mail className="text-primary" size={18} /> contact@bjd-home-pro.fr
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer hover:underline"
                onClick={() => handleCopy("07 45 49 46 20")}
              >
                <Phone className="text-primary" size={18} /> 07 45 49 46 20
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-primary" size={18} /> 60 rue François
                1er, Paris
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
}
