import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Logo / Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-2">MyRealEstate</h1>
          <p className="text-gray-400">
            Building your future, one property at a time.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-xl mb-3">Quick Links</h2>
          <Link to="/" className="hover:text-gray-300 mb-1">
            Home
          </Link>
          <Link to="/properties" className="hover:text-gray-300 mb-1">
            Properties
          </Link>
          <Link to="/about" className="hover:text-gray-300 mb-1">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col items-center ">
          <h2 className="font-semibold text-xl mb-3">Contact</h2>
          <p>Email: info@myrealestate.com</p>
          <p>Phone: +977 98XXXXXXXX</p>
          <p>Kathmandu, Nepal</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} MyRealEstate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
