"use client";
import React from "react";
import { useInView,motion } from "framer-motion";
import { useRef } from "react";
import { Folder,ClipboardIcon, ClipboardList, ClipboardEdit} from "lucide-react";
import { projects } from "../resources/Data";


export default function Projects() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} id="projects" className="py-24 mt-28 text-white">
      <div className="container mx-auto px-4">
      <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Folder className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Projects</h2>
          </motion.div>
          <div className="w-24 h-1.5 mb-10 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto rounded-full" />
      </div>    
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
    
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-10/12 h-auto mx-auto"
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
