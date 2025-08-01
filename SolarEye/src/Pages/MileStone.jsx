

import React from 'react';
import { motion } from 'framer-motion';

// Variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const milestones = [
  { year: 2024, event: "Company Founded", description: "SolarEye takes its first flight, bringing together experts in drone technology and solar energy." },
  { year: 2025, event: "First Prototype", description: "Developed our first AI-powered thermal detection drone prototype, marking a significant technological breakthrough." },
  { year: 2026, event: "Commercial Deployment", description: "Launched first commercial solar infrastructure monitoring services across the Middle East." },
  { year: 2027, event: "Global Expansion", description: "Expanding our technological footprint and partnering with major solar energy providers." }
];

const JourneyMilestones = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-bold text-center mb-16 text-[#272D3F]"
        >
          Our Journey Milestones
        </motion.h2>

        <div className="relative">
          <div className="absolute inset-0 flex justify-center">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1, type: "spring" }}
              className="w-1 bg-gradient-to-b from-[#2985B3] to-[#4ECDC4]"
            ></motion.div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            {milestones.map((milestone, index) => (
              <motion.div 
                key={milestone.year}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2"></div>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="z-10 flex items-center order-1 bg-gradient-to-r from-[#2985B3] to-[#4ECDC4] shadow-xl w-20 h-20 rounded-full"
                >
                  <h1 className="mx-auto font-semibold text-xl text-white">
                    {milestone.year}
                  </h1>
                </motion.div>
                <motion.div 
                  whileHover={{ translateX: index % 2 === 0 ? 10 : -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="order-1 bg-white rounded-lg shadow-xl w-1/2 px-6 py-6 border-l-4 border-[#2985B3]"
                >
                  <h3 className="mb-3 font-bold text-xl text-[#2985B3]">
                    {milestone.event}
                  </h3>
                  <p className="text-sm leading-snug text-gray-600">
                    {milestone.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneyMilestones;
