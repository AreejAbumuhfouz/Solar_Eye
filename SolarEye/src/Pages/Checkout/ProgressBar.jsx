

import React from 'react';
import { Check, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const ProgressBar = ({ activeStep, steps }) => {
  const pulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const particleVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: [0, 1, 0],
      y: [-20, -40],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-12">
      <div className="relative flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center flex-1">
            {/* Animated Background Ring */}
            <motion.div
              variants={pulseVariants}
              animate="pulse"
              className={`absolute w-14 h-14 rounded-full ${
                activeStep === index + 1 
                  ? 'bg-[#42BDEF]' 
                  : 'bg-transparent'
              }`}
            />

            {/* Step Circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-500 ${
                activeStep > index
                  ? 'border-[#42BDEF] bg-gradient-to-r from-[#185B8D] to-[#4ACEF4]'
                  : activeStep === index + 1
                  ? 'border-[#42BDEF] bg-white shadow-lg'
                  : 'border-gray-300 bg-white'
              }`}
            >
              {activeStep > index ? (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <Check className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.span
                  className={`text-lg font-bold ${
                    activeStep === index + 1 ? 'text-[#1A1D2C]' : 'text-gray-400'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {index + 1}
                </motion.span>
              )}

              {/* Particles Effect for Active Step */}
              {activeStep === index + 1 && (
                <>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      variants={particleVariants}
                      initial="hidden"
                      animate="visible"
                      className="absolute"
                      style={{
                        left: `${50 + (i - 1) * 20}%`,
                        transform: 'translateX(-50%)'
                      }}
                    >
                      <Sparkles className="w-3 h-3 text-[#1A1D2C]" />
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>

            {/* Step Label */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-center"
            >
              <p
                className={`text-sm font-medium transition-all duration-300 ${
                  activeStep >= index + 1 
                    ? 'text-[#1A1D2C] transform scale-105' 
                    : 'text-gray-400'
                }`}
              >
                {step}
                {activeStep === index + 1 && (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="inline-block ml-1"
                  >
                    <Star className="w-4 h-4 text-yellow-400" />
                  </motion.span>
                )}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;