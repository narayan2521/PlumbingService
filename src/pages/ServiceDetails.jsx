import React from "react";
import { useParams } from "react-router-dom";
import CommonBanner from "../components/CommonBanner";
import serviceData from "../content/ServiceDetails.json";

const ServiceDetails = () => {
  const  serviceId  = useParams(); // Get service ID from URL
  const service = serviceData[serviceId.id]; // Direct access instead of find()

  if (!service) {
    return (
      <div className="text-center py-10 text-red-500">
        Service not found!
      </div>
    );
  }

  return (
    <>
      <CommonBanner
        title={service.title}
        subtitle={service.subtitle}
        backgroundImage={service.backgroundImage}
      />

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <p className="text-gray-600 mb-6">{service.description}</p>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <p className="mt-6 text-lg font-bold text-indigo-600">
          Price: {service.price}
        </p>
      </section>
    </>
  );
};

export default ServiceDetails;
