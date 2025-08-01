
import React from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import person from "../assets/person.png"
const OurStory = () => {
  // Scroll-based variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const heroImageVariants = {
    hidden: { 
      scale: 0.9, 
      opacity: 0 
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="relative py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/80 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/80 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeInVariants}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#1E222D] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6, 
                ease: "easeOut" 
              }
            }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6, 
                delay: 0.2,
                ease: "easeOut" 
              }
            }}
            viewport={{ once: true }}
          >
            Empowering sustainable energy solutions through innovation and advanced technologies. At SolarEye, we are redefining the future of solar panel maintenance with cutting-edge AI and drone technology.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Content */}
          <motion.div 
            variants={fadeInVariants} 
            className="space-y-6"
          >
            <motion.h3
              variants={fadeInVariants}
              className="text-3xl font-bold text-[#1E222D]"
            >
              Who We Are
            </motion.h3>
            
            <motion.div variants={fadeInVariants}>
              <p className="text-gray-600 leading-relaxed mb-4">
              SolarEye was founded with a mission to transform how solar energy infrastructure is maintained. By leveraging AI, IoT, and drone technology, we provide proactive solutions that maximize efficiency and sustainability.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team is comprised of passionate innovators, engineers, and visionaries dedicated to creating a cleaner and greener future.
              </p>
            </motion.div>

            <motion.button
              variants={fadeInVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] text-white rounded-xl shadow-md hover:bg-[#1F6396] transition group"
            >
              <span>Learn More</span>
              <ArrowRight 
                className="transition-transform group-hover:translate-x-1" 
                size={20} 
              />
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={heroImageVariants}
            className="relative"
          >
            <div className="overflow-hidden rounded-md  shadow-2xl">
              <motion.img
                src={person}
                alt="Team working on innovative solutions"
                className="w-full object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { 
                    duration: 0.8, 
                    ease: "easeOut" 
                  }
                }}
                whileHover={{
                    scale: 1.05,
                    filter: "brightness(1.0) contrast(1.1)",
                    transition: {
                      duration: 0.4,
                      ease: "easeInOut",
                    },
                }}
                viewport={{ once: true }}
                style={{ 
                  filter: 'brightness(0.9) contrast(1.1)' 
                }}
              />
            </div>
            
            {/* Subtle Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.6, 
                  delay: 0.4,
                  ease: "backOut" 
                }
              }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-blue-100 w-24 h-24 rounded-full shadow-lg flex items-center justify-center"
            >
              <div className="w-12 h-12 bg-[#2485B6] rounded-full"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurStory;
