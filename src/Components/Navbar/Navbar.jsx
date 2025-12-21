import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => setTheme(checked ? "dark" : "light");

  const handleLogout = () => {
    signOutUser()
      .then(() => console.log("User signed out"))
      .catch((err) => console.log("Logout error:", err.message));
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "bg-blue-300" : "")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allJobs" className={({ isActive }) => (isActive ? "bg-blue-300" : "")}>
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/addJob" className={({ isActive }) => (isActive ? "bg-blue-300" : "")}>
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink to="/myJob" className={({ isActive }) => (isActive ? "bg-blue-300" : "")}>
          My Added Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myAcceptedTasks"
          className={({ isActive }) => (isActive ? "bg-blue-300" : "")}
        >
          My Tasks
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}

            {!user ? (
              <div className="mt-2 flex flex-col gap-2 px-2">
                <Link
                  to="/auth/login"
                  className="bg-blue-300 px-3 py-1 text-white rounded-md text-center"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="bg-blue-500 px-3 py-1 text-white rounded-md text-center"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="mt-2 flex flex-col items-center px-2">
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/Swh1pkqf/islamic-cartoon-profile-picture-10957076.png"
                  }
                  alt="user"
                  className="w-12 h-12 rounded-full border mb-1"
                />
                <p className="font-semibold text-center">{user.displayName || user.email}</p>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-outline w-full mt-2"
                >
                  Logout
                </button>
              </div>
            )}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost normal-case text-xl md:text-2xl font-bold">
          Freelance<span className="text-blue-800">MarketPlace</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        {/* Theme Toggle */}
        <input
          type="checkbox"
          className="toggle"
          defaultChecked={theme === "dark"}
          onChange={(e) => handleTheme(e.target.checked)}
        />

        {user ? (
          <div className="relative group hidden lg:flex">
            <img
              src={
                user.photoURL ||
                "https://i.ibb.co/Swh1pkqf/islamic-cartoon-profile-picture-10957076.png"
              }
              alt="user"
              className="w-10 h-10 rounded-full border cursor-pointer"
            />
            <div className="absolute right-0 mt-2 w-44 bg-base-100 shadow-lg rounded-xl p-4
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <p className="text-center font-semibold">{user.displayName || user.email}</p>
              <button onClick={handleLogout} className="btn btn-sm btn-outline w-full mt-3">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="hidden lg:flex gap-2">
            <Link
              to="/auth/login"
              className="bg-blue-300 px-3 py-1 text-white rounded-md text-center"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="bg-blue-500 px-3 py-1 text-white rounded-md text-center"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
