import PageContainer from "./components/layout/PageContainer";
import PageHeader from "./components/layout/PageHeader";
import ProjectCard from "./components/cards/ProjectCard";
import PCBBackground from "./components/PCBTraceBG";
import { projects } from "./data/projects";

export default function Homepage() {
  return (
    <main>
      <section className="relative isolate min-h-[440px] overflow-hidden border-y border-line-inverse bg-navy-800 sm:min-h-[500px]">
        <PCBBackground />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy-800/90 via-navy-800/55 to-transparent"
        />

        <div className="relative z-10 mx-auto flex min-h-[440px] w-full min-w-0 max-w-6xl items-center px-4 py-16 sm:min-h-[500px] sm:px-6 sm:py-20">
          <PageHeader
            eyebrow="Computer Engineering Student"
            title="Welcome to Lindsey B's Portfolio"
            description="Concentrated in projects across embedded systems, PCB design, ML, and full-stack solutions."
            as="h1"
            inverse
          />
        </div>
      </section>

      <PageContainer as="div">
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
    </main>
  );
}
