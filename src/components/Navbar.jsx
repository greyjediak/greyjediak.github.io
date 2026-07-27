import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Projects", to: "/#projects" },
  { label: "About", to: "/about" },
  { label: "Travel", to: "/travels" },
  { label: "Contact", to: "/contact" },
];

function getInitialTheme() {
  let savedTheme;

  try {
    savedTheme = window.localStorage.getItem("theme");
  } catch {
    savedTheme = null;
  }

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark";

    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch {
      // The theme still changes for this visit when storage is unavailable.
    }

    setTheme(nextTheme);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/90 backdrop-blur">
      <div className="mx-auto flex min-h-18 w-full min-w-0 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="min-w-0 truncate font-header text-xl font-medium tracking-tight text-ink sm:text-2xl"
        >
          Lindsey B.
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 font-body text-sm sm:flex"
          >
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

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:border-accent hover:bg-accent-soft hover:text-accent-ink sm:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:border-accent hover:bg-accent-soft hover:text-accent-ink"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-line bg-page px-4 py-4 sm:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-body text-base text-muted transition hover:bg-surface hover:text-ink"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />
    </svg>
  );
}
