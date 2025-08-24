import React from "react";

const Services = () => {
  const services = [
    {
      title: "Leak Repairs",
      description: "Fix all types of pipe and faucet leaks quickly and affordably.",
    },
    {
      title: "Drain Cleaning",
      description: "Clear clogged drains and ensure smooth water flow.",
    },
    {
      title: "Bathroom Installation",
      description: "Complete installation of bathroom fittings and fixtures.",
    },
    {
      title: "Water Heater Repair",
      description: "Expert repair and replacement of water heaters.",
    },
    {
      title: "Pipe Installation",
      description: "New pipe installations for residential and commercial spaces.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
          Our Plumbing Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
