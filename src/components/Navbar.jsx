import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Nino</h1>

        <ul className="hidden md:flex gap-8">
          <li>
            <Link to="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-cyan-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-cyan-400 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-cyan-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar