import React from "react";
import CommonBanner from "../components/CommonBanner";
import ServiceData from '../content/allService.json'
import { Link } from "react-router-dom";

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
  const bannerData={
  "banner": {
    "title": "Professional Plumbing Services You Can Trust",
    "subtitle": "Reliable, Affordable, and Available 24/7 for Your Plumbing Needs",
    "description": "From fixing leaks to full installations, our expert plumbers are here to provide fast and quality service. Call us now and get same-day assistance!",
   
      "ctaText": "Book a Service",
      "ctaLink": "/contact"
    ,
    "image": "/images/plumbing-banner.jpg"
  }
}


  return (
    <>
       {/* <section className="relative bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{bannerData.banner.title}</h1>
            <p className="text-lg text-gray-700 mb-6">{bannerData.banner.description}</p>
            <Link
              to={bannerData.banner.ctaLink}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {bannerData.banner.ctaText}
            </Link>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src={bannerData.banner.image}
              alt="Plumbing Banner"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </section> */}
        <section className="bg-gray-50 py-16 px-6 mt-5">
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
    </>

  );
};

export default Services;
