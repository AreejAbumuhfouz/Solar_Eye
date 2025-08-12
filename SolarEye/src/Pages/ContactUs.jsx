
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEOHead, StructuredData, BreadcrumbSchema } from '../SEO/SEOHead.jsx'; // ✅ Import SEO tools

import { 
  Mail, 
  User, 
  MessageCircle, 
  Send, 
  MapPin, 
  Phone, 
  Clock, 
  Satellite 
} from 'lucide-react';
import NavBar from '../components/NavBar';
import ShaheenFooter from '../components/Footer';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const breadcrumbItems = [
    { name: "Home", url: "https://solareye.info" },
    { name: "Contact Us", url: "https://solareye.info/contact" }
  ];
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  // const apiUrl = process.env.REACT_APP_API_URL;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

    try {
      const response = await fetch(`https://solar-eye.onrender.com/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
        <SEOHead
        title="Contact SolarEye - Get a Free Consultation"
        description="Get in touch with SolarEye for expert solar inspection, maintenance, and AI diagnostics. Request a free consultation today."
        keywords="contact solar inspection, solar maintenance help, drone solar contact, AI solar diagnostics"
        canonicalUrl="https://solareye.info/contact"
      />

      {/* ✅ JSON-LD Structured Data */}
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "SolarEye",
            "url": "https://solareye.info",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-234-567-8900",
              "contactType": "Customer Service",
              "areaServed": "Worldwide",
              "availableLanguage": ["English"]
            }
          }
        }}
      />

      {/* ✅ Breadcrumb Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
              
            <div className="mx-auto">
      
            
            
              <motion.div 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        className="bg-gradient-to-br from-[#272D3F] via-[#232838] to-[#226F9E] text-white px-12 pb-20 pt-32 mb-12 text-center"
      >
        {/* Heading and Icon */}
        <div className="flex items-center justify-center mb-8 space-x-4">
          <h1 className="text-4xl font-bold mb-4">Get in Touch with <span className="text-[#226F9E]">SolarEye</span>
          </h1>
        </div>
        
      
        {/* Subheading */}
        <p className="text-xl max-w-2xl mx-auto text-gray-200">
        Have questions about our AI drone services for solar panel optimization? Our team is ready to help you maximize your solar investment.        </p>
      </motion.div>
      
      <div className="flex-grow bg-white py-20">
        <div className="container mx-auto px-4">
          

          <div className="w-full  max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 ">
            {/* Left Column - Contact Information */}
            <div className="bg-gradient-to-br from-[#1c202c] to-[#1a2a3d] text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden rounded-2xl shadow-lg">
              {/* Background elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#2485B6]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#4ACEF4]/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8">Contact SolarEye</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#2485B6]/20 p-3 rounded-full mt-1">
                      <MapPin className="w-6 h-6 text-[#4ACEF4]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Offices</h3>
                      <p className="text-gray-300 mt-1">
                        <span className="font-medium">Head Office:</span> Dubai
                      </p>
                      <p className="text-gray-300">
                        <span className="font-medium">Marketing Offices:</span> Germany, Qatar, and Jordan
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#2485B6]/20 p-3 rounded-full mt-1">
                      <Mail className="w-6 h-6 text-[#4ACEF4]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-gray-300 mt-1">
                        info@SolarEye.info
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#2485B6]/20 p-3 rounded-full mt-1">
                      <Phone className="w-6 h-6 text-[#4ACEF4]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-300 mt-1">
                        +971 50 123 4567
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#2485B6]/20 p-3 rounded-full mt-1">
                      <Clock className="w-6 h-6 text-[#4ACEF4]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-gray-300 mt-1">
                        Monday - Friday: 9 AM - 5 PM<br />
                        Saturday: 10 AM - 2 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 border-t border-[#2485B6]/30 pt-6">
                  <p className="text-gray-300 font-medium">
                    SolarEye Technologies - Innovative Solar Drone Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="p-8 md:p-12 bg-white rounded-2xl shadow-lg border border-2 border-[#1c202c]">
              <h2 className="text-2xl font-semibold text-[#2485B6] mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2485B6] transition-colors" size={18} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2485B6] focus:border-transparent transition-all"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2485B6] transition-colors" size={18} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2485B6] focus:border-transparent transition-all"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject</label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2485B6] transition-colors" size={18} />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2485B6] focus:border-transparent transition-all"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 text-gray-400 group-focus-within:text-[#2485B6] transition-colors" size={18} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2485B6] focus:border-transparent transition-all"
                      placeholder="Tell us how we can help with your solar infrastructure"
                      required
                    />
                  </div>
                </div>

                {status && (
                  <div 
                    className={`py-3 px-4 rounded-lg text-center ${
                      status.startsWith('Your message') 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {status}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#2485B6] to-[#4ACEF4] text-white font-medium rounded-lg hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2485B6] focus:ring-offset-2 flex items-center justify-center transition-all duration-300 transform hover:translate-y-[-2px]"
                  disabled={loading}
                >
                  <Send className="mr-2" size={18} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Map or Additional Information Section */}
          
        </div>
      </div>
      </div>
    </motion.div>
      <ShaheenFooter />
    </div>
  );
};

export default ContactUs;
