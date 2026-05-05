import { useParams } from "react-router-dom";
import { projects } from "./data/projects";

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="container">
        <h1>Project not found</h1>
      </main>
    );
  }

  return (
    <main className="container project-page">
      <h1>{project.title}</h1>
      <p className="muted">{project.subtitle}</p>
      <section className="about-hero">
        <div className="about-photo-wrap">
          <img src={project.image} alt={project.title} className="about-photo" />
        </div>
      </section>
      
      

      <section>
        <h2>Overview</h2>
         <p>{project.summary}</p>
      </section>

      <section>
        <h2>Details</h2>
        <p>{project.details}</p>
      </section>

      <section className="image-grid">
        {project.images.map((img, i) => (
          <figure key={i} className="image-card">
            <a href={img.src} target="_blank" rel="noopener noreferrer">
              <img src={img.src} alt={img.caption} loading="lazy" />
            </a>
            
            <figcaption>{img.caption}</figcaption>
          </figure>
        ))}
      </section>

      
      {project.videos && project.videos.length > 0 && (
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Videos</p>
            <h2 className="section-title">Demos and Animations</h2>
          </div>
          
          <div className="video-grid">
            {project.videos.map((video, index) => (
              <figure className="video-card" key={index}>
                <video controls preload="metadata">
                  <source src={video.src} type="video/mp4" />
                  Your browser doesn't support the video tag.
                </video>
                {video.caption && <figcaption>{video.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}


      <section className="project-links">
        <h2>Resources</h2>
        
        <div className="links-grid">
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <span className="resource-type">{link.type.toUpperCase()}</span>
              <strong>{link.label}</strong>
            </a>
          ))}
        </div>
      </section>

    </main>
  );
}

export default ProjectPage;