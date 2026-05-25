import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Skills() {
  const skills = [
    { title: "HTML", description: "Building clean and structured web page layouts.", icon: "🌐" },
    { title: "CSS", description: "Creating modern, responsive, and visually appealing designs.", icon: "🎨" },
    { title: "JavaScript", description: "Adding interactivity and dynamic functionality.", icon: "⚡" },
    { title: "React.js", description: "Reusable UI components.", icon: "⚛️" },
    { title: "Tailwind CSS", description: "Utility-first responsive design.", icon: "💨" },
    { title: "Git", description: "Version control system.", icon: "🔧" },
    { title: "GitHub", description: "Collaboration and deployment.", icon: "🐙" },
    { title: "Responsive Design", description: "Multi-device compatibility.", icon: "📱" },
    { title: "UI/UX", description: "User-centered design.", icon: "✨" },
    { title: "Graphic Design", description: "Visual branding and layouts.", icon: "🖌️" },
    { title: "QA Testing", description: "Quality assurance.", icon: "🧪" },
    { title: "EmailJS", description: "Form email integration.", icon: "📩" },
    { title: "Vercel", description: "Deployment platform.", icon: "🚀" },
    { title: "Customer Service", description: "Client communication.", icon: "🤝" },
  ];

  return (
    <AnimatedSection>
      <section className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-28">

        {/* MAIN GLOW */}
        <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#CDFF45]/10 blur-3xl animate-pulse sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px]" />

        {/* SIDE LIGHTS */}
        <div className="absolute left-0 top-0 h-full w-[280px] bg-gradient-to-r from-[#CDFF45]/10 to-transparent blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-[280px] bg-gradient-to-l from-[#CDFF45]/10 to-transparent blur-3xl" />

        {/* FLOATING ORBS */}
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-[#CDFF45]/10 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-10 h-52 w-52 rounded-full bg-[#CDFF45]/10 blur-3xl animate-[float_10s_ease-in-out_infinite]" />

        {/* MOVING CODE BACKGROUND */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.10]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 top-0 h-full w-[250%]"
          >
            <pre className="code-bg absolute left-0 top-0 w-1/2">
{`
const skills = ["HTML", "CSS", "JS", "React"];

function SkillCard() {
  return <div className="card" />;
}
`}
            </pre>

            <pre className="code-bg absolute left-1/2 top-0 w-1/2">
{`
export default function Skills() {
  return (
    <section className="skills">
      <div className="grid" />
    </section>
  );
}
`}
            </pre>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20"
          >
            {/* 🔥 ONLY THIS WAS UPDATED */}
            <span className="skills-badge mb-4 inline-flex rounded-full border border-[#CDFF45]/20 bg-[#CDFF45]/5 px-4 py-2 text-xs tracking-[0.2em] text-[#CDFF45] shadow-[0_0_20px_rgba(205,255,69,0.35)]">
              MY EXPERTISE
            </span>

            <h2 className="text-3xl font-black sm:text-5xl md:text-6xl">
              Technologies &
              <span className="block bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
                Professional Skills
              </span>
            </h2>

            <p className="mt-4 text-white/60">
              A collection of modern technologies and tools I use to build web applications.
            </p>
          </motion.div>

          {/* GRID */}
          <motion.div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#CDFF45]/10 bg-gradient-to-b from-[#111] to-black p-6 transition"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#CDFF45]/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#CDFF45]/15 bg-[#CDFF45]/10 text-2xl">
                      {skill.icon}
                    </div>

                    <span className="text-xs font-semibold tracking-widest text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold group-hover:text-[#CDFF45]">
                    {skill.title}
                  </h3>

                  <p className="text-sm text-white/60">
                    {skill.description}
                  </p>

                  <div className="mt-5 h-[2px] w-14 bg-[#CDFF45] transition-all duration-300 group-hover:w-24" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* STYLES */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }

          @keyframes jump {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          .code-bg {
            color: #CDFF45;
            font-family: monospace;
            white-space: pre;
            font-size: 14px;
            line-height: 2;
            padding: 60px;
            text-shadow: 0 0 10px rgba(205,255,69,0.25);
          }

          .skills-badge {
            display: inline-block;
            animation: jump 1.6s ease-in-out infinite;
          }
        `}</style>

      </section>
    </AnimatedSection>
  );
}

export default Skills;