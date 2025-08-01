
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Rocket } from 'lucide-react';

const SectionBackground = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.05 }}
    className="absolute inset-0 bg-gradient-to-br from-[#1A6094] to-[#1A6094] -z-10"
  />
);

const IconCircle = ({ icon: Icon, color }) => (
  <motion.div 
    className={`w-16 h-16 rounded-full flex items-center justify-center ${color} bg-opacity-80`}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.3 }}
  >
    <Icon className="text-white" size={32} />
  </motion.div>
);

const OurVisionAndMission = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        delay: custom * 0.2,
        duration: 0.6,
        type: "tween"
      }
    })
  };

  return (
    <div 
      ref={sectionRef}
      className="relative min-h-screen bg-white text-white overflow-hidden py-32  px-8"
    >
      <SectionBackground />
      
      {/* Vision Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={sectionVariants}
        className="max-w-6xl mx-auto flex items-center space-x-16 mb-32 relative"
      >
        <motion.div 
          className="w-1/2 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "tween" }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <IconCircle icon={Rocket} color="bg-[#185B8D]" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-[#272D3F]">
              Our Vision
            </h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            We envision a future where technology and sustainability converge to create transformative solutions. Our commitment is to push the boundaries of innovation, driving meaningful progress that harmonizes technological advancement with environmental stewardship.
          </p>
        </motion.div>

        <motion.div 
          className="w-1/2 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-[#185B8D] rounded-2xl -rotate-6"
            style={{ y: backgroundY }}
          />
          <motion.img
             src="https://img.freepik.com/premium-photo/innovative-solar-panel-field-maintenance-engineers-utilizing-drones-advanced-monitoring_38013-26995.jpg"
alt="Vision"
            className="relative z-10 rounded-2xl shadow-2xl transform -rotate-3 w-full h-auto object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={sectionVariants}
        className="max-w-6xl mx-auto flex items-center space-x-16 relative"
      >
        <motion.div 
          className="w-1/2 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-[#185B8D] rounded-2xl rotate-6"
            style={{ y: backgroundY }}
          />
          <motion.img
             src="https://149355317.v2.pressablecdn.com/wp-content/uploads/2024/01/flycart-30-solar-farm.jpg"
alt="Mission"
            className="relative z-10 rounded-2xl shadow-2xl transform rotate-3 w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div 
          className="w-1/2 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "tween" }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <IconCircle icon={Target} color="bg-[#185B8D]" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-[#272D3F]">
              Our Mission
            </h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our mission is to empower global change through cutting-edge technological solutions. We are dedicated to inspiring innovation, fostering sustainable practices, and creating transformative experiences that bridge the gap between technological potential and real-world impact.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurVisionAndMission;