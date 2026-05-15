function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">

      <div className="max-w-6xl mx-auto px-6">

        <p className="text-cyan-400 text-lg mb-4">
          Front-End Developer & QA Tester
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Building Modern <br />
          Web Experiences
        </h1>

        <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
          I create responsive and user-friendly websites using React.js,
          Tailwind CSS, and modern front-end technologies.
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

        </div>

      </div>

    </section>
  )
}

export default Hero