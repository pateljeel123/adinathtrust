import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaLock, FaUserShield, FaFileContract } from "react-icons/fa";

const PrivacyPolicy = () => {
  // Brand colors from your website
  const primaryColor = "#757E54"; // Main green
  const secondaryColor = "#3A4D39"; // Dark green
  const accentColor = "#D1D5C7"; // Light beige
  const textColor = "#333333"; // Dark gray

  // Get current date for "Effective Date"
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 mt-23">
      {/* Header Section */}
      <div 
        className="py-16 px-4 text-center"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="max-w-4xl mx-auto">
          <FaShieldAlt className="mx-auto text-5xl mb-4" style={{ color: "white" }} />
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-white opacity-90">
            Your trust is our priority. Learn how we protect your information at Aadinath Yuva Charitable Trust.
          </p>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-green-700">
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Privacy Policy</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Policy Highlights */}
          <div 
            className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ backgroundColor: accentColor }}
          >
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <FaLock className="text-3xl mb-3" style={{ color: primaryColor }} />
              <h3 className="font-bold text-lg mb-2">Data Protection</h3>
              <p className="text-sm">We implement industry-standard security measures to protect your information</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <FaUserShield className="text-3xl mb-3" style={{ color: primaryColor }} />
              <h3 className="font-bold text-lg mb-2">Transparent Practices</h3>
              <p className="text-sm">Clear explanations of how we handle your information</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <FaFileContract className="text-3xl mb-3" style={{ color: primaryColor }} />
              <h3 className="font-bold text-lg mb-2">Your Control</h3>
              <p className="text-sm">You have rights over how your data is collected and used</p>
            </div>
          </div>

          {/* Detailed Policy */}
          <div className="p-8 md:p-12">
            <div className="prose max-w-none" style={{ color: textColor }}>
              <div className="mb-6 text-sm italic">
                Effective Date: {currentDate}
              </div>
              
              <p className="mb-8">
                At Aadinath Yuva Charitable Trust, accessible from <a href="https://adinathtrust.org" className="text-blue-600 hover:underline">https://adinathtrust.org</a>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our forms and services.
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 pb-2" style={{ color: secondaryColor, borderBottom: `2px solid ${accentColor}` }}>
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  We may collect the following types of personal information:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and other contact details when you fill out forms or donate.</li>
                  <li><strong>Donation Information:</strong> Amount, payment method, and transaction details (processed securely via third-party gateways).</li>
                  <li><strong>Usage Data:</strong> Information about your interaction with our website such as pages visited, browser type, and time spent.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 pb-2" style={{ color: secondaryColor, borderBottom: `2px solid ${accentColor}` }}>
                  2. How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use the collected data for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>To respond to your inquiries and requests.</li>
                  <li>To process and acknowledge donations.</li>
                  <li>To send updates about our activities, events, and impact (only if you opt-in).</li>
                  <li>To improve our website experience and service offerings.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 pb-2" style={{ color: secondaryColor, borderBottom: `2px solid ${accentColor}` }}>
                  3. Sharing Your Information
                </h2>
                <p className="mb-4">
                  We do not sell, trade, or rent your personal information. We may share your data with:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Trusted third-party service providers (e.g., payment processors, email service providers) strictly for operations related to our services.</li>
                  <li>Law enforcement or regulatory authorities if required by law.</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 pb-2" style={{ color: secondaryColor, borderBottom: `2px solid ${accentColor}` }}>
                  4. Data Security
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4" style={{ borderColor: primaryColor }}>
                  <p className="mb-3">
                    We adopt industry-standard practices to ensure your personal data is secure and protected against unauthorized access, alteration, or disclosure.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 pb-2" style={{ color: secondaryColor, borderBottom: `2px solid ${accentColor}` }}>
                  5. Cookies & Tracking
                </h2>
                <p className="mb-4">
                  Our website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 pb-2" style={{ color: secondaryColor, borderBottom: `2px solid ${accentColor}` }}>
                  6. Changes to This Policy
                </h2>
                <p className="mb-4">
                  We reserve the right to update this policy at any time. Any changes will be reflected on this page with an updated effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 pb-2" style={{ color: secondaryColor, borderBottom: `2px solid ${accentColor}` }}>
                  7. Contact Us
                </h2>
                <p className="mb-4">
                  If you have questions about this Privacy Policy, please contact:
                </p>
                <div className="bg-gray-50 p-5 rounded-lg inline-block">
                  <p className="font-semibold" style={{ color: primaryColor }}>Aadinath Yuva Charitable Trust</p>
                  <p>Email: <a href="mailto:adinathtrustsurat@gmail.com" className="text-blue-600 hover:underline">adinathtrustsurat@gmail.com</a></p>
                  <p>Website: <a href="https://adinathtrust.org" className="text-blue-600 hover:underline">https://adinathtrust.org</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;