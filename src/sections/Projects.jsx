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
      title: "Task Management App",
      description: "A productivity app with task tracking features.",
      tech: "React • JavaScript",
      image: ecommerceImage, // placeholder image (you can replace later)
    },
    {
      title: "Landing Page UI",
      description: "Modern responsive landing page design.",
      tech: "HTML • CSS • Tailwind",
      image: dashboardImage, // placeholder image (you can replace later)
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
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition duration-300 hover:-translate-y-2"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;