import React from "react";
import CommonBanner from "../components/CommonBanner";

const TermsOfService = () => {
  return (
    <>
      <CommonBanner
        title="Terms of Service"
        subtitle="Please read our terms carefully"
        backgroundImage="Terms.avif"
        name="Terms"
      />

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Terms of Service for PlumbEase</h2>
        <p className="text-gray-700 mb-4">
          By using PlumbEase services, you agree to the following terms and conditions:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Services are provided based on availability and scheduling.</li>
          <li>All service charges are outlined clearly before work begins.</li>
          <li>PlumbEase is not responsible for damages caused by pre-existing conditions.</li>
          <li>Clients must provide accurate contact information to ensure service delivery.</li>
          <li>Emergency services may have additional charges depending on time and location.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          By booking services with PlumbEase, you acknowledge that you have read and accepted these terms.
        </p>
      </section>
    </>
  );
};

export default TermsOfService;
