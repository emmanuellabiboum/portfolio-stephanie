import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full
        bg-white/40 backdrop-blur-md
        shadow-md px-6 py-4 flex justify-between items-center z-50
      "
      style={{ WebkitBackdropFilter: "blur(8px)" }} // Pour Safari
    >
      <div className="text-xl font-bold text-blue-600">Stéphanie.B</div>
      <ul className="flex gap-6 text-gray-700">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            À propos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
