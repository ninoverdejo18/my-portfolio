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
        className="relative overflow-hidden bg-black py-20 text-white"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(205,255,69,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(205,255,69,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">

          {/* Heading */}
          <h2 className="mb-6 text-center text-4xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-400">
            Technologies, tools, and professional skills that I use
            to create modern, responsive, and user-focused web applications.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl border border-[#CDFF45]/10 bg-black/70 p-6 backdrop-blur-lg transition duration-300 hover:border-[#CDFF45]/40"
              >

                {/* Accent Line */}
                <div className="mb-4 h-1 w-14 rounded-full bg-[#CDFF45] transition-all duration-300 group-hover:w-20"></div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-[#CDFF45]">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-300">
                  {skill.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default Skills;