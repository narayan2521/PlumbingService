import React from "react";
import CommonBanner from "../components/CommonBanner";

const About = () => {
  return (
    <>
      <CommonBanner
        title="About Us"
        subtitle="Your Trusted Financial & Tax Advisors"
        backgroundImage="https://images.unsplash.com/photo-1554224154-22dec7ec8818"
      />

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-700 mb-6">
          At SR FinTax Advisors, we specialize in providing personalized
          financial and tax services to individuals and businesses. With years
          of experience, our mission is to simplify your financial journey.
        </p>

        <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
        <p className="text-gray-600">
          To be the most trusted partner in financial and tax advisory services,
          ensuring growth and compliance for our clients.
        </p>
      </section>
    </>
  );
};

export default About;
