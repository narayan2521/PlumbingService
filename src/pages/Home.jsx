// import { useEffect, useState } from "react";
// import servicesData from "../content/services.json";
// import areasData from "../content/areas.json";
// import bannerImage from '../assets/banner3.jpg'

// const Home = () => {
//   const [services, setServices] = useState([]);
//   const [areas, setAreas] = useState([]);

//   useEffect(() => {
//     setServices(servicesData.slice(0, 6)); // Show top 6 services
//     setAreas(areasData); // All areas
//   }, []);

//   const images = import.meta.glob('../assets/services/*', { eager: true });

//  const getImageByName = (fileName) => {
//   return images[`../assets/services/${fileName}`]?.default || null;
// };


//   return (
//     <div className="w-full">
//       {/* ✅ Hero Section */}
//      {/* <section className="bg-blue-600 text-white py-16 px-4">
//   <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    
//     <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
//       <h1 className="text-4xl md:text-5xl font-bold mb-4">
//         Fast, Reliable Plumbing in Bengaluru
//       </h1>
//       <p className="text-lg md:text-xl mb-6">
//         6+ Years Experience | 60–90 min Arrival | 8 AM – 10 PM | Call or WhatsApp Now
//       </p>
//       <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
//         <a
//           href="tel:+918249692563"
//           className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200"
//         >
//           Call Now
//         </a>
//         <a
//           href="https://wa.me/918249692563"
//           className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-600"
//         >
//           WhatsApp
//         </a>
//       </div>
//     </div>
 
//     <div className="md:w-1/2">
//       <img src={bannerImage} alt="Plumber banner" className="w-full rounded-lg shadow-lg" />
//     </div>
//   </div>
// </section> */}
// <section className="relative w-full h-[500px]">
//   {/* Background Image */}
//   <img
//     src={bannerImage}
//     alt="Plumber banner"
//     className="w-full h-full object-cover"
//   />

//   {/* Overlay with Text */}
//   <div className="absolute inset-0   bg-opacity-60 flex items-center">
//     <div className="max-w-3xl px-10 text-white">
//       <h1 className="text-4xl md:text-5xl font-bold mb-4">
//         Fast, Reliable Plumbing in Bengaluru
//       </h1>
//       <p className="text-lg md:text-xl mb-6">
//         6+ Years Experience | 60–90 min Arrival | 8 AM – 10 PM | Call or WhatsApp Now
//       </p>
//       <div className="flex flex-col sm:flex-row gap-4">
//         <a
//           href="tel:+918249692563"
//           className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200"
//         >
//           Call Now
//         </a>
//         <a
//           href="https://wa.me/918249692563"
//           className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-600"
//         >
//           WhatsApp
//         </a>
//       </div>
//     </div>
//   </div>
// </section>



//       {/* ✅ Services Section */}
//       <section className="py-12 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {services.map((service) => (
//             <div key={service.id} className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
//               <img src={getImageByName(service.image)} alt={service.name} className="w-full h-40 object-cover rounded-md mb-4" />
//               <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
//               <p className="text-gray-600 text-sm mb-3">{service.short}</p>
//               <a href={`/services/${service.slug}`} className="text-blue-600 font-medium hover:underline">
//                 Learn More →
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ✅ Areas Covered */}
//       <section className="bg-gray-100 py-12 px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">Areas We Serve</h2>
//         <div className="flex flex-wrap justify-center gap-3">
//           {areas.map((area) => (
//             <span key={area.slug} className="bg-white shadow px-4 py-2 rounded-lg text-gray-700 font-medium">
//               {area.name}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* ✅ Reviews Section (Placeholder for now) */}
//       <section className="py-12 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white shadow rounded-lg p-6">
//             <p className="text-gray-600 italic mb-4">"Fixed my kitchen leak in 45 minutes. Very professional!"</p>
//             <h4 className="font-semibold">Rohit P. - HSR Layout</h4>
//           </div>
//           <div className="bg-white shadow rounded-lg p-6">
//             <p className="text-gray-600 italic mb-4">"Affordable and quick service for my bathroom fittings."</p>
//             <h4 className="font-semibold">Anita S. - Whitefield</h4>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import servicesData from "../content/services.json";
import areasData from "../content/areas.json";
import bannerImage from '../assets/banner3.jpg';
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

import CountUp from "react-countup";



// Import all service images directly
// import serviceImage1 from '../assets/services/service1.jpg';
// import serviceImage2 from '../assets/services/service2.jpg';
// import serviceImage3 from '../assets/services/service3.jpg';
// import serviceImage4 from '../assets/services/service4.jpg';
// import serviceImage5 from '../assets/services/service5.jpg';
// import serviceImage6 from '../assets/services/service6.jpg';

