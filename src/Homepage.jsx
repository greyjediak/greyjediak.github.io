// Acts as the home page since it's the landing spot.
import PageContainer from "./components/layout/PageContainer";
import PageHeader from "./components/layout/PageHeader";
import ProjectCard from "./components/cards/ProjectCard";
import { projects } from "./data/projects";

export default function Homepage() {
    return (
        <PageContainer className="py-16 sm:py-24">
            <section>
                <PageHeader
                    eyebrow="Computer Engineering Student"
                    title="Embedded systems, software, sensors, and PCB design"
                    description="Concentrated in projects across embedded systems, PCB design, ML, and full-stack solutions."
                    as="h1"
                />
            </section>

            <section id="projects" className="py-16 sm:py-24">
                <PageHeader
                    eyebrow="Work"
                    title="Projects"
                    description="Collection of various projects across embedded systems, sensors, PCB design, 3D models, and software"
                />

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </PageContainer>
    );
}
