
import React, { useState, useEffect } from 'react';
import { 
  Eye, BarChart3, CheckCircle, AlertTriangle, Wrench, Lightbulb, Monitor, ArrowRight,
  X, Clock, Users, Award, Zap, TrendingUp, Shield, Phone, Mail
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEOHead, StructuredData, BreadcrumbSchema } from '../SEO/SEOHead.jsx';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate=useNavigate();
  const breadcrumbItems = [
    { name: "Home", url: "https://solareye.info" },
    { name: "Services", url: "https://solareye.info/services" }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 'inspection',
      title: 'AI-Powered Solar Inspections',
      icon: Eye,
      description: 'Comprehensive drone-based inspections using advanced AI to detect issues invisible to the human eye.',
      detailedDescription: 'Our cutting-edge AI-powered inspection service combines thermal imaging, visual spectrum analysis, and machine learning algorithms to provide the most comprehensive solar panel assessment available. Our drones can cover large installations quickly while detecting micro-defects that human inspectors might miss.',
      features: [
        'Thermal imaging analysis with temperature precision ±0.1°C',
        'High-resolution visual spectrum photography',
        'AI anomaly detection with 99.8% accuracy',
        'Micro-crack identification down to 0.1mm',
        'Hot spot detection and severity assessment',
        'Performance degradation analysis and forecasting'
      ],
      benefits: [
        'Up to 50x faster than manual inspections',
        '99.8% accuracy in defect detection',
        'Detailed digital reports within 24 hours',
        'Cost savings up to 70% vs traditional methods'
      ],
      pricing: 'Starting at $2.50 per panel',
      timeline: '24-48 hours for complete analysis',
      guarantee: '100% satisfaction guarantee',
      caseStudy: {
        client: 'SunPower Industrial Complex',
        problem: 'Declining efficiency across 10,000 panel installation',
        solution: 'AI inspection identified 347 defective panels and hot spots',
        result: '23% increase in overall system efficiency'
      }
    },
    {
      id: 'monitoring',
      title: 'Real-Time Performance Monitoring',
      icon: Monitor,
      description: 'Continuous monitoring and analytics to optimize your solar farm performance and prevent downtime.',
      detailedDescription: 'Our advanced monitoring platform provides 24/7 surveillance of your solar assets with real-time alerts, predictive analytics, and automated optimization recommendations. Stay ahead of issues before they impact your energy production.',
      features: [
        'Live performance dashboards with real-time metrics',
        'Predictive maintenance alerts 30 days in advance',
        'AI-powered energy output optimization',
        'Weather impact analysis and forecasting',
        'Individual panel and inverter health tracking',
        'Automated reporting systems with custom KPIs'
      ],
      benefits: [
        'Prevent up to 90% of unexpected failures',
        'Increase energy output by 15-25%',
        'Reduce maintenance costs by 40%',
        'Real-time SMS/email issue notifications'
      ],
      pricing: 'From $0.15 per panel per month',
      timeline: 'Setup within 5 business days',
      guarantee: '99.9% uptime SLA',
      caseStudy: {
        client: 'Desert Solar Farm LLC',
        problem: 'Frequent unexpected equipment failures',
        solution: 'Implemented predictive monitoring system',
        result: '85% reduction in unplanned downtime'
      }
    },
    {
      id: 'maintenance',
      title: 'Predictive Maintenance Solutions',
      icon: Wrench,
      description: 'AI-driven predictive maintenance that prevents problems before they impact your solar energy production.',
      detailedDescription: 'Transform your maintenance approach from reactive to predictive. Our AI algorithms analyze performance patterns, environmental factors, and equipment health to predict failures weeks before they occur.',
      features: [
        'Failure prediction algorithms with 95% accuracy',
        'Maintenance scheduling optimization',
        'Component lifecycle tracking and analysis',
        'Automated spare parts inventory management',
        'Technician dispatch automation and routing',
        'Performance impact forecasting and budgeting'
      ],
      benefits: [
        'Reduce unplanned downtime by 80%',
        'Extend equipment lifespan by 30%',
        'Optimize maintenance budgets by 35%',
        'Minimize production losses during maintenance'
      ],
      pricing: 'Custom pricing based on installation size',
      timeline: '2-3 weeks implementation',
      guarantee: 'ROI guarantee within 12 months',
      caseStudy: {
        client: 'Green Energy Solutions',
        problem: 'High maintenance costs and frequent breakdowns',
        solution: 'Deployed predictive maintenance system',
        result: '60% reduction in maintenance costs'
      }
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics & Reporting',
      icon: BarChart3,
      description: 'Comprehensive data analytics and business intelligence for informed decision-making.',
      detailedDescription: 'Turn your solar data into actionable insights with our comprehensive analytics platform. Get detailed reports, trend analysis, and business intelligence tools that help you maximize your solar investment ROI.',
      features: [
        'Custom dashboard creation with drag-and-drop interface',
        'Advanced ROI and performance metrics tracking',
        'Trend analysis and long-term forecasting',
        'Automated compliance reporting for regulations',
        'Industry benchmarking analysis and comparisons',
        'Executive summary reports with key insights'
      ],
      benefits: [
        'Data-driven decision making capabilities',
        'Improved operational efficiency by 25%',
        'Enhanced ROI visibility and tracking',
        'Simplified regulatory compliance assurance'
      ],
      pricing: 'Starting at $299 per month',
      timeline: 'Ready to use within 48 hours',
      guarantee: '30-day money-back guarantee',
      caseStudy: {
        client: 'Municipal Solar Initiative',
        problem: 'Lack of visibility into solar performance across 50 sites',
        solution: 'Implemented comprehensive analytics dashboard',
        result: 'Identified $2.3M in optimization opportunities'
      }
    },
    {
      id: 'consulting',
      title: 'Solar Optimization Consulting',
      icon: Lightbulb,
      description: 'Expert consulting services to maximize your solar investment returns and operational efficiency.',
      detailedDescription: 'Leverage our team of solar industry experts to optimize every aspect of your solar operations. From system design to performance optimization, we provide strategic guidance to maximize your returns.',
      features: [
        'Performance optimization strategies and implementation',
        'System design recommendations and improvements',
        'Technology upgrade planning and ROI analysis',
        'Comprehensive operational efficiency audits',
        'Staff training and knowledge transfer programs',
        'Industry best practices implementation'
      ],
      benefits: [
        'Maximize energy production potential',
        'Reduce operational costs by up to 30%',
        'Future-proof your solar investment',
        'Access to industry-leading expertise'
      ],
      pricing: 'Starting at $250 per hour',
      timeline: 'Project-based, typically 2-8 weeks',
      guarantee: 'Satisfaction guarantee on all deliverables',
      caseStudy: {
        client: 'Industrial Manufacturing Corp',
        problem: 'Underperforming 5MW solar installation',
        solution: 'Comprehensive optimization consulting',
        result: '40% improvement in energy yield'
      }
    },
    {
      id: 'emergency',
      title: '24/7 Emergency Response',
      icon: AlertTriangle,
      description: 'Round-the-clock emergency response service for critical solar infrastructure issues.',
      detailedDescription: 'When critical issues arise, every minute counts. Our 24/7 emergency response team provides immediate support, rapid deployment, and expert resolution to minimize downtime and revenue loss.',
      features: [
        'Emergency hotline support with <2 minute response',
        'Rapid deployment teams within 4 hours',
        'Priority inspection services and diagnostics',
        'Critical repair coordination and management',
        'Real-time status updates and communication',
        'Insurance claim support and documentation'
      ],
      benefits: [
        'Minimize revenue losses from downtime',
        'Expert emergency support available 24/7',
        'Fast issue resolution and repair',
        'Comprehensive insurance process assistance'
      ],
      pricing: 'Subscription: $199/month + service fees',
      timeline: 'Immediate response, 4-hour deployment',
      guarantee: '2-minute response time guarantee',
      caseStudy: {
        client: 'Coastal Solar Farm',
        problem: 'Storm damage affecting 30% of installation',
        solution: 'Emergency response and rapid repair',
        result: 'System restored to 95% capacity within 48 hours'
      }
    }
  ];

  const handleLearnMore = (service) => {
    setActiveService(service);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveService(null);
    document.body.style.overflow = 'unset';
  };

  const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    const IconComponent = service.icon;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6 rounded-t-3xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-2xl">
                <IconComponent className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-blue-200 mt-2">{service.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Detailed Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service Overview</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{service.detailedDescription}</p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{service.pricing}</div>
                <div className="text-gray-500">Pricing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{service.timeline}</div>
                <div className="text-gray-500">Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-orange-600 mb-1">{service.guarantee}</div>
                <div className="text-gray-500">Guarantee</div>
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Zap className="w-5 h-5 text-blue-500 mr-2" />
                  Key Features
                </h3>
                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                  Key Benefits
                </h3>
                <div className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Award className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Study */}
            {/* <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 text-blue-500 mr-2" />
                Success Story
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Client</h4>
                  <p className="text-gray-600">{service.caseStudy.client}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Challenge</h4>
                  <p className="text-gray-600">{service.caseStudy.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Result</h4>
                  <p className="text-green-700 font-semibold">{service.caseStudy.result}</p>
                </div>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Get Started Now
              </button> */}
              <button className="flex-1 border border-blue-500 text-blue-600 py-4 px-8 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center justify-center"
              onClick={() => navigate('/contactus')}
