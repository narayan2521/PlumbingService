// // Header.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//        <Link to={'/'}> <h1 className="text-2xl font-bold text-blue-600">PlumbEase</h1></Link>

//         {/* Navigation */}
//         <nav>
//           <ul className="flex space-x-6 text-gray-700 font-medium">
//             <li><Link to={'/'} className="hover:text-blue-600">Home</Link></li>
//             <li><Link to={"/services"} className="hover:text-blue-600">Services</Link></li>
//             <li><Link to={"/about"} className="hover:text-blue-600">About</Link></li>
//             <li><Link to={"/contact"} className="hover:text-blue-600">Contact</Link></li>
//           </ul>
//         </nav>

//         {/* CTA Button */}
//         <Link
//           to={"/contact"}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//         >
//           Book Service
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneNumber = "+1234567890";
  const whatsappNumber = "1234567890";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-white md:bg-transparent md:backdrop-blur-sm py-4  text-white "
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <div className="bg-blue-600 p-2 rounded-lg mr-3">
              <i className="fas fa-faucet text-white text-xl"></i>
            </div>
            <h1 className="text-2xl font-bold text-blue-600">PlumbEase</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className={` ${ isScrolled ? "text-gray-700":"text-white"} text-gray-700 font-medium hover:text-blue-600 transition-colors`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={` ${ isScrolled ? "text-gray-700":"text-white"} text-gray-700 font-medium hover:text-blue-600 transition-colors`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={` ${ isScrolled ? "text-gray-700":"text-white"} text-gray-700 font-medium hover:text-blue-600 transition-colors`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={` ${ isScrolled ? "text-gray-700":"text-white"} text-gray-700 font-medium hover:text-blue-600 transition-colors`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Section */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* WhatsApp Icon */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-2.5 rounded-full hover:bg-green-600 transition-colors"
            aria-label="Contact via WhatsApp"
          >
            <i className="fab fa-whatsapp text-lg"></i>
          </a>

          {/* Call Icon */}
          <a
            href={`tel:${phoneNumber}`}
            className="bg-blue-500 text-white p-2.5 rounded-full hover:bg-blue-600 transition-colors"
            aria-label="Call us"
          >
            <i className="fas fa-phone text-lg"></i>
          </a>

          {/* Book Service Button */}
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Book Service
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 font-medium hover:text-blue-600 py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 font-medium hover:text-blue-600 py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="text-gray-700 font-medium hover:text-blue-600 py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 font-medium hover:text-blue-600 py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-gray-200">
              {/* WhatsApp Icon */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                aria-label="Contact via WhatsApp"
              >
                <i className="fab fa-whatsapp text-lg"></i>
              </a>

              {/* Call Icon */}
              <a
                href={`tel:${phoneNumber}`}
                className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Call us"
              >
                <i className="fas fa-phone text-lg"></i>
              </a>

              {/* Book Service Button */}
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;