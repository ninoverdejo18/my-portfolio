import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

function Hero() {
  return (
    <AnimatedSection>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-20 text-white sm:px-6 lg:px-8">

        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-full w-full opacity-20">

          <div className="absolute left-0 top-10 h-52 w-52 rounded-full bg-[#CDFF45] blur-3xl sm:left-10 sm:top-20 sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

          <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#A3E635] blur-3xl sm:bottom-10 sm:right-10 sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Small Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-[#CDFF45] sm:text-base lg:text-lg"
          >
            Front-End Developer • QA Tester • Graphic Designer
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Building Modern <br />

            <span className="bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
              Web Experiences
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Passionate Front-End Developer and QA Tester with experience
            creating responsive websites, interactive user interfaces,
            and visually engaging digital experiences using React.js,
            Tailwind CSS, JavaScript, and modern web technologies.

            <br className="hidden sm:block" />
            <br className="hidden sm:block" />

            Skilled in graphic design, customer service, UI/UX design,
            and quality assurance testing to deliver clean, user-friendly,
            and high-performance web applications.
          </motion.p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-8">

            <div className="rounded-2xl border border-[#CDFF45]/20 bg-black/60 px-5 py-4 backdrop-blur-lg transition duration-300 hover:border-[#CDFF45]/40 hover:shadow-lg hover:shadow-[#CDFF45]/10 sm:px-6">

              <h3 className="text-2xl font-bold text-[#CDFF45] sm:text-3xl">
                5
              </h3>

              <p className="text-sm text-slate-400 sm:text-base">
                Web Projects
              </p>

            </div>

            <div className="rounded-2xl border border-[#A3E635]/20 bg-black/60 px-5 py-4 backdrop-blur-lg transition duration-300 hover:border-[#A3E635]/40 hover:shadow-lg hover:shadow-[#A3E635]/10 sm:px-6">

              <h3 className="text-2xl font-bold text-[#A3E635] sm:text-3xl">
                2+
              </h3>

              <p className="text-sm text-slate-400 sm:text-base">
                Years Experience
              </p>

            </div>

            <div className="rounded-2xl border border-[#CDFF45]/20 bg-black/60 px-5 py-4 backdrop-blur-lg transition duration-300 hover:border-[#CDFF45]/40 hover:shadow-lg hover:shadow-[#CDFF45]/10 sm:px-6">

              <h3 className="text-2xl font-bold text-[#CDFF45] sm:text-3xl">
                100%
              </h3>

              <p className="text-sm text-slate-400 sm:text-base">
                Responsive Design
              </p>

            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">

            {/* Projects */}
            <Link
              to="/projects"
              className="rounded-xl bg-gradient-to-r from-[#CDFF45] to-[#A3E635] px-6 py-3 text-center font-semibold text-black shadow-lg shadow-[#CDFF45]/10 transition duration-300 hover:scale-105"
            >
              View Projects
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="rounded-xl border border-[#CDFF45]/30 px-6 py-3 text-center transition duration-300 hover:border-[#CDFF45] hover:bg-[#CDFF45]/10"
            >
              Contact Me
            </Link>

            {/* Resume */}
            <a
              href="/Nino Verdejo.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[#A3E635]/30 px-6 py-3 text-center transition duration-300 hover:border-[#A3E635] hover:bg-[#A3E635]/10 hover:text-[#CDFF45]"
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