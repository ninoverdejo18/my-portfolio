import profile from "../assets/profile.png";
import AnimatedSection from "../components/AnimatedSection";

function About() {
  return (
    <AnimatedSection>
      <section id="about" className="bg-transparent text-white py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-72 h-72 object-cover rounded-[2rem] border border-slate-700 shadow-2xl shadow-slate-950/30 hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text */}
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">

            <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-3">
              Get To Know Me
            </p>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              About Me
            </h2>

            <p className="text-slate-300 leading-relaxed">
              I am an aspiring Front-End Developer and QA Tester with a passion
              for creating modern, responsive, and user-friendly web applications.
              My journey into web development started from my interest in design,
              technology, and problem-solving, which inspired me to continuously
              learn and improve my skills in modern web technologies.
            </p>

            <p className="text-slate-300 leading-relaxed mt-4">
              I specialize in building clean interfaces using React.js,
              JavaScript, Tailwind CSS, HTML, and CSS. I enjoy transforming ideas
              into real-world digital experiences that are visually appealing,
              functional, and optimized for performance across different devices.
            </p>

            <p className="text-slate-300 leading-relaxed mt-4">
              With a background in graphic design and customer service,
              I developed strong communication, creativity, and attention to
              detail — qualities that help me create better user experiences
              and collaborate effectively with teams and clients.
            </p>

            <p className="text-slate-300 leading-relaxed mt-4">
              As an IT graduate, I continue exploring new technologies,
              improving my development workflow, and building projects that
              challenge my creativity and technical abilities. My goal is to
              become a professional software developer who delivers impactful,
              high-quality, and innovative web solutions.
            </p>

            {/* Small Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-4">
                <h3 className="text-2xl font-bold text-cyan-400"></h3>
                <p className="text-slate-400 text-sm mt-1">
                  Years Learning Development
                </p>
              </div>

              <div className="bg-slate-900/70 border border-white/10 rounded-2xl p-4">
                <h3 className="text-2xl font-bold text-cyan-400"></h3>
                <p className="text-slate-400 text-sm mt-1">
                  Projects Built
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