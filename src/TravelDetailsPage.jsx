import { Link, useParams } from "react-router-dom";
import PageContainer from "./components/layout/PageContainer";
import PageHeader from "./components/layout/PageHeader";
import TravelGallery from "./components/media/TravelGallery";
import VideoGrid from "./components/media/VideoGrid";
import { travels } from "./data/travels";

export default function TravelDetailsPage() {
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
          to="/travels"
          className="mt-6 inline-flex text-action underline-offset-4 hover:text-action-hover hover:underline"
        >
          Return to all travels
        </Link>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="py-16 sm:py-24">
      <Link
        to="/travels"
        className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-action transition hover:text-action-hover"
      >
        <span aria-hidden="true">←</span>
        All travels
      </Link>

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
            description="Stories appear below each photo on smaller screens and on the reverse of each photo on larger screens."
          />

          <div className="mt-8">
            <TravelGallery images={travel.images} />
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
