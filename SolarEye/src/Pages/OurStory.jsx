

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link component
import NavBar from '../components/NavBar';
import JourneyMilestones from './MileStone';
import OurVision from './OurVision';
import ShaheenFooter from '../components/Footer';
import FoundersSection from './FoundersSection';
import {Book} from 'lucide-react';
const OurStory = () => {
  const ref = useRef(null);


  // Animation container variants
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

  // Animation item variants
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 120
      }
    }
  };

  return (
    <motion.div ref={ref} initial="hidden" animate="visible" className="bg-white min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-br from-[#272D3F] via-[#232838] to-[#226F9E] flex items-center justify-center overflow-hidden  px-12 pb-20 pt-32 mb-12 text-center "
      >
        
        
        <motion.div 
          variants={containerVariants}
          className="relative z-10 text-white text-center px-6  "
        >
          <div className="flex items-center justify-center mb-8 space-x-4">
    
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold mb-2 "
          >
            The  
            <span className='text-[#185B8D]'> SolarEye </span>
            Story
          </motion.h1>

  </div>

          
          <motion.p
            variants={itemVariants}
            className="text-xl max-w-2xl mx-auto mb-10 text-gray-200"
          >
            Pioneering AI-driven solar infrastructure monitoring through innovative drone technology
          </motion.p>
          
        </motion.div>
      </motion.div>

      {/* Vision Section */}
      <div>
        <OurVision />
      </div>
      <FoundersSection/>

      {/* Milestones Section */}
      <JourneyMilestones />

      {/* Call to Action Section */}
      <motion.div 
        className="bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] text-white py-24 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            type: "spring", 
            damping: 12, 
            stiffness: 100 
          }
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6 px-4"
        >
          Join Our Vision for a Sustainable Future
        </motion.h2>
        <motion.p
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl max-w-3xl mx-auto mb-10 px-4 text-gray-100"
        >
          Discover how SolarEye is revolutionizing solar infrastructure monitoring through innovative drone technology and AI-powered solutions.
        </motion.p>
        
         <Link to="/contactus"> {/* Wrap the button with a Link component */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-[#2985B3] px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center mx-auto space-x-2"
      >
        <span>Explore Our Service</span>
        <ArrowRight className="w-6 h-6" />
      </motion.button>
    </Link>
      </motion.div>
      <ShaheenFooter/>
    </motion.div>
  );
};

export default OurStory;
