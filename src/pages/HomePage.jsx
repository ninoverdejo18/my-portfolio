import { Link } from "react-router-dom";
import Hero from "./Hero";

function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 items-start">

          {/* Left Card */}
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <h2 className="text-3xl font-bold mb-4">Explore the portfolio</h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Visit each page to learn more about my experience, skills, recent projects, and how to contact me.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/about"
                className="px-5 py-3 bg-green-500 text-black rounded-xl font-semibold hover:bg-green-400 transition"
              >
                About
              </Link>

              <Link
                to="/skills"
                className="px-5 py-3 border border-green-500 rounded-xl hover:bg-green-500/10 transition"
              >
                Skills
              </Link>

              <Link
                to="/projects"
                className="px-5 py-3 border border-red-500 rounded-xl hover:bg-red-500/10 transition"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className="px-5 py-3 border border-red-500 rounded-xl hover:bg-red-500/10 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold mb-4">Ready to collaborate?</h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              Whether you need a portfolio website, responsive landing page, dashboard UI, or front-end consultation, I’m available to help bring your vision to life.
            </p>

            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-400 transition"
            >
              Send a message
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

export default HomePage;