import { Link } from "react-router-dom";
import FlipCard from "./components/cards/FlipCard";
import PageContainer from "./components/layout/PageContainer";
import PageHeader from "./components/layout/PageHeader";
import { coffeeCards } from "./data/coffeeCards";
import { travels } from "./data/travels";

const honors = [
  "Presidential Scholarship",
  "Dean's List, Spring 2024",
  "Dean's List, Fall 2024",
  "Dean's List, Fall 2025",
  "President's List, Spring 2026",
];

const positions = [
  "IEEE Secretary, University of Alabama Chapter",
  "Research Experiences for Undergraduates — Dr. Edward Sazonov",
];

const playlists = [
  {
    label: "Red Converse",
    href: "https://open.spotify.com/playlist/49TrC04bBFXSuuHnaMBVZC?si=666c7898b4b14284",
  },
  {
    label: "Yellow Converse",
    href: "https://open.spotify.com/playlist/4XKEp9MHVElgAkVnc82YzR?si=8ee47b5156944526",
  },
  {
    label: "Auburn Converse",
    href: "https://open.spotify.com/playlist/3bZesnZV7jmfc5EaFEjEvc?si=06511bc494504e2c",
  },
];

export default function AboutPage() {
  return (
    <PageContainer className="py-16 sm:py-24">
      <section className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <PageHeader
            eyebrow="About me"
            title="Lindsey Claire Yuhuan B."
            as="h1"
          />

          <p className="mt-6 text-lg leading-8 text-ink">
            I am a Computer Engineering student at the University of Alabama
            focusing on embedded systems, software, robotics, sensors, and
            engineering projects that address real-world issues.
          </p>

          <p className="mt-4 leading-7 text-muted">
            When I&apos;m not studying or working, I&apos;m usually playing
            guitar (badly), dialing in espresso for latte art, or hanging out
            with my new cat. This summer, I&apos;m hoping to finish two sewing
            projects, get back into the gym, and build out my personal trainer
            app.
          </p>
        </div>

        <img
          src="/assets/about/meandsupie.JPG"
          alt="Lindsey and Supie"
          className="aspect-[4/3] w-full rounded-2xl border border-line object-cover shadow-lg"
        />
      </section>

      <section id="hobbies" className="scroll-mt-24 py-20">
        <PageHeader
          eyebrow="Hobbies"
          title="Coffee"
          description="To me, nothing is more satisfying than a perfect dial-in."
        />

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
          <a
            href="/assets/hobbies/barista.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-line bg-surface"
          >
            <img
              src="/assets/hobbies/barista.jpg"
              alt="Lindsey working as a barista"
              className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          </a>

          <div>
            <h3 className="font-header text-3xl text-ink">Behind the bar</h3>
            <p className="mt-4 leading-7 text-ink">
              Coffee has been one of my favorite hobbies since 2023. It taught
              me patience, precision, and how to work under pressure.
            </p>
            <p className="mt-4 leading-7 text-muted">
              Dialing in espresso feels like a lost art amid the bustle of
              fast-paced coffee.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {["workflow1.PNG", "workflow2.PNG"].map((filename, index) => (
                <a
                  key={filename}
                  href={`/assets/hobbies/${filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block overflow-hidden rounded-xl border border-line ${
                    index === 1 ? "mt-8" : ""
                  }`}
                >
                  <img
                    src={`/assets/hobbies/${filename}`}
                    alt={`Coffee workflow ${index + 1}`}
                    className="aspect-square w-full object-cover transition duration-300 hover:scale-[1.03]"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coffeeCards.map((card) => (
            <FlipCard
              key={card.src}
              image={card.src}
              alt={card.alt}
              title={card.title}
              description={card.text}
              href={card.src}
            />
          ))}
        </div>

        <aside className="mt-12 rounded-r-xl border-l-4 border-signal bg-signal-soft p-6 text-signal-ink">
          <p className="font-mono text-sm font-medium uppercase tracking-widest">
            Coffeehouse playlists
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {playlists.map((playlist) => (
              <a
                key={playlist.href}
                href={playlist.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-signal-600/30 bg-white/60 px-4 py-2 font-medium transition hover:-translate-y-0.5 hover:bg-white"
              >
                {playlist.label}
              </a>
            ))}
          </div>
        </aside>
      </section>

      <section id="travels" className="scroll-mt-24 py-20">
        <PageHeader
          eyebrow="Travels"
          title="Places"
          description="I haven't been to too many places yet, but I'm always up for something new."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {travels.map((travel) => (
            <Link
              to={`/travels/${travel.id}`}
              key={travel.id}
              className="group overflow-hidden rounded-xl border border-line bg-surface transition duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-xl"
            >
              {travel.image ? (
                <img
                  src={travel.image}
                  alt={travel.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-surface-subtle font-mono text-sm uppercase tracking-widest text-muted">
                  Photo coming soon
                </div>
              )}

              <div className="p-6">
                <h3 className="font-header text-2xl text-ink">
                  {travel.title}
                </h3>
                <p className="mt-2 leading-7 text-muted">{travel.subtitle}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-sm font-medium text-action">
                  View trip <span className="text-signal">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="honors" className="scroll-mt-24 py-20">
        <PageHeader
          eyebrow="Milestones"
          title="Honors and experience"
          description="Thankful for everything that has brought me here."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <AchievementList title="Honors and achievements" items={honors} />
          <AchievementList title="Positions" items={positions} />
        </div>
      </section>
    </PageContainer>
  );
}

function AchievementList({ title, items }) {
  return (
    <section className="rounded-xl border border-line bg-surface p-6 sm:p-8">
      <h3 className="font-header text-2xl text-ink">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="border-l-2 border-accent pl-4 leading-7 text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
