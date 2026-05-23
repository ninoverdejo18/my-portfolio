import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

function Skills() {
  const skills = [
    {
      title: "HTML",
      description: "Building clean and structured web page layouts.",
      color: "cyan",
    },
    {
      title: "CSS",
      description: "Creating modern, responsive, and visually appealing designs.",
      color: "red",
    },
    {
      title: "JavaScript",
      description: "Adding interactivity and dynamic functionality to websites.",
      color: "cyan",
    },
    {
      title: "React.js",
      description: "Developing fast and reusable user interface components.",
      color: "red",
    },
    {
      title: "Tailwind CSS",
      description: "Designing responsive websites efficiently using utility classes.",
      color: "cyan",
    },
    {
      title: "Git",
      description: "Managing project versions and tracking code changes.",
      color: "red",
    },
    {
      title: "GitHub",
      description: "Collaborating, storing, and deploying web development projects.",
      color: "cyan",
    },
    {
      title: "Responsive Design",
      description: "Ensuring websites work smoothly across all screen sizes.",
      color: "red",
    },
    {
      title: "UI/UX",
      description: "Designing user-friendly and visually engaging experiences.",
      color: "cyan",
    },
    {
      title: "Graphic Design",
      description: "Creating digital graphics, layouts, and branding materials.",
      color: "red",
    },
    {
      title: "QA Testing",
      description: "Testing websites and applications to identify bugs and improve quality.",
      color: "cyan",
    },
    {
      title: "EmailJS",
      description: "Integrating contact forms with EmailJS for real-time email functionality.",
      color: "red",
    },
    {
      title: "Vercel",
      description: "Deploying and hosting modern React applications with fast performance.",
      color: "cyan",
    },
    {
      title: "Customer Service",
      description: "Providing professional support and effective communication with clients.",
      color: "red",
    },
  ];

  return (
    <AnimatedSection>
      <section
        id="skills"
        className="bg-black text-white py-20 relative overflow-hidden"
      >

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/10 blur-3xl rounded-full"></div>
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* Heading */}
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 via-white to-red-400 bg-clip-text text-transparent">
            Skills
          </h2>

          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Technologies, tools, and professional skills that I use
            to create modern, responsive, and user-focused web applications.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`group p-6 rounded-2xl border backdrop-blur-lg transition duration-300
                  ${
                    skill.color === "cyan"
                      ? "bg-slate-900/70 border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10"
                      : "bg-slate-900/70 border-red-500/20 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/10"
                  }
                `}
              >

                {/* Top Accent Line */}
                <div
                  className={`w-14 h-1 rounded-full mb-4 transition duration-300
                    ${
                      skill.color === "cyan"
                        ? "bg-cyan-400 group-hover:w-20"
                        : "bg-red-400 group-hover:w-20"
                    }
                  `}
                ></div>

                {/* Skill Title */}
                <h3
                  className={`text-xl font-semibold mb-3
                    ${
                      skill.color === "cyan"
                        ? "text-cyan-400"
                        : "text-red-400"
                    }
                  `}
                >
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
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