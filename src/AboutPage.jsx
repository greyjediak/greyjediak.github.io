import { Link } from "react-router-dom";
import FlipCard from "./components/cards/FlipCard";
import TravelCard from "./components/cards/TravelCard";
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
    "University of Alabama ECE Ambassador",
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
    <PageContainer className="py-14 sm:py-20">
      <section className="grid items-center gap-10 pb-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-16">
        <div className="max-w-2xl">
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
            projects, build out a couple keyboards, and read the pile of books I've
            collected over the semester.
          </p>
        </div>

        <img
          src="/assets/about/headshot2.JPG"
          alt="Lindsey and Supie"
          className="aspect-[4/5] w-full max-w-md justify-self-center rounded-2xl border border-line object-cover object-center shadow-lg lg:justify-self-end"
        />
      </section>

      <section
        id="hobbies"
        className="scroll-mt-24 border-t border-line py-20"
      >
        <PageHeader
          eyebrow="Hobbies"
          title="Coffee"
          description="To me, nothing is more satisfying than a perfect dial-in."
        />

        <div className="mt-10 grid items-start gap-8 rounded-2xl border border-line bg-surface p-5 sm:p-8 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
          <a
            href="/assets/hobbies/barista.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full max-w-md justify-self-center overflow-hidden rounded-xl border border-line bg-surface-subtle lg:justify-self-start"
          >
            <img
              src="/assets/hobbies/barista.jpg"
              alt="Lindsey working as a barista"
              className="aspect-[3/4] w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
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

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["workflow1.PNG", "workflow2.PNG"].map((filename, index) => (
                <a
                  key={filename}
                  href={`/assets/hobbies/${filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-xl border border-line"
                >
                  <img
                    src={`/assets/hobbies/${filename}`}
                    alt={`Coffee workflow ${index + 1}`}
                    className="aspect-[3/2] w-full object-cover transition duration-300 hover:scale-[1.03]"
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
                className="rounded-full border border-signal-600/30 bg-surface/60 px-4 py-2 font-medium transition hover:-translate-y-0.5 hover:bg-surface"
              >
                {playlist.label}
              </a>
            ))}
          </div>
        </aside>
      </section>

      <section
        id="travels"
        className="scroll-mt-24 border-t border-line py-20"
      >
        <PageHeader
          eyebrow="Travels"
          title="Places"
          description="I haven't been to too many places yet, but I'm always up for something new."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {travels.slice(0, 3).map((travel) => (
            <TravelCard key={travel.id} travel={travel} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            to="/travels"
            className="inline-flex items-center gap-2 rounded-full bg-action px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-action-hover"
          >
            More travel
            <span className="text-signal" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section
        id="honors"
        className="scroll-mt-24 border-t border-line py-20"
      >
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
