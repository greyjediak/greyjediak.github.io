export default function ContactCard ({ href, title, description }) {
    return (
        <a
            href={href}
            className="group rounded-xl border border-line bg-surface p-6 transition hover:border-action hover:bg-action-soft"
        >
            <h2 className="font-header text-2xl text-ink group-hover:text-action-ink">
                {title}
            </h2>

            <p className="mt-2 text-muted">
                {description}
            </p>
        </a>
    );
}