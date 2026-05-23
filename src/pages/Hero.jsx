import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

function Hero() {
  return (
    <AnimatedSection>
      <section className="min-h-screen bg-black text-white flex items-center relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute w-80 h-80 bg-cyan-500 rounded-full blur-3xl top-20 left-10"></div>
          <div className="absolute w-80 h-80 bg-red-500 rounded-full blur-3xl bottom-10 right-10"></div>
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* Small Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-cyan-400 text-lg mb-4 tracking-[0.2em] uppercase font-medium"
          >
            Front-End Developer • QA Tester • Graphic Designer
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black leading-tight mb-6"
          >
            Building Modern <br />

            <span className="bg-gradient-to-r from-cyan-400 via-white to-red-400 bg-clip-text text-transparent">
              Web Experiences
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-slate-400 max-w-3xl text-lg leading-relaxed"
          >
            Passionate Front-End Developer and QA Tester with experience
            creating responsive websites, interactive user interfaces,
            and visually engaging digital experiences using React.js,
            Tailwind CSS, JavaScript, and modern web technologies.

            Skilled in graphic design, customer service, UI/UX design,
            and quality assurance testing to deliver clean, user-friendly,
            and high-performance web applications.
          </motion.p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-10">

            <div className="bg-slate-900/60 border border-cyan-500/20 px-6 py-4 rounded-2xl backdrop-blur-lg hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300">
              <h3 className="text-3xl font-bold text-cyan-400">
                5
              </h3>
              <p className="text-slate-400">
                Web Projects
              </p>
            </div>

            <div className="bg-slate-900/60 border border-red-500/20 px-6 py-4 rounded-2xl backdrop-blur-lg hover:border-red-400/40 hover:shadow-lg hover:shadow-red-500/10 transition duration-300">
              <h3 className="text-3xl font-bold text-red-400">
                2+
              </h3>
              <p className="text-slate-400">
                Years Experience
              </p>
            </div>

            <div className="bg-slate-900/60 border border-cyan-500/20 px-6 py-4 rounded-2xl backdrop-blur-lg hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300">
              <h3 className="text-3xl font-bold text-cyan-400">
                100%
              </h3>
              <p className="text-slate-400">
                Responsive Design
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap">

            {/* Projects */}
            <Link
              to="/projects"
              className="bg-gradient-to-r from-cyan-500 to-red-500 hover:scale-105 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-lg shadow-cyan-500/10"
            >
              View Projects
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="border border-cyan-500/30 px-6 py-3 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition duration-300"
            >
              Contact Me
            </Link>

            {/* Resume */}
            <a
              href="/Nino Verdejo.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-red-500/30 px-6 py-3 rounded-xl hover:bg-red-500/10 hover:border-red-400 hover:text-red-300 transition duration-300"
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