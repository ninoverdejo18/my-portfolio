import { Link } from "react-router-dom";
import Hero from "./Hero";

function HomePage() {
  return (
    <>
      <Hero />

      <section className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24">

        {/* Background Effects */}
        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#CDFF45]/10 blur-3xl sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(205,255,69,0.08),transparent_45%)]" />

        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Main Grid */}
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">

            {/* Left Content */}
            <div className="relative overflow-hidden rounded-[2rem] border border-[#CDFF45]/15 bg-[#0d0d0d]/90 p-6 backdrop-blur-xl sm:p-8 lg:rounded-[2.8rem] lg:p-12">

              {/* Decorative Glow */}
              <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-[#CDFF45]/10 blur-3xl sm:h-52 sm:w-52 lg:h-60 lg:w-60" />

              <div className="relative z-10">

                {/* Top Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CDFF45]/20 bg-[#CDFF45]/5 px-4 py-2 text-xs text-[#CDFF45] sm:mb-8 sm:px-5 sm:text-sm">
                  ✦ Front-End Developer
                </div>

                {/* Heading */}
                <h2 className="mb-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:mb-6 lg:text-5xl">
                  Designing clean &

                  <span className="block bg-gradient-to-r from-[#CDFF45] to-[#A3E635] bg-clip-text text-transparent">
                    modern web experiences
                  </span>
                </h2>

                {/* Description */}
                <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg lg:mb-10">
                  Explore my portfolio to discover projects, technical skills,
                  UI designs, and responsive web applications crafted with
                  creativity and performance in mind.
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">

                  <Link
                    to="/about"
                    className="group rounded-2xl bg-[#CDFF45] px-6 py-3 text-center font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#bdfc24]"
                  >
                    About Me
                  </Link>

                  <Link
                    to="/skills"
                    className="rounded-2xl border border-[#CDFF45]/25 bg-white/[0.02] px-6 py-3 text-center font-medium transition duration-300 hover:border-[#CDFF45]/50 hover:bg-[#CDFF45]/10"
                  >
                    Skills
                  </Link>

                  <Link
                    to="/projects"
                    className="rounded-2xl border border-[#CDFF45]/25 bg-white/[0.02] px-6 py-3 text-center font-medium transition duration-300 hover:border-[#CDFF45]/50 hover:bg-[#CDFF45]/10"
                  >
                    Projects
                  </Link>

                </div>

              </div>
            </div>

            {/* Right Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-[#CDFF45]/15 bg-gradient-to-b from-[#111] to-black p-6 sm:p-8 lg:rounded-[2.8rem] lg:p-10">

              {/* Floating Glow */}
              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#CDFF45]/10 blur-3xl sm:h-44 sm:w-44 lg:h-52 lg:w-52" />

              <div className="relative z-10 flex h-full flex-col justify-between">

                <div>

                  {/* Availability */}
                  <span className="mb-5 inline-flex rounded-full border border-[#CDFF45]/20 px-3 py-1 text-xs text-[#CDFF45] sm:mb-6 sm:px-4 sm:text-sm">
                    Available for freelance
                  </span>

                  {/* Title */}
                  <h3 className="mb-4 text-2xl font-bold leading-snug sm:text-3xl lg:mb-5">
                    Let’s build something impactful together.
                  </h3>

                  {/* Text */}
                  <p className="mb-8 text-sm leading-relaxed text-white/60 sm:text-base lg:mb-10">
                    From portfolio websites to dashboard interfaces and modern
                    landing pages, I focus on creating sleek and engaging
                    digital experiences.
                  </p>

                </div>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#CDFF45] px-6 py-3 text-center font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#bdfc24] sm:w-fit"
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