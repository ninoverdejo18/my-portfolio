import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#CDFF45]/10 bg-black/80 text-white backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="z-50">
          <img
            src={logo}
            alt="Nino Logo"
            className="h-8 w-auto object-contain sm:h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">

          <li>
            <Link
              to="/"
              className="text-sm transition duration-300 hover:text-[#CDFF45] lg:text-base"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-sm transition duration-300 hover:text-[#CDFF45] lg:text-base"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/skills"
              className="text-sm transition duration-300 hover:text-[#CDFF45] lg:text-base"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              className="text-sm transition duration-300 hover:text-[#CDFF45] lg:text-base"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="rounded-xl border border-[#CDFF45]/20 px-4 py-2 text-sm transition duration-300 hover:border-[#CDFF45]/50 hover:bg-[#CDFF45]/10 hover:text-[#CDFF45] lg:text-base"
            >
              Contact
            </Link>
          </li>

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
        className={`overflow-hidden border-t border-[#CDFF45]/10 bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >

        <ul className="flex flex-col gap-2 px-4 py-4">

          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-3 transition duration-300 hover:bg-[#CDFF45]/10 hover:text-[#CDFF45]"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-3 transition duration-300 hover:bg-[#CDFF45]/10 hover:text-[#CDFF45]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/skills"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-3 transition duration-300 hover:bg-[#CDFF45]/10 hover:text-[#CDFF45]"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-3 transition duration-300 hover:bg-[#CDFF45]/10 hover:text-[#CDFF45]"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-xl bg-[#CDFF45] px-4 py-3 text-center font-semibold text-black transition duration-300 hover:bg-[#bdfc24]"
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