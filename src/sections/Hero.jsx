function Hero() {
  const handleViewProjects = () => {
    alert("Projects section coming soon!");
  };

  return (
    <section className="min-h-screen bg-transparent text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
          
          <p className="text-cyan-400 mb-4 text-sm uppercase tracking-[0.3em]">
            Front-End Developer | QA Tester
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm Nino
          </h1>

          {/* FIXED: removed div inside p */}
          <div className="bg-gray-900 p-6 rounded-xl transition duration-300 hover:scale-105">
            <p className="text-slate-300 max-w-2xl text-lg leading-8">
              I build modern, responsive, and user-friendly websites using React.js and Tailwind CSS.
            </p>
          </div>

          {/* FIXED: added onClick */}
          <button
            onClick={handleViewProjects}
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View Projects
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;