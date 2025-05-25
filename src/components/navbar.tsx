import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      aria-label="Navigation principale"
      className="
        fixed top-0 left-0 w-full
        bg-white/40 backdrop-blur-md
        shadow-md px-4 sm:px-6 py-3 sm:py-4
        flex flex-col sm:flex-row justify-between items-center z-50
      "
      style={{ WebkitBackdropFilter: "blur(8px)" }}
    >
      <div className="w-full sm:w-auto flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Stéphanie.B</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="sm:hidden text-gray-700 hover:text-blue-600"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>
      <ul
        className={`
          ${isOpen ? "flex" : "hidden sm:flex"}
          flex-col sm:flex-row gap-4 sm:gap-6 text-gray-700 mt-4 sm:mt-0
        `}
      >
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600 transition"
            }
            aria-current="page"
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600 transition"
            }
            aria-current="page"
          >
            À propos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600 transition"
            }
            aria-current="page"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
