"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../resources/Data";



export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section ref={ref} id="certifications" className="pb-24 scroll-mt-28 mt-28">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Award className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Certifications</h2>
          </motion.div>
          <div className="w-24 h-1.5 mb-10 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto rounded-full" />
        
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Professional certifications that validate my expertise in cloud technologies and development.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 grid-cols-1 md:grid-cols-2"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-xl overflow-hidden p-6 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.8 }}
                      className="relative z-10"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-32 h-32 object-contain filter drop-shadow-lg"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full transform -translate-y-1/2"></div>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-4">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">{cert.description}</p>

                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Certification
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}