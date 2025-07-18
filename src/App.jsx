import React, { useState, useEffect, createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";
import Card from "./components/Card";
import Home from "./pages/Home";
import ApiData from "./pages/ApiData";

// Theme context for light/dark mode
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api" element={<ApiData />} />
          <Route
            path="*"
            element={
              <Card>
                <h2 className="text-2xl font-bold mb-4">404 - Not Found</h2>
                <p>The page you are looking for does not exist.</p>
              </Card>
            }
          />
        </Routes>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
