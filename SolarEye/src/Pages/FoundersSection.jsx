
// import React from "react";
// import { motion } from "framer-motion";
// import Areej from "../assets/Areej.jpg";
// import Maram from "../assets/Maram.jpg";
// import Tala from "../assets/Tala.jpg";
// import Tasneem from "../assets/Tasneem.jpg";

// const FoundersSection = () => {
//   const founders = [
//     {
//       name: "Maram Abumuhfouz",
//       description: "Doctor in Nanotechnology engineering and specialized in (optical sensors & solar cells) (Germany- Max Planck) ",
//       image: Maram,
//       email: "marammuhfouz@outlook.com",
//       linkedin: "https://www.linkedin.com/in/m%C3%A4ram-a-muhfouz-639202210/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//     },
//     {
//       name: "Tala Younes",
//       description: "Electrical engineer (AI and electronics department ) and creative design and innovation lecturer ( UAE-MOE)",
//       email: "tala.younes@ese.gov.ae",
//       image: Tala,
//       linkedin: "https://www.linkedin.com/in/tala-younes-b02b65122/",
//     },
//     {
//       name: "Tasneem Harahsheh",
//       description: "Master mechatronic Engineer MIT Inventors Under 35 award(Qatar-moe)",
//       image: Tasneem,
//       email: "Tasneem.harahsha@gmail.com",
//       linkedin: "https://www.linkedin.com/in/tasneem-harahsheh-680942121/",
//     },
//     {
//       name: "Areej Abumuhfouz",
//       description: "Full Stack Developer specializing in e-commerce platforms, secure authentication, and database management.",
//       image: Areej,
//       email: "areejabumahfouz@gmail.com",
//       linkedin: "www.linkedin.com/in/areejabumuhfouz",
//     },
//   ];

//   return (
//     <motion.div
//       className="py-24 bg-white"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         transition: {
//           type: "spring",
//           damping: 15,
//           stiffness: 120,
//         },
//       }}
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       <div className="container mx-auto px-6 text-center">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1C1F2D]"
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Meet the Founders
//         </motion.h2>
//         <motion.p
//           className="max-w-3xl mx-auto text-xl text-gray-700 mb-16"
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           We are four passionate women engineers from Jordan who are transforming solar infrastructure monitoring through innovative drone technology.
//         </motion.p>

