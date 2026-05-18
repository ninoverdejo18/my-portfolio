import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

function Hero() {
  return (
    <AnimatedSection>
      <section className="min-h-screen bg-black text-white flex items-center relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute w-72 h-72 bg-cyan-500 rounded-full blur-3xl top-20 left-10"></div>
          <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl bottom-10 right-10"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* Small Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-cyan-400 text-lg mb-4 tracking-wide"
          >
            Front-End Developer • QA Tester • Graphic Designer
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Building Modern <br />
            <span className="text-cyan-400">
              Web Experiences
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-400 max-w-3xl text-lg leading-relaxed"
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

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                5
              </h3>
              <p className="text-gray-400">
                Web Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                2+
              </h3>
              <p className="text-gray-400">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                100%
              </h3>
              <p className="text-gray-400">
                Responsive Design
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap">

            <Link
              to="/projects"
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-xl transition duration-300"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500/10 transition duration-300"
            >
              Contact Me
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-gray-700 px-6 py-3 rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition duration-300"
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