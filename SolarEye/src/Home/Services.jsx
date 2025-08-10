
import React, { useState, useEffect } from 'react';
import {  Eye, Monitor,Wrench,AlertTriangle, BarChart3,  ArrowRight,  Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [isVisible, setIsVisible] = useState({});
  const navigate=useNavigate();
   useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

const services = [
    {
      title: 'AI-Powered Solar Inspections',
      icon: <Eye className="w-8 h-8" />,
      description: 'Comprehensive drone-based inspections using advanced AI to detect issues invisible to the human eye.',
     
    },
    {
      title: 'Real-Time Performance Monitoring',
      icon: <Monitor className="w-8 h-8" />,
      description: 'Continuous monitoring and analytics to optimize your solar farm performance and prevent downtime.',
      
    },
    {
      title: 'Predictive Maintenance Solutions',
      icon: <Wrench className="w-8 h-8" />,
      description: 'AI-driven predictive maintenance that prevents problems before they impact your solar energy production.',
      
    },
    {
      title: 'Advanced Analytics & Reporting',
      icon: <BarChart3 className="w-8 h-8" />,
      description: 'Comprehensive data analytics and business intelligence for informed decision-making.',
      
    },
    {
      title: 'Solar Optimization Consulting',
      icon: <Lightbulb className="w-8 h-8" />,
      description: 'Expert consulting services to maximize your solar investment returns and operational efficiency.',
     
    },
    {
      title: '24/7 Emergency Response',
      icon: <AlertTriangle className="w-8 h-8" />,
      description: 'Round-the-clock emergency response service for critical solar infrastructure issues.',
      
    }
  ];


  return (
    <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solar solutions designed to maximize your energy savings and environmental impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 ${
                  isVisible['services'] ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] rounded-xl flex items-center justify-center text-white group-hover:from-[#4ACEF4] group-hover:to-[#185B8D] transition-colors duration-300 shadow-lg">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#185B8D] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button className="text-[#185B8D] font-semibold hover:text-[#4ACEF4] flex items-center group-hover:translate-x-1 transition-transform"
                onClick={() => navigate('/services')}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
          
          
        </div>
      </section>
          );
          };
export default Services;