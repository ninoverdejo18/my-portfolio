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
      <section id="skills" className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10 text-center">
            Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-black p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                  {skill.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
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