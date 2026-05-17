import { motion } from "framer-motion";

import portfolioImage from "../assets/projects/portfolio.png";
import ecommerceImage from "../assets/projects/ecommerce.png";
import dashboardImage from "../assets/projects/dashboard.png";
import chatappImage from "../assets/projects/chatapp.jpg";
import taskmanagerImage from "../assets/projects/taskmanager.jpg";
import weatherappImage from "../assets/projects/weatherapp.jpg";
import bookingappImage from "../assets/projects/bookingapp.jpg";

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
    },
    {
      title: "E-Commerce Website",
      description:
        "Online shopping platform with product listings, cart system, and checkout UI.",
      tech: "React • Firebase • Tailwind",
      image: ecommerceImage,
      demo: "#",
      github: "#",
    },
    {
      title: "Admin Dashboard",
      description:
        "Interactive admin dashboard with charts, analytics, and responsive layout.",
      tech: "React • Chart.js • CSS",
      image: dashboardImage,
      demo: "#",
      github: "#",
    },
    {
      title: "Chat Application",
      description:
        "Real-time messaging application with modern chat interface design.",
      tech: "React • Socket.io • Node.js",
      image: chatappImage,
      demo: "#",
      github: "#",
    },
    {
      title: "Task Manager App",
      description:
        "Productivity application for task organization and project management.",
      tech: "React • Local Storage • Tailwind",
      image: taskmanagerImage,
      demo: "#",
      github: "#",
    },
    {
      title: "Weather App",
      description:
        "Weather forecast application using live API integration and responsive UI.",
      tech: "React • OpenWeather API • CSS",
      image: weatherappImage,
      demo: "#",
      github: "#",
    },
    {
      title: "Booking System",
      description:
        "Appointment and reservation booking interface with calendar integration.",
      tech: "React • Firebase • Tailwind",
      image: bookingappImage,
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <p className="text-sm text-cyan-300 mb-5">
                  {project.tech}
                </p>

                <div className="flex gap-4">
                
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;