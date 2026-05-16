import { useState, useEffect } from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import About from "./sections/About.jsx"
import Skills from "./sections/Skills.jsx"
import Projects from "./sections/Projects.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./components/Footer.jsx"
import ChatBot from "./components/ChatBot.jsx"


function App() {

  const [darkMode, setDarkMode] = useState(true)

  // Save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">

      {/* PASS toggle to navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ChatBot />
      </main>
    </div>
  );
}

export default App