import React, { useState, useEffect } from 'react';
import { Check, X, Star, Zap, Shield, Users, Eye, Plane, Sun, ArrowRight, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ShaheenFooter from '../components/Footer';
import WhyChooseUs from '../components/WSU';
import { SEOHead, StructuredData, BreadcrumbSchema } from '../SEO/SEOHead.jsx'; // ✅ Import SEO tools

const Pricing = () => {
  const navigate=useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const breadcrumbItems = [
    { name: "Home", url: "https://solareye.info" },
    { name: "Pricing", url: "https://solareye.info/pricing" }
  ];

  const plans = [
    {
      id: 'basic',
      name: 'Basic Inspection',
      tagline: 'Perfect for small installations',
      price: 299,
      originalPrice: 399,
      period: 'per inspection',
      popular: false,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Up to 1 MW',
        'Basic AI anomaly detection',
        'Thermal imaging analysis',
        'Digital inspection report',
        'Email support',
        'Standard turnaround (48h)'
      ],
      notIncluded: [
        'Predictive maintenance',
        'Priority support',
        'Custom reporting'
      ]
    },
    {
      id: 'professional',
      name: 'Professional Suite',
      tagline: 'Most popular for commercial use',
      price: 599,
      originalPrice: 799,
      period: 'per inspection',
      popular: true,
      color: 'from-orange-500 to-red-500',
      features: [
        'Up to 5 MW',
        'Advanced AI diagnostics',
        '⁠Predictive maintenance (Optional)',
        'Thermal + RGB imaging',
        'Comprehensive analysis report',
        'Performance optimization tips',
        '⁠Priority support',
        'Fast turnaround (24h)',
        '⁠Custom reporting and analysis'
      ],
      notIncluded: [
        'Unlimited inspections',
        'On-site repairs'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solution',
      tagline: 'Complete Utility Installations',
      price: 1299,
      originalPrice: 1599,
      period: 'per inspection',
      popular: false,
      color: 'from-purple-500 to-indigo-600',
      features: [
        'Starting from 100 MW  ( for larger scale contact us for custom report)',
        'Predictive maintenance (Optional)',
        'Priority support',
        'Custom reporting and analysis',
        'Multi-spectrum imaging analysis',
        'Dedicated account manager',
        'Same-day turnaround',
        'Training & onboarding',
        'Emergency response service'
      ],
      notIncluded: []
    }
  ];
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  

  
  // Animation item variants
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 120
      }
    }
  };

  return (
    
    <div className="bg-white min-h-screen text-white">
      <NavBar/>

        <SEOHead
        title="SolarEye Pricing Plans - We Solve It Before You See It!"
        description="Choose from our flexible pricing plans for solar inspections, AI diagnostics, and predictive maintenance. From small installations to large solar farms."
        keywords="solar inspection pricing, solar panel maintenance cost, drone inspection plans, AI diagnostics solar"
        canonicalUrl="https://solareye.info/pricing"
      />

      {/* ✅ JSON-LD Structured Data */}
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Solar Inspection Pricing",
          "description": "Pricing plans for professional solar inspections using AI and drone technology.",
          "brand": {
            "@type": "Organization",
            "name": "SolarEye",
            "url": "https://solareye.info"
          },
          "offers": plans.map(plan => ({
            "@type": "Offer",
            "name": plan.name,
            "price": plan.price,
            "priceCurrency": "USD",
            "url": `https://solareye.info/pricing#${plan.id}`,
            "availability": "https://schema.org/InStock"
          }))
        }}
      />

      {/* ✅ Breadcrumb Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
  <motion.div 
        className="relative bg-gradient-to-br from-[#272D3F] via-[#232838] to-[#226F9E] flex items-center justify-center overflow-hidden  px-12 pb-20 pt-32 mb-12 text-center "
  >
    <motion.div 
      variants={containerVariants}
      className="relative z-10 text-white text-center px-6"
    >
      <div className="flex items-center justify-center mb-8 space-x-4">
        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-bold mb-2"
        >
          Choose Your  
          <span className="text-[#185B8D]"> SolarEye </span>
          Plan
        </motion.h1>
      </div>

      <motion.p
        variants={itemVariants}
        className="text-xl max-w-2xl mx-auto mb-10 text-gray-200"
      >
        Flexible pricing tailored to your solar infrastructure needs — whether you're just getting started or scaling up. Explore our plans and find the one that fits you best.
      </motion.p>
    </motion.div>
  </motion.div>

     
     

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center mb-16 text-gray-800">
          <h3 className="text-4xl font-bold mb-4">Choose Your Solar Solution</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          
‏From small residential and large commercial up to utility installations, we have the perfect plan for your need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-[#1C1F2D] to-[#248DC0] border-2 border-[#248DC0] shadow-2xl ' 
                  : 'bg-[#272D3F] backdrop-blur-sm border border-white/10'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                  <p className="text-gray-400 mb-6">{plan.tagline}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period.split(' ')[1]}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="line-through mr-2">${plan.originalPrice}</span>
                      <span className="text-green-400 font-semibold">
                        Save ${plan.originalPrice - plan.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{plan.period}</p>
                  </div>

                  <button
onClick={() => navigate('/contactus')}
                    className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-400 hover:bg-yellow-400 text-white shadow-lg'
                        : 'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="inline-block ml-2 h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-lg mb-4 flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    What's included:
                  </h5>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h5 className="font-semibold text-lg mb-4 mt-6 flex items-center">
                        <X className="h-5 w-5 text-red-400 mr-2" />
                        Not included:
                      </h5>
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <X className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    <WhyChooseUs/>

      

      <ShaheenFooter/>
    </div>
  );
};

export default Pricing;
