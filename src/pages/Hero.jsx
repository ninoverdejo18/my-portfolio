import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

function Hero() {
  return (
    <AnimatedSection>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-20 text-white sm:px-6 lg:px-8">

        {/* MAIN TOP GLOW */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#CDFF45]/10 blur-3xl animate-pulse sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px]" />

        {/* SIDE LIGHTS */}
        <div className="absolute left-0 top-0 h-full w-[300px] bg-gradient-to-r from-[#CDFF45]/10 to-transparent blur-3xl" />

        <div className="absolute right-0 top-0 h-full w-[300px] bg-gradient-to-l from-[#A3E635]/10 to-transparent blur-3xl" />

        {/* FLOATING ORBS */}
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-[#CDFF45]/10 blur-3xl animate-[float_8s_ease-in-out_infinite]" />

        <div className="absolute bottom-20 right-10 h-52 w-52 rounded-full bg-[#A3E635]/10 blur-3xl animate-[float_10s_ease-in-out_infinite]" />

        {/* MOVING CODE BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12]">

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 top-0 h-full w-[250%]"
          >

            {/* FIRST BLOCK */}
            <pre className="code-bg absolute left-0 top-0 w-1/2">
{`
import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <main className="portfolio">
      <section className="hero">
        <h1>Modern Web Experiences</h1>

        <p>
          Building responsive and interactive
          interfaces with React.js and Tailwind CSS.
        </p>

        <button className="btn-primary">
          Explore Projects
        </button>
      </section>
    </main>
  );
}

export default Portfolio;

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("active");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("active");
  });
});

const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});
`}
            </pre>

            {/* DUPLICATE */}
            <pre className="code-bg absolute left-1/2 top-0 w-1/2">
{`
import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <main className="portfolio">
      <section className="hero">
        <h1>Modern Web Experiences</h1>

        <p>
          Building responsive and interactive
          interfaces with React.js and Tailwind CSS.
        </p>

        <button className="btn-primary">
          Explore Projects
        </button>
      </section>
    </main>
  );
}

export default Portfolio;

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("active");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("active");
  });
});

const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});
`}
            </pre>

          </motion.div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-[#CDFF45] sm:text-base lg:text-lg"
          >
            Front-End Developer • QA Tester • Graphic Designer
          </motion.p>

          {/* Heading */}
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
            className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg"
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

            <Link
              to="/projects"
              className="rounded-xl bg-gradient-to-r from-[#CDFF45] to-[#A3E635] px-6 py-3 text-center font-semibold text-black shadow-lg shadow-[#CDFF45]/10 transition duration-300 hover:scale-105"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-[#CDFF45]/30 px-6 py-3 text-center transition duration-300 hover:border-[#CDFF45] hover:bg-[#CDFF45]/10"
            >
              Contact Me
            </Link>

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

        {/* CUSTOM ANIMATIONS */}
        <style>
          {`
            @keyframes float {
              0%, 100% {
                transform: translateY(0px) translateX(0px);
              }

              50% {
                transform: translateY(-30px) translateX(10px);
              }
            }

            .code-bg {
              color: #CDFF45;
              font-family: "Fira Code", monospace;
              white-space: pre;

              font-size: 15px;
              line-height: 2.2;

              min-width: 100%;
              padding: 70px;

              text-shadow:
                0 0 10px rgba(205,255,69,0.25),
                0 0 20px rgba(205,255,69,0.15);

              background: linear-gradient(
                to right,
                transparent,
                rgba(0,0,0,0.82),
                transparent
              );
            }
          `}
        </style>

      </section>
    </AnimatedSection>
  );
}

export default Hero;