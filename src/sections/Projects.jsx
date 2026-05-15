function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and Tailwind."
    },
    {
      title: "Todo App",
      description: "Task management app using React state."
    },
    {
      title: "Landing Page",
      description: "Responsive landing page design."
    }
  ]

  return (
    <section id="projects" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects