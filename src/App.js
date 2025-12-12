import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";

import Metreur93 from "./components/local_pages_bjd_home_pro/metreur-tce-seine-saint-denis-93";
import IDFMetreurAgencement from "./components/local_pages_bjd_home_pro/idf-metreur-agencement";
import ApporteurAffairesBtpIdf from "./components/local_pages_bjd_home_pro/ApporteurAffairesBtpIdf";
import ParisMetreurTCE from "./components/local_pages_bjd_home_pro/paris-metreur-tce";
import Metreur77 from "./components/local_pages_bjd_home_pro/metreur-tce-seine-et-marne-77";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-bg text-fg min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/metreur-tce-seine-et-marne-77"
            element={<Metreur77 />}
          />

          <Route
            path="/metreur-tce-seine-saint-denis-93"
            element={<Metreur93 />}
          />

          <Route
            path="/agencement-interieur-idf"
            element={<IDFMetreurAgencement />}
          />

          <Route
            path="/apporteur-affaires-btp-idf"
            element={<ApporteurAffairesBtpIdf />}
          />

          <Route path="/paris-metreur-tce" element={<ParisMetreurTCE />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}
