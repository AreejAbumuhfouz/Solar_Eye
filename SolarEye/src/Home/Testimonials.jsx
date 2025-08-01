
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';

// Placeholder testimonials data
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Tech Company',
    testimonial: 'This is an amazing product! It helped streamline our workflow and increased our productivity.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Marketing Manager, Digital Agency',
    testimonial: 'A game-changer! We have seen remarkable improvements in our client relationships and project delivery.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Founder, Startup',
    testimonial: 'I highly recommend this service to anyone looking to optimize their operations and grow faster.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1C1F2E]">
          What Our Clients Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <Quote className="text-[#1D6397] mb-4 w-12 h-12" />
              
              {/* Testimonial Text */}
              <p className="text-gray-600 italic mb-6 flex-grow">
                "{testimonial.testimonial}"
              </p>
              
              {/* Client Image */}
              <div className="flex items-center mb-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-blue-100 mr-4"
                />
                <div>
                  {/* Client Name */}
                  <h3 className="font-semibold text-[#1C1F2E]">
                    {testimonial.name}
                  </h3>
                  {/* Client Role */}
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;