// Service Card Component with proper animation handling
const ServiceCard = ({ service, image }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // This ensures animation triggers every time element comes into view
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  return (
    <motion.div 
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
      whileHover={{ y: -5 }}
    >
      <Link  to={`/services/${service.slug}`} >
       <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={service.name} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{service.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{service.short}</p>
        <Link 
          to={`/services/${service.slug}`} 
          className="inline-flex items-center text-blue-600 font-medium group-hover:underline"
        >
          Learn More
          <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
        </Link>
      </div>
      </Link>
     
    </motion.div>
  );
};

const Home = () => {
  const [services, setServices] = useState([]);
  const [areas, setAreas] = useState([]);
  const [imageMap, setImageMap] = useState({});

  useEffect(() => {
    setServices(servicesData.slice(0, 6));
    setAreas(areasData);
    
    // Create a mapping of service image names to imported images
    // const images = {
    //   'service1.jpg': serviceImage1,
    //   'service2.jpg': serviceImage2,
    //   'service3.jpg': serviceImage3,
    //   'service4.jpg': serviceImage4,
    //   'service5.jpg': serviceImage5,
    //   'service6.jpg': serviceImage6,
    // };
    
    setImageMap(images);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
    const images = import.meta.glob('../assets/services/*', { eager: true });

 const getImageByName = (fileName) => {
  return images[`../assets/services/${fileName}`]?.default || null;
};
 const stats = [
    { number: 6, suffix: "+", label: "Years Experience" },
    { number: 2000, suffix: "+", label: "Happy Customers" },
    { number: 24, suffix: "/7", label: "Emergency Service" },
    { number: 90, suffix: "%", label: "Repeat Customers" },
  ];


  return (
    <>
      <SEO
        title="Plumbease | Reliable Plumbing Services | 24/7 Emergency Plumbers Near You"
        description="Expert plumbing services for homes and businesses. We offer 24/7 emergency repairs, leak detection, pipe installation, and drain cleaning. Call us today!"
      />
     <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen max-h-[700px]">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src={bannerImage}
          alt="Professional plumber at work"
          className="w-full h-full object-cover"
        />
        
        <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="absolute inset-0 z-20 flex items-center justify-center"
    >
      <div className="max-w-3xl px-6 text-center text-white">
        {/* Heading */}
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fast, Reliable Plumbing in Bengaluru
        </motion.h1>
        
        {/* Subtext */}
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          6+ Years Experience | 60–90 min Arrival | 8 AM – 10 PM
        </motion.p>
        
        {/* Call Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="tel:+918249692563"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 flex items-center justify-center gap-2"
          >
            <i className="fas fa-phone"></i>
            Call Now
          </motion.a>
          
          <motion.a
            href="https://wa.me/918249692563"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-green-600 flex items-center justify-center gap-2"
          >
            <i className="fab fa-whatsapp"></i>
            WhatsApp
          </motion.a>
        </motion.div>

        {/* Counters */}
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <div className="text-center">
            <h3 className="text-4xl font-bold">
              <CountUp end={6} duration={2} />+
            </h3>
            <p className="text-gray-200">Years Experience</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold">
              <CountUp end={1200} duration={2} />
            </h3>
            <p className="text-gray-200">Jobs Completed</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold">
              <CountUp end={950} duration={2} />
            </h3>
            <p className="text-gray-200">Happy Customers</p>
          </div>
        </div>
      </div>
    </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="animate-bounce">
            <i className="fas fa-chevron-down text-2xl"></i>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2}
                  suffix={stat.suffix}
                />
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional plumbing solutions for residential and commercial properties in Bengaluru
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              image={getImageByName(service.image)} 
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link 
            to={"/services" }
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Services
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our professional plumbing services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "fa-clock", title: "Quick Response", desc: "We arrive within 60-90 minutes for emergency calls" },
              { icon: "fa-tag", title: "Fair Pricing", desc: "Transparent pricing with no hidden charges" },
              { icon: "fa-award", title: "Expert Plumbers", desc: "Licensed and experienced professionals" },
              { icon: "fa-shield-alt", title: "Quality Guarantee", desc: "We stand behind our work with a satisfaction guarantee" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${item.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Providing professional plumbing services across Bengaluru
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {areas.map((area) => (
            <motion.span 
              key={area.slug} 
              className="bg-white shadow-md px-5 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {area.name}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                text: "Fixed my kitchen leak in 45 minutes. Very professional!", 
                author: "Rohit P.", 
                location: "HSR Layout",
                rating: 5
              },
              { 
                text: "Affordable and quick service for my bathroom fittings. Will definitely call again!", 
                author: "Anita S.", 
                location: "Whitefield",
                rating: 5
              },
              { 
                text: "Emergency service at midnight for a burst pipe. Saved us from major water damage!", 
                author: "Vikram M.", 
                location: "Indiranagar",
                rating: 5
              }
            ].map((review, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                <div>
                  <h4 className="font-semibold">{review.author}</h4>
                  <p className="text-gray-500 text-sm">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-black"
       style={{
        backgroundColor:"#74b1daba"
       }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Need a Plumber in Bengaluru?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact us now for fast, reliable, and professional plumbing services
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="tel:+918249692563"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <i className="fas fa-phone"></i>
              Call Now
            </motion.a>
            
            <motion.a
              href="https://wa.me/918249692563"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-green-600 flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
    </>
   
  );
};

export default Home;