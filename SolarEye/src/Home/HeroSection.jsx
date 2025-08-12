

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Satellite, SunDim, RepeatIcon, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SEOHead, StructuredData, BreadcrumbSchema } from '../SEO/SEOHead.jsx'; // ✅ Import SEO helpers

const SolarDroneRepairHero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
   const breadcrumbItems = [
    { name: "Home", url: "https://solareye.info" },
    { name: "Drone Repair", url: "https://solareye.info" }
  ];
  return (
    <div className="relative min-h-screen w-full pt-8  bg-gradient-to-br from-[#272D3F] via-[#232838] to-[#226F9E] overflow-hidden">
       <SEOHead
        title="SolarEye - We Solve It Before You See It!"
        description="Professional solar drone repair, maintenance, and optimization services. Keep your solar inspection equipment in peak condition with SolarEye."
        keywords="drone repair, solar inspection drone service, drone maintenance solar, PV inspection drone"
        canonicalUrl="https://solareye.info/drone-repair"
      />

      {/* ✅ Structured Data */}
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Solar Drone Repair",
          "description": "Professional repair and maintenance for solar inspection drones.",
          "provider": {
            "@type": "Organization",
            "name": "SolarEye",
            "url": "https://solareye.info"
          },
          "areaServed": "Worldwide"
        }}
      />

      {/* ✅ Breadcrumb Schema */}
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Animated Background Particles */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0.3 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#2485B6]/90 rounded-full"
            // className="absolute bg-[white]/90 rounded-full"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
        
            animate={{
              x: [`${Math.random() * 200 - 100}px`, `${Math.random() * 200 - 100}px`],
              y: [`${Math.random() * 200 - 100}px`, `${Math.random() * 200 - 100}px`],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Text Content */}
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left space-y-6 mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
           <span className='text-[#2485B6]'>
           SolarEye
            </span> 
             <br />
             <span className='mt-2'>

             We Solve It Before You See It!
             </span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Revolutionizing solar infrastructure with AI-powered drones that detect, diagnose, and repair solar panel issues with precision and efficiency.
          </p>

          <div className="flex justify-center lg:justify-start space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#226F9E] px-8 py-3 rounded-xl font-bold shadow-2xl hover:bg-blue-50 transition"
              onClick={() => navigate('/contactus')}
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/50 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition"
           onClick={() => navigate('/pricing')}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Drone Visualization */}
        <motion.div 
          className="lg:w-1/2 relative"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            className="relative w-full max-w-xl mx-auto"
            animate={{ 
              y: isHovered ? [0, 10, -10, 0] : 0
            }}
            transition={{ duration: 2, repeat: Infinity, type: "tween" }}
          >
            {/* Drone Repair Features */}
            <div className="absolute -inset-4 bg-white/5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="bg-white/10 p-4 rounded-xl flex items-center space-x-4"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                >
                  <Satellite className="text-blue-500 w-12 h-12" />
                  <span className="text-white font-semibold">Autonomous Inspection</span>
                </motion.div>
                <motion.div 
                  className="bg-white/10 p-4 rounded-xl flex items-center space-x-4"
                  whileHover={{ scale: 1.05, rotate: -3 }}
                >
                  <SunDim className="text-yellow-500 w-12 h-12" />
                  <span className="text-white font-semibold">Thermal Analysis</span>
                </motion.div>
                <motion.div 
                  className="bg-white/10 p-4 rounded-xl flex items-center space-x-4"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                >
                  <RepeatIcon className="text-gray-400 w-12 h-12" />
                  <span className="text-white font-semibold">Predictive Maintenance</span>
                </motion.div>
                <motion.div 
                  className="bg-white/10 p-4 rounded-xl flex items-center space-x-4"
                  whileHover={{ scale: 1.05, rotate: -3 }}
                >
                  <ShieldCheck className="text-[#269AC5] w-12 h-12" />
                  <span className="text-white font-semibold">Damage Prevention</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SolarDroneRepairHero;
