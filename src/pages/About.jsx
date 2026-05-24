import profile from "../assets/profile.png";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";

function About() {
  return (
    <AnimatedSection>
      <section
        id="about"
        className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-28"
      >

        {/* ================= PREMIUM BACKGROUND ================= */}

        {/* MAIN TOP GLOW */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#CDFF45]/10 blur-3xl animate-pulse sm:h-[400px] sm:w-[400px] lg:h-[550px] lg:w-[550px]" />

        {/* LEFT GLOW */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#CDFF45]/10 blur-[120px]"
        />

        {/* RIGHT GLOW */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-[#CDFF45]/10 blur-[120px]"
        />

        {/* FLOATING ORBS */}
        <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-[#CDFF45]/10 blur-3xl animate-[float_8s_ease-in-out_infinite]" />

        <div className="absolute bottom-20 right-10 h-52 w-52 rounded-full bg-[#CDFF45]/10 blur-3xl animate-[float_10s_ease-in-out_infinite]" />

        {/* HORIZONTAL LINES */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-[#CDFF45]/40 to-transparent" />

          <div className="absolute left-0 top-2/4 h-px w-full bg-gradient-to-r from-transparent via-[#CDFF45]/20 to-transparent" />

          <div className="absolute left-0 top-3/4 h-px w-full bg-gradient-to-r from-transparent via-[#CDFF45]/40 to-transparent" />
        </div>

        {/* MOVING CODE BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.12]">

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 top-0 flex w-[200%]"
          >

            {/* FIRST BLOCK */}
            <pre className="code-bg w-1/2">
{`
import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <main className="modern-ui">
      <HeroSection />
      <Projects />
      <Contact />
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

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle(
    "sticky",
    window.scrollY > 50
  );
});
`}
            </pre>

            {/* DUPLICATE BLOCK */}
            <pre className="code-bg w-1/2">
{`
import React from "react";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <main className="modern-ui">
      <HeroSection />
      <Projects />
      <Contact />
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

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle(
    "sticky",
    window.scrollY > 50
  );
});
`}
            </pre>

          </motion.div>
        </div>

        {/* FLOATING DOTS */}
        <div className="absolute inset-0">
          <div className="absolute left-[10%] top-[20%] h-2 w-2 rounded-full bg-[#CDFF45] shadow-[0_0_20px_#CDFF45]" />

          <div className="absolute left-[80%] top-[30%] h-2 w-2 rounded-full bg-[#CDFF45] shadow-[0_0_20px_#CDFF45]" />

          <div className="absolute left-[60%] top-[70%] h-2 w-2 rounded-full bg-[#CDFF45] shadow-[0_0_20px_#CDFF45]" />

          <div className="absolute left-[25%] top-[80%] h-2 w-2 rounded-full bg-[#CDFF45] shadow-[0_0_20px_#CDFF45]" />
        </div>

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* Main Grid */}
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >

              {/* Glow Ring */}
              <div className="absolute h-64 w-64 rounded-full bg-[#CDFF45]/10 blur-3xl sm:h-72 sm:w-72 lg:h-80 lg:w-80" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#CDFF45]/20 bg-gradient-to-b from-[#111] to-black p-2 sm:p-3 shadow-[0_0_60px_rgba(205,255,69,0.08)]">

                <img
                  src={profile}
                  alt="Profile"
                  className="h-[260px] w-[220px] rounded-[1.5rem] object-cover transition-all duration-500 hover:scale-105 sm:h-[320px] sm:w-[280px] lg:h-[340px] lg:w-[300px]"
                />

              </div>

            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-[#CDFF45]/10 bg-gradient-to-b from-[#111]/90 to-black/90 p-6 shadow-[0_0_60px_rgba(205,255,69,0.05)] backdrop-blur-xl sm:p-8 lg:rounded-[2.5rem] lg:p-10"
            >

              {/* Badge */}
              <span className="about-badge mb-4 inline-flex rounded-full border border-[#CDFF45]/20 bg-[#CDFF45]/5 px-4 py-2 text-xs tracking-[0.2em] text-[#CDFF45] shadow-[0_0_20px_rgba(205,255,69,0.35)] sm:mb-5 sm:px-5 sm:text-sm">
                ABOUT ME
              </span>

              {/* Heading */}
              <h2 className="mb-6 text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
                Building modern
                <span className="block bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
                  digital experiences
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-5 text-sm leading-relaxed text-white/65 sm:text-base">

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

              </div>

              {/* Mission & Vision */}
              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                {/* Mission */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-[#CDFF45]/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:border-[#CDFF45]/30 hover:bg-white/[0.05]"
                >
                  <h3 className="mb-3 text-lg font-bold text-[#CDFF45]">
                    Mission
                  </h3>

                  <p className="text-sm leading-relaxed text-white/65">
                    To create modern, responsive, and user-friendly web
                    experiences that combine creativity, performance,
                    and functionality.
                  </p>
                </motion.div>

                {/* Vision */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-[#CDFF45]/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:border-[#CDFF45]/30 hover:bg-white/[0.05]"
                >
                  <h3 className="mb-3 text-lg font-bold text-[#CDFF45]">
                    Vision
                  </h3>

                  <p className="text-sm leading-relaxed text-white/65">
                    To become an innovative developer known for building
                    impactful digital products that inspire and improve
                    user experiences.
                  </p>
                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>

        {/* CUSTOM ANIMATIONS */}
        <style>
          {`
            @keyframes jump {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            @keyframes float {
              0%, 100% {
                transform: translateY(0px) translateX(0px);
              }
              50% {
                transform: translateY(-30px) translateX(10px);
              }
            }

            .about-badge {
              animation: jump 1.8s ease-in-out infinite;
            }

            .code-bg {
              color: #CDFF45;
              font-family: "Fira Code", monospace;
              font-size: 16px;
              line-height: 2.2;
              white-space: pre;
              padding: 80px;
              min-width: 100%;

              text-shadow:
                0 0 10px rgba(205,255,69,0.25),
                0 0 20px rgba(205,255,69,0.15);

              background: transparent;

              mask-image: linear-gradient(
                to bottom,
                transparent,
                white 20%,
                white 80%,
                transparent
              );
            }
          `}
        </style>

      </section>
    </AnimatedSection>
  );
}

export default About;