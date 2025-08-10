
import React, { useState, useEffect } from 'react';
import { Sun, Eye, Zap, Shield, BarChart3, Users, ArrowRight, CheckCircle, Play, Star, Award, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
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


 const steps = [
  {
    number: "01",
    title: "Site & Energy Assessment",
    description: "We evaluate your solar infrastructure using satellite imagery, IoT data, and on-site inspections to understand current performance and potential."
  },
  {
    number: "02",
    title: "Smart Drone Deployment",
    description: "AI-powered drones scan panels with precision sensors, detecting even the smallest faults or inefficiencies."
  },
  {
    number: "03",
    title: "AI-Driven Diagnostics",
    description: "Our advanced algorithms analyze drone and IoT data to pinpoint issues and predict future risks."
  },
  {
    number: "04",
    title: "Actionable Insights",
    description: "You receive detailed, easy-to-read reports with clear recommendations for maintenance and optimization."
  },
  {
    number: "05",
    title: "Proactive Repairs",
    description: "Where possible, drones or field teams address identified issues quickly, minimizing downtime and energy loss."
  },
  {
    number: "06",
    title: "Ongoing Monitoring",
    description: "We provide continuous AI-powered monitoring to ensure maximum efficiency and sustainability."
  }
];

  return (
    <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How SolarEye Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our streamlined process makes going solar simple, efficient, and worry-free from start to finish.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`group ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} ${
                    isVisible['how-it-works'] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#185B8D] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-20 left-8 w-px h-32 bg-gradient-to-b from-blue-300 to-purple-300"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] text-white font-bold py-4 px-8 rounded-xl text-lg  transform hover:scale-105 transition-all duration-300 shadow-lg"
            onClick={() => navigate('/pricing')}
>
              Start Your Solar Journey
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
          </div>
        </div>
      </section>
     
          );
          };
export default HowItWorks;