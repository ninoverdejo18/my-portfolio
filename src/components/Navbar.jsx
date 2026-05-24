import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#CDFF45]/10 bg-black/80 text-white backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-4 sm:px-4 lg:px-8">

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
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="rounded-xl border border-[#CDFF45]/20 bg-black/40 px-5 py-2.5 text-sm transition-all duration-300 hover:border-[#CDFF45]/50 hover:bg-[#CDFF45]/10 hover:text-[#CDFF45]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-[#CDFF45]/20 bg-black/40 p-2 transition duration-300 hover:border-[#CDFF45]/50 md:hidden"
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
        className={`md:hidden overflow-hidden bg-black/95 backdrop-blur-xl transition-all duration-300 border-b border-[#CDFF45]/10 ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-4 py-4">

          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block rounded-xl border border-[#CDFF45]/20 bg-black/40 px-4 py-3 text-sm transition-all duration-300 hover:border-[#CDFF45]/50 hover:bg-[#CDFF45]/10 hover:text-[#CDFF45]"
              >
                {item.label}
              </Link>
            </li>
          ))}

        </ul>
      </div>

    </nav>
  );
}

export default Navbar;