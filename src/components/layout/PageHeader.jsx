export default function PageHeader({
    eyebrow,
    title,
    description,
    as: Heading = "h2",
}) {
    return (
        <header className="max-w-3xl">
            {eyebrow && (
                <p className="font-mono text-sm font-medium uppercase tracking-[0.14em] text-eyebrow">
                    {eyebrow}
                </p>
            )}

            <Heading className="mt-3 font-header text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                {title}
            </Heading>

            {description && (
                <p className="mt-4 text-lg leading-8 text-muted">
                    {description}
                </p>
            )}
        </header>
    );
}