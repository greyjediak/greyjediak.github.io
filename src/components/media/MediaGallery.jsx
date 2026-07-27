export default function MedaiGallery({ images = [] }) {
    if (!images.length) return null;

    return (
        <div className="grid gap-6 sm:grid-cols-2">
            {images.map((image) => (
                <figure
                    key={image.src}
                    className="overflow-hidden rounded-xl border border-line bg-surface"
                >
                    <a
                        href={image.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block overflow-hidden"
                    >
                        <img
                            src={image.src}
                            alt={image.caption || "Project image"}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-cover transition duration-300 hover:scale-[1.02]"
                        />
                    </a>
                    {image.caption && (
                        <figcaption className="p-4 text-sm leading-6 text-muted">
                            {image.caption}
                        </figcaption>
                    )}
                </figure>
            ))}
        </div>
    );
}