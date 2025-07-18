import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../App";

const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
      <div className="font-bold text-lg">
        <Link to="/">Task App</Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/tasks" className="hover:underline">
          Tasks
        </Link>
        <Link to="/api" className="hover:underline">
          API Data
        </Link>
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          aria-label="Toggle light/dark mode"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
