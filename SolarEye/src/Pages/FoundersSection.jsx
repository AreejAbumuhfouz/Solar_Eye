
import React from "react";
import { motion } from "framer-motion";
import Areej from "../assets/Areej.jpg";
import Maram from "../assets/Maram.jpg";
import Tala from "../assets/Tala.jpg";
import Tasneem from "../assets/Tasneem.jpg";

const FoundersSection = () => {
  const founders = [
    {
      name: "Maram Abumuhfouz",
      description: "Doctor in Nanotechnology engineering and specialized in (optical sensors & solar cells) (Germany- Max Planck) ",
      image: Maram,
      email: "marammuhfouz@outlook.com",
      linkedin: "https://www.linkedin.com/in/m%C3%A4ram-a-muhfouz-639202210/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Tala Younes",
      description: "Electrical engineer (AI and electronics department ) and creative design and innovation lecturer ( UAE-MOE)",
      email: "tala.younes@ese.gov.ae",
      image: Tala,
      linkedin: "https://www.linkedin.com/in/tala-younes-b02b65122/",
    },
    {
      name: "Tasneem Harahsheh",
      description: "Master mechatronic Engineer MIT Inventors Under 35 award(Qatar-moe)",
      image: Tasneem,
      email: "Tasneem.harahsha@gmail.com",
      linkedin: "https://www.linkedin.com/in/tasneem-harahsheh-680942121/",
    },
    {
      name: "Areej Abumuhfouz",
      description: "Full Stack Developer specializing in e-commerce platforms, secure authentication, and database management.",
      image: Areej,
      email: "areejabumahfouz@gmail.com",
      linkedin: "www.linkedin.com/in/areejabumuhfouz",
    },
  ];

  return (
    <motion.div
      className="py-24 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 15,
          stiffness: 120,
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1C1F2D]"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Meet the Founders
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-xl text-gray-700 mb-16"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We are four passionate women engineers from Jordan who are transforming solar infrastructure monitoring through innovative drone technology.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-8 ">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="bg-white  rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: index * 0.2,
                  type: "spring",
                  damping: 15,
                  stiffness: 120,
                },
              }}
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${founder.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#185B8D] mb-2">
                  {founder.name}
                </h3>
                <p className="text-gray-600 mb-4 h-24 overflow-hidden">{founder.description}</p>

                <div className="flex justify-between space-x-2">
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-white bg-[#185B8D] hover:bg-[#2A7EB3] rounded-md transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 6.04a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <span>Email</span>
                  </a>

                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-white bg-[#0A66C2] hover:bg-[#0D7ECA] rounded-md transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zm-9 14h-2v-5h2v5zm-1-6.3a1.16 1.16 0 111.15-1.16 1.16 1.16 0 01-1.15 1.16zm8 6.3h-2v-2.88c0-1.67-2-1.54-2 0V17h-2v-5h2v.8c.92-1.7 4-1.83 4 1.63V17z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FoundersSection;
