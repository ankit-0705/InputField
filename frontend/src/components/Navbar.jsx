import { useContext } from "react";
import InputFieldContext from "../context/InputFieldContext";

function Navbar() {
  const {theme, setTheme} = useContext(InputFieldContext);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="navbar bg-base-200 shadow-md border-b border-base-300 px-4">
      <div className="flex-1">
        <span className="text-xl font-bold text-primary">InputField Demo</span>
      </div>

      <div className="flex-none">
        <button
          className="btn btn-sm btn-outline"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
