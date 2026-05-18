import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom'
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

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const themes = {
    dark: "bg-slate-950 text-white",
    light: "bg-white text-black",
    ocean: "bg-blue-950 text-white",
  };

  return (
    <div className={`relative min-h-screen overflow-hidden transition-all duration-300 ${themes[theme]}`}>
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-slate-700/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Theme Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button onClick={() => setTheme("dark")} className="px-3 py-1 bg-slate-800 rounded">
          Dark
        </button>
        <button onClick={() => setTheme("light")} className="px-3 py-1 bg-gray-200 text-black rounded">
          Light
        </button>
        <button onClick={() => setTheme("ocean")} className="px-3 py-1 bg-blue-600 rounded">
          Ocean
        </button>
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