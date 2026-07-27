import { useParams } from "react-router-dom";
import { projects } from "./data/projects";
import PageContainer from "./components/layout/PageContainer";
import PageHeader from "./components/layout/PageHeader";
import MediaGallery from "./components/media/MediaGallery";
import VideoGrid from "./components/media/VideoGrid";

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <PageContainer className="py-24 text-center">
        <PageHeader
          eyebrow="Project"
          title="Project not found"
          as="h1"
        />
      </PageContainer>
    );
  }

  return (
      <PageContainer className="py-16 sm:py-24">
        <PageHeader
          eyebrow="Project"
          title={project.title}
          description={project.subtitle}
          as="h1"
        />

        <img
          src={project.image}
          alt={project.title}
          className="mt-10 aspect-video w-full rounded-2xl border border-line object-cover"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_2fr]">
          <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
            Overview
          </h2>
          <p className="leading-8 text-muted">{project.summary}</p>

          <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
            Details
          </h2>
          <p className="leading-8 text-muted">{project.details}</p>
        </div>

        {project.images?.length > 0 && (
          <section className="py-16">
            <PageHeader eyebrow="Gallery" title="Project images" />
            <div className="mt-8">
              <MediaGallery images={project.images} />
            </div>
          </section>
        )}

        {project.videos?.length > 0 && (
          <section className="py-16">
            <PageHeader eyebrow="Videos" title="Demos and Videos" />
            <div className="mt-8">
              <VideoGrid videos={project.videos} />
            </div>
          </section> 
        )}

        {project.links?.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-line bg-surface p-5 transition hover:border-action hover:bg-action-soft"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                {link.type}
              </span>

              <strong className="mt-2 block text-ink">{link.label}</strong>
            </a>
          ))}
        </div>
        )}

      </PageContainer>
  );
}

export default ProjectPage;
