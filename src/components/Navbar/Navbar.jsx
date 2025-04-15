import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { authContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);

  return (
    <div className="navbar bg-black text-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden text-white"
          >
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className="text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="text-white">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="text-white ">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/book-online" className="text-white">
                Book Online
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="text-white">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <span className="text-2xl ml-6 font-bold">eXplore</span>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className="text-white text-lg font-bold">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="text-white text-lg font-bold">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className="text-white text-lg font-bold">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/book-online" className="text-white text-lg font-bold">
              Book Online
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="text-white text-lg font-bold">
              Profile
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-10 cursor-pointer rounded-full ring ring-white ring-offset-2 ring-offset-black transition-all duration-300 hover:scale-110">
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="object-cover"
                  onError={(e) => {
                    e.target.src = 'https://i.pravatar.cc/300'; // Fallback avatar if user photo fails
                  }}
                />
              </div>
            </div>
            <button
              onClick={handleLogout}
              className=" cursor-pointer bg-white text-black font-bold px-4 py-2 rounded-lg shadow-md 
                transform transition-all duration-300 hover:scale-105 hover:bg-gray-100
                hover:shadow-lg hover:brightness-110 active:scale-95"
            >
              LogOut
            </button>
          </div>
        ) : (
          <NavLink
            to={'/login'}
            className="cursor-pointer relative mr-4 px-5 py-3 font-bold text-white text-lg rounded-lg 
                    overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-orange-500
                    shadow-lg transition-all duration-500 ease-in-out transform 
                    hover:scale-110 hover:shadow-red-500/70 hover:brightness-125 
                    animate-bounce"
          >
            <span className="absolute inset-0 bg-red-600 opacity-25 blur-2xl rounded-lg"></span>
            <span className="relative z-10">Login</span>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
