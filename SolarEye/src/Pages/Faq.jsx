

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Satellite, ChevronDown, ChevronUp, Search, 
  Filter, HelpCircle, Globe, Cpu, Sun
} from 'lucide-react';
import NavBar from '../components/NavBar';
import ShaheenFooter from '../components/Footer';

const faqData = [
  {
    category: "Drone Technology",
    questions: [
      {
        question: "How do Shaheen's drones inspect solar panels?",
        answer: "Our advanced AI-powered drones use high-resolution thermal and visual cameras to conduct comprehensive solar panel inspections. They autonomously navigate solar farms, capturing detailed thermal imaging and using machine learning algorithms to detect micro-cracks, hotspots, dirt accumulation, and potential efficiency losses with unprecedented precision.",
        tags: ["ai", "thermal imaging", "autonomous"]
      },
      {
        question: "What makes Shaheen's drone technology unique?",
        answer: "Shaheen combines cutting-edge AI, advanced thermal imaging, and autonomous robotics. Our drones feature real-time edge computing, allowing instant data processing, machine learning-driven anomaly detection, and predictive maintenance insights. This approach reduces human intervention and provides more accurate, comprehensive solar panel health assessments.",
        tags: ["innovation", "machine learning", "efficiency"]
      }
    ]
  },
  {
    category: "Technical Capabilities",
    questions: [
      {
        question: "What is the inspection accuracy of Shaheen's drones?",
        answer: "Our AI-powered drones achieve an industry-leading 99.7% inspection accuracy. By utilizing advanced machine learning algorithms and high-resolution thermal sensors, we can detect even the most subtle solar panel anomalies that might be missed by traditional inspection methods.",
        tags: ["accuracy", "machine learning", "precision"]
      },
      {
        question: "How quickly can Shaheen's drones cover a solar farm?",
        answer: "Our autonomous drones can inspect up to 10 hectares per hour, significantly outperforming manual inspection methods. The advanced navigation systems and optimized flight paths ensure comprehensive coverage while minimizing battery consumption and operational time.",
        tags: ["efficiency", "speed", "autonomous"]
      }
    ]
  },
  {
    category: "Environmental Impact",
    questions: [
      {
        question: "How does Shaheen contribute to sustainable energy?",
        answer: "By using AI-powered drone technology, we significantly reduce the carbon footprint of solar panel maintenance. Our drones minimize human travel, optimize energy consumption, and help solar installations operate at peak efficiency. This approach accelerates the transition to clean, renewable energy by making solar infrastructure more intelligent and sustainable.",
        tags: ["sustainability", "green technology", "renewable energy"]
      },
      {
        question: "Are Shaheen's drones environmentally friendly?",
        answer: "Absolutely. Our drones are designed with sustainability at their core. We use electric batteries, optimize flight paths to reduce energy consumption, and continuously work on minimizing the environmental impact of our technology. The precision of our inspections also helps improve overall solar panel efficiency, contributing to a greener future.",
        tags: ["eco-friendly", "electric", "energy efficiency"]
      }
    ]
  }
];

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const categories = [...new Set(faqData.map(section => section.category))];
  const allTags = [...new Set(faqData.flatMap(section => section.questions.flatMap(q => q.tags)))];

  const filteredFAQs = useMemo(() => {
    return faqData
      .map(section => ({
        ...section,
        questions: section.questions.filter(question => 
          (searchTerm === '' || 
           question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           question.answer.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (selectedCategories.length === 0 || 
           selectedCategories.includes(section.category)) &&
          (selectedTags.length === 0 || 
           selectedTags.some(tag => question.tags.includes(tag)))
       ) }))
      .filter(section => section.questions.length > 0);
  }, [searchTerm, selectedCategories, selectedTags]);

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const toggleQuestion = (questionId) => {
    setOpenQuestionId(prev => prev === questionId ? null : questionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <NavBar />
      <div className="container mx-auto px-4 pb-12 pt-24">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center bg-blue-100/70 text-blue-800 px-4 py-2 rounded-full">
            <Satellite className="mr-2 text-blue-600" size={24} />
            SolarEye AI Solar Drone Technology
          </div>
          <h1 className="text-5xl font-black text-gray-900 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
            Intelligent Solar Inspection FAQs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered drone technology is revolutionizing solar panel maintenance and efficiency through intelligent, autonomous solutions.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          <div className="relative max-w-3xl mx-auto">
            <input 
              type="text" 
              placeholder="Search FAQs by keywords..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 pl-12 border-2 border-blue-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" size={24} />
          </div>

          <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto">
            <div className="flex-1">
              <h3 className="font-semibold mb-3 flex items-center text-gray-700">
                <Filter className="mr-2 text-blue-600" size={20} />
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm transition-all shadow-sm ${
                      selectedCategories.includes(category)
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-3 flex items-center text-gray-700">
                <HelpCircle className="mr-2 text-green-600" size={20} />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <motion.button
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleTag(tag)}
                    className={`px-2 py-1 rounded-full text-xs transition-all shadow-sm ${
                      selectedTags.includes(tag)
                        ? 'bg-green-600 text-white'
                        : 'bg-green-100 text-green-800 hover:bg-green-200'
                    }`}
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {filteredFAQs.map((section, sectionIndex) => (
            <motion.div 
              key={section.category} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex items-center">
                {section.category === "Drone Technology" && <Satellite className="mr-3 text-blue-600" size={28} />}
                {section.category === "Technical Capabilities" && <Cpu className="mr-3 text-green-600" size={28} />}
                {section.category === "Environmental Impact" && <Globe className="mr-3 text-blue-600" size={28} />}
                <h2 className="text-2xl font-bold text-gray-800">{section.category}</h2>
              </div>
              {section.questions.map((faq, questionIndex) => {
                const uniqueId = `${sectionIndex}-${questionIndex}`;
                return (
                  <motion.div 
                    key={uniqueId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-b last:border-b-0 hover:bg-blue-50/50 transition-colors"
                  >
                    <motion.button 
                      onClick={() => toggleQuestion(uniqueId)}
                      className="w-full flex justify-between items-center p-6 text-left group"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center space-x-4 flex-grow">
                        <Sun className="text-yellow-500 group-hover:text-yellow-600 transition-colors" size={24} />
                        <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                          {faq.question}
                        </span>
                      </div>
                      <motion.div 
                        animate={{ rotate: openQuestionId === uniqueId ? 180 : 0 }}
                        className="text-blue-500"
                      >
                        {openQuestionId === uniqueId ? (
                          <ChevronUp size={24} />
                        ) : (
                          <ChevronDown size={24} />
                        )}
                      </motion.div>
                    </motion.button>
                    <AnimatePresence>
                      {openQuestionId === uniqueId && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-6 text-gray-700 bg-blue-50/30"
                        >
                          <p className="leading-relaxed">{faq.answer}</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {faq.tags.map(tag => (
                              <span 
                                key={tag} 
                                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </motion.div>

        {/* No Results State */}
        {filteredFAQs.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto"
          >
            <HelpCircle className="mx-auto mb-6 text-gray-300" size={64} />
            <p className="text-xl text-gray-600">
              No FAQs match your search or filter criteria.
            </p>
          </motion.div>
        )}

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-10 text-center max-w-4xl mx-auto mt-12 shadow-2xl"
        >
          <h3 className="text-4xl font-black mb-4 text-white">
            Need More Information?
          </h3>
          <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg">
            Our team of drone and solar technology experts is ready to provide detailed insights about SolarEye's innovative AI-powered solar inspection solutions.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg text-lg"
          >
            Contact SolarEye Drone Solutions
          </motion.button>
        </motion.div>
      </div>
      <ShaheenFooter/>
    </div>
  );
};

export default FAQPage;