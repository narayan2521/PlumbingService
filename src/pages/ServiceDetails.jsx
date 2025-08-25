import React from "react";
import { useParams } from "react-router-dom";
import CommonBanner from "../components/CommonBanner";
import serviceData from "../content/ServiceDetails.json";

const ServiceDetails = () => {
  const { id } = useParams(); // Get service ID from URL
  const service = serviceData[id]; // Direct access instead of find()

  if (!service) {
    return (
      <div className="text-center py-10 text-red-500 text-lg md:text-xl">
        Service not found!
      </div>
    );
  }

  return (
    <>
      {/* Banner */}
      <CommonBanner
        title={service.title}
        subtitle={service.subtitle}
        backgroundImage={service.backgroundImage}
      />

      {/* Service Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-center md:text-left">
          What We Offer
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 text-center md:text-left">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm sm:text-base md:text-lg">
          {service.features.map((feature, index) => (
            <li key={index} className="leading-snug">
              {feature}
            </li>
          ))}
        </ul>

        {/* Price */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-bold text-indigo-600 text-center md:text-left">
          Price: {service.price}
        </p>
      </section>
    </>
  );
};

export default ServiceDetails;
