// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
       <Link to={'/'}> <h1 className="text-2xl font-bold text-blue-600">PlumbEase</h1></Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><Link to={'/'} className="hover:text-blue-600">Home</Link></li>
            <li><Link to={"/services"} className="hover:text-blue-600">Services</Link></li>
            <li><Link to={"/about"} className="hover:text-blue-600">About</Link></li>
            <li><Link to={"/contact"} className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </nav>

        {/* CTA Button */}
        <a
          href="#booking"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Book Service
        </a>
      </div>
    </header>
  );
};

export default Header;
