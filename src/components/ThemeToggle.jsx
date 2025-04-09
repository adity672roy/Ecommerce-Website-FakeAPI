import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);
  

    useEffect(() => {
      document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);
  

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-2xl text-gray-800 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition"
    >
      {darkMode ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeToggle;
