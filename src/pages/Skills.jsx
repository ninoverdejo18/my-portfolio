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
        className="relative overflow-hidden bg-black py-24 text-white"
      >

        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#CDFF45]/10 blur-3xl" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(205,255,69,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(205,255,69,0.04)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center">

            <span className="mb-4 inline-flex rounded-full border border-[#CDFF45]/20 bg-[#CDFF45]/5 px-5 py-2 text-sm tracking-widest text-[#CDFF45]">
              MY EXPERTISE
            </span>

            <h2 className="mb-6 text-5xl font-black leading-tight">
              Technologies &
              <span className="block bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
                Professional Skills
              </span>
            </h2>

            <p className="text-lg leading-relaxed text-white/60">
              A collection of technologies, tools, and creative skills
              I use to build modern, responsive, and engaging digital experiences.
            </p>

          </div>

          {/* Skills Grid */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#CDFF45]/10 bg-gradient-to-b from-[#111] to-black p-7 shadow-[0_0_40px_rgba(205,255,69,0.04)] transition duration-300 hover:border-[#CDFF45]/40"
              >

                {/* Hover Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#CDFF45]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Card Content */}
                <div className="relative z-10">

                  {/* Accent Number */}
                  <div className="mb-5 flex items-center justify-between">

                    <div className="h-1 w-14 rounded-full bg-[#CDFF45] transition-all duration-300 group-hover:w-24" />

                    <span className="text-sm font-medium text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  {/* Skill Title */}
                  <h3 className="mb-4 text-2xl font-bold text-white transition duration-300 group-hover:text-[#CDFF45]">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/60">
                    {skill.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default Skills;