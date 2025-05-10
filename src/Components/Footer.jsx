import React, { useState, useEffect } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaHeart,
  FaChevronUp,
  FaBell,
  FaArrowRight
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import FooterImg from "../assets/FooterImg.jpeg";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [emailSubscribe, setEmailSubscribe] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [showSubscribeSuccess, setShowSubscribeSuccess] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const navigate=useNavigate()

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
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailSubscribe) return;
    
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Subscribed email:', emailSubscribe);
      setEmailSubscribe('');
      setIsSubscribing(false);
      setShowSubscribeSuccess(true);
      setTimeout(() => setShowSubscribeSuccess(false), 3000);
    }, 1000);
  };

  const socialMediaLinks = [
    {
      icon: <FaFacebook aria-hidden="true" />,
      color: '#3b5998',
      hoverColor: '#4c70ba',
      name: 'Facebook',
      url: 'https://facebook.com'
    },
    {
      icon: <FaTwitter aria-hidden="true" />,
      color: '#1DA1F2',
      hoverColor: '#4db5f5',
      name: 'Twitter',
      url: 'https://twitter.com'
    },
    {
      icon: <FaInstagram aria-hidden="true" />,
      color: '#E1306C',
      hoverColor: '#e45f8f',
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      icon: <FaLinkedin aria-hidden="true" />,
      color: '#0077B5',
      hoverColor: '#0e94e0',
      name: 'LinkedIn',
      url: 'https://linkedin.com'
    }
  ];

  const contactInfo = [
    {
      icon: <FaPhone aria-hidden="true" />,
      title: 'Phone Number',
      details: ['+91 95746 96000']
    },
    {
      icon: <FaEnvelope aria-hidden="true" />,
      title: 'Email Address',
      details: ['aadinathtrust@gmail.com']
    },
    {
      icon: <FaMapMarkerAlt aria-hidden="true" />,
      title: 'Our Location',
      details: ['MAHAVIDEH DHAM 3rd Floor', 'Maharana Pratap', 'Road, Vesu - 395006']
    }
  ];

  const quickLinks = [
    {
      title: 'Medical Services',
      links: [
        { name: 'OPD', url: '#' },
        { name: 'LABORATORY', url: '#' },
        { name: 'X-RAY', url: '#' },
        { name: 'SONOGRAPHY', url: '#' },
        { name: 'OPHTHALMOLOGY', url: '#' },
        { name: 'DENTAL', url: '#' },
        { name: 'ENT', url: '#' },
        { name: 'AUDIOMETRY', url: '#' }
      ]
    },
    {
      title: 'Diagnostic Services',
      links: [
        { name: 'ECG', url: '#' },
        { name: '2D ECHO - TMT', url: '#' },
        { name: 'PHYSIOTHERAPY', url: '#' },
        { name: 'DERMATOLOGIST', url: '#' },
        { name: 'DAY CARE', url: '#' },
        { name: 'MEDICAL STORE', url: '#' },
        { name: 'AMBULANCE', url: '#' },
        { name: 'RENTAL EQUIPMENT', url: '#' }
      ]
    },
    {
      title: 'Wellness Services',
      links: [
        { name: 'AYURVEDIC', url: '#' },
        { name: 'PANCHKARMA', url: '#' },
        { name: 'ACUPRESSURE', url: '#' },
        { name: 'YOGA', url: '#' },
        { name: 'MEDICATED MASSAGE', url: '#' },
        { name: 'GARBH SANSKAR', url: '#' }
      ]
    }
  ];

  return (
    <footer
      className="relative overflow-hidden pt-10 pb-6 px-3 sm:pt-12 sm:px-4 lg:px-8 rounded-t-3xl font-sans mx-3 sm:mx-6 lg:mx-10"
      style={{
        backgroundColor: '#A48B4B',
        color: '#5D5342',
        backgroundImage: 'linear-gradient(to right, rgba(224, 219, 199, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(224, 219, 199, 0.07) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
      aria-label="Website footer"
      id='contact'>
      
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-6 text-white fill-current">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#E0DBC7] to-transparent opacity-20"
        aria-hidden="true"
      ></div>
      
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#E0DBC7] opacity-10 -translate-y-1/2 translate-x-1/2" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#E0DBC7] opacity-10 translate-y-1/2 -translate-x-1/2" aria-hidden="true"></div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed right-6 bottom-6 p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-[#A48B4B] hover:text-[#5D5342] focus:outline-none focus:ring-2 focus:ring-[#E0DBC7] z-50"
            aria-label="Scroll to top"
          >
            <FaChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Two-column layout with contact form and image+map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Contact Form */}
          <section 
            className="p-6 sm:p-8 rounded-2xl bg-white shadow-xl" 
            aria-labelledby="contact-form-heading"
            style={{
              backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(224, 219, 199, 0.03) 0%, rgba(255, 255, 255, 0) 90%)'
            }}
          >
            <h2 id="contact-form-heading" className="text-2xl sm:text-3xl font-bold font-sans mb-6 sm:mb-8 relative inline-block">
              <span className="relative z-10 font-semibold" style={{ color: '#A48B4B' }}>
                SEND US A MESSAGE
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#A48B4B] opacity-30 transform -translate-y-1" aria-hidden="true"></span>
            </h2>

            {showSuccess && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 text-green-700 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-3 p-1 rounded-full bg-green-100">
                    <FaHeart className="text-green-500" />
                  </div>
                  <p>Thank you for your query! We will get back to you soon.</p>
                </div>
              </div>
            )}

            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit} 
              className="grid grid-cols-1 gap-5 sm:gap-6 font-sans" 
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* First Name */}
                <motion.div 
                  className="relative group" 
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-3 sm:p-4 rounded-lg border-2 border-[#E0DBC7] bg-white focus:border-[#A48B4B] focus:outline-none focus:ring-2 focus:ring-[#A48B4B]/30 transition-all duration-300 group-hover:border-[#A48B4B]/50"
                    placeholder=" "
                    required
                    aria-required="true"
                    aria-labelledby="firstName-label"
                  />
                  <label
                    id="firstName-label"
                    htmlFor="firstName"
                    className="absolute left-3 sm:left-4 top-3 sm:top-4 px-1 bg-white text-[#5D5342] text-sm sm:text-base transition-all duration-300 pointer-events-none"
                    style={{ transform: formData.firstName ? 'translateY(-1.5rem) scale(0.9)' : 'none' }}
                  >
                    First Name
                  </label>
                </motion.div>

                {/* Last Name */}
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-3 sm:p-4 rounded-lg border-2 border-[#E0DBC7] bg-white focus:border-[#A48B4B] focus:outline-none focus:ring-2 focus:ring-[#A48B4B]/30 transition-all duration-300 group-hover:border-[#A48B4B]/50"
                    placeholder=" "
                    required
                    aria-required="true"
                    aria-labelledby="lastName-label"
                  />
                  <label
                    id="lastName-label"
                    htmlFor="lastName"
                    className="absolute left-3 sm:left-4 top-3 sm:top-4 px-1 bg-white text-[#5D5342] text-sm sm:text-base transition-all duration-300 pointer-events-none"
                    style={{ transform: formData.lastName ? 'translateY(-1.5rem) scale(0.9)' : 'none' }}
                  >
                    Last Name
                  </label>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Email */}
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 sm:p-4 rounded-lg border-2 border-[#E0DBC7] bg-white focus:border-[#A48B4B] focus:outline-none focus:ring-2 focus:ring-[#A48B4B]/30 transition-all duration-300 group-hover:border-[#A48B4B]/50"
                    placeholder=" "
                    required
                    aria-required="true"
                    aria-labelledby="email-label"
                  />
                  <label
                    id="email-label"
                    htmlFor="email"
                    className="absolute left-3 sm:left-4 top-3 sm:top-4 px-1 bg-white text-[#5D5342] text-sm sm:text-base transition-all duration-300 pointer-events-none"
                    style={{ transform: formData.email ? 'translateY(-1.5rem) scale(0.9)' : 'none' }}
                  >
                    Email
                  </label>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 sm:p-4 rounded-lg border-2 border-[#E0DBC7] bg-white focus:border-[#A48B4B] focus:outline-none focus:ring-2 focus:ring-[#A48B4B]/30 transition-all duration-300 group-hover:border-[#A48B4B]/50"
                    placeholder=" "
                    required
                    aria-required="true"
                    aria-labelledby="phone-label"
                  />
                  <label
                    id="phone-label"
                    htmlFor="phone"
                    className="absolute left-3 sm:left-4 top-3 sm:top-4 px-1 bg-white text-[#5D5342] text-sm sm:text-base transition-all duration-100 pointer-events-none"
                    style={{ transform: formData.phone ? 'translateY(-1.5rem) scale(0.9)' : 'none' }}
                  >
                    Phone Number
                  </label>
                </motion.div>
              </div>

              {/* Message */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-3 sm:p-4 rounded-lg border-2 border-[#E0DBC7] bg-white focus:border-[#A48B4B] focus:outline-none focus:ring-2 focus:ring-[#A48B4B]/30 transition-all duration-300 group-hover:border-[#A48B4B]/50"
                  placeholder=" "
                  required
                  aria-required="true"
                  aria-labelledby="message-label"
                ></textarea>
                <label
                  id="message-label"
                  htmlFor="message"
                  className="absolute left-3 sm:left-4 top-3 sm:top-4 px-1 bg-white text-[#5D5342] text-sm sm:text-base transition-all duration-300 pointer-events-none"
                  style={{ transform: formData.message ? 'translateY(-1.5rem) scale(0.9)' : 'none' }}
                >
                  Message
                </label>
              </motion.div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A48B4B] text-base group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(90deg, #A48B4B 0%, #BEA76B 100%)',
                    color: '#FFFFFF',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  aria-label="Submit your query"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer"></span>
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin mr-2"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </section>
          
          {/* Right Column - Image and Map Combined */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-64 md:h-72">
              <img 
                src={FooterImg} 
                alt="Contact Us" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Map */}
            {/* Map with Location Pin */}
<div className="rounded-2xl overflow-hidden shadow-xl flex-grow relative" style={{ minHeight: '300px' }}>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1696072541392!2d72.86848841493582!3d21.233893985889966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3c8b953361%3A0x9e2235b31e1106d4!2sMAHAVIDEH%20DHAM%2C%20Maharana%20Pratap%20Rd%2C%20Vesu%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1625647417283!5m2!1sen!2sin" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy"
    title="MAHAVIDEH DHAM Location"
    aria-label="Google Map showing MAHAVIDEH DHAM location"
  ></iframe>
  
  {/* Location Pin Button */}
  <motion.a
    href="https://www.google.com/maps/dir/?api=1&destination=MAHAVIDEH+DHAM,+Maharana+Pratap+Rd,+Vesu,+Surat,+Gujarat+395006"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg flex items-center justify-center"
    aria-label="Get directions to MAHAVIDEH DHAM"
    style={{ zIndex: 100 }}
  >
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#A48B4B"
        width="24"
        height="24"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75"></div>
    </div>
    <span className="ml-2 text-sm font-medium text-[#5D5342] hidden sm:inline">Get Directions</span>
  </motion.a>
</div>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#E0DBC7]/20 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-3">Subscribe to Our Newsletter</h3>
              <p className="text-white/80 mb-4">Stay updated with our latest news, events, and initiatives. Join our community today!</p>
              
              {showSubscribeSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 rounded-lg bg-green-50 text-green-700 flex items-center"
                >
                  <div className="mr-2 p-1 rounded-full bg-green-100">
                    <FaBell className="text-green-500" />
                  </div>
                  <p>Thank you for subscribing to our newsletter!</p>
                </motion.div>
              )}
            </div>
            
            <form onSubmit={handleSubscribe} className="w-full md:w-1/2 flex">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={emailSubscribe}
                  onChange={(e) => setEmailSubscribe(e.target.value)}
                  placeholder="Your email address"
                  className="w-full p-3 sm:p-4 rounded-l-lg border-2 border-[#E0DBC7] bg-white focus:border-[#A48B4B] focus:outline-none focus:ring-2 focus:ring-[#A48B4B]/30 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribing}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-r-lg font-medium transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A48B4B]"
                style={{
                  background: 'linear-gradient(90deg, #A48B4B 0%, #BEA76B 100%)',
                  color: '#FFFFFF',
                  opacity: isSubscribing ? 0.7 : 1
                }}
              >
                {isSubscribing ? (
                  <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                ) : (
                  <>
                    <span className="hidden sm:inline">Subscribe</span>
                    <FaArrowRight />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Contact info */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Aadinath Trust</h3>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="mt-1 text-[#E0DBC7]">
                  {info.icon}
                </div>
                <div className="text-white">
                  <p className="font-medium">{info.title}</p>
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              {socialMediaLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.15, backgroundColor: social.hoverColor }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all"
                  style={{
                    backgroundColor: social.color,
                    color: '#FFFFFF'
                  }}
                  aria-label={`Follow us on ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            {/* All Quick Links in one row - Departments, Services, Information */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Departments - Highlighted with special effects */}
              <div className="flex-1 bg-[#E0DBC7]/10 p-4 rounded-lg border-l-4 border-[#E0DBC7] shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-[#E0DBC7]/20 relative overflow-hidden group">
                {/* Decorative element */}
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#E0DBC7]/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-[#E0DBC7]/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out delay-100"></div>
                
                <h4 className="font-bold text-[#E0DBC7] mb-3 text-lg relative">
                  <span className="relative z-10 inline-block">
                    {quickLinks[0].title}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E0DBC7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                </h4>
                <ul className="space-y-2 relative z-10">
                  {quickLinks[0].links.map((link, i) => (
                    <li key={i} className="transform transition-all duration-200 hover:translate-x-2">
                      <a 
                        href={link.url} 
                        className="text-white hover:text-[#E0DBC7] transition-colors flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-[#E0DBC7] rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Services - Highlighted with special effects */}
              <div className="flex-1 bg-[#E0DBC7]/10 p-4 rounded-lg border-l-4 border-[#E0DBC7] shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-[#E0DBC7]/20 relative overflow-hidden group">
                {/* Decorative element */}
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#E0DBC7]/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-[#E0DBC7]/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out delay-100"></div>
                
                <h4 className="font-bold text-[#E0DBC7] mb-3 text-lg relative">
                  <span className="relative z-10 inline-block">
                    {quickLinks[1].title}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E0DBC7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                </h4>
                <ul className="space-y-2 relative z-10">
                  {quickLinks[1].links.map((link, i) => (
                    <li key={i} className="transform transition-all duration-200 hover:translate-x-2">
                      <a 
                        href={link.url} 
                        className="text-white hover:text-[#E0DBC7] transition-colors flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-[#E0DBC7] rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Information - Highlighted with special effects */}
              <div className="flex-1 bg-[#E0DBC7]/10 p-4 rounded-lg border-l-4 border-[#E0DBC7] shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-[#E0DBC7]/20 relative overflow-hidden group">
                {/* Decorative element */}
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#E0DBC7]/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                <div className="absolute -left-4 -bottom-4 w-12 h-12 bg-[#E0DBC7]/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out delay-100"></div>
                
                <h4 className="font-bold text-[#E0DBC7] mb-3 text-lg relative">
                  <span className="relative z-10 inline-block">
                    {quickLinks[2].title}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E0DBC7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                </h4>
                <ul className="space-y-2 relative z-10">
                  {quickLinks[2].links.map((link, i) => (
                    <li key={i} className="transform transition-all duration-200 hover:translate-x-2">
                      <a 
                        href={link.url} 
                        className="text-white hover:text-[#E0DBC7] transition-colors flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-[#E0DBC7] rounded-full mr-2 transform transition-all duration-300 group-hover:scale-150"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright with fancy divider */}
        <div className="mt-10 pt-8 relative border-t border-[#E0DBC7]/20">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#A48B4B] px-8 rounded-full shadow-md">
            <div className="w-24 h-1 bg-[#E0DBC7]/50 rounded-full"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <img 
                src="https://adinathtrust.org/assets/img/logos/Trust%20Logo.png" 
                alt="Aadinath Trust Logo" 
                className="h-10 w-10 mr-3 object-contain"
              />
              <p className="text-sm font-sans text-white mb-3 md:mb-0">
                © {new Date().getFullYear()} Aadinath Trust. <span className="hidden sm:inline">All rights reserved.</span>
              </p>
            </motion.div>
            
            <div className="flex flex-wrap items-center justify-center text-white text-sm gap-x-6 gap-y-2">
              <motion.a 
                whileHover={{ x: 3 }}
                onClick={()=>navigate('/privacy-policy')} 
                className="hover:text-[#E0DBC7] transition-colors duration-300 flex items-center gap-1"
              >
                <span>Privacy Policy</span>
                <span className="h-px w-0 group-hover:w-full transition-all duration-300 bg-[#E0DBC7]"></span>
              </motion.a>
              <motion.a 
                whileHover={{ x: 3 }}
                href="#" 
                className="hover:text-[#E0DBC7] transition-colors duration-300 flex items-center gap-1"
              >
                <span>Terms of Service</span>
                <span className="h-px w-0 group-hover:w-full transition-all duration-300 bg-[#E0DBC7]"></span>
              </motion.a>
              <motion.a 
                whileHover={{ x: 3 }}
                href="#" 
                className="hover:text-[#E0DBC7] transition-colors duration-300 flex items-center gap-1"
              >
                <span>Sitemap</span>
                <span className="h-px w-0 group-hover:w-full transition-all duration-300 bg-[#E0DBC7]"></span>
              </motion.a>
            </div>
          </div>
          
          <div className="text-center mt-6 text-xs text-white/60">
            <p>Designed with <FaHeart className="inline-block text-red-400 mx-1" size={12} /> for better healthcare access</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
