import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const themeConfig = {
  dark: {
    bg: "bg-slate-950",
    text: "text-white",
    cardBg: "bg-slate-900",
    border: "border-slate-800",
  },
  light: {
    bg: "bg-white",
    text: "text-black",
    cardBg: "bg-gray-100",
    border: "border-gray-200",
  },
  ocean: {
    bg: "bg-blue-900",
    text: "text-white",
    cardBg: "bg-blue-800",
    border: "border-blue-700",
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const themeClasses = themeConfig[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeClasses }}>
      <div className={`min-h-screen transition-all duration-300 ${themeClasses.bg} ${themeClasses.text}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}