import Navbar from "./components/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import About from "./sections/About.jsx"
import Skills from "./sections/Skills.jsx"
import Projects from "./sections/Projects.jsx"
import Contact from "./sections/Contact.jsx"
import Footer from "./components/Footer.jsx"
import ChatBot from "./components/ChatBot.jsx"


function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-slate-700/15 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent" />
      </div>

      <Navbar />
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