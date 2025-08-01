import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  ShoppingCart, 
  CreditCard, 
  Menu ,MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OverviewPage from './OverView';
import Billing from './Billing';
import Costomers from './Costomers';
import Orders from './Orders';
import AdminChatPage from './ChatBotAdmin';
const SolarEyeDashboard = () => {
  const [activePage, setActivePage] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigationItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Overview', page: 'overview' },
    { icon: <Users className="w-5 h-5" />, label: 'Customers', page: 'customers' },
    { icon: <ShoppingCart className="w-5 h-5" />, label: 'Orders', page: 'orders' },
    { icon: <CreditCard className="w-5 h-5" />, label: 'Billing', page: 'billing' },
    { 
      icon: <MessageSquare className="w-5 h-5" />, 
      label: 'Admin Chat', 
      page: 'AdminChatPage' 
    },  ];

  const renderPageContent = () => {
    switch (activePage) {
      case 'overview': return <OverviewPage />;
      case 'customers': return <Costomers />;
      case 'orders': return <Orders />;
      case 'billing': return <Billing />;
      case 'AdminChatPage': return <AdminChatPage />;
      default: return null;
    }
  };

  return (
    <div className="flex min-h-screen ">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-blue-600 text-white p-2 rounded-full"
        aria-label="Toggle Sidebar"
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -250 }}
        animate={{
          x: isSidebarOpen || window.innerWidth >= 768 ? 0 : -250,
        }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed md:relative z-40 w-[250px] bg-white shadow-xl h-screen"
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-blue-600">SolarEye</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            {navigationItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setActivePage(item.page);
                  if (window.innerWidth < 768) setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center p-3 mb-3 rounded-lg 
                  ${
                    activePage === item.page
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-blue-100'
                  } transition-colors duration-200`}
              >
                <span className="mr-4">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="flex-1 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default SolarEyeDashboard;
