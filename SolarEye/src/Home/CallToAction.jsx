

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {  Sun, Battery, Zap, ChevronRight } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CallToAction = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Enhanced parallax effects for tech feel
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);

  // State management
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email) {
      setErrorMessage('Email is required');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('/api/email/save-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Thank you! Our drone specialists will contact you shortly.');
        setEmail('');
      } else {
        setErrorMessage(data.message || 'Error saving email');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Connection error. Please try again later.');
    }
  };

  return (
    <motion.section
      ref={containerRef}
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#0A2F51] to-[#1A1A2E] text-white"
      style={{ opacity, scale }}
    >
      {/* Tech-inspired background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Solar panel grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 grid-rows-8 h-full">
            {Array(64).fill().map((_, i) => (
              <div key={i} className="border border-white/20"></div>
            ))}
          </div>
        </div>
        
        {/* Glowing elements representing drones/solar energy */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon representing drone + solar technology */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, type: "spring" }
            }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full blur-md"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/30">
                {/* <Drone size={40} className="text-white" /> */}
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            AI-Powered Drone Diagnostics for Solar Optimization
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-8 max-w-3xl mx-auto"
          >
            Our autonomous drones use thermal imaging and AI analytics to identify panel defects, optimize placement, and increase energy output by up to 27%.
          </motion.p>

          {/* Benefits cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          >
            {[
              { icon: <Sun size={24} />, title: "Thermal Detection", text: "Identify hotspots & defects" },
              // { icon: <Drone size={24} />, title: "Autonomous Inspection", text: "Fast & accurate scans" },
              { icon: <Zap size={24} />, title: "27% More Efficient", text: "Maximize energy output" }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-center mb-2 text-cyan-400">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.text}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 100,
              },
            }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20"
          >
            <div className="max-w-xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Schedule Your Drone Analysis</h3>
              
              {/* Email Input with tech styling */}
              <div className="flex items-center bg-white/10 rounded-full p-2 mb-6 border border-white/20 focus-within:border-cyan-400 transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email for a free site assessment"
                  className="flex-grow bg-transparent px-4 py-3 text-white placeholder-white/50 focus:outline-none"
                  aria-label="Email address"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full p-3 flex items-center justify-center"
                  aria-label="Submit email"
                >
                  {/* <Drone size={20} /> */}
                </motion.button>
              </div>

              {/* Error message */}
              {errorMessage && <div className="text-red-400 text-sm mb-4">{errorMessage}</div>}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition"
                >
                  <span>Book Drone Inspection</span>
                  <ChevronRight size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-400/30 text-white rounded-full hover:bg-white/10 transition"
                >
                  View Demo Flight
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar theme="dark" />
    </motion.section>
  );
};

export default CallToAction;