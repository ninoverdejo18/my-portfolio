function Skills() {
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Responsive Design",
  "UI/UX",
  "Graphic Design",
  "QA Testing",
  "Customer Service",
  ]

  return (
    <section id="skills" className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-black p-4 rounded-xl text-center border border-gray-800 hover:border-cyan-500 transition"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills