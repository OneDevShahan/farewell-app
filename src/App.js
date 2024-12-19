import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import MessageBoard from "./components/MessageBoard";
import Countdown from "./components/Countdown";
import { useTheme } from "./components/ThemeProvider";
import NoPage from "./components/NoPage";

const App = () => {
  const { darkMode, toggleTheme } = useTheme();
  const basename = process.env.NODE_ENV === "production" ? "/farewell-app" : "/";
  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
        <Header toggleTheme={toggleTheme} darkMode={darkMode} />
        <Routes>
          <Route
            path="/"
            element={<Countdown targetDate="2025-01-13T00:00:00" />}
          />
          <Route
            path="/farewell-app"
            element={<Countdown targetDate="2025-01-13T00:00:00" />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wish" element={<MessageBoard />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
