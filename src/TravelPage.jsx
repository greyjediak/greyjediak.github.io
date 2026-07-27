import { Link, useParams } from "react-router-dom";
import FlipCard from "./components/cards/FlipCard";
import PageContainer from "./components/layout/PageContainer";
import PageHeader from "./components/layout/PageHeader";
import VideoGrid from "./components/media/VideoGrid";
import { travels } from "./data/travels";

export default function TravelPage() {
  const { id } = useParams();
  const travel = travels.find((item) => item.id === id);

  if (!travel) {
    return (
      <PageContainer className="py-24 text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          404
        </p>
        <h1 className="mt-3 font-header text-4xl text-ink">
          Place not found
        </h1>
        <Link
          to="/about#travels"
          className="mt-6 inline-flex text-action underline-offset-4 hover:text-action-hover hover:underline"
        >
          Return to travels
        </Link>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="py-16 sm:py-24">
      <PageHeader
        eyebrow="Travel"
        title={travel.title}
        description={travel.subtitle}
        as="h1"
      />

      {travel.image && (
        <img
          src={travel.image}
          alt={travel.title}
          className="mt-10 aspect-video w-full rounded-2xl border border-line object-cover"
        />
      )}

      {travel.summary && (
        <section className="py-16">
          <PageHeader eyebrow="Overview" title="About this trip" />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            {travel.summary}
          </p>
        </section>
      )}

      {travel.images?.length > 0 && (
        <section className="py-16">
          <PageHeader
            eyebrow="Gallery"
            title="Photos"
            description="Hover or focus a photo to read its story. Select it to view the full-size image."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {travel.images.map((image, index) => (
              <FlipCard
                key={`${image.src}-${index}`}
                image={image.src}
                alt={image.alt}
                title={image.title}
                description={image.text}
                href={image.src}
              />
            ))}
          </div>
        </section>
      )}

      {travel.videos?.length > 0 && (
        <section className="py-16">
          <PageHeader eyebrow="Videos" title="Trip videos" />
          <div className="mt-8">
            <VideoGrid videos={travel.videos} />
          </div>
        </section>
      )}
    </PageContainer>
  );
}
