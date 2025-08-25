// // Footer.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-8">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        
//         {/* Company Info */}
//         <div>
//           <h2 className="text-xl font-bold text-white mb-4">PlumbEase</h2>
//           <p>Your trusted plumbing solution for homes & businesses.</p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
//           <ul>
//             <li><Link to={"/"} className="hover:text-blue-500">Home</Link></li>
//             <li><Link to={"/services"} className="hover:text-blue-500">Services</Link></li>
//             <li><Link to={"/about"} className="hover:text-blue-500">About</Link></li>
//             <li><Link to={"/contact"} className="hover:text-blue-500">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
//           <p>Email: support@plumbease.com</p>
//           <p>Phone: +91-9876543210</p>
//           <p>Location: Kendrapara, Odisha</p>
//         </div>
//       </div>

//       <div className="text-center text-gray-400 mt-6">
//         © {new Date().getFullYear()} PlumbEase. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 p-2 rounded-lg mr-3">
                <i className="fas fa-faucet text-white text-xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-white">PlumbEase</h2>
            </div>
            <p className="mb-4">Your trusted plumbing solution for homes & businesses in Kendrapara and surrounding areas.</p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-400 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li><Link to={"/"} className="hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i> Home</Link></li>
              <li><Link to={"/services"} className="hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i> Services</Link></li>
              <li><Link to={"/about"} className="hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i> About</Link></li>
              <li><Link to={"/contact"} className="hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-chevron-right text-xs mr-2 text-blue-500"></i> Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Our Services</h2>
            <ul className="space-y-3">
              <li><Link   to={`/services/leak-repair`}  className="hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-wrench text-xs mr-2 text-blue-500"></i> Leak Repair</Link></li>
              <li><Link   to={`/services/bathroom-renovation`}  className="hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-shower text-xs mr-2 text-blue-500"></i> Bathroom Plumbing</Link></li>
              <li><Link   to={`/services/tap-mixer-installation`}  className="hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-tint text-xs mr-2 text-blue-500"></i> Pipe Installation</Link></li>
              <li><Link   to={`/services/water-heater-service`}  className="hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-toolbox text-xs mr-2 text-blue-500"></i> Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center mr-3 mt-1">
                  <i className="fas fa-map-marker-alt text-white text-xs"></i>
                </div>
                <p>Hosur Road Electronic City, Bengaluru 560100</p>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center mr-3 mt-1">
                  <i className="fas fa-phone text-white text-xs"></i>
                </div>
                <div>
                  <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors">+91-9876543210</a>
                  <p className="text-sm text-gray-400">Mon-Sun, 8AM-10PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center mr-3 mt-1">
                  <i className="fas fa-envelope text-white text-xs"></i>
                </div>
                <a href="mailto:support@plumbease.com" className="hover:text-blue-400 transition-colors">support@plumbease.com</a>
              </div>

              {/* Emergency Button */}
              {/* <div className="mt-6">
                <a 
                  href="tel:+919876543210" 
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <i className="fas fa-phone-volume mr-2"></i>
                  Emergency Call
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get updates on offers, tips, and more</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} PlumbEase. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;