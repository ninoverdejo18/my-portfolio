import profile from "../assets/profile.png";
import AnimatedSection from "../components/AnimatedSection";

function About() {
  return (
    <AnimatedSection>
      <section
        id="about"
        className="bg-transparent text-white py-20 relative overflow-hidden"
      >

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#40E0D0]/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#F2545B]/10 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative group">

              {/* Glow border */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[#40E0D0] to-[#F2545B] blur-2xl opacity-30 group-hover:opacity-70 transition duration-500"></div>

              <img
                src={profile}
                alt="Profile"
                className="relative w-72 h-72 object-cover rounded-[2rem] border border-[#40E0D0]/30 shadow-2xl shadow-[#F2545B]/10 hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Text */}
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-10 shadow-2xl backdrop-blur-xl">

            <p className="text-[#40E0D0] uppercase tracking-[0.2em] text-sm mb-3">
              Get To Know Me
            </p>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#40E0D0] to-[#F2545B] bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <p className="text-slate-300 leading-relaxed">
              I am Front-End Developer and QA Tester with a passion
              for creating modern, responsive, and user-friendly web applications.
            </p>

            <p className="text-slate-300 leading-relaxed mt-4">
              I specialize in React.js, JavaScript, Tailwind CSS, HTML, and CSS.
            </p>

            <p className="text-slate-300 leading-relaxed mt-4">
              With a background in design and customer service,
              I bring creativity and communication skills.
            </p>

            <p className="text-slate-300 leading-relaxed mt-4">
              My goal is to become a professional software developer
              building impactful digital solutions.
            </p>

            {/* Goals & Vision */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">

              {/* Goals */}
              <div className="rounded-2xl border border-[#40E0D0]/20 bg-slate-900/70 p-6 hover:border-[#40E0D0]/40 hover:shadow-lg hover:shadow-[#40E0D0]/20 transition duration-300">

                <h3 className="text-xl font-semibold text-[#40E0D0] mb-3 text-center">
                  My Goals
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Grow as a developer by building real-world projects
                  and improving technical skills.
                </p>

              </div>

              {/* Vision */}
              <div className="rounded-2xl border border-[#F2545B]/20 bg-slate-900/70 p-6 hover:border-[#F2545B]/40 hover:shadow-lg hover:shadow-[#F2545B]/20 transition duration-300">

                <h3 className="text-xl font-semibold text-[#F2545B] mb-3 text-center">
                  My Vision
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
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