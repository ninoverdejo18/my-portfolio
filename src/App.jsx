import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ChatBot from "./components/ChatBot.jsx";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-[9999] flex gap-2">
      <button onClick={() => setTheme("dark")} className="px-3 py-1 bg-black text-white rounded border-gray-700 hover:opacity-80">Dark</button>
      <button onClick={() => setTheme("light")} className="px-3 py-1 bg-gray-200 text-black rounded hover:opacity-80">Light</button>
      <button onClick={() => setTheme("ocean")} className="px-3 py-1 bg-blue-600 text-white rounded hover:opacity-80">Ocean</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ChatBot />
      </main>
    </ThemeProvider>
  );
}

export default App;