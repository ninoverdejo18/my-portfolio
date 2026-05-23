import profile from "../assets/profile.png";
import AnimatedSection from "../components/AnimatedSection";

function About() {
  return (
    <AnimatedSection>
      <section
        id="about"
        className="relative overflow-hidden bg-black py-24 text-white"
      >
        {/* Glow Background */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#CDFF45]/10 blur-3xl" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(205,255,69,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(205,255,69,0.04)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">

          {/* Main Container */}
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Left Side */}
            <div className="relative flex justify-center">

              {/* Glow Ring */}
              <div className="absolute h-80 w-80 rounded-full bg-[#CDFF45]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-[#CDFF45]/20 bg-[#0d0d0d] p-3 shadow-[0_0_60px_rgba(205,255,69,0.08)]">

                <img
                  src={profile}
                  alt="Profile"
                  className="h-[340px] w-[300px] rounded-[2rem] object-cover transition duration-500 hover:scale-105"
                />

              </div>
            </div>

            {/* Right Side */}
            <div className="rounded-[2.5rem] border border-[#CDFF45]/10 bg-gradient-to-br from-[#111] to-black p-10 shadow-[0_0_60px_rgba(205,255,69,0.06)] backdrop-blur-xl">

              {/* Small Label */}
              <span className="mb-4 inline-block rounded-full border border-[#CDFF45]/30 px-4 py-1 text-sm tracking-widest text-[#CDFF45]">
                ABOUT ME
              </span>

              {/* Heading */}
              <h2 className="mb-6 text-5xl font-black leading-tight">
                Building modern
                <span className="block bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
                  digital experiences
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-5 text-[15px] leading-relaxed text-white/65">

                <p>
                  I’m a Front-End Developer and QA Tester passionate about
                  designing responsive, clean, and user-focused web applications.
                </p>

                <p>
                  My main stack includes React.js, JavaScript, Tailwind CSS,
                  HTML, and CSS for creating modern interfaces and smooth user
                  experiences.
                </p>

                <p>
                  With a background in design and customer service,
                  I combine creativity, communication, and technical thinking
                  to build meaningful digital products.
                </p>

                <p>
                  My long-term goal is to become a professional software
                  developer creating scalable and impactful solutions.
                </p>

              </div>

              {/* Cards */}
              <div className="mt-10 grid gap-5 sm:grid-cols-2">

                {/* Goals */}
                <div className="group rounded-3xl border border-[#CDFF45]/15 bg-black/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#CDFF45]/40">

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CDFF45]/10 text-[#CDFF45] text-xl">
                    ✦
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white">
                    My Goals
                  </h3>

                  <p className="text-sm leading-relaxed text-white/60">
                    Continue growing through real-world projects,
                    collaboration, and advanced front-end development.
                  </p>

                </div>

                {/* Vision */}
                <div className="group rounded-3xl border border-[#CDFF45]/15 bg-black/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#CDFF45]/40">

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CDFF45]/10 text-[#CDFF45] text-xl">
                    ⚡
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white">
                    My Vision
                  </h3>

                  <p className="text-sm leading-relaxed text-white/60">
                    Build scalable, visually engaging, and impactful
                    digital products that improve user experiences.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default About;