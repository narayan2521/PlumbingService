import React from "react";
import CommonBanner from "../components/CommonBanner";

const Sitemap = () => {
  return (
    <>
      <CommonBanner
        title="Sitemap"
        subtitle="Quick links to navigate our website"
        backgroundImage="sitemap.jpg"
        name="sitemap"
      />

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Website Sitemap</h2>
        <ul className="space-y-3 text-gray-700">
          <li><a href="/" className="hover:text-blue-600">Home</a></li>
          <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
          <li><a href="/services" className="hover:text-blue-600">Services</a></li>
          <li><a href="/services/leak-repair" className="hover:text-blue-600">Service Details</a></li>
          <li><a href="/contact" className="hover:text-blue-600">Contact Us</a></li>
          <li><a href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</a></li>
          <li><a href="/terms-of-service" className="hover:text-blue-600">Terms of Service</a></li>
          <li><a href="/sitemap" className="hover:text-blue-600">Sitemap</a></li>
        </ul>
      </section>
    </>
  );
};

export default Sitemap;
