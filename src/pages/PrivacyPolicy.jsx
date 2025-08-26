import React from "react";
import CommonBanner from "../components/CommonBanner";

const PrivacyPolicy = () => {
  return (
    <>
      <CommonBanner
        title="Privacy Policy"
        subtitle="Your privacy matters to us"
        backgroundImage="privacy.avif"
       name="privacy"
      />

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy for PlumbEase</h2>
        <p className="text-gray-700 mb-4">
          At PlumbEase, we are committed to protecting your personal information. This privacy policy outlines how we collect, use, and safeguard your data when you use our services or website.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>We do not sell or share your personal information with third parties.</li>
          <li>Information collected is only used to provide plumbing services and customer support.</li>
          <li>We use cookies only to improve user experience and website functionality.</li>
          <li>All data is stored securely in accordance with applicable regulations.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          By using our website, you agree to this Privacy Policy.
        </p>
      </section>
    </>
  );
};

export default PrivacyPolicy;
