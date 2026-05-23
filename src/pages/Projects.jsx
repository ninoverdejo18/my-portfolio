import { motion } from "framer-motion";
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
        className="bg-black text-white py-20 px-6 relative overflow-hidden"
      >

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#CDFF45]/10 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#CDFF45]/10 blur-3xl rounded-full"></div>
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
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
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
                className="group rounded-2xl overflow-hidden border border-[#CDFF45]/10 bg-black/70 backdrop-blur-lg transition duration-300 hover:border-[#CDFF45]/40 hover:shadow-xl hover:shadow-[#CDFF45]/10"
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

                  <h3 className="text-2xl font-semibold mb-3 text-[#CDFF45]">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <p className="text-sm mt-4 text-[#A3E635]">
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