import AnimatedSection from "../components/AnimatedSection";

function Hero() {
  return (
    <AnimatedSection>
      <section className="min-h-screen bg-black text-white flex items-center">

        <div className="max-w-6xl mx-auto px-6">

          <p className="text-cyan-400 text-lg mb-4">
            Front-End Developer, QA Tester, and Graphic Designer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building Modern <br />
            Web Experiences
          </h1>

          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Front-End Developer and QA Tester with experience in responsive web development, graphic design, customer service, and modern UI/UX design using React.js and Tailwind CSS.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">

            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500/10 transition"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="text-cyan-400 underline"
            >
              Download Resume
            </a>

          </div>

        </div>

      </section>
    </AnimatedSection>
  );
}

export default Hero;