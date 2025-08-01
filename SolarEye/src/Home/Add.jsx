import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  BarChart, 
  Leaf, 
  ArrowRight, 
  CheckCircle, 
  Layers, 
  Award, 
  Users, 
  Settings 
} from 'lucide-react';

const AdditionalSections = () => {
  const [activeCase, setActiveCase] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const caseStudies = [
    {
      title: "Industrial Solar Farm Optimization",
      location: "California, USA",
      challenge: "Inefficient maintenance leading to 12% energy loss",
      solution: "Implemented AI drone monitoring system",
      impact: "Reduced energy loss to 2%, saved $500,000 annually"
    },
    {
      title: "Commercial Rooftop Solar Installation",
      location: "New York, USA",
      challenge: "Frequent undetected panel degradation",
      solution: "Thermal drone inspection and predictive maintenance",
      impact: "Increased energy efficiency by 18%, extended panel life"
    },
    {
      title: "Utility-Scale Solar Project",
      location: "Texas, USA",
      challenge: "High maintenance costs and operational downtime",
      solution: "Autonomous drone monitoring system",
      impact: "Reduced maintenance costs by 40%, minimized downtime"
    }
  ];

  const sustainabilityMetrics = [
    { 
      icon: Leaf, 
      title: "Carbon Reduction", 
      value: "245,000 tons CO2",
      description: "Annual carbon emissions prevented through optimized solar efficiency"
    },
    { 
      icon: BarChart, 
      title: "Energy Optimization", 
      value: "17.5%", 
      description: "Average increase in solar panel performance efficiency"
    },
    { 
      icon: Clock, 
      title: "Maintenance Time", 
      value: "70% Reduced", 
      description: "Dramatic reduction in manual inspection and maintenance time"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Cutting-Edge Technology",
      description: "Advanced AI and drone technology for precision solar maintenance"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals in solar energy and drone technology"
    },
    {
      icon: Settings,
      title: "Customizable Solutions",
      description: "Tailored approaches for different solar infrastructure needs"
    },
    {
      icon: Layers,
      title: "Comprehensive Monitoring",
      description: "360-degree inspection and predictive maintenance capabilities"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Real-World Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven success across diverse solar infrastructure projects
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div 
                  key={index}
                  className={`bg-gray-100 p-8 rounded-2xl shadow-lg transition 
                    ${activeCase === index ? 'scale-105 shadow-2xl' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setActiveCase(index)}
                  onHoverEnd={() => setActiveCase(null)}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">{study.title}</h3>
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Location:</strong> {study.location}</p>
                    <p><strong>Challenge:</strong> {study.challenge}</p>
                    <p><strong>Solution:</strong> {study.solution}</p>
                    <p className="font-bold text-blue-600">{study.impact}</p>
                  </div>
                  <motion.div 
                    className="mt-6 flex items-center text-blue-600 hover:text-blue-800"
                    whileHover={{ x: 10 }}
                  >
                    <span className="mr-2">View Case Study</span>
                    <ArrowRight />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Metrics Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl font-bold mb-4">
                Sustainability at Scale
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Measuring our impact on solar energy efficiency and environmental preservation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {sustainabilityMetrics.map(({ icon: Icon, title, value, description }, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 p-8 rounded-2xl text-center"
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                >
                  <div className="flex justify-center mb-6">
                    <Icon className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{value}</h3>
                  <p className="text-xl font-semibold text-white/80 mb-2">{title}</p>
                  <p className="text-white/60">{description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Why Choose Our Solution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unique advantages that set our solar drone maintenance solution apart
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {whyChooseUs.map(({ icon: Icon, title, description }, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-2xl text-center shadow-lg"
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: index % 2 === 0 ? 3 : -3,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <div className="flex justify-center mb-6">
                    <Icon className="w-16 h-16 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from industry leaders who have transformed their solar infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Revolutionary technology that has completely transformed our solar maintenance approach.",
                  name: "John Smith",
                  title: "Chief Technology Officer, Global Energy Solutions"
                },
                {
                  quote: "Unprecedented efficiency and precision in solar panel monitoring and maintenance.",
                  name: "Emily Rodriguez",
                  title: "Sustainability Director, SunPower Innovations"
                },
                {
                  quote: "Our energy output has increased by 20% since implementing their drone solution.",
                  name: "Michael Chen",
                  title: "Operations Manager, Green Energy Enterprises"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-100 p-8 rounded-2xl"
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                >
                  <div className="mb-6">
                    <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                    <p className="text-xl italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdditionalSections;