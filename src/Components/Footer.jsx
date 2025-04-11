import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane
} from 'react-icons/fa';
import FooterImg from "../assets/FooterImg.jpeg"

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

  const socialMediaLinks = [
    {
      icon: <FaFacebook aria-hidden="true" />,
      color: '#3b5998',
      name: 'Facebook',
      url: 'https://facebook.com'
    },
    {
      icon: <FaTwitter aria-hidden="true" />,
      color: '#1DA1F2',
      name: 'Twitter',
      url: 'https://twitter.com'
    },
    {
      icon: <FaInstagram aria-hidden="true" />,
      color: '#E1306C',
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      icon: <FaLinkedin aria-hidden="true" />,
      color: '#0077B5',
      name: 'LinkedIn',
      url: 'https://linkedin.com'
    }
  ];

  const contactInfo = [
    {
      icon: <FaPhone aria-hidden="true" />,
      title: 'Phone Number',
      details: ['02612969600']
    },
    {
      icon: <FaEnvelope aria-hidden="true" />,
      title: 'Email Address',
      details: ['aadinathtrust@gmail.com']
    },
    {
      icon: <FaMapMarkerAlt aria-hidden="true" />,
      title: 'Our Location',
      details: ['Vesu', 'Kailashnagar']
    }
  ];

  return (
    <footer
      className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 rounded-t-3xl font-sans ms-10 me-10"
      style={{
        backgroundColor: '#A48B4B',
        color: '#5D5342',
        borderTop: '1px solid rgba(164, 139, 75, 0.2)'
      }}
      aria-label="Website footer"
    >
      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#A48B4B] to-transparent opacity-20"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto">
        {/* Form and Image Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          {/* Contact Form Section */}
          <section className="p-5 rounded-xl bg-white" aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="text-3xl font-bold font-sans mb-8 relative inline-block">
              <span className="relative z-10 font-normal" style={{ color: '#A48B4B' }}>
                DROP YOUR QUERY!
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#A48B4B] opacity-30 transform -translate-y-1" aria-hidden="true"></span>
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans" aria-label="Contact form">
              {/* Form fields remain the same as before */}
              {/* First Name */}
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
                  aria-required="true"
                  aria-labelledby="firstName-label"
                />
                <label
                  id="firstName-label"
                  htmlFor="firstName"
                  className="absolute left-4 top-4 px-1 bg-white text-[#5D5342] transition-all duration-300 pointer-events-none"
                  style={{ transform: formData.firstName ? 'translateY(-1.75rem) scale(0.9)' : 'none' }}
                >
                  First Name
                </label>
              </div>

              {/* Last Name */}
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
                  aria-required="true"
                  aria-labelledby="lastName-label"
                />
                <label
                  id="lastName-label"
                  htmlFor="lastName"
                  className="absolute left-4 top-4 px-1 bg-white text-[#5D5342] transition-all duration-300 pointer-events-none"
                  style={{ transform: formData.lastName ? 'translateY(-1.75rem) scale(0.9)' : 'none' }}
                >
                  Last Name
                </label>
              </div>

              {/* Email */}
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
                  aria-required="true"
                  aria-labelledby="email-label"
                />
                <label
                  id="email-label"
                  htmlFor="email"
                  className="absolute left-4 top-4 px-1 bg-white text-[#5D5342] transition-all duration-300 pointer-events-none"
                  style={{ transform: formData.email ? 'translateY(-1.75rem) scale(0.9)' : 'none' }}
                >
                  Email
                </label>
              </div>

              {/* Phone */}
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
                  aria-required="true"
                  aria-labelledby="phone-label"
                />
                <label
                  id="phone-label"
                  htmlFor="phone"
                  className="absolute left-4 top-4 px-1 bg-white text-[#5D5342] transition-all duration-100 pointer-events-none"
                  style={{ transform: formData.phone ? 'translateY(-1.75rem) scale(0.9)' : 'none' }}
                >
                  Phone Number
                </label>
              </div>

              {/* Message */}
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
                  aria-required="true"
                  aria-labelledby="message-label"
                ></textarea>
                <label
                  id="message-label"
                  htmlFor="message"
                  className="absolute left-4 top-4 px-1 bg-white text-[#5D5342] transition-all duration-300 pointer-events-none"
                  style={{ transform: formData.message ? 'translateY(-1.75rem) scale(0.9)' : 'none' }}
                >
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold font-sans transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A48B4B] font-normal"
                  style={{
                    backgroundColor: '#A48B4B',
                    color: '#F6F5EC',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  aria-label="Submit your query"
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
          </section>

          {/* Image Section - Same height as form */}
          <div className="hidden lg:block h-full">
            <div className="h-full rounded-xl overflow-hidden bg-[#E0DBC7] flex items-center justify-center p-1">
              {/* Replace with your actual image */}
              <img
                src={FooterImg}
                alt="Aadinath Trust"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Ultra Compact Contact Info Section */}
        <section aria-labelledby="contact-info-heading" className="w-full p-4 rounded-xl mb-6" style={{ backgroundColor: '#E0DBC7' }}>
          <div className="flex justify-between items-center mb-4"> {/* Horizontal layout for heading and social */}
            <h2 id="contact-info-heading" className="text-2xl font-bold relative inline-block font-sans"> {/* Reduced text size */}
              <span className="relative z-10 font-normal text-[#5D5342]">
                GET IN TOUCH
              </span>
            </h2>

            {/* Social Media moved to same row */}
            <div className="flex space-x-2">
              {socialMediaLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="p-1.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: social.color,
                    color: '#F6F5EC'
                  }}
                  aria-label={`Follow us on ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {React.cloneElement(social.icon, { size: 14 })} {/* Tiny icons */}
                </a>
              ))}
            </div>
          </div>

          {/* Super Compact Contact Info Row */}
          <div className="grid grid-cols-3 gap-2 ps-10"> {/* Minimal gap */}
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center"> {/* Horizontal layout */}
                <div
                  className="p-1.5 rounded-full mr-2" /* Tiny icon container */
                  style={{ backgroundColor: '#A48B4B', color: '#F6F5EC' }}
                  aria-hidden="true"
                >
                  {React.cloneElement(info.icon, { size: 20 })}
                </div>
                <div className="overflow-hidden">
                  <p className="font-medium text-md text-[#5D5342] truncate">{info.title}</p>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-md text-[#5D5342] truncate">{detail}</p> /* Tiny text */
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Copyright */}
        <div className="mt-16 pt-6 border-t border-[#E0DBC7] text-center">
          <p className="text-sm font-sans" style={{ color: 'white' }}>
            © {new Date().getFullYear()} Aadinath Trust. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;