export default function FlipCard({
  image,
  alt,
  title,
  description,
  href,
}) {
  const content = (
    <article className="overflow-hidden rounded-xl border border-line bg-surface sm:overflow-visible sm:rounded-none sm:border-0 sm:bg-transparent">
      <div className="sm:relative sm:aspect-[3/4] sm:transition-transform sm:duration-500 sm:preserve-3d sm:group-hover:rotate-y-180 sm:group-focus-visible:rotate-y-180">
        <div className="overflow-hidden bg-surface sm:absolute sm:inset-0 sm:rounded-xl sm:border sm:border-line sm:backface-hidden">
          <img
            src={image}
            alt={alt || title}
            loading="lazy"
            decoding="async"
            className="aspect-[3/4] w-full object-cover sm:h-full"
          />
        </div>

        <div className="p-5 sm:absolute sm:inset-0 sm:flex sm:rotate-y-180 sm:flex-col sm:justify-end sm:rounded-xl sm:border sm:border-accent sm:bg-surface-inverse sm:p-6 sm:text-inverse sm:backface-hidden">
          <h3 className="font-header text-xl text-ink sm:text-2xl sm:text-inherit">
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-sm leading-6 text-muted sm:text-navy-100">
              {description}
            </p>
          )}
        </div>
      </div>
    </article>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block sm:perspective-card"
      aria-label={`View full-size photo: ${title}`}
    >
      {content}
    </a>
  ) : (
    <div className="group sm:perspective-card">{content}</div>
  );
}
