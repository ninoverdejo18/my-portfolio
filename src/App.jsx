import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ChatBot from "./components/ChatBot.jsx";

import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [theme, setTheme] = useState("dark");

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Disable copy / inspect / select
  useEffect(() => {

    // Disable right click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable shortcuts
    const handleKeyDown = (e) => {

      // Allow copy inside email links
      const activeElement = document.activeElement;

      const isEmail =
        activeElement?.innerText?.includes(
          "ninoverdejo@gmail.com"
        );

      if (
        !isEmail &&
        (e.ctrlKey || e.metaKey) &&
        ["c", "x", "u", "s", "a"].includes(
          e.key.toLowerCase()
        )
      ) {
        e.preventDefault();
      }

      // Disable F12
      if (e.key === "F12") {
        e.preventDefault();
      }
    };

    // Disable text selection except email
    const handleSelectStart = (e) => {

      const allowSelection =
        e.target.closest("a") ||
        e.target.innerText?.includes(
          "ninoverdejo@gmail.com"
        );

      if (allowSelection) {
        return;
      }

      e.preventDefault();
    };

    document.addEventListener(
      "contextmenu",
      handleContextMenu
    );

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.addEventListener(
      "selectstart",
      handleSelectStart
    );

    return () => {
      document.removeEventListener(
        "contextmenu",
        handleContextMenu
      );

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.removeEventListener(
        "selectstart",
        handleSelectStart
      );
    };

  }, []);

  const themes = {
    dark: "bg-slate-950 text-white",
    light: "bg-white text-black",
    ocean: "bg-blue-950 text-white",
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden select-none transition-all duration-300 ${themes[theme]}`}
    >

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />

        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-slate-700/15 blur-3xl" />

        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black/40 to-transparent" />

      </div>

      {/* Main Content */}
      <Navbar />

      <main className="relative">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        <ChatBot />

      </main>

    </div>
  );
}

export default App;