import { Link } from "react-router-dom";
import Hero from "./Hero";

function HomePage() {
  return (
    <>
      <Hero />

      <section className="relative overflow-hidden bg-black py-24 text-white">

        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#CDFF45]/10 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(205,255,69,0.08),transparent_45%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">

          {/* Main Grid */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Left Content */}
            <div className="relative overflow-hidden rounded-[2.8rem] border border-[#CDFF45]/15 bg-[#0d0d0d]/90 p-12 backdrop-blur-xl">

              {/* Decorative Glow */}
              <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-[#CDFF45]/10 blur-3xl" />

              <div className="relative z-10">

                {/* Top Badge */}
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#CDFF45]/20 bg-[#CDFF45]/5 px-5 py-2 text-sm text-[#CDFF45]">
                  ✦ Front-End Developer
                </div>

                {/* Heading */}
                <h2 className="mb-6 text-5xl font-black leading-tight tracking-tight">
                  Designing clean &
                  <span className="block bg-gradient-to-r from-[#CDFF45] to-[#A3E635] bg-clip-text text-transparent">
                    modern web experiences
                  </span>
                </h2>

                {/* Description */}
                <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
                  Explore my portfolio to discover projects, technical skills,
                  UI designs, and responsive web applications crafted with
                  creativity and performance in mind.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">

                  <Link
                    to="/about"
                    className="group rounded-2xl bg-[#CDFF45] px-7 py-3 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#bdfc24]"
                  >
                    About Me
                  </Link>

                  <Link
                    to="/skills"
                    className="rounded-2xl border border-[#CDFF45]/25 bg-white/[0.02] px-7 py-3 font-medium transition duration-300 hover:border-[#CDFF45]/50 hover:bg-[#CDFF45]/10"
                  >
                    Skills
                  </Link>

                  <Link
                    to="/projects"
                    className="rounded-2xl border border-[#CDFF45]/25 bg-white/[0.02] px-7 py-3 font-medium transition duration-300 hover:border-[#CDFF45]/50 hover:bg-[#CDFF45]/10"
                  >
                    Projects
                  </Link>


                </div>

              </div>
            </div>

            {/* Right Card */}
            <div className="relative overflow-hidden rounded-[2.8rem] border border-[#CDFF45]/15 bg-gradient-to-b from-[#111] to-black p-10">

              {/* Floating Glow */}
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#CDFF45]/10 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col justify-between">

                <div>

                  {/* Availability */}
                  <span className="mb-6 inline-flex rounded-full border border-[#CDFF45]/20 px-4 py-1 text-sm text-[#CDFF45]">
                    Available for freelance
                  </span>

                  {/* Title */}
                  <h3 className="mb-5 text-3xl font-bold leading-snug">
                    Let’s build something impactful together.
                  </h3>

                  {/* Text */}
                  <p className="mb-10 leading-relaxed text-white/60">
                    From portfolio websites to dashboard interfaces and modern
                    landing pages, I focus on creating sleek and engaging
                    digital experiences.
                  </p>

                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="inline-flex w-fit items-center gap-3 rounded-2xl bg-[#CDFF45] px-7 py-3 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#bdfc24]"
                >
                  Send a Message
                  <span>→</span>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;