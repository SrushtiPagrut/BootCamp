import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 shadow-lg transition duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Bootcamp</div>
        <ul className="flex space-x-12 mr-25">
        <li>
            <NavLink
              to="/allbootcamps"
              className="hover:text-gray-300 transition duration-300 font-bold"
            >
              All BootCamps
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className="hover:text-gray-300 transition duration-300 font-bold"
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className="hover:text-gray-300 transition duration-300 font-bold"
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
