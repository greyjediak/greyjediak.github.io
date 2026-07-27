import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    return (
        <Link
            to={`/project/${project.id}`}
            className="group overflow-hidden rounded-xl border border-line bg-surface transition duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-xl"
        >
            <div className="overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
            </div>

            <div className="p-6">
                <h3 className="font-header text-2xl text-ink">
                    {project.title}
                </h3>

                <p className="mt-2 leading-7 text-muted">
                    {project.subtitle}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 font-mono text-sm font-medium text-action">
                    View Project
                    <span
                        className="text-signal transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                    >
                        →
                    </span>
                </span>
            </div>
        </Link>
    );
}