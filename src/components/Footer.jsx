// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">PlumbEase</h2>
          <p>Your trusted plumbing solution for homes & businesses.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul>
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
          <p>Email: support@plumbease.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Location: Kendrapara, Odisha</p>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-6">
        © {new Date().getFullYear()} PlumbEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
