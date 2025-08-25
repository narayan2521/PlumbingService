// import React from "react";
//  import '../styles/commonbanner.css'

// const CommonBanner = ({ title, subtitle, backgroundImage }) => {
//       const images = import.meta.glob('../assets/services/*', { eager: true });

//  const getImageByName = (fileName) => {
//   return images[`../assets/services/${fileName}`]?.default || null;
// };
//   return (
//     <section
//       className="relative w-full h-64 flex items-center justify-center text-center common_banner_height text-white"
//       style={{
//         backgroundImage: `url(${getImageByName(backgroundImage)})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center", 
//     backgroundPosition: "center",
//     height: "400px",
//     filter: "brightness(50%)",
//       }}
//     >
//       <div className="absolute inset-0  bg-opacity-50"></div>
//       <div className="relative z-10 content_section">
//         <h1 className="text-4xl font-bold">{title}</h1>
//         {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
//       </div>
//     </section>
//   );
// };

// export default CommonBanner;
import React from "react";
import "../styles/commonbanner.css";

const CommonBanner = ({ title, subtitle, backgroundImage }) => {
  // Dynamically import images from assets/services folder
  const images = import.meta.glob("../assets/services/*", { eager: true });

  const getImageByName = (fileName) => {
    return images[`../assets/services/${fileName}`]?.default || null;
  };

  return (
    <div className="Services_Banner_Section relative w-full">
      {/* Banner Image */}
      <div className="banner_image  ">
        <img
          src={getImageByName(backgroundImage)}
          alt="banner_image"
          className="w-full h-[400px] object-cover brightness-50"
        />
      </div>

      {/* Overlay Content */}
      <div className="content_section absolute  w-full   flex flex-col items-center justify-center text-white px-4">
        <h1 className="fw-bold text-center text-4xl">{title}</h1>
        {subtitle && (
          <p className="fw-bold text-center text-lg mt-2">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default CommonBanner;
