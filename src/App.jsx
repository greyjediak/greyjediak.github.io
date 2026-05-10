import "./App.css";
import { projects } from "./data/projects";
import { Routes, Route, Link } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import TravelPage from "./TravelPage";

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrapper">
          <Link to="/" className="logo">Lindsey B.</Link>

          <nav className="nav">
            <Link to="/#projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <a
              href="https://github.com/greyjediak"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/travels/:id" element={<TravelPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

function Home() {
  return (
    <main className="container">
      <section className="hero-section">
        <p className="eyebrow">
          Computer Engineering Student at The University of Alabama
        </p>
        <h2>Embedded systems, software, sensors, PCB design, problem solving.</h2>
        <p className="hero-text">
          I build projects across embedded systems, data collection, PCB design,
          machine learning, and full stack learning.
        </p>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <p className="eyebrow">Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-intro">
            Collection of various projects related to embedded systems, sensors, PCB Design, 3D modeling, and other projects.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className="project-tile"
            >
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-tile-content">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}


export default App;