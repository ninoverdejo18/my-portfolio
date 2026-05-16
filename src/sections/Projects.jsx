import { motion } from "framer-motion";

import portfolioImage from "../assets/projects/portfolio.png";
import ecommerceImage from "../assets/projects/ecommerce.png";
import dashboardImage from "../assets/projects/dashboard.png";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Professional responsive portfolio using React and Tailwind CSS.",
      tech: "React • Tailwind • Vite",
      image: portfolioImage,
    },
    {
      title: "Ecommerce",
      description: "A productivity app with task tracking features.",
      tech: "React • JavaScript",
      image: ecommerceImage,
    },
    {
      title: "Dashboard UI",
      description: "Modern responsive dashboard design.",
      tech: "HTML • CSS • Tailwind",
      image: dashboardImage,
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <p className="text-cyan-400 text-sm">
                  {project.tech}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;