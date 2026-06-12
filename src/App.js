import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";
import EstimationProjet from "./pages/EstimationProjet";
import MerciEstimation from "./pages/MerciEstimation";

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
          <Route path="/estimation-projet" element={<EstimationProjet />} />
          <Route path="/merci-estimation" element={<MerciEstimation />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}
