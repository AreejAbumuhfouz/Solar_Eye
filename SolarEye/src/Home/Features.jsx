

import React, { useState, useRef } from "react";
import { motion, useInView,AnimatePresence } from "framer-motion";
import { Target, Zap, Cloud, CheckCircle2 } from "lucide-react";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Target,
      title: "Precision Inspection",
      color: "text-blue-600 bg-blue-100",
      description:
        "Achieve unparalleled accuracy with high-resolution thermal and visual scans of solar infrastructure.",
      details: [
        "Real-time thermal imaging for hotspot detection",
        "Microscopic-level flaw identification",
        "Detailed health diagnostics for solar panels",
      ],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      color: "text-green-600 bg-green-100",
      description:
        "Enhance energy efficiency with smart performance analytics and proactive maintenance solutions.",
      details: [
        "AI-powered performance tracking",
        "Predictive maintenance to prevent downtime",
        "Optimized energy output for maximum efficiency",
      ],
    },
    {
      icon: Cloud,
      title: "Seamless IoT Integration",
      color: "text-purple-600 bg-purple-100",
      description:
        "Harness the power of IoT for real-time data analysis and effortless infrastructure scaling.",
      details: [
        "Secure cloud-based data management",
        "Instant performance reports and alerts",
        "Scalable solutions for diverse infrastructure sizes",
      ],
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

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-2  bg-white ">
      <div 
        ref={ref}
        className="container mx-auto px-6"
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1E2D] mb-6">
            Unleashing the Power of <span className="text-[#2985B3]">SolarEye</span> Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience unmatched precision and performance with our AI-driven drones, revolutionizing solar panel monitoring and maintenance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              className="relative group"
            >
              <div 
                className={`
                  absolute -inset-0.5 bg-gradient-to-r 
                  ${index === 0 ? 'from-blue-500 to-blue-400' : 
                    index === 1 ? 'from-green-500 to-green-400' : 
                    'from-purple-500 to-purple-400'}
                  rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300
                `}
              ></div>

              <div 
                className="relative z-10 bg-white border border-gray-100 rounded-2xl p-8 h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* Feature Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full ${feature.color} mr-4`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B1E2D]">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>

                {/* Expanding Details */}
                <AnimatePresence>
                  {activeFeature === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: 1, 
                        height: 'auto',
                        transition: { 
                          duration: 0.3,
                          ease: "easeInOut"
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        height: 0,
                        transition: { 
                          duration: 0.2,
                          ease: "easeInOut"
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-3 text-gray-700">
                        {feature.details.map((detail, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              delay: i * 0.1,
                              duration: 0.3
                            }}
                            className="flex items-center"
                          >
                            <CheckCircle2 
                              className={`mr-3 w-5 h-5 ${
                                index === 0 ? 'text-blue-500' : 
                                index === 1 ? 'text-green-500' : 
                                'text-purple-500'
                              }`} 
                            />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}