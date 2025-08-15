// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { Target, Rocket } from 'lucide-react';

// const SectionBackground = () => (
//   <motion.div 
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 0.05 }}
//     className="absolute inset-0 bg-gradient-to-br from-[#1A6094] to-[#1A6094] -z-10"
//   />
// );

// const IconCircle = ({ icon: Icon, color }) => (
//   <motion.div 
//     className={`w-16 h-16 rounded-full flex items-center justify-center ${color} bg-opacity-80`}
//     whileHover={{ scale: 1.1 }}
//     transition={{ duration: 0.3 }}
//   >
//     <Icon className="text-white" size={32} />
//   </motion.div>
// );

// const OurVisionAndMission = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });

//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (custom) => ({
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         delay: custom * 0.2,
//         duration: 0.6,
//         type: "tween"
//       }
//     })
//   };

//   return (
//     <div 
//       ref={sectionRef}
//       className="relative min-h-screen bg-white text-white overflow-hidden py-20 px-4 sm:px-8 md:px-16 lg:px-24"
//     >
//       <SectionBackground />
      
//       {/* Vision Section */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         custom={0}
//         variants={sectionVariants}
//         className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-16 mb-24 relative"
//       >
//         <motion.div 
//           className="w-full lg:w-1/2 space-y-6"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, type: "tween" }}
//         >
//           <div className="flex items-center space-x-4 mb-6">
//             <IconCircle icon={Rocket} color="bg-[#185B8D]" />
//             <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-[#272D3F]">
//               Our Vision
//             </h2>
//           </div>
//           <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
//             We envision a future where technology and sustainability converge to create transformative solutions. Our commitment is to push the boundaries of innovation, driving meaningful progress that harmonizes technological advancement with environmental stewardship.
//           </p>
//         </motion.div>

//         <motion.div 
//           className="w-full lg:w-1/2 relative"
//           whileHover={{ scale: 1.02 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className="absolute inset-0 bg-[#185B8D] rounded-2xl -rotate-6"
//             style={{ y: backgroundY }}
//           />
//           <motion.img
//             src="https://img.freepik.com/premium-photo/innovative-solar-panel-field-maintenance-engineers-utilizing-drones-advanced-monitoring_38013-26995.jpg"
//             alt="Vision"
//             className="relative z-10 rounded-2xl shadow-2xl transform -rotate-3 w-full h-auto object-cover"
//             loading="lazy"
//           />
//         </motion.div>
//       </motion.div>

//       {/* Mission Section */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         custom={1}
//         variants={sectionVariants}
//         className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-16 relative"
//       >
//         <motion.div 
//           className="w-full lg:w-1/2 relative"
//           whileHover={{ scale: 1.02 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.div
//             className="absolute inset-0 bg-[#185B8D] rounded-2xl rotate-6"
//             style={{ y: backgroundY }}
//           />
//           <motion.img
//             src="https://149355317.v2.pressablecdn.com/wp-content/uploads/2024/01/flycart-30-solar-farm.jpg"
//             alt="Mission"
//             className="relative z-10 rounded-2xl shadow-2xl transform rotate-3 w-full h-auto object-cover"
//             loading="lazy"
//           />
//         </motion.div>

//         <motion.div 
//           className="w-full lg:w-1/2 space-y-6"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, type: "tween" }}
//         >
//           <div className="flex items-center space-x-4 mb-6">
//             <IconCircle icon={Target} color="bg-[#185B8D]" />
//             <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-[#272D3F]">
//               Our Mission
//             </h2>
//           </div>
//           <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
//             Our mission is to empower global change through cutting-edge technological solutions. We are dedicated to inspiring innovation, fostering sustainable practices, and creating transformative experiences that bridge the gap between technological potential and real-world impact.
//           </p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default OurVisionAndMission;


import React, { useRef } from 'react';
import { Target, Rocket } from 'lucide-react';

const SectionBackground = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-[#1A6094] to-[#1A6094] opacity-5 -z-10" />
);

const IconCircle = ({ icon: Icon, color }) => (
  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center ${color} bg-opacity-80 transition-transform hover:scale-110 duration-300`}>
    <Icon className="text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
  </div>
);

const OurVisionAndMission = () => {
  const sectionRef = useRef(null);

  return (
    <div 
      ref={sectionRef}
      className="relative min-h-screen bg-white text-white overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12"
    >
      <SectionBackground />
      
      {/* Vision Section */}
      <div className="max-w-7xl mx-auto mb-16 sm:mb-20 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Vision Content */}
          <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <IconCircle icon={Rocket} color="bg-[#185B8D]" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#272D3F]">
                Our Vision
              </h2>
            </div>
            <div className="pl-0 sm:pl-16 lg:pl-20">
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                We envision a future where technology and sustainability converge to create transformative solutions. Our commitment is to push the boundaries of innovation, driving meaningful progress that harmonizes technological advancement with environmental stewardship.
              </p>
            </div>
          </div>

          {/* Vision Image */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-[#185B8D] rounded-xl sm:rounded-2xl transform -rotate-3 sm:-rotate-6 transition-transform group-hover:rotate-0 duration-500"></div>
            <img
              src="https://img.freepik.com/premium-photo/innovative-solar-panel-field-maintenance-engineers-utilizing-drones-advanced-monitoring_38013-26995.jpg"
              alt="Vision - Solar panel field with drone technology"
              className="relative z-10 rounded-xl sm:rounded-2xl shadow-2xl transform rotate-1 sm:-rotate-3 group-hover:rotate-0 transition-transform duration-500 w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Mission Image */}
          <div className="order-1 relative group">
            <div className="absolute inset-0 bg-[#185B8D] rounded-xl sm:rounded-2xl transform rotate-3 sm:rotate-6 transition-transform group-hover:rotate-0 duration-500"></div>
            <img
              src="https://149355317.v2.pressablecdn.com/wp-content/uploads/2024/01/flycart-30-solar-farm.jpg"
              alt="Mission - Drone technology in solar farm"
              className="relative z-10 rounded-xl sm:rounded-2xl shadow-2xl transform -rotate-1 sm:rotate-3 group-hover:rotate-0 transition-transform duration-500 w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
              loading="lazy"
            />
          </div>

          {/* Mission Content */}
          <div className="order-2 space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <IconCircle icon={Target} color="bg-[#185B8D]" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#272D3F]">
                Our Mission
              </h2>
            </div>
            <div className="pl-0 sm:pl-16 lg:pl-20">
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                Our mission is to empower global change through cutting-edge technological solutions. We are dedicated to inspiring innovation, fostering sustainable practices, and creating transformative experiences that bridge the gap between technological potential and real-world impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Mobile-specific enhancements */}
      <style jsx>{`
        @media (max-width: 640px) {
          .group:hover img {
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};

export default OurVisionAndMission;
