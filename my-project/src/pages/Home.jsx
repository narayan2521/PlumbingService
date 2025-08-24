import { useEffect, useState } from "react";
import servicesData from "../content/services.json";
import areasData from "../content/areas.json";
import bannerImage from '../assets/banner3.jpg'

const Home = () => {
  const [services, setServices] = useState([]);
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    setServices(servicesData.slice(0, 6)); // Show top 6 services
    setAreas(areasData); // All areas
  }, []);

  const images = import.meta.glob('../assets/services/*', { eager: true });

 const getImageByName = (fileName) => {
  return images[`../assets/services/${fileName}`]?.default || null;
};


  return (
    <div className="w-full">
      {/* ✅ Hero Section */}
     {/* <section className="bg-blue-600 text-white py-16 px-4">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    
    <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Fast, Reliable Plumbing in Bengaluru
      </h1>
      <p className="text-lg md:text-xl mb-6">
        6+ Years Experience | 60–90 min Arrival | 8 AM – 10 PM | Call or WhatsApp Now
      </p>
      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
        <a
          href="tel:+918249692563"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/918249692563"
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-600"
        >
          WhatsApp
        </a>
      </div>
    </div>
 
    <div className="md:w-1/2">
      <img src={bannerImage} alt="Plumber banner" className="w-full rounded-lg shadow-lg" />
    </div>
  </div>
</section> */}
<section className="relative w-full h-[500px]">
  {/* Background Image */}
  <img
    src={bannerImage}
    alt="Plumber banner"
    className="w-full h-full object-cover"
  />

  {/* Overlay with Text */}
  <div className="absolute inset-0   bg-opacity-60 flex items-center">
    <div className="max-w-3xl px-10 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Fast, Reliable Plumbing in Bengaluru
      </h1>
      <p className="text-lg md:text-xl mb-6">
        6+ Years Experience | 60–90 min Arrival | 8 AM – 10 PM | Call or WhatsApp Now
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="tel:+918249692563"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/918249692563"
          className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-600"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>



      {/* ✅ Services Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
              <img src={getImageByName(service.image)} alt={service.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{service.short}</p>
              <a href={`/services/${service.slug}`} className="text-blue-600 font-medium hover:underline">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Areas Covered */}
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Areas We Serve</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span key={area.slug} className="bg-white shadow px-4 py-2 rounded-lg text-gray-700 font-medium">
              {area.name}
            </span>
          ))}
        </div>
      </section>

      {/* ✅ Reviews Section (Placeholder for now) */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-600 italic mb-4">"Fixed my kitchen leak in 45 minutes. Very professional!"</p>
            <h4 className="font-semibold">Rohit P. - HSR Layout</h4>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-600 italic mb-4">"Affordable and quick service for my bathroom fittings."</p>
            <h4 className="font-semibold">Anita S. - Whitefield</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
