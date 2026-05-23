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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
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
        className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >

        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#CDFF45]/10 blur-3xl sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />

        {/* Grid Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(205,255,69,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(205,255,69,0.04)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
          >

            <span className="mb-4 inline-flex rounded-full border border-[#CDFF45]/20 bg-[#CDFF45]/5 px-4 py-2 text-xs tracking-[0.2em] text-[#CDFF45] sm:px-5 sm:text-sm">
              FEATURED WORK
            </span>

            <h2 className="mb-5 text-3xl font-black leading-tight sm:text-5xl lg:mb-6">
              <span className="block bg-gradient-to-r from-[#CDFF45] via-white to-[#A3E635] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="text-base leading-relaxed text-white/60 sm:text-lg">
              A showcase of modern web applications, dashboards,
              and responsive user interfaces built using React,
              Tailwind CSS, and modern web technologies.
            </p>

          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-[#CDFF45]/10 bg-gradient-to-b from-[#111] to-black shadow-[0_0_40px_rgba(205,255,69,0.04)] transition duration-300 hover:border-[#CDFF45]/40 sm:rounded-[2rem]"
              >

                {/* Hover Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#CDFF45]/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100 sm:h-40 sm:w-40" />

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-56 lg:h-60"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />

                  {/* Project Number */}
                  <span className="absolute right-4 top-4 text-xs font-semibold text-white/40 sm:right-5 sm:top-5 sm:text-sm">
                    0{index + 1}
                  </span>

                </div>

                {/* Content */}
                <div className="relative z-10 p-5 sm:p-6 lg:p-7">

                  {/* Tech Stack */}
                  <div className="mb-4 inline-flex rounded-full border border-[#CDFF45]/20 bg-[#CDFF45]/5 px-3 py-1 text-[10px] font-medium tracking-wide text-[#CDFF45] sm:px-4 sm:text-xs">
                    {project.tech}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-white transition duration-300 group-hover:text-[#CDFF45] sm:mb-4 sm:text-2xl">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                    {project.description}
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-5 h-[2px] w-16 rounded-full bg-[#CDFF45] transition-all duration-300 group-hover:w-28 sm:mt-6" />

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