>
                <Mail className="w-5 h-5 mr-2" />
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
              <NavBar />

              <SEOHead 
                title="SolarEye Services - We Solve It Before You See It!"

        description="Comprehensive solar panel inspection services using advanced drone technology and AI analysis. Thermal imaging, defect detection, and performance optimization."
        keywords="solar inspection services, drone solar analysis, thermal imaging inspection, solar panel maintenance, AI defect detection"
        canonicalUrl="https://solareye.info/services"
      />

      <StructuredData 
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Solar Inspection Services",
          "description": "Comprehensive solar panel inspection services using advanced drone technology and AI analysis.",
          "provider": {
            "@type": "Organization",
            "name": "SolarEye",
            "url": "https://solareye.info"
          }
        }}
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-[#272D3F] via-[#232838] to-[#226F9E] flex items-center justify-center overflow-hidden px-12 pb-20 pt-32 mb-12 text-center">
        <div className="relative z-10 text-white text-center px-6">
          <div className="flex items-center justify-center mb-8 space-x-4">
            <h1 className="text-4xl font-bold mb-2">
              Professional  
              <span className='text-[#185B8D]'> Solar Services </span>
              by SolarEye
            </h1>
          </div>
          
          <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-200">
            Comprehensive AI-powered solutions for solar infrastructure monitoring, maintenance, and optimization
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-[#1E222D]">Our Comprehensive Services</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solar infrastructure solutions powered by cutting-edge AI technology and industry expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 3).map((service, index) => {
              const IconComponent = service.icon;
              return (
               <div
  key={service.id}
  className={`m-auto bg-gradient-to-br from-[#272D3F] via-[#232838] to-[#226F9E] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-orange-400/30 transition-all duration-500 hover:scale-105 cursor-pointer flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
  style={{ transitionDelay: `${index * 150}ms` }}
>
  <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
    <IconComponent className="h-8 w-8 text-white" />
  </div>

  <h4 className="text-2xl font-bold mb-4 text-white">{service.title}</h4>
  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

  <div className="space-y-3 mb-6">
    {service.features.slice(0, 3).map((feature, idx) => (
      <div key={idx} className="flex items-center text-sm text-gray-300">
        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
        <span>{feature}</span>
      </div>
    ))}
  </div>

  {/* Button pinned to bottom */}
  <div className="mt-auto">
    <button
      onClick={() => handleLearnMore(service)}
      className="w-full bg-gradient-to-r from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30 border border-orange-400/30 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
    >
      Learn More
      <ArrowRight className="h-4 w-4 ml-2" />
    </button>
  </div>
</div>

              );
            })}
          </div>

         <div className="grid lg:grid-cols-3 gap-8">
  {services.slice(3, 6).map((service, index) => {
    const IconComponent = service.icon;
    return (
      <div
        key={service.id}
        className={`bg-gradient-to-br from-[#272D3F] via-[#232838] to-[#226F9E] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-orange-400/30 transition-all duration-500 hover:scale-105 cursor-pointer flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `${(index + 3) * 150}ms` }}
      >
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
          <IconComponent className="h-8 w-8 text-white" />
        </div>

        <h4 className="text-2xl font-bold mb-4 text-white">{service.title}</h4>
        <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

        <div className="space-y-3 mb-6">
          {service.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-300">
              <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Push the button to the bottom */}
        <div className="mt-auto">
          <button
            onClick={() => handleLearnMore(service)}
            className="w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-400/30 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
          >
            Learn More
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    );
  })}
</div>

        </div>
      </div>

      {/* Modal */}
      {showModal && <ServiceModal service={activeService} onClose={handleCloseModal} />}

      <Footer/>
    </div>
  );
};

export default Services;
