import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  // Check for saved theme preference in localStorage, default to 'false' (light mode)
  const storedTheme = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(storedTheme === "true");

  // Toggle theme and store preference in localStorage
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  if (!children) {
    console.error("ThemeProvider requires children.");
    return null;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
