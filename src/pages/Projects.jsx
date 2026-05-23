import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";

import portfolioImage from "../assets/projects/portfolio.png";
import ecommerceImage from "../assets/projects/ecommerce.png";
import dashboardImage from "../assets/projects/dashboard.png";
import chatappImage from "../assets/projects/chatapp.jpg";
import taskmanagerImage from "../assets/projects/taskmanager.jpg";
import weatherappImage from "../assets/projects/weatherapp.jpg";
import bookingappImage from "../assets/projects/bookingapp.jpg";

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
      demo: "#",
      github: "#",
      color: "cyan",
    },
    {
      title: "E-Commerce Website",
      description:
        "Online shopping platform with product listings, cart system, and checkout UI.",
      tech: "React • Firebase • Tailwind",
      image: ecommerceImage,
      demo: "#",
      github: "#",
      color: "red",
    },
    {
      title: "Admin Dashboard",
      description:
        "Interactive admin dashboard with charts, analytics, and responsive layout.",
      tech: "React • Chart.js • CSS",
      image: dashboardImage,
      demo: "#",
      github: "#",
      color: "cyan",
    },
    {
      title: "Task Manager App",
      description:
        "Productivity application for task organization and project management.",
      tech: "React • Local Storage • Tailwind",
      image: taskmanagerImage,
      demo: "#",
      github: "#",
      color: "red",
    },
    {
      title: "Weather App",
      description:
        "Weather forecast application using live API integration and responsive UI.",
      tech: "React • OpenWeather API • CSS",
      image: weatherappImage,
      demo: "#",
      github: "#",
      color: "cyan",
    },
  ];

  return (
    <AnimatedSection>
      <section
        id="projects"
        className="bg-black text-white py-20 px-6 relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/10 blur-3xl rounded-full"></div>
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-white to-red-400 bg-clip-text text-transparent">
              Projects
            </h2>

            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
              A collection of modern web applications and UI projects built using React, Tailwind CSS, and modern web technologies.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`group rounded-2xl overflow-hidden border backdrop-blur-lg transition duration-300
                  ${
                    project.color === "cyan"
                      ? "bg-slate-900/70 border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
                      : "bg-slate-900/70 border-red-500/20 hover:border-red-400/50 hover:shadow-xl hover:shadow-red-500/10"
                  }
                `}
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`text-2xl font-semibold mb-3 ${
                      project.color === "cyan"
                        ? "text-cyan-400"
                        : "text-red-400"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <p
                    className={`text-sm mb-6 ${
                      project.color === "cyan"
                        ? "text-cyan-300"
                        : "text-red-300"
                    }`}
                  >
                    {project.tech}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300
                        ${
                          project.color === "cyan"
                            ? "bg-cyan-500 hover:bg-cyan-600 text-black"
                            : "bg-red-500 hover:bg-red-600 text-white"
                        }
                      `}
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition duration-300
                        ${
                          project.color === "cyan"
                            ? "border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-400"
                            : "border-red-500/40 hover:bg-red-500/10 hover:border-red-400"
                        }
                      `}
                    >
                      GitHub
                    </a>
                  </div>
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