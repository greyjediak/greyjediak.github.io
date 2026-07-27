export default function VideoGrid({ videos = [] }) {
  if (!videos.length) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {videos.map((video) => (
        <figure
          key={video.src}
          className="overflow-hidden rounded-xl border border-line bg-surface"
        >
          <video
            controls
            preload="metadata"
            className="aspect-video w-full bg-surface-inverse object-contain"
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {video.caption && (
            <figcaption className="p-4 text-sm text-muted">
              {video.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}