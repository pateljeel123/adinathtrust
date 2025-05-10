import React from "react";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaLock, FaUserShield, FaFileContract } from "react-icons/fa";

const PrivacyPolicy = () => {
  // Brand colors from your website
  const primaryColor = "#757E54"; // Main green
  const secondaryColor = "#3A4D39"; // Dark green
  const accentColor = "#D1D5C7"; // Light beige
  const textColor = "#333333"; // Dark gray

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
            Your trust is our priority. Learn how we protect your information at Aadinath Healthcare.
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
              <p className="text-sm">We use industry-standard encryption to safeguard your information</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <FaUserShield className="text-3xl mb-3" style={{ color: primaryColor }} />
              <h3 className="font-bold text-lg mb-2">No Unnecessary Data</h3>
              <p className="text-sm">We only collect what's essential for your healthcare needs</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <FaFileContract className="text-3xl mb-3" style={{ color: primaryColor }} />
              <h3 className="font-bold text-lg mb-2">Transparent Policies</h3>
              <p className="text-sm">Clear explanations of how we handle your information</p>
            </div>
          </div>

          {/* Detailed Policy */}
          <div className="p-8 md:p-12">
            <div className="prose max-w-none" style={{ color: textColor }}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 pb-2" style={{ color: secondaryColor, borderBottom: `2px solid ${accentColor}` }}>
                  Information We Collect
                </h2>
                <p className="mb-4">
                  At Aadinath Healthcare, we collect only the essential information needed to provide you with quality healthcare services. This may include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Personal identification details (name, date of birth, contact information)</li>
                  <li>Medical history and current health information</li>
                  <li>Insurance and payment information</li>
                  <li>Website usage data through secure analytics</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 pb-2" style={{ color: secondaryColor, borderBottom: `2px solid ${accentColor}` }}>
                  How We Use Your Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Healthcare Services</h3>
                    <p>To provide personalized medical care and treatment plans</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Appointment Management</h3>
                    <p>To schedule and remind you about upcoming appointments</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Billing & Insurance</h3>
                    <p>To process payments and communicate with insurers</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>Service Improvement</h3>
                    <p>To enhance our facilities and patient experience</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 pb-2" style={{ color: secondaryColor, borderBottom: `2px solid ${accentColor}` }}>
                  Data Security Measures
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4" style={{ borderColor: primaryColor }}>
                  <h3 className="font-bold text-lg mb-3" style={{ color: primaryColor }}>Our Security Commitment</h3>
                  <p className="mb-3">
                    We implement robust security measures including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>256-bit SSL encryption for all data transmissions</li>
                    <li>Regular security audits and vulnerability testing</li>
                    <li>Strict access controls with multi-factor authentication</li>
                    <li>Compliance with HIPAA and other healthcare data protection standards</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 pb-2" style={{ color: secondaryColor, borderBottom: `2px solid ${accentColor}` }}>
                  Your Rights
                </h2>
                <div className="grid gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-green-600">✓</div>
                    <div>
                      <h3 className="font-semibold">Right to Access</h3>
                      <p>Request copies of your personal health records</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-green-600">✓</div>
                    <div>
                      <h3 className="font-semibold">Right to Correction</h3>
                      <p>Update or correct inaccurate information</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-green-600">✓</div>
                    <div>
                      <h3 className="font-semibold">Right to Restriction</h3>
                      <p>Limit how we use your data in certain circumstances</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 pb-2" style={{ color: secondaryColor, borderBottom: `2px solid ${accentColor}` }}>
                  Contact Our Privacy Officer
                </h2>
                <p className="mb-4">
                  For any questions about this policy or your personal data:
                </p>
                <div className="bg-gray-50 p-5 rounded-lg inline-block">
                  <p className="font-semibold" style={{ color: primaryColor }}>Aadinath Healthcare Privacy Team</p>
                  <p>Email: <a href="mailto:aadinathtrust@gmail.com" className="text-blue-600 hover:underline">privacy@aadinathhealthcare.com</a></p>
                  <p>Phone: +91 95746 96000</p>
                  <p>Address: MAHAVIDEH DHAM 3rd Floor', 'Maharana Pratap', 'Road, Vesu - 395006</p>
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