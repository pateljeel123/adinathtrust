import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your query! We will get back to you soon.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <footer className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 rounded-t-3xl" 
            style={{ 
              backgroundColor: '#F6F5EC',
              color: '#5D5342',
              borderTop: '1px solid rgba(164, 139, 75, 0.2)'
            }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A48B4B] to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-8 relative inline-block">
              <span className="relative z-10" style={{ color: '#A48B4B' }}>DROP YOUR QUERY!</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#A48B4B] opacity-30 transform -translate-y-1"></span>
            </h3>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border-2 border-[#E0DBC7] bg-white focus:border-[#A48B4B] focus:outline-none focus:ring-2 focus:ring-[#A48B4B]/30 transition-all duration-300"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="firstName" 
                  className="absolute left-4 top-4 px-1 bg-white text-[#5D5342] transition-all duration-300 pointer-events-none"
                  style={{ transform: formData.firstName ? 'translateY(-1.75rem) scale(0.9)' : 'none' }}
                >
                  First Name
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border-2 border-[#E0DBC7] bg-white focus:border-[#A48B4B] focus:outline-none focus:ring-2 focus:ring-[#A48B4B]/30 transition-all duration-300"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="lastName" 
                  className="absolute left-4 top-4 px-1 bg-white text-[#5D5342] transition-all duration-300 pointer-events-none"
                  style={{ transform: formData.lastName ? 'translateY(-1.75rem) scale(0.9)' : 'none' }}
                >
                  Last Name
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border-2 border-[#E0DBC7] bg-white focus:border-[#A48B4B] focus:outline-none focus:ring-2 focus:ring-[#A48B4B]/30 transition-all duration-300"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-4 top-4 px-1 bg-white text-[#5D5342] transition-all duration-300 pointer-events-none"
                  style={{ transform: formData.email ? 'translateY(-1.75rem) scale(0.9)' : 'none' }}
                >
                  Email
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border-2 border-[#E0DBC7] bg-white focus:border-[#A48B4B] focus:outline-none focus:ring-2 focus:ring-[#A48B4B]/30 transition-all duration-300"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="phone" 
                  className="absolute left-4 top-4 px-1 bg-white text-[#5D5342] transition-all duration-300 pointer-events-none"
                  style={{ transform: formData.phone ? 'translateY(-1.75rem) scale(0.9)' : 'none' }}
                >
                  Phone Number
                </label>
              </div>
              
              <div className="md:col-span-2 relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-4 rounded-lg border-2 border-[#E0DBC7] bg-white focus:border-[#A48B4B] focus:outline-none focus:ring-2 focus:ring-[#A48B4B]/30 transition-all duration-300"
                  placeholder=" "
                  required
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-4 top-4 px-1 bg-white text-[#5D5342] transition-all duration-300 pointer-events-none"
                  style={{ transform: formData.message ? 'translateY(-1.75rem) scale(0.9)' : 'none' }}
                >
                  Message
                </label>
              </div>
              
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    backgroundColor: '#A48B4B',
                    color: '#F6F5EC',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <span>Submit Query</span>
                      <FaPaperPlane className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-8 relative inline-block">
              <span className="relative z-10" style={{ color: '#A48B4B' }}>GET IN TOUCH WITH US!</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#A48B4B] opacity-30 transform -translate-y-1"></span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="p-3 rounded-full mr-4 transition-all duration-300" style={{ backgroundColor: '#E0DBC7' }}>
                  <FaPhone className="text-lg" style={{ color: '#A48B4B' }} />
                </div>
                <div>
                  <p className="font-medium">Phone Number</p>
                  <p className="text-lg">02612969600</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="p-3 rounded-full mr-4 transition-all duration-300" style={{ backgroundColor: '#E0DBC7' }}>
                  <FaEnvelope className="text-lg" style={{ color: '#A48B4B' }} />
                </div>
                <div>
                  <p className="font-medium">Email Address</p>
                  <p className="text-lg">aadinathtrust@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="p-3 rounded-full mr-4 transition-all duration-300" style={{ backgroundColor: '#E0DBC7' }}>
                  <FaMapMarkerAlt className="text-lg" style={{ color: '#A48B4B' }} />
                </div>
                <div>
                  <p className="font-medium">Our Location</p>
                  <p className="text-lg">Vesu</p>
                  <p className="text-lg">Kailashnagar</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6 relative inline-block">
                <span className="relative z-10" style={{ color: '#A48B4B' }}>FOLLOW US</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#A48B4B] opacity-30 transform -translate-y-1"></span>
              </h4>
              
              <div className="flex space-x-4">
                {[
                  { icon: <FaFacebook />, color: '#3b5998' },
                  { icon: <FaTwitter />, color: '#1DA1F2' },
                  { icon: <FaInstagram />, color: '#E1306C' },
                  { icon: <FaLinkedin />, color: '#0077B5' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="p-3 rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-md"
                    style={{ 
                      backgroundColor: social.color,
                      color: '#F6F5EC'
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-[#E0DBC7] text-center">
          <p className="text-sm" style={{ color: '#A48B4B' }}>
            © {new Date().getFullYear()} Aadinath Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
