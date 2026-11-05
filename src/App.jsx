import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ProjectDetailsPage from "./ProjectDetailsPage";
import TravelPage from "./TravelPage";
import TravelDetailsPage from "./TravelDetailsPage";

function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.querySelector(hash);

    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
}

export default function App() {
  useScrollOnNavigate();

  return (
    <div className="min-h-screen bg-page text-ink">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:id" element={<ProjectDetailsPage />} />
        <Route path="/travels" element={<TravelPage />} />
        <Route path="/travels/:id" element={<TravelDetailsPage />} />
        <Route path="/travel" element={<Navigate to="/travels" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
