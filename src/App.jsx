import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./Homepage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ProjectDetailsPage from "./ProjectDetailsPage";
import TravelPage from "./TravelPage";

export default function App() {
  return (
    <div className="min-h-screen bg-page text-ink">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:id" element={<ProjectDetailsPage />} />
        <Route path="/travels/:id" element={<TravelPage />} />
      </Routes>
    </div>
  );
}
