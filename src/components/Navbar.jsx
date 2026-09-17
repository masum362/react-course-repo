import { useContext } from "react";
import {  NavLink } from "react-router";
import { userContext } from "../day 42/TextContext";

const Navbar = () => {

  const {user,setUser} = useContext(userContext)

  console.log(user)
  return (
    <nav className="flex items-center justify-between bg-slate-800 px-10 py-[15px] text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">
        MyWebsite
      </div>

      {/* Navigation */}
      <ul className="m-0 flex list-none items-center gap-[25px] p-0">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              `text-base  no-underline transition ${
                isActive
                  ? "font-bold text-red-500"
                  : isPending
                  ? "text-yellow-500"
                  : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              `text-base  no-underline transition ${
                isActive
                  ? "font-bold text-red-500"
                  : isPending
                  ? "text-yellow-500"
                  : ""
              }`
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            className={({ isActive, isPending }) =>
              `text-base  no-underline transition ${
                isActive
                  ? "font-bold text-red-500"
                  : isPending
                  ? "text-yellow-500"
                  : ""
              }`
            }
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-base  no-underline transition ${
                isActive ? "font-bold text-red-500" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `text-base text-white no-underline transition ${
                isActive ? "font-bold text-red-500" : ""
              }`
            }
          >
            Sign up
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-base text-white no-underline transition ${
                isActive ? "font-bold text-red-500" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>

        {/* Icon */}
        <li>
          <span className="bg-white p-1 text-lg text-[tomato]">
            {user?.name?.charAt(0)}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;