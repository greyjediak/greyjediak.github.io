export default function PageHeader({
    eyebrow,
    title,
    description,
    as: Heading = "h2",
    inverse = false,
}) {
    return (
        <header className="max-w-3xl">
            {eyebrow && (
                <p className={`font-mono text-sm font-medium uppercase tracking-[0.14em] ${inverse ? "text-violet-300" : "text-eyebrow"}`}>
                    {eyebrow}
                </p>
            )}

            <Heading className={`mt-3 font-header text-4xl font-medium tracking-tight sm:text-5xl ${inverse ? "text-neutral-50" : "text-ink"}`}>
                {title}
            </Heading>

            {description && (
                <p className={`mt-4 text-lg leading-8 ${inverse ? "text-navy-100" : "text-muted"}`}>
                    {description}
                </p>
            )}
        </header>
    );
}
