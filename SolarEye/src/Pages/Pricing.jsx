import React, { useState, useEffect } from 'react';
import { Check, X, Star, Zap, Shield, Users, Eye, Plane, Sun, ArrowRight, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ShaheenFooter from '../components/Footer';
import WhyChooseUs from '../components/WSU';
const Pricing = () => {
  const navigate=useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
        'Up to 50 solar panels',
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
        'Up to 200 solar panels',
        'Advanced AI diagnostics',
        'Thermal + RGB imaging',
        'Comprehensive analysis report',
        'Performance optimization tips',
        'Priority email & phone support',
        'Fast turnaround (24h)',
        'Historical data tracking',
        'Custom dashboards'
      ],
      notIncluded: [
        'Unlimited inspections',
        'On-site repairs'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solution',
      tagline: 'Complete solar farm management',
      price: 1299,
      originalPrice: 1599,
      period: 'per inspection',
      popular: false,
      color: 'from-purple-500 to-indigo-600',
      features: [
        'Unlimited solar panels',
        'AI-powered predictive maintenance',
        'Multi-spectrum imaging analysis',
        'Real-time monitoring integration',
        'Custom reporting & analytics',
        'Dedicated account manager',
        'Same-day turnaround',
        'API access for integration',
        'Training & onboarding',
        'SLA guarantee',
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
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "GreenTech Solar",
      role: "Operations Manager",
      content: "SolarEye detected issues we would have missed for months. Their AI analysis saved us $50,000 in potential damage.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "SunPower Industries",
      role: "Maintenance Director",
      content: "The precision and speed of their drone inspections is incredible. We've reduced our inspection time by 80%.",
      rating: 5
    }
  ];

  return (
    
    <div className="bg-white min-h-screen text-white">
      <NavBar/>
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
            From small residential to large commercial installations, we have the perfect plan for your needs
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

      {/* Value Proposition */}
      {/* <div className="py-20 text-[#1E222D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#1E222D] mb-4">Why Choose SolarEye?</h3>
            <p className="text-xl text-gray-300">Advanced AI technology meets solar expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">AI-Powered Detection</h4>
              <p className="text-gray-300">Our advanced AI algorithms can detect micro-cracks, hot spots, and performance issues invisible to the human eye.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Lightning Fast</h4>
              <p className="text-gray-300">Complete inspections in hours, not days. Get instant reports with actionable insights and recommendations.</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Precision Accuracy</h4>
              <p className="text-gray-300">99.8% accuracy rate in defect detection with comprehensive thermal and visual analysis capabilities.</p>
            </div>
          </div>
        </div>
      </div> */}
       {/* <div className="py-20 text-[#1E222D] bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-[#1E222D] mb-4">Why Choose SolarEye?</h3>
          <p className="text-xl text-gray-300">Advanced AI technology meets solar expertise</p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center" variants={cardVariants}>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-4">AI-Powered Detection</h4>
            <p className="text-gray-300">
              Our advanced AI algorithms can detect micro-cracks, hot spots, and performance issues invisible to the human eye.
            </p>
          </motion.div>

          <motion.div className="text-center" variants={cardVariants}>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-4">Lightning Fast</h4>
            <p className="text-gray-300">
              Complete inspections in hours, not days. Get instant reports with actionable insights and recommendations.
            </p>
          </motion.div>

          <motion.div className="text-center" variants={cardVariants}>
            <div className="bg-gradient-to-br from-green-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-4">Precision Accuracy</h4>
            <p className="text-gray-300">
              99.8% accuracy rate in defect detection with comprehensive thermal and visual analysis capabilities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div> */}

     {/* <div className="py-20 text-[#1E222D] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-[#1E222D] mb-4">Why Choose SolarEye?</h3>
          <p className="text-xl text-gray-600">Advanced AI technology meets solar expertise</p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center" variants={cardVariants}>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-[#1E222D]">AI-Powered Detection</h4>
            <p className="text-gray-700">
              Our advanced AI algorithms can detect micro-cracks, hot spots, and performance issues invisible to the human eye.
            </p>
          </motion.div>

          <motion.div className="text-center" variants={cardVariants}>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-[#1E222D]">Lightning Fast</h4>
            <p className="text-gray-700">
              Complete inspections in hours, not days. Get instant reports with actionable insights and recommendations.
            </p>
          </motion.div>

          <motion.div className="text-center" variants={cardVariants}>
            <div className="bg-gradient-to-br from-green-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-[#1E222D]">Precision Accuracy</h4>
            <p className="text-gray-700">
              99.8% accuracy rate in defect detection with comprehensive thermal and visual analysis capabilities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div> */}
    <WhyChooseUs/>

      {/* Testimonials */}
      {/* <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Trusted by Solar Leaders</h3>
            <p className="text-xl text-gray-300">See what our clients say about SolarEye</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      {/* <div className="bg-gradient-to-r from-orange-600 to-red-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Solar Operations?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of solar professionals who trust SolarEye for their inspection needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl">
              Schedule Free Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
              Contact Sales
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-6 text-sm opacity-75">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              +1 (555) 123-SOLAR
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              hello@solareye.com
            </div>
          </div>
        </div>
      </div> */}

      <ShaheenFooter/>
    </div>
  );
};

export default Pricing;