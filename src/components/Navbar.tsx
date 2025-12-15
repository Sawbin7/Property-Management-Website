import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-semibold">MyRealEstate</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-gray-800 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/proporty">Properties</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          <li>
            <Link
              to="/register"
              className="rounded bg-black text-white px-4 py-2 hover:bg-gray-700 transition"
            >
              Register
            </Link>
          </li>

          <li>
            <Link
              to="/signin"
              className="rounded bg-black text-white px-4 py-2 hover:bg-gray-700 transition"
            >
              Sign In
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden cursor-pointer text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-gray-800 font-medium">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/proporty">Properties</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/contact">Contact</Link></p>

          <Link
            to="/register"
            className="block w-full rounded bg-black text-white px-4 py-2 text-center hover:bg-gray-700 transition"
          >
            Register
          </Link>

          <Link
            to="/signin"
            className="block w-full rounded bg-black text-white px-4 py-2 text-center hover:bg-gray-700 transition"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
