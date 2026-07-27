/* Non linked cards. Flip animation on hover, text and title underneath. */

export default function FlipCard({
    image,
    alt,
    title,
    description,
    href,
}) {
    const content = (
        <div className="relative aspect-[4/3] transition-transform duration-500 preserve-3d group-hover:rotate-y-180 group-focus-visible:rotate-y-180">
                <div className="absolute inset-0 overflow-hidden rounded-xl border border-line bg-surface backface-hidden">
                    <img
                        src={image}
                        alt={alt || title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="absolute inset-0 flex rotate-y-180 flex-col justify-end rounded-xl border border-accent bg-surface-inverse p-6 text-inverse backface-hidden">
                    <h3 className="font-header text-2xl">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-navy-100">
                        {description}
                    </p>
                </div>
        </div>
    );
    return href ? (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block perspective-card"
        >
            {content}
        </a>
    ) : (
        <div className="group perspective-card">{content}</div>
    );
}
