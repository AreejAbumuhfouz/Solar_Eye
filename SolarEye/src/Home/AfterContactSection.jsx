

import React, { useState, useEffect, useRef } from 'react';
import { Phone, Satellite, Brain, FileText, CheckCircle, ArrowRight, Sun, Zap, AlertTriangle, Sparkles } from 'lucide-react';
import Consult from "../assets/Consult.png"
import Analysis from "../assets/Analysis.png"
import Inspect from "../assets/Inspect.png"
import Report from "../assets/Report.png"
export default function AfterContactSection() {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const steps = [
      {
      icon: Phone,
      title: "Free Consultation",
      description: "We provide a complimentary consultation to analyze your solar farm layout and discuss your specific needs and requirements.",
      features: ["Free site assessment", "Needs analysis", "Custom solution design"],
      color: "from-[#2985B3] to-[#54AAD2]",
      bgColor: "from-[#2985B3]/10 to-[#54AAD2]/10",
      image: Consult
    },
    {
      icon: Satellite,
      title: "Drone Inspection",
      description: "Our advanced drones capture high-resolution thermal and visual imagery of your entire solar installation.",
      features: ["Thermal imaging", "HD photography", "GPS mapping"],
      color: "from-[#54AAD2] to-[#2985B3]",
      bgColor: "from-[#54AAD2]/10 to-[#2985B3]/10",
      image: Analysis
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our AI algorithms analyze the captured data to detect hotspots, cracks, soiling, and performance issues.",
      features: ["Defect detection", "Performance analysis", "Issue classification"],
      color: "from-[#252B3B] to-[#2985B3]",
      bgColor: "from-[#252B3B]/10 to-[#2985B3]/10",
      image: Inspect
    },
    {
      icon: FileText,
      title: "Detailed Report",
      description: "Receive comprehensive reports with issue locations, severity levels, and recommended maintenance actions.",
      features: ["Issue mapping", "Priority ranking", "Action recommendations"],
      color: "from-[#2985B3] to-[#252B3B]",
      bgColor: "from-[#2985B3]/10 to-[#252B3B]/10",
      image: Report
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2985B3] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#54AAD2] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#252B3B] rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#54AAD2] rounded-full animate-float" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#2985B3] rounded-full animate-float" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-[#252B3B]/30 rounded-full animate-float" style={{animationDelay: '4s', animationDuration: '7s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#54AAD2]/50 rounded-full animate-float" style={{animationDelay: '1s', animationDuration: '9s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Elegant Header */}
        <div className="text-center mb-20">
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#252B3B] via-[#2985B3] to-[#54AAD2] bg-clip-text text-transparent">
              Your  Journey with SolarEye
            </span>
          </h2>
          
          <p className="text-xl text-gray-800 max-w-3xl mx-auto ">
            Advanced drone technology with AI analysis to detect issues and optimize your solar farm performance with unmatched precision
          </p>
        </div>

        {/* Elegant Steps Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isVisible = visibleCards.includes(String(index));
            
            return (
              <div
                key={index}
                data-index={index}
                className={`group transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-full">
                  {/* Elegant Card */}
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:-translate-y-2 h-full border border-gray-100/50 backdrop-blur-sm">
                    
                    {/* Premium Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${step.bgColor} to-transparent opacity-80`}></div>
                      
                      {/* Floating Step Number */}
                      <div className="absolute -top-1 -right-2 w-12 h-12 bg-gradient-to-r from-[#252B3B] to-[#2985B3] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                        {index + 1}
                      </div>

                      {/* Premium Icon */}
                      <div className={`absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-r ${step.color} p-3 shadow-xl group-hover:scale-110 transition-all duration-300 backdrop-blur-sm`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Premium Content */}
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-[#252B3B] mb-3 group-hover:text-[#2985B3] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed line-height-7">
                        {step.description}
                      </p>

                      {/* Elegant Features */}
                      <div className="space-y-3">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center group/feature">
                            <div className="w-5 h-5 bg-gradient-to-r from-[#54AAD2] to-[#2985B3] rounded-full flex items-center justify-center mr-3 group-hover/feature:scale-110 transition-transform duration-200">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2985B3]/5 to-[#54AAD2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  </div>

                  {/* Elegant Arrow Connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden xl:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#54AAD2]/20">
                        <ArrowRight className="w-4 h-4 text-[#2985B3]" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Benefits Section
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="group bg-gradient-to-br from-[#2985B3]/8 to-[#54AAD2]/8 rounded-3xl p-8 text-center border border-[#2985B3]/10 hover:border-[#2985B3]/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-r from-[#2985B3] to-[#54AAD2] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-[#252B3B] mb-3">Lightning Fast Detection</h4>
            <p className="text-gray-600 leading-relaxed">Identify issues 10x faster than manual inspection with our advanced AI algorithms</p>
          </div>
          
          <div className="group bg-gradient-to-br from-[#54AAD2]/8 to-[#252B3B]/8 rounded-3xl p-8 text-center border border-[#54AAD2]/10 hover:border-[#54AAD2]/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-r from-[#54AAD2] to-[#252B3B] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-[#252B3B] mb-3">Predictive Analysis</h4>
            <p className="text-gray-600 leading-relaxed">Catch problems before they impact performance with our predictive maintenance system</p>
          </div>
          
          <div className="group bg-gradient-to-br from-[#252B3B]/8 to-[#2985B3]/8 rounded-3xl p-8 text-center border border-[#252B3B]/10 hover:border-[#252B3B]/20 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-r from-[#252B3B] to-[#2985B3] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-[#252B3B] mb-3">AI Precision</h4>
            <p className="text-gray-600 leading-relaxed">99.5% accurate defect detection and classification powered by machine learning</p>
          </div>
        </div> */}

       

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .line-height-7 {
          line-height: 1.75;
        }
      `}</style>
    </section>
  );
}