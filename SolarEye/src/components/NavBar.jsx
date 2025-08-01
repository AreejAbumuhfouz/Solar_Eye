
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import { 
  Menu, 
  X, 
  Home, 
  BookOpen, 
  Zap, 
  DollarSign, 
  HelpCircle, 
  Mail, 
  LogIn, 
  UserPlus, 
  LogOut ,
  User
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../assets/CircleLogo.png";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      name: 'Features', 
      link: 'features', 
      icon: Zap, 
      order: 3, 
      path: '/features' 
    },
    // { 
    //   name: 'Our Services', 
    //   link: 'our-services', 
    //   icon: DollarSign, 
    //   order: 4, 
    //   path: '/our-services' 
    // },
    
    { 
      name: 'Contact', 
      link: 'contactus', 
      icon: Mail, 
      order: 6, 
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
    const checkAuth = () => {
      const token = Cookies.get('token');
      setIsLoggedIn(!!token);
    };

    checkAuth();
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

  // Logout handler with error handling
  const handleLogout = useCallback(() => {
    try {
      Cookies.remove('token');
      setIsLoggedIn(false);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
      // Optionally, add user-friendly error handling
    }
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
        {/* Logo Section */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ type: "spring", stiffness: 300 }} 
          className="flex items-center space-x-4"
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
              className={`group flex items-center space-x-2 text-sm font-medium uppercase tracking-wider ${activeLink === item.link ? 'text-[#2985B3]' : 'text-gray-400 hover:text-[#2985B3]'} transition-colors duration-300 relative`}
            >
              <item.icon 
                className={`w-4 h-4 ${activeLink === item.link ? 'text-[#2985B3]' : 'text-gray-500'}`} 
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
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ type: "spring", stiffness: 300 }} 
              className="flex space-x-3"
            >
              <button 
                className="text-gray-400 flex items-center space-x-2 bg-transparent border border-gray-400 hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium tracking-wider transition duration-300" 
                onClick={() => handleNavigation('/login')}
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
              <button 
                className="text-white flex items-center space-x-2 bg-blue-600/20 border border-blue-600/30 hover:bg-blue-600/30 px-4 py-2 rounded-full text-sm font-medium tracking-wider transition duration-300" 
                onClick={() => handleNavigation('/signup')}
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign Up</span>
              </button>
              
            </motion.div>
          ) : (
            <div className='flex '>

            {/* <button 
                className="text-white flex items-center space-x-2 mr-2 bg-blue-600/20 border border-blue-600/30 hover:bg-blue-600/30 px-4 py-2 rounded-full text-sm font-medium tracking-wider transition duration-300" 
                onClick={() => handleNavigation('/user-profile')}
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </button> */}
            <motion.button 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              whileHover={{ scale: 1.05 }} 
              className="text-white flex items-center space-x-2 bg-red-600/20 hover:bg-red-600/30 border border-red-600/30 px-4 py-2 rounded-full text-sm font-medium tracking-wider transition duration-300" 
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </motion.button>
            </div>
            
          )}
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

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            className="md:hidden bg-[#1a1f2e] px-6 pt-4 pb-6 shadow-lg"
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.findIndex(i => i.link === item.link) * 0.1 }}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center space-x-3 text-left py-3 px-4 rounded-lg text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${activeLink === item.link ? 'bg-white/10 text-#[2985B3]' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                >
                  <item.icon 
                    className={`w-5 h-5 ${activeLink === item.link ? 'text-[#2985B3]' : 'text-gray-500'}`} 
                  />
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;