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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Contact Form Section */}
          <section className="lg:col-span-2 p-5 rounded-xl" aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className="text-3xl font-bold font-sans mb-8 relative inline-block">
              <span className="relative z-10 font-normal text-white">
                DROP YOUR QUERY!
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#A48B4B] opacity-30 transform -translate-y-1" aria-hidden="true"></span>
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans" aria-label="Contact form">
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
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold font-sans transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A48B4B] font-normal border border-white"
                  style={{
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

          {/* Contact Info */}
          <section aria-labelledby="contact-info-heading" className="p-5 font-sans bg-white rounded-xl">
            <h2 id="contact-info-heading" className="text-3xl font-bold mb-8 relative inline-block font-sans">
              <span className="relative z-10 font-normal" style={{ color: '#A48B4B' }}>
                GET IN TOUCH WITH US!
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#A48B4B] opacity-30 transform -translate-y-1" aria-hidden="true"></span>
            </h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start group">
                  <div
                    className="p-2 rounded-full mr-4 transition-all duration-300"
                    style={{ backgroundColor: '#E0DBC7' }}
                    aria-hidden="true"
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium font-sans">{info.title}</p>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-lg font-sans">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-12" aria-labelledby="social-media-heading">
              <h3 id="social-media-heading" className="text-xl font-bold mb-6 relative inline-block font-sans">
                <span className="relative z-10" style={{ color: '#A48B4B' }}>
                  FOLLOW US
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#A48B4B] opacity-30 transform -translate-y-1" aria-hidden="true"></span>
              </h3>

              <div className="flex space-x-4">
                {socialMediaLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="p-3 rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#F6F5EC]"
                    style={{
                      backgroundColor: social.color,
                      color: '#F6F5EC'
                    }}
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>

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