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
        {/* Animated Background Glow */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#CDFF45]/10 blur-3xl animate-pulse sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-[#CDFF45]/10 blur-3xl animate-[float_8s_ease-in-out_infinite]" />

        <div className="absolute bottom-20 right-10 h-52 w-52 rounded-full bg-[#CDFF45]/10 blur-3xl animate-[float_10s_ease-in-out_infinite]" />

        {/* Animated Grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(205,255,69,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(205,255,69,0.04)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px] animate-[gridMove_20s_linear_infinite]" />

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
              className="rounded-[2rem] border border-[#CDFF45]/10 bg-gradient-to-b from-[#111] to-black p-6 shadow-[0_0_60px_rgba(205,255,69,0.05)] backdrop-blur-xl sm:p-8 lg:rounded-[2.5rem] lg:p-10"
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

              {/* Cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
                className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10"
              >

                {/* Goals */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="group rounded-2xl border border-[#CDFF45]/15 bg-black/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#CDFF45]/40 sm:rounded-3xl sm:p-6"
                >

                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#CDFF45]/10 text-lg text-[#CDFF45] sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl">
                    ✦
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-white sm:text-xl">
                    My Goals
                  </h3>

                  <p className="text-sm leading-relaxed text-white/60">
                    Continue growing through real-world projects,
                    collaboration, and advanced front-end development.
                  </p>

                </motion.div>

                {/* Vision */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="group rounded-2xl border border-[#CDFF45]/15 bg-black/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#CDFF45]/40 sm:rounded-3xl sm:p-6"
                >

                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#CDFF45]/10 text-lg text-[#CDFF45] sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl">
                    ⚡
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-white sm:text-xl">
                    My Vision
                  </h3>

                  <p className="text-sm leading-relaxed text-white/60">
                    Build scalable, visually engaging, and impactful
                    digital products that improve user experiences.
                  </p>

                </motion.div>

              </motion.div>

            </motion.div>

          </div>

        </div>

        {/* Custom Animations */}
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

            @keyframes gridMove {
              0% {
                transform: translateY(0px);
              }
              100% {
                transform: translateY(50px);
              }
            }

            .about-badge {
              animation: jump 1.8s ease-in-out infinite;
            }
          `}
        </style>

      </section>
    </AnimatedSection>
  );
}

export default About;