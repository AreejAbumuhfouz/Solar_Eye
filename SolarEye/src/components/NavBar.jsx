
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import { 
  Menu, 
  X, 
  Home, 
  BookOpen, 
  DollarSign, 
  Mail, 
  Wrench,
  Sparkles
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../assets/CircleLogo.png";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Memoized nav items for performance
  const navItems = useMemo(() => [
    { 
      name: 'Home', 
      link: 'home', 
      icon: Home, 
      order: 1, 
      path: '/' 
    },
    { 
      name: 'Our Story', 
      link: 'story', 
      icon: BookOpen, 
      order: 2, 
      path: '/our-story' 
    },
    { 
  name: 'Pricing', 
  link: 'pricing', 
  icon: DollarSign, 
  order: 3, 
  path: '/pricing' 
  },
    {
  name: 'Services',
  link: 'services',
  icon: Wrench,
  order: 4,
  path: '/services'
},
    
    { 
      name: 'Contact', 
      link: 'contactus', 
      icon: Mail, 
      order: 5, 
      path: '/contactus' 
    }
  ].sort((a, b) => a.order - b.order), []);

  // Determine active link based on current location
  const activeLink = useMemo(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find(item => item.path === currentPath);
    return activeItem ? activeItem.link : 'home';
  }, [location.pathname, navItems]);

  // Scroll handler with useCallback for optimization
  const handleScroll = useCallback(() => {
    setScrolling(window.scrollY > 30);
  }, []);

  // Check authentication on component mount
  useEffect(() => {
   

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Centralized navigation handler
  const handleNavigation = useCallback((path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  }, [navigate]);

 

  // Memoized animation variants for performance
  const animationVariants = useMemo(() => ({
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }), []);

  return (
    <motion.nav 
      initial={animationVariants.initial}
      animate={animationVariants.animate}
      transition={animationVariants.transition}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolling ? 'bg-[#252B3B] shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
  onClick={() => handleNavigation('/')}
  initial={{ scale: 0.9, opacity: 0 }} 
  animate={{ scale: 1, opacity: 1 }} 
  transition={{ type: "spring", stiffness: 300 }} 
  className="flex items-center space-x-4 cursor-pointer"
>
  <img 
            src={logo} 
            alt="SolarSentinel Logo" 
            className="h-10 w-10 md:h-12 md:w-12 rounded-full" 
          />
          <span className="text-[#2985B3] text-xl font-bold tracking-wider uppercase">
            SolarEye
          </span>
</motion.div>


        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <motion.button
              key={item.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation(item.path)}
              className={`group flex items-center space-x-2 text-sm font-medium uppercase tracking-wider ${activeLink === item.link ? 'text-[#2985B3]' : 'text-gray-200 hover:text-[#2985B3]'} transition-colors duration-300 relative`}
            >
              <item.icon 
                className={`w-4 h-4 ${activeLink === item.link ? 'text-[#2985B3]' : 'text-gray-300'}`} 
              />
              <span>{item.name}</span>
              {activeLink === item.link && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#2985B3]" 
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ type: "spring", stiffness: 300 }} 
              className="flex space-x-3"
            >
              
               <button 
        className="relative bg-blue-600/20 backdrop-blur-sm border border-[#2985B3]/30 hover:border-[#2985B3] text-white flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold tracking-wide transition-all duration-300 transform   group"
        onClick={() => handleNavigation('/contactus')}
      >
       
        <div className="relative">
          <Mail className="w-5 h-5 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          <Sparkles className="w-3 h-3 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 text-yellow-300 animate-pulse transition-opacity duration-300" />
        </div>
        
        {/* Text with gradient effect on hover */}
        <span className="bg-gradient-to-r from-white to-gray-200  bg-clip-text text-transparent transition-all duration-300">
          Get in Touch
        </span>
        
        {/* Animated arrow */}
        <div className="transform group-hover:translate-x-1 transition-transform duration-300">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
        
         </button>
              
            </motion.div>
            
          
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button 
            whileTap={{ scale: 0.9 }} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div 
      initial={{ opacity: 0, height: 0 }} 
      animate={{ opacity: 1, height: 'auto' }} 
      exit={{ opacity: 0, height: 0 }} 
      className="md:hidden bg-[#1a1f2e] px-6 pt-4 pb-6 shadow-lg flex flex-col space-y-4"
    >
      <div className="space-y-4">
        {navItems.map((item) => (
          <motion.button
            key={item.link}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: navItems.findIndex(i => i.link === item.link) * 0.1 }}
            onClick={() => handleNavigation(item.path)}
            className={`w-full flex items-center space-x-3 text-left py-3 px-4 rounded-lg text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${activeLink === item.link ? 'bg-white/10 text-[#2985B3]' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
          >
            <item.icon 
              className={`w-5 h-5 ${activeLink === item.link ? 'text-[#2985B3]' : 'text-gray-500'}`} 
            />
            <span>{item.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Get in Touch button at the bottom */}
      <motion.button 
        whileTap={{ scale: 0.95 }}
        onClick={() => handleNavigation('/contactus')}
        className="relative bg-blue-600/20 backdrop-blur-sm border border-[#2985B3]/30 hover:border-[#2985B3] text-white flex items-center space-x-2 px-4 py-2 rounded-full font-semibold tracking-wide transition-all duration-300 mt-4"
      >
        
        <div className="relative">
          <Mail className="w-5 h-5 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          <Sparkles className="w-3 h-3 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 text-yellow-300 animate-pulse transition-opacity duration-300" />
        </div>
        
        {/* Text with gradient effect on hover */}
        <span className="bg-gradient-to-r from-white to-gray-200  bg-clip-text text-transparent transition-all duration-300">
          Get in Touch
        </span>
        
        {/* Animated arrow */}
        <div className="transform group-hover:translate-x-1 transition-transform duration-300">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </motion.button>
    </motion.div>
  )}
</AnimatePresence>

    </motion.nav>
  );
};

export default NavBar;