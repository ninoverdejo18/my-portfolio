import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

function Skills() {
  const skills = [
    {
      title: "HTML",
      description: "Building clean and structured web page layouts.",
    },
    {
      title: "CSS",
      description: "Creating modern, responsive, and visually appealing designs.",
    },
    {
      title: "JavaScript",
      description: "Adding interactivity and dynamic functionality to websites.",
    },
    {
      title: "React.js",
      description: "Developing fast and reusable user interface components.",
    },
    {
      title: "Tailwind CSS",
      description: "Designing responsive websites efficiently using utility classes.",
    },
    {
      title: "Git",
      description: "Managing project versions and tracking code changes.",
    },
    {
      title: "GitHub",
      description: "Collaborating, storing, and deploying web development projects.",
    },
    {
      title: "Responsive Design",
      description: "Ensuring websites work smoothly across all screen sizes.",
    },
    {
      title: "UI/UX",
      description: "Designing user-friendly and visually engaging experiences.",
    },
    {
      title: "Graphic Design",
      description: "Creating digital graphics, layouts, and branding materials.",
    },
    {
      title: "QA Testing",
      description: "Testing websites and applications to identify bugs and improve quality.",
    },
    {
      title: "EmailJS",
      description: "Integrating contact forms with EmailJS for real-time email functionality.",
    },
    {
      title: "Vercel",
      description: "Deploying and hosting modern React applications with fast performance.",
    },
    {
      title: "Customer Service",
      description: "Providing professional support and effective communication with clients.",
    },
  ];

  return (
    <AnimatedSection>
      <section
        id="skills"
        className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24"
      >

        {/* Animated Background Glow */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#CDFF45]/10 blur-3xl animate-pulse sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-[#CDFF45]/10 blur-3xl animate-[float_8s_ease-in-out_infinite]" />

        <div className="absolute bottom-20 right-10 h-52 w-52 rounded-full bg-[#CDFF45]/10 blur-3xl animate-[float_10s_ease-in-out_infinite]" />

        {/* Grid Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(205,255,69,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(205,255,69,0.04)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px] animate-[gridMove_20s_linear_infinite]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

            {/* Animated Badge */}
            <span className="skills-badge mb-4 inline-flex rounded-full border border-[#CDFF45]/20 bg-[#CDFF45]/5 px-4 py-2 text-xs tracking-[0.2em] text-[#CDFF45] shadow-[0_0_20px_rgba(205,255,69,0.35)] sm:px-5 sm:text-sm">
              MY EXPERTISE
            </span>

            <h2 className="mb-5 text-3xl font-black leading-tight sm:text-5xl lg:mb-6">
              <span className="block bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
                Professional Skills
              </span>
            </h2>

            <p className="text-base leading-relaxed text-white/60 sm:text-lg">
              A collection of technologies, tools, and creative skills
              I use to build modern, responsive, and engaging digital experiences.
            </p>

          </div>

          {/* Skills Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-[#CDFF45]/10 bg-gradient-to-b from-[#111] to-black p-5 shadow-[0_0_40px_rgba(205,255,69,0.04)] transition duration-300 hover:border-[#CDFF45]/40 sm:rounded-[2rem] sm:p-6 lg:p-7"
              >

                {/* Hover Glow */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#CDFF45]/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100 sm:h-32 sm:w-32" />

                {/* Card Content */}
                <div className="relative z-10">

                  {/* Accent Number */}
                  <div className="mb-4 flex items-center justify-between sm:mb-5">

                    <div className="h-1 w-12 rounded-full bg-[#CDFF45] transition-all duration-300 group-hover:w-24 sm:w-14" />

                    <span className="text-xs font-medium text-white/20 sm:text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  {/* Skill Title */}
                  <h3 className="mb-3 text-xl font-bold text-white transition duration-300 group-hover:text-[#CDFF45] sm:mb-4 sm:text-2xl">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/60 sm:text-[15px]">
                    {skill.description}
                  </p>

                </div>

              </motion.div>
            ))}

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

            .skills-badge {
              animation: jump 1.8s ease-in-out infinite;
            }
          `}
        </style>

      </section>
    </AnimatedSection>
  );
}

export default Skills;