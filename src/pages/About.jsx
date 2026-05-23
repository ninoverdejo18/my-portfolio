import profile from "../assets/profile.png";
import AnimatedSection from "../components/AnimatedSection";

function About() {
  return (
    <AnimatedSection>
      <section
        id="about"
        className="relative overflow-hidden bg-black py-20 text-white"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(205,255,69,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(205,255,69,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-72 h-72 rounded-[2rem] object-cover border border-[#CDFF45]/30 shadow-2xl shadow-[#CDFF45]/10 transition duration-300 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="rounded-[2rem] border border-white/10 bg-black/70 p-10 backdrop-blur-xl">

            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#CDFF45]">
              Get To Know Me
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I am a Front-End Developer and QA Tester passionate about
                creating modern, responsive, and user-friendly web applications.
              </p>

              <p>
                I specialize in React.js, JavaScript, Tailwind CSS, HTML, and CSS.
              </p>

              <p>
                With a background in design and customer service,
                I bring creativity and communication skills.
              </p>

              <p>
                My goal is to become a professional software developer
                building impactful digital solutions.
              </p>
            </div>

            {/* Goals & Vision */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">

              {/* Goals */}
              <div className="rounded-2xl border border-[#CDFF45]/20 bg-black/70 p-6 transition duration-300 hover:border-[#CDFF45]/40">

                <h3 className="mb-3 text-center text-xl font-semibold text-[#CDFF45]">
                  My Goals
                </h3>

                <p className="text-sm leading-relaxed text-slate-300">
                  Grow as a developer by building real-world projects
                  and improving technical skills.
                </p>

              </div>

              {/* Vision */}
              <div className="rounded-2xl border border-[#A3E635]/20 bg-black/70 p-6 transition duration-300 hover:border-[#A3E635]/40">

                <h3 className="mb-3 text-center text-xl font-semibold text-[#A3E635]">
                  My Vision
                </h3>

                <p className="text-sm leading-relaxed text-slate-300">
                  To become a skilled developer creating scalable
                  and impactful digital products.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default About;