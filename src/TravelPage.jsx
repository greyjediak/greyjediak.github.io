import { useParams } from "react-router-dom";
import { projects } from "./data/travels";

function TravelPage() {
  const { id } = useParams();
  const travel = travels.find((t) => t.id === id);

  if (!travel) {
    return (
      <main className="container">
        <h1>Place not found</h1>
      </main>
    );
  }

  return (
    <main className="container project-page">
      <h1>{travel.title}</h1>
      <p className="muted">{travel.subtitle}</p>

      <section className="about-hero">
        <div className="about-photo-wrap">
          <img src={travel.image} alt={travel.title} className="about-photo" />
        </div>
      </section>
    
      <section>
        <h2>Overview</h2>
         <p>{travel.summary}</p>
      </section>

      <section>
        <h2>Details</h2>
        <p>{travel.details}</p>
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

      {project.links?.length > 0 && (
        <section className="project-links">
          <div className="section-heading">
            <p className="eyebrow">Links</p>
          </div>

          <div className="links-grid">
            {project.links.map((links, i) => (
              <a
                key={i}
                href={links.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >

                <span className="resource-type">{links.type.toUpperCase()}</span>
                <strong>{links.label}</strong>
              </a>
            ))}
          </div>
      </section>
      )}

      

    </main>
  );
}

export default ProjectPage;