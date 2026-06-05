import ContactForm from "@/components/ContactForm";

const marqueeItems = [
  "Product Design",
  "Creative Direction",
  "Brand Systems",
  "Web Experiences",
  "Interaction Design",
  "Editorial",
  "Motion Systems",
  "Supabase",
  "Next.js",
  "Tailwind",
];

const projectStacks = [
  {
    stack: "Next.js + Supabase",
    projects: [
      {
        title: "Studio Rack",
        description:
          "Music tooling platform that unifies scheduling, release ops, and storefronts.",
        tags: ["Product", "Web", "Infra"],
      },
      {
        title: "Signal Rooms",
        description:
          "Audio collaboration space for remote teams with guided workflows.",
        tags: ["UX", "Systems", "Realtime"],
      },
    ],
  },
  {
    stack: "Brand + Product",
    projects: [
      {
        title: "Even Hub",
        description:
          "Companion experience for wearable displays, built with a phone-first flow.",
        tags: ["Design", "Mobile", "Wearables"],
      },
      {
        title: "Brando Beats",
        description:
          "Editorial storefront for premium beat licensing and artist showcases.",
        tags: ["Brand", "E-comm", "Motion"],
      },
    ],
  },
  {
    stack: "Creative Experiments",
    projects: [
      {
        title: "Archive Gates",
        description:
          "Motion-led narrative site exploring museum-like storytelling.",
        tags: ["Concept", "Interaction"],
      },
      {
        title: "Flow Studies",
        description:
          "System of micro-interactions and kinetic typography for digital products.",
        tags: ["Motion", "Prototype"],
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
          <div className="text-sm uppercase tracking-[0.4em] text-white/60">
            Jameel Miller
          </div>
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/60 md:flex">
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden px-6 pb-20 pt-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[140px]" />
            <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-blue-400/15 blur-[120px]" />
          </div>
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
            <div className="flex flex-col gap-6">
              <p className="text-sm uppercase tracking-[0.45em] text-white/60">
                Product & Creative Systems
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Building sharp digital experiences with motion, clarity, and
                modern systems.
              </h1>
              <p className="max-w-2xl text-lg text-white/70">
                I design and build portfolios, products, and brand systems that
                feel cinematic without losing performance or usability. Based in
                Los Angeles, working worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
                  href="#projects"
                >
                  View work
                </a>
                <a
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                  href="#contact"
                >
                  Start a project
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-white/70">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Available for
                  </p>
                  <p className="text-lg font-medium text-white">
                    New product builds + creative direction
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Location
                  </p>
                  <p className="text-lg font-medium text-white">
                    Los Angeles / Remote
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Focus
                  </p>
                  <p className="text-lg font-medium text-white">
                    Motion-led product systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5 py-8">
          <div className="marquee">
            <div className="marquee__track">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <div key={`primary-${item}-${index}`} className="marquee__item">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="marquee mt-6">
            <div className="marquee__track" style={{ animationDuration: "24s" }}>
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <div key={`secondary-${item}-${index}`} className="marquee__item">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-24">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Selected Work
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Projects organized by tech stack.
              </h2>
              <p className="max-w-2xl text-white/70">
                A mix of product builds, brand systems, and experimental motion
                work. Each stack highlights the tools and disciplines behind it.
              </p>
            </div>

            <div className="grid gap-10">
              {projectStacks.map((group) => (
                <div key={group.stack} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{group.stack}</h3>
                      <span className="text-xs uppercase tracking-[0.4em] text-white/50">
                        {group.projects.length} Projects
                      </span>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      {group.projects.map((project) => (
                        <div
                          key={project.title}
                          className="group rounded-2xl border border-white/10 bg-black/40 p-6 transition hover:-translate-y-1 hover:border-white/30"
                        >
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-semibold">
                                {project.title}
                              </h4>
                              <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                                Featured
                              </span>
                            </div>
                            <p className="text-sm text-white/70">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-white/10 bg-white/5 px-6 py-24">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Services
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Design + build collaborations.
              </h2>
              <p className="max-w-2xl text-white/70">
                I partner with founders and creative teams to ship high-performing
                digital experiences that feel alive.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Portfolio Systems",
                  body: "Narrative-driven portfolio builds with motion, modern stacks, and high-performance execution.",
                },
                {
                  title: "Product Design",
                  body: "UX strategy, flows, and visual systems that scale from MVP to production.",
                },
                {
                  title: "Creative Direction",
                  body: "Campaigns, brand systems, and experiential websites with cinematic interaction layers.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-black/40 p-6"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Contact
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Let’s build something bold.
              </h2>
              <p className="max-w-2xl text-white/70">
                Share your goals and timeline. I’ll follow up with next steps
                and a scoped proposal.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Jameel Miller</div>
          <div className="flex gap-6">
            <a className="transition hover:text-white" href="mailto:hello@jameelmiller.com">
              hello@jameelmiller.com
            </a>
            <a className="transition hover:text-white" href="https://www.linkedin.com">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