//         <div className="grid md:grid-cols-4 gap-8 ">
//           {founders.map((founder, index) => (
//             <motion.div
//               key={founder.name}
//               className="bg-white  rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{
//                 opacity: 1,
//                 scale: 1,
//                 transition: {
//                   delay: index * 0.2,
//                   type: "spring",
//                   damping: 15,
//                   stiffness: 120,
//                 },
//               }}
//             >
//               <div
//                 className="h-64 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url('${founder.image}')`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               />
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-[#185B8D] mb-2">
//                   {founder.name}
//                 </h3>
//                 <p className="text-gray-600 mb-4 h-24 overflow-hidden">{founder.description}</p>

//                 <div className="flex justify-between space-x-2">
//                   <a
//                     href={`mailto:${founder.email}`}
//                     className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-white bg-[#185B8D] hover:bg-[#2A7EB3] rounded-md transition-colors"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
//                       <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 6.04a1.5 1.5 0 001.572 0L22.5 6.908z" />
//                     </svg>
//                     <span>Email</span>
//                   </a>

//                   <a
//                     href={founder.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-white bg-[#0A66C2] hover:bg-[#0D7ECA] rounded-md transition-colors"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zm-9 14h-2v-5h2v5zm-1-6.3a1.16 1.16 0 111.15-1.16 1.16 1.16 0 01-1.15 1.16zm8 6.3h-2v-2.88c0-1.67-2-1.54-2 0V17h-2v-5h2v.8c.92-1.7 4-1.83 4 1.63V17z" />
//                     </svg>
//                     <span>LinkedIn</span>
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default FoundersSection;


// import React from "react";
// import { motion } from "framer-motion";
// import Areej from "../assets/Areej.jpg";
// import Maram from "../assets/Maram.jpg";
// import Tala from "../assets/Tala.jpg";
// import Tasneem from "../assets/Tasneem.jpg";

// const FoundersSection = () => {
//   const founders = [
//     {
//       name: "Maram Abumuhfouz",
//       position: "CEO",
//       description:
//         "Doctor in Nanotechnology engineering and specialized in (optical sensors & solar cells) (Germany- Max Planck)",
//       image: Maram,
//       email: "marammuhfouz@outlook.com",
//       linkedin:
//         "https://www.linkedin.com/in/m%C3%A4ram-a-muhfouz-639202210/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//     },
//     {
//       name: "Tala Younes",
//       position: "Head of AI",
//       description:
//         "Electrical engineer (AI and electronics department) and creative design and innovation lecturer (UAE-MOE)",
//       email: "tala.younes@ese.gov.ae",
//       image: Tala,
//       linkedin: "https://www.linkedin.com/in/tala-younes-b02b65122/",
//     },
//     {
//       name: "Tasneem Harahsheh",
//       position: "Head of R&D",
//       description:
//         "Master Mechatronic Engineer, MIT Inventors Under 35 award (Qatar-MOE)",
//       image: Tasneem,
//       email: "Tasneem.harahsha@gmail.com",
//       linkedin: "https://www.linkedin.com/in/tasneem-harahsheh-680942121/",
//     },
//     {
//       name: "Areej Abumuhfouz",
//       position: "Head of Programming",
//       description:
//         "Full Stack Developer specializing in e-commerce platforms, secure authentication, and database management.",
//       image: Areej,
//       email: "areejabumahfouz@gmail.com",
//       linkedin: "www.linkedin.com/in/areejabumuhfouz",
//     },
//   ];

//   return (
//     <motion.div
//       className="py-24 bg-white"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//         transition: {
//           type: "spring",
//           damping: 15,
//           stiffness: 120,
//         },
//       }}
//       viewport={{ once: true, amount: 0.2 }}
//     >
//       <div className="container mx-auto px-6 text-center">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1C1F2D]"
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Meet the Founders
//         </motion.h2>
//         <motion.p
//           className="max-w-3xl mx-auto text-xl text-gray-700 mb-16"
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           We are four passionate women engineers from Jordan who are
//           transforming solar infrastructure monitoring through innovative drone
//           technology.
//         </motion.p>

//         <div className="grid md:grid-cols-4 gap-8">
//           {founders.map((founder, index) => (
//             <motion.div
//               key={founder.name}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{
//                 opacity: 1,
//                 scale: 1,
//                 transition: {
//                   delay: index * 0.2,
//                   type: "spring",
//                   damping: 15,
//                   stiffness: 120,
//                 },
//               }}
//             >
//               <div
//                 className="h-64 bg-cover bg-center"
//                 style={{
//                   backgroundImage: `url('${founder.image}')`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               />
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-[#185B8D] mb-1">
//                   {founder.name}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-3">
//                   {founder.position}
//                 </p>
//                 <p className="text-gray-600 mb-4 h-24 overflow-hidden">
//                   {founder.description}
//                 </p>

//                 <div className="flex justify-between space-x-2">
//                   <a
//                     href={`mailto:${founder.email}`}
//                     className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-white bg-[#185B8D] hover:bg-[#2A7EB3] rounded-md transition-colors"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
//                       <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 6.04a1.5 1.5 0 001.572 0L22.5 6.908z" />
//                     </svg>
//                     <span>Email</span>
//                   </a>

//                   <a
//                     href={founder.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-white bg-[#0A66C2] hover:bg-[#0D7ECA] rounded-md transition-colors"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                       fill="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zm-9 14h-2v-5h2v5zm-1-6.3a1.16 1.16 0 111.15-1.16 1.16 1.16 0 01-1.15 1.16zm8 6.3h-2v-2.88c0-1.67-2-1.54-2 0V17h-2v-5h2v.8c.92-1.7 4-1.83 4 1.63V17z" />
//                     </svg>
//                     <span>LinkedIn</span>
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default FoundersSection;
import React, { useState } from "react";
import { Mail, Linkedin, Award, MapPin } from "lucide-react";

const FoundersSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const founders = [
    {
      name: "Maram Abumuhfouz",
      position: "CEO",
      description:
        "Doctor in Nanotechnology engineering and specialized in (optical sensors & solar cells) (Germany- Max Planck)",
      image: "/assets/Maram.jpg", // Using your original image reference
      email: "marammuhfouz@outlook.com",
      linkedin: "https://www.linkedin.com/in/m%C3%A4ram-a-muhfouz-639202210/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Tala Younes",
      position: "Head of AI",
      description:
        "Electrical engineer (AI and electronics department) and creative design and innovation lecturer (UAE-MOE)",
      email: "tala.younes@ese.gov.ae",
      image: "/assets/Tala.jpg", // Using your original image reference
      linkedin: "https://www.linkedin.com/in/tala-younes-b02b65122/",
    },
    {
      name: "Tasneem Harahsheh",
      position: "Head of R&D",
      description:
        "Master Mechatronic Engineer, MIT Inventors Under 35 award (Qatar-MOE)",
      image: "/assets/Tasneem.jpg", // Using your original image reference
      email: "Tasneem.harahsha@gmail.com",
      linkedin: "https://www.linkedin.com/in/tasneem-harahsheh-680942121/",
    },
    {
      name: "Areej Abumuhfouz",
      position: "Head of Programming",
      description:
        "Full Stack Developer specializing in e-commerce platforms, secure authentication, and database management.",
      image: "/assets/Areej.jpg", // Using your original image reference
      email: "areejabumahfouz@gmail.com",
      linkedin: "www.linkedin.com/in/areejabumuhfouz",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#185B8D]/10 rounded-full mb-6">
            <Award className="w-8 h-8 text-[#185B8D]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1F2D] mb-4">
            Leadership Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#185B8D] to-[#2A7EB3] mx-auto mb-6"></div>
          <p className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
            Meet our distinguished team of four visionary engineers from Jordan, revolutionizing 
            solar infrastructure monitoring through cutting-edge drone technology and AI-powered solutions.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-[600px] flex flex-col ${
                hoveredCard === index ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Profile Image */}
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Name & Position */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#185B8D] mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-3">
                    {founder.position}
                  </p>
                </div>

                {/* Description - Fixed height area */}
                <div className="mb-6 flex-grow">
                  <p className="text-sm text-gray-600 leading-relaxed h-20 overflow-hidden">
                    {founder.description}
                  </p>
                </div>

                {/* Contact Actions - Always at bottom */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-[#185B8D] hover:bg-[#1C6FA0] rounded-lg transition-colors duration-200"
                    title={`Email ${founder.name}`}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-[#0A66C2] hover:bg-[#004182] rounded-lg transition-colors duration-200"
                    title={`View ${founder.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#185B8D] mb-2">15+</div>
              <div className="text-sm lg:text-base text-gray-600">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#185B8D] mb-2">3</div>
              <div className="text-sm lg:text-base text-gray-600">Countries Represented</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#185B8D] mb-2">4</div>
              <div className="text-sm lg:text-base text-gray-600">Technical Disciplines</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-[#185B8D] mb-2">1</div>
              <div className="text-sm lg:text-base text-gray-600">MIT Innovation Award</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default FoundersSection;
