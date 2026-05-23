import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white z-50 border-b border-[#CDFF45]/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Nino Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Links */}
        <ul className="hidden md:flex gap-8">

          <li>
            <Link
              to="/"
              className="hover:text-[#CDFF45] transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-[#CDFF45] transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/skills"
              className="hover:text-[#CDFF45] transition"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              className="hover:text-[#CDFF45] transition"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-[#CDFF45] transition"
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;