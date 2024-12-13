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
    <div ref={ref} className='mt-28 scroll-mt-28 ' id='skills'>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Layers className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Skills</h2>
          </motion.div>
          <div className="w-24 h-1.5 mb-10 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto rounded-full" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto" >
          A diverse and robust skill set enabling the development of innovative solutions and driving success across projects.
          </p>   
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


// // "use client";

// // import React from "react";
// // import Image from "next/image";
// // import { skillsData } from "../resources/Data";
// // import { motion } from "framer-motion";

// // const Skills = () => {
// //   return (
// //     <section className="py-16 bg-gray-900 text-white" id="skills">
// //       <div className="container mx-auto px-4">
// //         {/* Section Title */}
// //         <div className="text-center mb-12">
// //           <h1 className="text-4xl font-bold tracking-tight">My Skills</h1>
// //           <p className="text-gray-400 mt-2">
// //             Here are the tools and technologies I work with.
// //           </p>
// //         </div>

// //         {/* Skills Grid */}
// //         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
// //           {skillsData.map((skill, index) => (
// //             <motion.div
// //               key={index}
// //               className="group bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               {/* Skill Icon */}
// //               <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4">
// //                 <Image
// //                   src={`/images/skills/${skill.icon}`}
// //                   alt={skill.alt_name}
// //                   width={80}
// //                   height={80}
// //                   className="w-full h-full object-contain"
// //                 />
// //               </div>

// //               {/* Skill Name */}
// //               <h3 className="text-lg font-medium text-gray-200 group-hover:text-white">
// //                 {skill.name}
// //               </h3>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Skills;



// "use client";

// import React from "react";
// import Image from "next/image";
// import { skillsData } from "../resources/Data";
// import { motion } from "framer-motion";

// const Skills = () => {
//   return (
//     <section className="py-16 bg-gray-900 text-white" id="skills">
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <div className="text-center mb-12">
//           <h1 className="text-3xl font-bold tracking-tight">My Skills</h1>
//           <p className="text-gray-400 mt-2">
//             A showcase of the technologies I work with.
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid gap-6 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 justify-items-center">
//           {skillsData.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="group flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//               whileHover={{ scale: 1.1, rotate: 2 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {/* Skill Icon */}
//               <div className="w-14 h-14 sm:w-16 sm:h-16 mb-2">
//                 <Image
//                   src={`/images/skills/${skill.icon}`}
//                   alt={skill.alt_name}
//                   width={64}
//                   height={64}
//                   className="w-full h-full object-contain"
//                 />
//               </div>

//               {/* Skill Name */}
//               <h3 className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white">
//                 {skill.name}
//               </h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
