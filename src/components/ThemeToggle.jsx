import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  console.log(darkMode);

  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-transparent "
      >
        {darkMode ? <Moon size={25} /> : <Sun size={25} />}
      </button>
    </div>
  );
}

export default ThemeToggle;
