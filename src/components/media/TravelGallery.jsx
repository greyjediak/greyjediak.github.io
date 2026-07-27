import { useEffect, useRef, useState } from "react";
import FlipCard from "../cards/FlipCard";

const INITIAL_COUNT = 6;
const LOAD_COUNT = 6;

export default function TravelGallery({ images = [] }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const loadMoreRef = useRef(null);
  const hasMore = visibleCount < images.length;

  useEffect(() => {
    const target = loadMoreRef.current;

    if (!target || !hasMore) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((count) =>
            Math.min(count + LOAD_COUNT, images.length),
          );
        }
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hasMore, images.length]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.slice(0, visibleCount).map((image, index) => (
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

      {hasMore && (
        <div
          ref={loadMoreRef}
          className="flex min-h-24 items-center justify-center font-mono text-sm text-muted"
          aria-live="polite"
        >
          Loading more photos…
        </div>
      )}
    </>
  );
}
