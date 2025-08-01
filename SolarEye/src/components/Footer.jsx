


import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Twitter, Linkedin, Instagram, MapPin, Phone, ChevronRight } from 'lucide-react';
import Logo from "../assets/CircleLogo.png";

const ShaheenFooter = () => {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      x: 10,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const socialLinks = [
    { 
      icon: Twitter, 
      href: "https://twitter.com/shaheen",
      color: "#1DA1F2",
      name: "Twitter"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/shaheen",
      color: "#0077B5",
      name: "LinkedIn"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/shaheen",
      color: "#E4405F",
      name: "Instagram"
    },
  ];

  const footerNavigation = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "Features", href: "/features" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contactus" },
  ];

  const serviceCategories = [
    "Drone Technology",
    "Optical Sensors",
    "Solar Solutions",
    "AI & Machine Learning",
    "Innovative Design"
  ];
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#252B3B] border-t border-gray-100 py-16"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-4 gap-12"
        >
          {/* Company Overview */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-1"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                rotate: 3,
                transition: { duration: 0.3 }
              }}
              className="mb-6 flex justify-center"
            >
              <img 
                src={Logo} 
                alt="SolarEye Logo" 
                className="w-36 h-36 object-contain" 
              />
            </motion.div>
            <p className="text-gray-200 text-center md:text-left text-sm leading-relaxed">
            SolarEye delivers advanced, AI-powered drones for precise, innovative solutions.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center md:justify-start space-x-4 mt-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    color: social.color,
                    transition: { 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-200 hover:text-blue-600 transition-all"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-[#54AAD2] border-b pb-2">
              Quick Links
            </h4>
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              {footerNavigation.map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.a 
                    href={item.href} 
                    className="group flex items-center text-gray-200 hover:text-[#54AAD2] text-sm transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <ChevronRight 
                      className="mr-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" 
                    />
                    {item.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-[#54AAD2] border-b pb-2">
              Our Services
            </h4>
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              {serviceCategories.map((service, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.a 
                    href="#" 
                    className="group flex items-center text-gray-200 hover:text-[#54AAD2] text-sm transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <ChevronRight 
                      className="mr-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#46A9B9]" 
                    />
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-[#54AAD2] border-b pb-2">
              Contact Us
            </h4>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="space-y-4"
            >
              {[
                {
                  icon: Mail,
                  iconColor: "text-blue-500",
                  content: "support@SolarEye.com",
                  href: "mailto:info@SolarEye.com"
                },
                {
                  icon: Phone,
                  iconColor: "text-green-500",
                  content: "+1 (555) 123-4567"
                },
                {
                  icon: MapPin,
                  iconColor: "text-red-500 ",
                  content: "123 Tech Avenue, Innovation Park, Silicon Valley, CA 94000"
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-center"
                >
                  <contact.icon className={`mr-3 ${contact.iconColor} w-5 h-5`} />
                  {contact.href ? (
                    <a 
                      href={contact.href} 
                      className="text-gray-200 text-sm hover:text-[#54AAD2] transition-colors"
                    >
                      {contact.content}
                    </a>
                  ) : (
                    <span className="text-gray-200 text-sm">
                      {contact.content}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

       
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
  className="mt-12 pt-6 border-t text-center"
>
  <p className="text-gray-300 text-l">
    © {new Date().getFullYear()} SolarEye Technologies. All Rights Reserved.
    Hosted by
    <motion.span
      whileHover={{
        scale: 1.1,
        color: "#3B82F6"
      }}
      className="ml-2 text-gray-400 inline-block"
    >
      
      <a
        href="https://jaguarmediagroup.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-500 transition-colors"
      >
        Jaguar Media Group LLC
      </a>
    </motion.span>
  </p>
</motion.div>



      </div>
    </motion.footer>
  );
};

export default ShaheenFooter;