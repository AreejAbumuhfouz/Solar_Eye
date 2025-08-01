import { Cpu, Battery, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TechnologyStackSection() {
  return (
    <section className="min-h-screen py-24 bg-gray-50 flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging advanced technologies to revolutionize solar infrastructure maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { 
              icon: Cpu, 
              title: "AI & Machine Learning", 
              description: "Advanced algorithms for intelligent analysis" 
            },
            { 
              icon: Battery, 
              title: "Drone Technology", 
              description: "High-endurance autonomous drones" 
            },
            { 
              icon: Globe, 
              title: "IoT Connectivity", 
              description: "Real-time data transmission and monitoring" 
            },
            { 
              icon: ShieldCheck, 
              title: "Predictive Maintenance", 
              description: "Proactive issue detection and resolution" 
            },
          ].map(({ icon: Icon, title, description }, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition"
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
            >
              <div className="flex justify-center mb-4">
                <Icon className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
