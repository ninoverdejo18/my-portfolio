import { useState } from "react"

function Navbar({ darkMode, setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-black text-black dark:text-white border-b border-gray-200 dark:border-gray-800 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Nino
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-4">

          {/* Theme Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded-lg text-sm"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t">

          <ul className="flex flex-col items-center py-6 gap-6">

            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>

          </ul>

        </div>
      )}

    </nav>
  )
}

export default Navbar