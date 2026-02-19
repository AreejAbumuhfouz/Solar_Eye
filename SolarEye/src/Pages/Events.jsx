import React from "react";
import { motion } from "framer-motion";

const UpcomingEventsSection = () => {
  const events = [
    {
      name: "Change NOW 2026",
      date: "April 2026",
      location: "Paris, France",
      description:
        "The world's leading summit for solutions to global challenges. We'll be showcasing our drone-based solar infrastructure monitoring technology to global innovators, investors, and changemakers.",
      category: "Summit",
      status: "Upcoming",
      link: "https://www.changenow.world/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      className="py-24 bg-gradient-to-br from-[#0D1B2A] via-[#1a2e45] to-[#0D1B2A] relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 120 } }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#185B8D] opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#185B8D] opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-[#5DB8E8] border border-[#5DB8E8]/30 rounded-full bg-[#5DB8E8]/10">
            Where You'll Find Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            We're taking our innovation to the global stage. Come meet us and discover how we're transforming solar infrastructure monitoring.
          </p>
        </motion.div>

        {/* Events */}
        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 hover:border-[#5DB8E8]/40 transition-all duration-500"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, type: "spring", damping: 15, stiffness: 100 }}
              viewport={{ once: true }}
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5DB8E8] to-[#185B8D] rounded-l-2xl" />

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 pl-8">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#185B8D]/30 border border-[#5DB8E8]/20 flex items-center justify-center text-[#5DB8E8] group-hover:bg-[#185B8D]/50 transition-colors">
                  {event.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{event.name}</h3>
                    <span className="px-3 py-0.5 text-xs font-semibold tracking-wide uppercase rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {event.status}
                    </span>
                    <span className="px-3 py-0.5 text-xs font-medium rounded-full bg-[#185B8D]/40 text-[#5DB8E8] border border-[#5DB8E8]/20">
                      {event.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#5DB8E8]">
                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                      </svg>
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#5DB8E8]">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.943-5.228 3.943-9.577a8.25 8.25 0 00-16.5 0c0 4.349 1.998 7.498 3.942 9.577a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742z" clipRule="evenodd" />
                      </svg>
                      {event.location}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0 self-center mt-4 md:mt-0">
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#185B8D] hover:bg-[#2A7EB3] text-white text-sm font-semibold transition-colors whitespace-nowrap"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-gray-500 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          More events coming soon — follow us to stay updated.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default UpcomingEventsSection;
