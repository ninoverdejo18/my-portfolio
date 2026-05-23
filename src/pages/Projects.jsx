import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

import portfolioImage from "../assets/projects/portfolio.png";
import ecommerceImage from "../assets/projects/ecommerce.png";
import dashboardImage from "../assets/projects/dashboard.png";
import taskmanagerImage from "../assets/projects/taskmanager.jpg";
import weatherappImage from "../assets/projects/weatherapp.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Modern responsive portfolio website built with React and Tailwind CSS.",
      tech: "React • Tailwind CSS • Vite",
      image: portfolioImage,
    },
    {
      title: "E-Commerce Website",
      description:
        "Online shopping platform with product listings, cart system, and checkout UI.",
      tech: "React • Firebase • Tailwind",
      image: ecommerceImage,
    },
    {
      title: "Admin Dashboard",
      description:
        "Interactive admin dashboard with charts, analytics, and responsive layout.",
      tech: "React • Chart.js • CSS",
      image: dashboardImage,
    },
    {
      title: "Task Manager App",
      description:
        "Productivity application for task organization and project management.",
      tech: "React • Local Storage • Tailwind",
      image: taskmanagerImage,
    },
    {
      title: "Weather App",
      description:
        "Weather forecast application using live API integration and responsive UI.",
      tech: "React • OpenWeather API • CSS",
      image: weatherappImage,
    },
  ];

  return (
    <AnimatedSection>
      <section
        id="projects"
        className="relative overflow-hidden bg-black px-6 py-20 text-white"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(205,255,69,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(205,255,69,0.08)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-center text-4xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mx-auto mb-14 max-w-2xl text-center text-slate-400">
              A collection of modern web applications and UI projects
              built using React, Tailwind CSS, and modern web technologies.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="group overflow-hidden rounded-2xl border border-[#CDFF45]/10 bg-black/70 backdrop-blur-lg transition duration-300 hover:border-[#CDFF45]/40"
              >

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="mb-3 text-2xl font-semibold text-[#CDFF45]">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <p className="mt-4 text-sm text-[#A3E635]">
                    {project.tech}
                  </p>

                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </AnimatedSection>
  );
}

export default Projects;