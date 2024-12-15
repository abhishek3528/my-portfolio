"use client";
import React from 'react'
import Image from "next/image";
import { skillsData } from '../resources/Data';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers } from "lucide-react";

const Skills = () => {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className='mt-28 scroll-mt-28 text-white ' id='skills'>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
          </motion.div>
          <div className="w-24 h-1.5 mb-10 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto rounded-full" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
             >
          A diverse and robust skill set enabling the development of innovative solutions and driving success across projects.
          </motion.p>   
        </div>
        <div className='flex flex-wrap items-center justify-center gap-4'>

           {skillsData.map((skill,index) => (
            <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={index}
            className='text-center'>
                <div className="rounded-2xl border-2 border-teal-700  p-4 backdrop-blur-2xl">
                 <Image src={`/images/skills/${skill.icon}`} alt={skill.alt_name} 
                 width={50} 
                 height={50} 
                 className="sm:w-20 sm:h-20 w-12 h-12" />

                </div>
                <label className="text-sm sm:text-base">{skill.name}</label>
            </motion.div>
           ))
           }
            
        </div>
    </div>
  )
}

export default Skills