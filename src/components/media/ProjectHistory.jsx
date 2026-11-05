import MediaGallery from "./MediaGallery";
import VideoGrid from "./VideoGrid";

export default function ProjectHistory({ steps = [] }) {
  if (!steps.length) return null;

  return (
    <ol className="space-y-12">
      {steps.map((step) => (
        <li key={step.title} className="border-l-2 border-accent pl-5 sm:pl-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {step.stage}
          </p>
          <h3 className="mt-2 font-header text-2xl text-ink">{step.title}</h3>
          <p className="mt-3 max-w-3xl leading-7 text-muted">{step.text}</p>

          {step.images?.length > 0 && (
            <div className="mt-6">
              <MediaGallery images={step.images} />
            </div>
          )}

          {step.videos?.length > 0 && (
            <div className="mt-6">
              <VideoGrid videos={step.videos} />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
