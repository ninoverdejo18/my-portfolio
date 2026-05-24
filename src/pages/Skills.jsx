import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Skills() {
  const skills = [
    { title: "HTML", description: "Building clean and structured web page layouts.", icon: "🌐" },
    { title: "CSS", description: "Creating modern, responsive, and visually appealing designs.", icon: "🎨" },
    { title: "JavaScript", description: "Adding interactivity and dynamic functionality to websites.", icon: "⚡" },
    { title: "React.js", description: "Developing fast and reusable user interface components.", icon: "⚛️" },
    { title: "Tailwind CSS", description: "Designing responsive websites efficiently using utility classes.", icon: "💨" },
    { title: "Git", description: "Managing project versions and tracking code changes.", icon: "🔧" },
    { title: "GitHub", description: "Collaborating, storing, and deploying development projects.", icon: "🐙" },
    { title: "Responsive Design", description: "Ensuring websites work smoothly across all screen sizes.", icon: "📱" },
    { title: "UI/UX", description: "Designing user-friendly and visually engaging experiences.", icon: "✨" },
    { title: "Graphic Design", description: "Creating digital graphics, layouts, and branding materials.", icon: "🖌️" },
    { title: "QA Testing", description: "Testing websites and applications to improve quality.", icon: "🧪" },
    { title: "EmailJS", description: "Integrating real-time email functionality into forms.", icon: "📩" },
    { title: "Vercel", description: "Deploying and hosting modern React applications.", icon: "🚀" },
    { title: "Customer Service", description: "Providing professional communication and support.", icon: "🤝" },
  ];

  return (
    <AnimatedSection>
      <section
        id="skills"
        className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-28"
      >
        {/* ================= BACKGROUND EFFECTS ================= */}
        <div className="absolute inset-0 overflow-hidden">

          {/* MAIN GLOW (reduced) */}
          <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#CDFF45]/5 blur-3xl animate-pulse sm:h-[350px] sm:w-[350px] lg:h-[450px] lg:w-[450px]" />

          {/* SIDE LIGHTS (reduced) */}
          <div className="absolute left-0 top-0 h-full w-[200px] bg-gradient-to-r from-[#CDFF45]/5 to-transparent blur-3xl" />

          <div className="absolute right-0 top-0 h-full w-[200px] bg-gradient-to-l from-[#CDFF45]/5 to-transparent blur-3xl" />

          {/* FLOATING ORBS (reduced) */}
          <div className="absolute left-10 top-20 h-32 w-32 rounded-full bg-[#CDFF45]/5 blur-3xl animate-[float_8s_ease-in-out_infinite]" />

          <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-[#A3E635]/5 blur-3xl animate-[float_10s_ease-in-out_infinite]" />

          {/* RADIAL FADE (reduced) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(205,255,69,0.06),transparent_70%)]" />

          {/* NOISE */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center sm:mb-16 lg:mb-20"
          >
            <span className="skills-badge mb-4 inline-flex rounded-full border border-[#CDFF45]/20 bg-[#CDFF45]/5 px-4 py-2 text-xs tracking-[0.2em] text-[#CDFF45]">
              MY EXPERTISE
            </span>

            <h2 className="mb-5 text-3xl font-black leading-tight sm:text-5xl md:text-6xl">
              Technologies &
              <span className="block bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
                Professional Skills
              </span>
            </h2>

            <p className="text-base leading-relaxed text-white/60 sm:text-lg">
              A collection of modern technologies, development tools, and creative skills I use to craft responsive,
              high-performance, and visually engaging web applications.
            </p>
          </motion.div>

          {/* SKILLS GRID */}
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
                className="group relative overflow-hidden rounded-[2rem] border border-[#CDFF45]/10 bg-gradient-to-b from-[#111]/95 to-black/95 p-6 shadow-[0_0_45px_rgba(205,255,69,0.04)] backdrop-blur-xl transition duration-500 hover:border-[#CDFF45]/40 hover:shadow-[0_0_60px_rgba(205,255,69,0.08)] sm:p-7"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#CDFF45]/5 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#CDFF45]/15 bg-[#CDFF45]/5 text-2xl">
                      {skill.icon}
                    </div>

                    <span className="text-xs font-semibold tracking-widest text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-[#CDFF45]">
                    {skill.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-white/60">
                    {skill.description}
                  </p>

                  <div className="mt-6 h-[2px] w-14 rounded-full bg-[#CDFF45] transition-all duration-500 group-hover:w-28" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* ================= CUSTOM ANIMATIONS ================= */}
        <style>{`
          @keyframes jump {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-30px) translateX(10px); }
          }

          .skills-badge {
            animation: jump 1.8s ease-in-out infinite;
          }
        `}</style>

      </section>
    </AnimatedSection>
  );
}

export default Skills;