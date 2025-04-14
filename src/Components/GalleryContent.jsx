import React from "react";

const pediatricImages = [
  {
    id: 10,
    url: "https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.21.07_b9d7f7d2.webp",
    title: "Pediatric Wing",
    description: "Child-friendly environment",
  },
  {
    id: 11,
    url: "https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.21.05_8eeec80c.webp",
    title: "Pediatric Wing",
    description: "Child-friendly environment",
  },
  {
    id: 12,
    url: "https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.20.57_3de235cf.webp",
    title: "Pediatric Wing",
    description: "Child-friendly environment",
  },
  {
    id: 13,
    url: "https://adinathtrust.org/assets/img/gallery/new%2031.8.24/WhatsApp%20Image%202024-08-31%20at%2017.20.56_75380886.webp",
    title: "Pediatric Wing",
    description: "Child-friendly environment",
  },
];

const GalleryContent = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-green-800 mb-2">Pediatric Wing</h2>
        <p className="text-lg text-gray-600">
          Child-Friendly Environment for Holistic Healing
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-gray-700 text-md leading-relaxed">
          At Aadinath Multi Speciality Hospital, our Pediatric Wing is specially
          designed to provide a safe, comforting, and cheerful atmosphere for
          children. From playful interiors to specialized child care facilities,
          we ensure your child receives medical care in an emotionally supportive
          environment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {pediatricImages.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={item.url}
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