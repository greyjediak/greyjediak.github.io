import { Link } from "react-router-dom";

import { coffeeCards } from "./data/coffeeCards";
import { travels } from "./data/travels";

function FlipCard({ card }) {
    return (
        <a
            href={card.src}
            target="_blank"
            rel="noopener noreferrer"
            className="flip-card"
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={card.src} alt={card.alt} loading="lazy" />
                </div>

                <div className="flip-card-back">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                </div>
            </div>
        </a>
    );
}

function AboutPage() {
    return (
        <main className="container about-page">
            
            <section className="about-hero">
                <div className="about-text">
                    <p className="eyebrow">About Me</p>
                    <h2>Lindsey Claire Yuhuan B.</h2>
                    <p className="about-lead">
                        I am a Computer Engineering student at the University of Alabama
                        focusing on embedded systems projects, software, robotics, sensors, and engineering
                        projects that impact real-word issues.
                    </p>

                    <p className="muted">
                        When I'm not studying or working, my hobbies are playing guitar (badly),
                        dialing in shots of espresso to pour latte art, or hanging out with my new cat. This summer,
                        I'm hoping to finish off my two sewing projects, get back into the gym, and build out my personal
                        trainer app.
                    </p>
                </div>

                <div className="about-photo-wrap">
                    <img
                        src="/assets/about/meandsupie.JPG"
                        alt="Lindsey and Supie"
                        className="about-photo"
                    ></img>
                </div>
            </section>

            <section id="hobbies" className="about-feature-section">
                <div className="section-heading">
                    <p className="eyebrow">Hobbies</p>
                    <h2 className="section-title">Coffee</h2>
                    <p className="section-intro">
                        To me, nothing is more satisfying than a perfect dial-in.
                    </p>
                </div>

                <div className="feature-layout">
                    <a
                        href="/assets/hobbies/barista.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="feature-photo-wrap"
                    >
                        <img
                            src="/assets/hobbies/barista.jpg"
                            alt="Barista Hour"
                            className="feature-photo"
                        />
                    </a>
                    <div className="feature-text">
                        <h3>Behind the Bar</h3>
                        <p>
                            Coffee has been one of my favorite hobbies since 2023, where I learned about patience,
                            precision, and work under pressure.
                        </p>
                        <p className="muted">
                            Dialing in espresso feels like a lost art among the bustle of fast-atmosphere
                            quick coffee.
                        </p>

                        <div className="staggered-pair">
                            <a href="/assets/hobbies/workflow1.PNG" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/hobbies/workflow1.PNG" alt="Workflow" />
                            </a>
                            <a href="/assets/hobbies/workflow2.PNG" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/hobbies/workflow2.PNG" alt="Workflow" />
                            </a>
                        </div>

                    </div>
                </div>
                
                <div className="flip-grid">
                    {coffeeCards.map((card) => (
                        <FlipCard card={card} key={card.src} />
                    ))}
                </div>
            </section>

            <section id="travels" className="about-feature-section">
                <div className="section-heading">
                    <p className="eyebrow">Travels</p>
                    <h2 className="section-title">Places</h2>
                    <p className="section-intro">I haven't been too many places, but I'm always up for something new.</p>
                </div>
                <div className="project-grid">
                    {travels.map((travel) => (
                        <Link
                             to={`/travels/${travel.id}`}
                            key={travel.id}
                            className="project-card"
                        >
                            <img src={travel.image} alt={travel.title} />
                            <h3>{travel.title}</h3>
                            <p>{travel.subtitle}</p>
                        </Link>
                    ))}
                    
                </div>
            </section>

            <section id="honors" className="section-projects-sections">
                <div className="section-heading">
                    <h2 className="eyebrow">Honors and Achievements</h2>
                    <p className="section-intro">Thankful for all that has brought me here.</p>
                    <ul>
                        <li>Presidential Scholarship</li>
                        <li>Dean's List, Spring 2024</li>
                        <li>Dean's List, Fall 2024</li>
                        <li>Dean's List, Fall 2025</li>
                        <li>President's List, Spring 2026</li>
                    </ul>

                    <h2 className="eyebrow">Positions</h2>
                    <p>
                        <ul>
                            <li>IEEE Secretary, University of Alabama Chapter</li>
                            <li>Research Experiences for Undergraduates - Dr. Edward Sazonov</li>

                        </ul>
                    </p>
                </div>
            </section>

        </main>
    );
}

export default AboutPage;