export default function VideoGrid({ videos = [] }) {
  if (!videos.length) return null;

  const columns = { 1: "", 2: "lg:grid-cols-2" }[videos.length] ?? "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-6 ${columns}`}>
      {videos.map((video) => (
        <figure
          key={video.src}
          className="overflow-hidden rounded-xl border border-line bg-surface"
        >
          <video
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
            className="w-full bg-surface-inverse"
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
