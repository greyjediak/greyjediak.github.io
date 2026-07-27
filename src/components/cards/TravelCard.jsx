import { Link } from "react-router-dom";

export default function TravelCard({ travel }) {
  return (
    <Link
      to={`/travels/${travel.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-xl"
    >
      {travel.image ? (
        <div className="overflow-hidden">
          <img
            src={travel.image}
            alt={travel.title}
            loading="lazy"
            decoding="async"
            className="aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        <div className="flex aspect-[3/4] items-center justify-center bg-surface-subtle px-4 text-center font-mono text-sm uppercase tracking-widest text-muted">
          Photo coming soon
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-header text-2xl text-ink">{travel.title}</h2>
        <p className="mt-2 leading-7 text-muted">{travel.subtitle}</p>

        <span className="mt-auto inline-flex items-center gap-2 pt-5 font-mono text-sm font-medium text-action">
          View trip
          <span className="text-signal" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
