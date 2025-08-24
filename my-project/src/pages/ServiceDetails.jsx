import React from "react";
import CommonBanner from "../components/CommonBanner";

const ServiceDetails = () => {
  return (
    <>
      <CommonBanner
        title="Tax Preparation Services"
        subtitle="Professional Tax Solutions for Individuals & Businesses"
        backgroundImage="https://images.unsplash.com/photo-1605902711622-cfb43c4437d3"
      />

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <p className="text-gray-600 mb-6">
          Our tax preparation services are designed to help you minimize your tax
          liability and ensure compliance with the latest regulations.
        </p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Individual Tax Filing</li>
          <li>Business Tax Filing</li>
          <li>GST and VAT Returns</li>
          <li>Tax Planning & Advisory</li>
        </ul>
      </section>
    </>
  );
};

export default ServiceDetails;
