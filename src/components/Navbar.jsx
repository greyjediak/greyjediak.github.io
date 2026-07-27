import { Link, NavLink } from "react-router-dom";
const links = [
    { label: "Projects", to: "/#projects" },
    { label: "About", to: "/about" },
    { label: "Travel", to: "/about#travels" },
    { label: "Contact", to: "/contact"},
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/90 backdrop-blur">
      <div className="mx-auto flex min-h-18 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-header text-2xl font-medium tracking-tight text-ink"
        >
          Lindsey B.
        </Link>

        <nav className="flex items-center gap-1 font-body text-sm">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="rounded-full px-4 py-2 text-muted transition hover:bg-surface hover:text-ink"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
