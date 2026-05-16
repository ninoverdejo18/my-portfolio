function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Nino
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8">
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-3 py-1 border border-gray-600 rounded-md hover:border-cyan-400 transition"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;