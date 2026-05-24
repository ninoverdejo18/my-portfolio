import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#CDFF45]/10 bg-black/80 text-white backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="z-50 flex items-center">
          <img
            src={logo}
            alt="Nino Logo"
            className="h-8 w-auto object-contain sm:h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:items-center md:gap-4 lg:gap-5">

          {["/", "/about", "/skills", "/projects", "/contact"].map((path, i) => {
            const labels = ["Home", "About", "Skills", "Projects", "Contact"];

            return (
              <li key={i}>
                <Link
                  to={path}
                  className="rounded-xl border border-[#CDFF45]/20 px-5 py-2.5 text-sm transition duration-300 hover:border-[#CDFF45]/50 hover:bg-[#CDFF45]/10 hover:text-[#CDFF45]"
                >
                  {labels[i]}
                </Link>
              </li>
            );
          })}

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-[#CDFF45]/20 p-2 transition duration-300 hover:border-[#CDFF45]/50 md:hidden"
        >
          {isOpen ? (
            <X size={22} className="text-[#CDFF45]" />
          ) : (
            <Menu size={22} className="text-[#CDFF45]" />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden bg-black/95 backdrop-blur-xl transition-all duration-300
        border-x border-b border-[#CDFF45]/10
        ${isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}`}
      >

        <ul className="flex flex-col divide-y divide-[#CDFF45]/10 px-4 py-3">

          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 transition hover:text-[#CDFF45]"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 transition hover:text-[#CDFF45]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/skills"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 transition hover:text-[#CDFF45]"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 transition hover:text-[#CDFF45]"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl bg-[#CDFF45] px-4 py-3 text-center font-semibold text-black transition hover:bg-[#bdfc24]"
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