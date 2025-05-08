import React, { useRef } from 'react';
import harsh from '../assets/harsh.webp';
import cow from '../assets/bafelow.webp';
import healthcare from '../assets/healthcare.webp';
import modi from '../assets/modi.webp';
import content1 from '../assets/content1.png'
import content2 from '../assets/content2.png'
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren"
    }
  }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.1, 0.8, 0.2, 1]
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Scroll-based animation for dots
const dotVariants = {
  hidden: { scale: 0, opacity: 0, y: -50 },
  visible: { 
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const OurStory = () => {
  // Create refs for each section to track scroll position
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const sections = [
    {
      id: 1,
      image: modi,
      title: "OUR BEGINNING",
      subtitle: "The Foundation of Compassion",
      content: `Established in 1994, Shree Aadinath Yuva Charitable Trust was born from a bold vision of youth-driven transformation in Surat. What began as a group of passionate young volunteers has grown into a powerful force for change—uplifting the underprivileged through healthcare, education, animal welfare, and social empowerment. Today, its legacy continues to drive meaningful impact across Gujarat.`,
      year: "1994",
      icon: "🌱"
    },
    {
      id: 2,
      image: harsh,
      title: "FORMALIZATION",
      subtitle: "Expanding Our Reach",
      content: `Shree Aadinath Yuva Charitable Trust proudly expands its healthcare services with the installation of a state-of-the-art digital X-Ray machine, ensuring advanced diagnostic support for the underserved community.`,
      year: "2009",
      icon: "🏥"
    },
    {
      id: 3,
      image: healthcare,
      title: "GROWTH & EXPANSION",
      subtitle: "Community Health Initiatives",
      content: `One of many health initiatives, our organized blood donation drives encourage community participation to save lives and support medical needs. We've expanded our services to include mobile health clinics, vaccination drives, and health awareness programs reaching thousands annually.`,
      year: "2010-2020",
      icon: "📈"
    },
    {
      id: 4,
      image: cow,
      title: "FUTURE VISION",
      subtitle: "Sustainable Compassion",
      content: `To build, operate and sustain charitable institutions in the field of Healthcare, Education and Social services while providing Highest quality of services without any discrimination to needy and marginalised classes of society. 
`,
      year: "Future",
      icon: "🔮"
    },
    {
      id: 5,
      image: content1,
      title: "Aadinath School",
      subtitle: "Excellence in Education & Character Building",
      content: `Aadinath School, managed by Shree Aadinath Yuva Charitable Trust, Surat, stands as a beacon of modern education. With a world-class infrastructure, lush green campus, and a commitment to holistic development, the school nurtures future leaders with knowledge, discipline, and values.`,
      year: "Established 2010",
      icon: "🏫"
    },
    {
      id: 6,
      image: content2,
      title: "Aadinath Multi Speciality Hospital",
      subtitle: "Seva • Sahayog • Samarpan",
      content: `Aadinath Multi Speciality Hospital offers advanced medical care with compassion and dedication. Featuring state-of-the-art facilities, expert doctors, and a patient-first approach, the hospital is a trusted name in healthcare excellence.`,
      year: "Inauguration Year (to be confirmed, can add later)",
      icon: "🏥"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br  py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{backgroundColor:'#F6F5EC'}} id='story'>
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-amber-700 mb-4 relative inline-block">
            <span className="relative z-10">
              Our Story
              <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A timeline of compassion, growth, and community impact
          </p>
        </motion.div>

        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical timeline line with gradient - animated with scroll */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 transform -translate-x-1/2 hidden md:block"
            style={{
              scaleY: scrollYProgress,
              originY: 0
            }}
          />
          
          {/* Timeline progress indicator */}
          <motion.div 
            className="absolute left-1/2 top-0 w-3 h-3 bg-amber-500 rounded-full transform -translate-x-1/2 hidden md:block z-10"
            style={{
              top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              boxShadow: "0 0 10px rgba(217, 119, 6, 0.7)"
            }}
          />

          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={sectionVariants}
              className={`relative mb-24 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [Math.max(0, (index - 0.5) / sections.length), index / sections.length, (index + 0.5) / sections.length, Math.min(1, (index + 1) / sections.length)],
                  [0.3, 1, 1, 0.3]
                ),
                y: useTransform(
                  scrollYProgress,
                  [Math.max(0, (index - 0.5) / sections.length), index / sections.length, (index + 0.5) / sections.length, Math.min(1, (index + 1) / sections.length)],
                  [50, 0, 0, 50]
                )
              }}
            >
              {/* Image Section with enhanced hover effects */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div 
                  variants={imageVariants}
                  className="relative overflow-hidden rounded-2xl shadow-2xl h-80 w-full group"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <span className="text-3xl mr-3">{section.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold">{section.title}</h3>
                        <p className="text-amber-200 font-medium">{section.subtitle}</p>
                      </div>
                    </div>
                    <div className="inline-block px-3 py-1 bg-amber-600/90 rounded-full text-sm font-semibold">
                      {section.year}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Section with enhanced styling */}
              <div className={`w-full md:w-1/2 mt-8 md:mt-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg relative border-l-4 border-amber-400"
                >
                  {/* Timeline dot - visible only on md+ screens */}
                  <motion.div 
                    className="hidden md:block absolute top-1/2 -translate-y-1/2 -ml-14 left-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg flex items-center justify-center overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [0, index / sections.length, (index + 0.5) / sections.length, 1],
                        [0.3, 1, 1, 0.3]
                      ),
                      scale: useTransform(
                        scrollYProgress,
                        [0, index / sections.length, (index + 0.5) / sections.length, 1],
                        [0.6, 1.2, 1.2, 0.6]
                      )
                    }}
                  >
                    {/* Pulse animation for active dot */}
                    <motion.div
                      className="absolute inset-0 bg-amber-300 rounded-full"
                      style={{
                        opacity: useTransform(
                          scrollYProgress,
                          [Math.max(0, (index - 0.2) / sections.length), index / sections.length, (index + 0.2) / sections.length],
                          [0, 0.5, 0]
                        )
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="w-3 h-3 rounded-full bg-white"
                    />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-amber-700 mb-3">{section.title}</h3>
                  <p className="text-gray-600 mb-4 font-medium">{section.subtitle}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                  
                  {index === sections.length - 1 && (
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut"
                      }}
                      className="text-amber-500 text-4xl text-center mt-6"
                    >
                      ✨
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Mobile timeline dot */}
              <motion.div 
                className="md:hidden absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow flex items-center justify-center"
                initial={{ scale: 0.6, opacity: 0.3 }}
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0, index / sections.length, (index + 0.5) / sections.length, 1],
                    [0.3, 1, 1, 0.3]
                  ),
                  scale: useTransform(
                    scrollYProgress,
                    [0, index / sections.length, (index + 0.5) / sections.length, 1],
                    [0.6, 1, 1, 0.6]
                  )
                }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-white"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;