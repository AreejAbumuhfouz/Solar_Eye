
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Zap, 
  CloudSun, 
  Battery, 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Star, 
  Tag, 
  PlusCircle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ShaheenFooter from '../components/Footer';
// Utility Function for Price Formatting
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

// Service Icon Mapper
const ServiceIconMapper = {
  Partial: CloudSun,
  Full: Sun,
  Premium: Zap
};


// Service Card Component
const ServiceCard = ({ service, onLearnMore, onBuyNow }) => {
  const IconComponent = ServiceIconMapper[service.packageName] || Battery;
  const handleLearnMore = (service) => {
    const token = Cookies.get('token'); // Replace 'token' with your actual cookie name
  
    if (token) {
      // Open the modal if the token exists
      onLearnMore(service); // Call your onLearnMore function to open the modal
    } else {
      // Show SweetAlert box if the token does not exist
      Swal.fire({
        title: 'You should log in now.',
        text: 'Please log in to access more details.',
        icon: 'warning',
        background: '#1C1F2D', // Dark background for the modal
      color: '#ffffff',
      confirmButtonColor: '#248DC0', // Green color for "Login Now" button
      cancelButtonColor: '#f44336',
        showCancelButton: true,
        confirmButtonText: 'Login Now',
        cancelButtonText: 'Cancel',
        reverseButtons: true, // To reverse the positions of the buttons
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to login page or trigger the login flow
          window.location.href = '/login'; // Change this to the actual login page route
        } else {
          // Handle if the user clicks "Cancel" (optional)
          console.log('User canceled login');
        }
      });
    }
  };
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }}
    className={`
      relative overflow-hidden rounded-3xl shadow-2xl p-6 
      ${service.packageName === 'Premium' 
        ? 'bg-gradient-to-br from-[#1C1F2D] to-[#248DC0] text-white' 
        : 'bg-white border-2 border-gray-100'} 
      transform transition-all duration-300 hover:scale-105 hover:shadow-xl 
      flex flex-col justify-between h-[400px]  // Fixed height for consistent layout
    `}
  >
    {/* Premium Badge */}
    {service.packageName === 'Premium' && (
      <div className="absolute top-4 right-4 flex items-center bg-yellow-400 text-[#1C1F2D] px-3 py-1 rounded-full text-sm font-bold">
        <Star className="w-4 h-4 mr-2" />
        Best Value
      </div>
    )}
  
    <div className="flex items-center mb-4">
      <IconComponent 
        className={`
          w-16 h-16 
          ${service.packageName === 'Premium' ? 'text-yellow-300' : 'text-green-500'}
        `} 
      />
      <h2 className={`
        text-2xl font-bold ml-4 
        ${service.packageName === 'Premium' ? 'text-white' : 'text-gray-800'}
      `}>
        {service.packageName}
      </h2>
    </div>
  
    <p className={`
      mb-4 text-sm min-h-[60px]
      ${service.packageName === 'Premium' ? 'text-gray-200' : 'text-gray-600'}
    `}>
      {service.description}
    </p>
  
    <div className="space-y-2 mb-4">
      {service.features.slice(0, 3).map((feature, index) => (
        <div 
          key={index} 
          className="flex items-center"
        >
          <CheckCircle 
            className={`
              w-5 h-5 mr-2 
              ${service.packageName === 'Premium' ? 'text-yellow-300' : 'text-green-500'}
            `} 
          />
          <span className={`
            text-sm 
            ${service.packageName === 'Premium' ? 'text-white' : 'text-gray-700'}
          `}>
            {feature}
          </span>
        </div>
      ))}
    </div>
  
    <div className="mt-auto flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <span className={`
          text-3xl font-extrabold 
          ${service.packageName === 'Premium' 
            ? 'text-yellow-300' 
            : 'text-[#1C1F2D]'}
        `}>
          {formatCurrency(service.price)} /<span className={`
          text-sm font-medium
          ${service.packageName === 'Premium' ? 'text-gray-200' : 'text-gray-500'}
        `}>
          {service.duration}
        </span>
        </span>
      </div>


<motion.button 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => handleLearnMore(service)}
  className={`
    flex items-center justify-center space-x-2 w-full py-3 rounded-xl transition duration-300
    ${service.packageName === 'Premium'
      ? 'bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center mx-auto space-x-2 hover:bg-[#3A9AD3] transition-all shadow-lg'
      : 'bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] text-white px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center mx-auto space-x-2 hover:bg-[#3A9AD3] transition-all shadow-lg'
    }
  `}
>
  <span>Learn More</span>
</motion.button>
    </div>
  </motion.div>
  
  );
};

// Main Services Page
const SolarServicesPage = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [filters, setFilters] = useState({
    packageName: '',
    minPrice: 0,
    maxPrice: 1000,
    duration: '',
  });

  const navigate = useNavigate();

  // Fetch Services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services');
        setServices(response.data);
        setFilteredServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);
 
  

  // Filter Services
  useEffect(() => {
    const filtered = services.filter(service => 
      (!filters.packageName || service.packageName === filters.packageName) &&
      service.price >= filters.minPrice &&
      service.price <= filters.maxPrice &&
      (!filters.duration || service.duration === filters.duration)
    );
    setFilteredServices(filtered);
  }, [filters, services]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleBuyNow = (service) => {
    sessionStorage.clear();
    sessionStorage.setItem('selectedService', JSON.stringify(service));
    navigate('/checkout');
  };

  return (
    <div>
        <NavBar/>
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
        
      <div className="mx-auto">

      
      
        <motion.div 
  initial={{ y: -50, opacity: 0 }} 
  animate={{ y: 0, opacity: 1 }} 
  className="bg-gradient-to-r from-[#272D3F] to-[#185B8D] text-white px-12 pb-20 pt-32 mb-12 text-center"
>
  {/* Heading and Icon */}
  <div className="flex items-center justify-center mb-8 space-x-4">
    <Shield className="w-16 h-16 text-white" />
    <h1 className="text-4xl font-bold mb-4">
      <span className="text-[#185B8D]">SolarEye</span> Drone Solar Solutions
    </h1>
  </div>

  {/* Subheading */}
  <p className="text-xl max-w-2xl mx-auto">
    Revolutionary drone technology transforming solar panel maintenance and performance optimization
  </p>
</motion.div>


        {/* Filters Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-12 mx-20"
        >
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Package Type
              </label>
              <select 
                name="packageName"
                onChange={handleFilterChange}
                className="w-full p-3 border-2 border-[#1C1F2D] rounded-xl focus:ring-2 focus:ring-[#248DC0]"
              >
                <option value="">All Packages</option>
                <option value="Partial">Partial</option>
                <option value="Full">Full</option>
                <option value="Premium">Premium</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Min Price: {formatCurrency(filters.minPrice)}
              </label>
              <input 
                type="range"
                name="minPrice"
                min="0"
                max="1000"
                value={filters.minPrice}
                onChange={handleFilterChange}
                className="w-full h-3 bg-[#248DC0] rounded-full appearance-none mt-4"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Price: {formatCurrency(filters.maxPrice)}
              </label>
              <input 
                type="range"
                name="maxPrice"
                min="0"
                max="1000"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                className="w-full h-3 bg-[#248DC0] rounded-full appearance-none mt-4"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <select 
                name="duration"
                onChange={handleFilterChange}
                className="w-full p-3 border-2 border-[#1C1F2D] rounded-xl focus:ring-2 focus:ring-[#248DC0]"
              >
                <option value="">All Durations</option>
                <option value="per month">Per Month</option>
                <option value="per year">Per Year</option>
                <option value="per week">Per Week</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mx-20 mb-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.map(service => (
            <ServiceCard 
              key={service._id} 
              service={service}
              onLearnMore={setSelectedService}
              onBuyNow={handleBuyNow}
            />
          ))}
        </motion.div>

        {/* Modal for Service Details */}
        <AnimatePresence>
          {selectedService && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
              >
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                >
                  <PlusCircle className="w-6 h-6 transform rotate-45" />
                </button>

                <div className="flex items-center mb-6">
                  {React.createElement(ServiceIconMapper[selectedService.packageName] || Battery, {
                    className: "w-16 h-16 mr-4 text-green-500"
                  })}
                  <h2 className="text-4xl font-bold text-gray-800">
                    {selectedService.packageName}
                  </h2>
                </div>

                <img 
                  src={selectedService.icon} 
                  alt={selectedService.packageName} 
                  className="w-full h-64 object-cover rounded-2xl mb-6" 
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#1C1F2D] mb-4">
                      Description
                    </h3>
                    <p className="text-gray-700">
                      {selectedService.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#1C1F2D] mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li 
                          key={index} 
                          className="flex items-center text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-green-50 p-6 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-[#1C1F2D]">
                        {formatCurrency(selectedService.price)}
                      </h3>
                      <p className="text-gray-600">{selectedService.duration}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleBuyNow(selectedService)}
                      className="bg-[#1C1F2D] text-white px-6 py-3 rounded-xl hover:bg-[#248DC0] flex items-center"
                    >
                      <Tag className="mr-2" />
                      Purchase Package
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
    <ShaheenFooter/>
    </div>
  );
};

export default SolarServicesPage;