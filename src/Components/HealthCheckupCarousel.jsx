import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HealthCheckupCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const packages = [
    {
      name: "BASIC PACKAGE",
      price: "Rs. 1000/-",
      color: "text-[#757E54]",
      tests: [
        "Complete Blood Count",
        "Blood Sugar (Fasting)",
        "Urine Analysis",
        "Chest X-Ray",
        "Doctor Consultation"
      ]
    },
    {
      name: "CARDIAC PACKAGE",
      price: "Rs. 3000/-",
      color: "text-[#757E54]",
      tests: [
        "Complete Blood Count",
        "Lipid Profile",
        "ECG",
        "2D Echo",
        "Cardiac Enzyme Test",
        "Cardiologist Consultation"
      ]
    },
    {
      name: "SILVER PACKAGE",
      price: "Rs. 2500/-",
      color: "text-[#757E54]",
      tests: [
        "Complete Blood Count",
        "Liver Function Test",
        "Kidney Function Test",
        "Thyroid Profile",
        "Blood Sugar (Fasting & PP)",
        "Doctor Consultation"
      ]
    },
    {
      name: "GOLD PACKAGE",
      price: "Rs. 5000/-",
      color: "text-[#757E54]",
      tests: [
        "All tests in Silver Package",
        "Vitamin Levels (B12, D3)",
        "Bone Density Test",
        "Ultrasound Abdomen",
        "Senior Specialist Consultation"
      ]
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#757E54]">Health Checkup Plan</h1>
      
      <div className="relative">
        <div className="flex overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out w-full"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {packages.map((pkg, index) => (
              <div key={index} className="min-w-full flex justify-center px-2">
                <div className="w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-[#757E54] text-white text-center py-4">
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                  </div>
                  <div className="p-6 text-center border-b">
                    <span className={`text-4xl font-bold ${pkg.color}`}>{pkg.price}</span>
                    <button className="block mx-auto mt-4 text-[#757E54] hover:underline">
                      View More
                    </button>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2 text-[#757E54]">
                      {pkg.tests.map((test, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-2 h-2 bg-[#757E54] rounded-full mr-2"></div>
                          {test}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="flex justify-center space-x-2 mt-6">
        {packages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              activeSlide === index ? "bg-[#757E54]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
