import React from "react";
import image1 from "../infrastrure_images/0O3A1600.jpg";
import image2 from "../infrastrure_images/0O3A1603.jpg";
import image3 from "../infrastrure_images/0O3A1606.jpg";
import image4 from "../infrastrure_images/0O3A1609.jpg";
import image5 from "../infrastrure_images/0O3A1611.jpg";
import image6 from "../infrastrure_images/0O3A1699.jpg";
import image7 from "../infrastrure_images/0O3A1717.jpg";
import image8 from "../infrastrure_images/0O3A1779.jpg";
import image9 from "../infrastrure_images/0O3A1783.jpg";
import image10 from "../infrastrure_images/0O3A1837.jpg";
import image11 from "../infrastrure_images/0O3A1844.jpg";

const infrastructureImages = [
  {
    id: 1,
    imageSrc: image1,
    title: "Infrastructure",
    description: "Modern hospital facilities",
  },
  {
    id: 2,
    imageSrc: image2,
    title: "Infrastructure",
    description: "State-of-the-art equipment",
  },
  {
    id: 3,
    imageSrc: image3,
    title: "Infrastructure",
    description: "Advanced medical technology",
  },
  {
    id: 4,
    imageSrc: image4,
    title: "Infrastructure",
    description: "Comfortable patient areas",
  },
  {
    id: 5,
    imageSrc: image5,
    title: "Infrastructure",
    description: "Modern medical facilities",
  },
  {
    id: 6,
    imageSrc: image6,
    title: "Infrastructure",
    description: "Well-equipped treatment rooms",
  },
  {
    id: 7,
    imageSrc: image7,
    title: "Infrastructure",
    description: "Advanced healthcare infrastructure",
  },
  {
    id: 8,
    imageSrc: image8,
    title: "Infrastructure",
    description: "Quality healthcare environment",
  },
  {
    id: 9,
    imageSrc: image9,
    title: "Infrastructure",
    description: "Modern medical infrastructure",
  },
  {
    id: 10,
    imageSrc: image10,
    title: "Infrastructure",
    description: "State-of-the-art hospital facilities",
  },
  {
    id: 11,
    imageSrc: image11,
    title: "Infrastructure",
    description: "Advanced healthcare facilities",
  },
];

const GalleryContent = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-green-800 mb-2">Hospital Infrastructure</h2>
        <p className="text-lg text-gray-600">
          Modern Facilities for Quality Healthcare
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-gray-700 text-md leading-relaxed">
          At Aadinath Multi Speciality Hospital, we have state-of-the-art infrastructure
          designed to provide the highest quality of healthcare services. Our modern facilities
          are equipped with the latest medical technology to ensure effective diagnosis and treatment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {infrastructureImages.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryContent;