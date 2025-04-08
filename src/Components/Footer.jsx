import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your query! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <footer className="text-black p-8 rounded-b-3xl bg-gradient-to-br from-blue-100 to-indigo-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-6">DROP YOUR QUERY!</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/20 border focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/20 border focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/20 border focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/20 border focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-3 rounded-lg bg-white/20 border focus:outline-none focus:ring-2 focus:ring-white"
                required
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="border text-blue-600 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Submit Query
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-bold mb-6">GET IN TOUCH WITH US!</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <FaPhone className="mt-1 mr-3 " />
              <span>02612969600</span>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="mt-1 mr-3 " />
              <span>aadinathtrust@gmail.com</span>
            </div>
            <div className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-3 " />
              <div>
                <p>Vesu</p>
                <p>Kailashnagar</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-8">
            <h4 className="text-xl font-bold mb-4">SOCIAL MEDIA LINK</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;