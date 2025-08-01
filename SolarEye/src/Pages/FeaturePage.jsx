

import React, { useState } from 'react';
import { 
  Satellite, 
  Sun, 
  Zap, 
  Shield, 
  Layers, 
  Thermometer, 
  Database, 
  Eye, 
  FileText, 
  ChevronRight 
} from 'lucide-react';
import ShaheenFooter from '../components/Footer';
import NavBar from '../components/NavBar';
const FeatureSections = [
  {
    id: 'technology',
    title: 'Advanced Drone Technology',
    icon: <Satellite className="text-gray-600" size={40} />,
    features: [
      {
        title: 'AI-Powered Autonomous Drones',
        description: 'Our cutting-edge drones utilize advanced AI algorithms for precise, autonomous solar panel inspections.',
        details: 'Equipped with machine learning capabilities, our drones can navigate complex solar installations with unprecedented accuracy and efficiency.'
      },
      {
        title: 'Multi-Sensor Integration',
        description: 'Comprehensive inspection through multiple sensor technologies.',
        details: 'Thermal, visual, and spectral imaging sensors provide a 360-degree analysis of solar panel health and performance.'
      }
    ]
  },
  {
    id: 'inspection',
    title: 'Comprehensive Inspection Services',
    icon: <Eye className="text-green-600" size={40} />,
    features: [
      {
        title: 'Thermal Performance Analysis',
        description: 'Detect inefficiencies and potential failures before they impact performance.',
        details: 'Our thermal imaging identifies hotspots, micro-cracks, and potential electrical issues with pinpoint accuracy.'
      },
      {
        title: 'Detailed Reporting',
        description: 'Comprehensive, actionable insights for solar panel maintenance.',
        details: 'Receive in-depth reports with visual maps, performance metrics, and recommended maintenance actions.'
      }
    ]
  },
  {
    id: 'environmental',
    title: 'Sustainable Solutions',
    icon: <Shield className="text-emerald-600" size={40} />,
    features: [
      {
        title: 'Reduced Carbon Footprint',
        description: 'Minimizing environmental impact through innovative technology.',
        details: 'Our drone-based approach significantly reduces traditional inspection methods\' carbon emissions and resource consumption.'
      },
      {
        title: 'Energy Efficiency Optimization',
        description: 'Maximizing solar panel performance and longevity.',
        details: 'Precise inspections help identify and resolve issues that could reduce solar panel efficiency, supporting sustainable energy goals.'
      }
    ]
  }
];

const FeaturePage = () => {
  const [activeSection, setActiveSection] = useState(FeatureSections[0].id);

  return (
    <div className="max-w-full mx-auto ">
        <NavBar/>
      {/* Hero Sectionbg-gradient-to-r from-[#185B8D] to-[#4ACEF4] */}
      <div className="bg-gradient-to-r from-[#272D3F] to-[#185B8D] text-white  px-12 pb-20  pt-32  mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4"> <span className='text-[#185B8D]'>SolarEye</span> Drone Solar Solutions</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Revolutionary drone technology transforming solar panel maintenance and performance optimization
        </p>
      </div>

      {/* Navigation and Content Layout */}
      <div className="grid md:grid-cols-3 gap-6 px-20">
        {/* Section Navigation */}
        <div className="space-y-4">
          {FeatureSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg transition-all ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center">
                {section.icon}
                <span className="ml-4 font-semibold text-[#272D3F]">{section.title}</span>
              </div>
              <ChevronRight />
            </button>
          ))}
        </div>

        {/* Active Section Details */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-xl p-8">
          {FeatureSections.map((section) => {
            if (section.id !== activeSection) return null;
            
            return (
              <div key={section.id}>
                <div className="flex items-center mb-6 border-b pb-4">
                  {section.icon}
                  <h2 className="text-3xl font-bold ml-4 text-[#272D3F]">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{feature.description}</p>
                      <p className="text-gray-500 italic">{feature.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Capabilities Overview */}
      <div className="mt-12  p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#272D3F]">
          Technical Capabilities at a Glance
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-6 rounded-lg text-center">
            <Zap className="mx-auto mb-4 text-yellow-500" size={50} />
            <h3 className="font-semibold text-xl mb-2 text-[#272D3F]">High Efficiency</h3>
            <p>Inspect large solar installations 5x faster than traditional methods</p>
          </div>
          <div className="bg-gray-200  p-6 rounded-lg text-center">
            <Thermometer className="mx-auto mb-4 text-red-500" size={50} />
            <h3 className="font-semibold text-xl mb-2 text-[#272D3F]">Thermal Precision</h3>
            <p>Detect temperature variations as small as 0.1°C</p>
          </div>
          <div className="bg-gray-200  p-6 rounded-lg text-center">
            <Database className="mx-auto mb-4 text-purple-500" size={50} />
            <h3 className="font-semibold text-xl mb-2 text-[#272D3F]">Advanced Analytics</h3>
            <p>Machine learning algorithms for predictive maintenance</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-[#185B8D] to-[#4ACEF4] text-white p-12  text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Solar Maintenance?
        </h2>
        <p className="text-xl mb-6">
          Discover how SolarEye's drone technology can optimize your solar infrastructure
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Contact Our Experts
        </button>
      </div>
      <ShaheenFooter/>
    </div>
  );
};

export default FeaturePage;