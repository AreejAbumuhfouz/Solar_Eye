
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  X, 
  Eye, 
  EyeOff 
} from 'lucide-react';
import bg from "../assets/VedioBG.mp4";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      Cookies.set('token', response.data.token, { expires: 1, path: '/' });
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Invalid credentials');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        damping: 15
      }
    }
  };

  return (
    
<div
  className="min-h-screen  flex items-center justify-center px-4 py-12 bg-cover bg-center relative"
  style={{ backgroundImage: `url(${bg})` }} // Corrected this line
> 

<video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src={bg} type="video/mp4" />
        </video>
     <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden relative z-10"
      >
        <div className="bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] p-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Welcome to <span className="text-white">SolarEye</span>
          </h2>
          <p className="text-white/80 mt-2">
            Secure Access to Solar Infrastructure Insights
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-center justify-between"
            >
              <p className="text-red-600">{error}</p>
              <X 
                className="text-red-500 cursor-pointer" 
                onClick={() => setError('')} 
              />
            </motion.div>
          )}

          <div className="relative">
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
                size={20} 
              />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2985B3]/50 transition-all"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <Lock 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
                size={20} 
              />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2985B3]/50 transition-all"
                placeholder="Enter your password"
                required
              />
              {formData.password && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2985B3] transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              )}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center justify-center space-x-2"
          >
            <span>Log In</span>
            <ArrowRight size={20} />
          </motion.button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a 
                href="/signup" 
                className="text-[#2985B3] hover:text-[#4ECDC4] font-semibold transition-colors"
              >
                Sign Up
              </a>
            </p>
            <a 
              href="/forgot-password" 
              className="text-sm text-gray-500 hover:text-[#2985B3] mt-2 inline-block"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;