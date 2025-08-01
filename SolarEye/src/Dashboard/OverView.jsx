import React, { useState } from 'react';
import { 
  Wallet, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  Clock, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const OverviewPage = () => {
  const [timeFrame, setTimeFrame] = useState('monthly');

  // Sample data for charts and metrics
  const revenueData = {
    monthly: [
      { name: 'Jan', revenue: 4000, cost: 2400 },
      { name: 'Feb', revenue: 3000, cost: 1398 },
      { name: 'Mar', revenue: 2000, cost: 9800 },
      { name: 'Apr', revenue: 2780, cost: 3908 },
      { name: 'May', revenue: 1890, cost: 4800 },
      { name: 'Jun', revenue: 2390, cost: 3800 }
    ],
    quarterly: [
      { name: 'Q1', revenue: 12000, cost: 7200 },
      { name: 'Q2', revenue: 9780, cost: 9506 }
    ]
  };

  const keyMetrics = [
    {
      title: "Total Revenue",
      value: "$124,563",
      icon: <Wallet className="text-green-500" />,
      change: "+12.5%"
    },
    {
      title: "Total Customers",
      value: "1,256",
      icon: <Users className="text-blue-500" />,
      change: "+8.2%"
    },
    {
      title: "Total Orders",
      value: "452",
      icon: <ShoppingCart className="text-purple-500" />,
      change: "+15.3%"
    }
  ];

  const topProducts = [
    { name: "Product A", sales: 120, revenue: "$45,000" },
    { name: "Product B", sales: 95, revenue: "$35,700" },
    { name: "Product C", sales: 75, revenue: "$28,200" }
  ];

  return (
    <div className="space-y-8">
      {/* Key Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {keyMetrics.map((metric, index) => (
          <motion.div 
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between"
          >
            <div>
              <h3 className="text-gray-500 text-sm mb-2">{metric.title}</h3>
              <p className="text-2xl font-bold">{metric.value}</p>
              <div className="flex items-center text-sm mt-2">
                {metric.change.startsWith('+') ? (
                  <ChevronUp className="text-green-500 mr-1" size={16} />
                ) : (
                  <ChevronDown className="text-red-500 mr-1" size={16} />
                )}
                <span className={metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {metric.change}
                </span>
              </div>
            </div>
            <div className="bg-blue-50 p-3 rounded-full">
              {metric.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Revenue Chart Section */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Revenue Overview</h2>
          <div className="flex space-x-2">
            {['monthly', 'quarterly'].map((period) => (
              <button
                key={period}
                onClick={() => setTimeFrame(period)}
                className={`
                  px-3 py-1 rounded-full text-sm
                  ${timeFrame === period 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-600'}
                `}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData[timeFrame]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#8884d8" 
              strokeWidth={3}
            />
            <Line 
              type="monotone" 
              dataKey="cost" 
              stroke="#82ca9d" 
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top Products and Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Top Performing Products</h2>
          {topProducts.map((product, index) => (
            <div 
              key={product.name} 
              className="flex justify-between items-center py-3 border-b last:border-b-0"
            >
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-gray-500 text-sm">{product.sales} Sales</p>
              </div>
              <p className="font-bold">{product.revenue}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          {[
            { 
              icon: <Users className="text-blue-500" />, 
              description: "25 new customers joined" 
            },
            { 
              icon: <ShoppingCart className="text-green-500" />, 
              description: "42 new orders processed" 
            },
            { 
              icon: <TrendingUp className="text-purple-500" />, 
              description: "Revenue increased by 12.5%" 
            }
          ].map((activity, index) => (
            <div 
              key={index} 
              className="flex items-center py-3 border-b last:border-b-0"
            >
              <div className="mr-4">{activity.icon}</div>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;