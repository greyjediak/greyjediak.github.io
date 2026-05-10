import { useParams } from "react-router-dom";
import { travels } from "./data/travels";

function TravelImageCard({ image }) {
  return (
    <a
      href={image.src}
      target="_blank"
      rel="noopener noreferrer"
      className="flip-card"
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image.src} alt={image.alt || image.title} loading="lazy" />
        </div>

        <div className="flip-card-back">
          <h3>{image.title}</h3>
          <p>{image.text}</p>
        </div>
      </div>
    </a>
  );
}

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

        {travel.images?.length > 0 && (
            <section>
                <h2>Photos</h2>
                <div className="flip-grid">
                    {travel.images.map((image) => (
                        <TravelImageCard image={image} key={image.src} />
                    ))}
                </div>
            </section>
        )}  

      
      {travel.videos?.length > 0 && (
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Videos</p>
            <h2 className="section-title">Demos and Animations</h2>
          </div>
          
          <div className="video-grid">
            {travel.videos.map((video, index) => (
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

    </main>
  );
}

export default TravelPage;