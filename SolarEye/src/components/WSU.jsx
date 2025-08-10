import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
 
  Layers, 
  Award, 
  Users, 
  Settings 
} from 'lucide-react';

const WhyChooseUs = () => {



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
    <div className="">

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
              Why Choose SolarEye?
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
      {/* <section className="py-24 bg-white">
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
      </section> */}
    </div>
  );
};

export default WhyChooseUs;