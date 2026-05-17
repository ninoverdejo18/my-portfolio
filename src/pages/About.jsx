import profile from "../assets/profile.png";
import AnimatedSection from "../components/AnimatedSection";

function About() {
  return (
    <AnimatedSection>
      <section id="about" className="bg-transparent text-white py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-64 h-64 object-cover rounded-[1.75rem] border border-slate-700 shadow-2xl shadow-slate-950/30"
            />
          </div>

          {/* Text */}
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>

            <p className="text-slate-300 leading-relaxed">
              I am a Front-End Developer specializing in building clean, modern, and responsive web applications using React and Tailwind CSS.
              I focus on creating user-friendly interfaces, responsive layouts, and visually appealing designs that enhance the overall user experience.
              With a background in graphic design and customer service, I bring both creative and interpersonal skills to every project.
              Passionate about modern web development, I continuously improve my skills in UI/UX design, component-based architecture, and performance optimization to deliver professional, engaging, and high-quality digital solutions.
            </p>

            <p className="text-slate-300 mt-4">
              I enjoy turning ideas into real-world web applications with great UI/UX design.
            </p>
          </div>

        </div>

      </section>
    </AnimatedSection>
  );
}

export default About;