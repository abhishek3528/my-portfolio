"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { expData } from "../resources/Data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, BriefcaseBusinessIcon, BriefcaseIcon, Folder } from "lucide-react";



export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (

    <section ref={ref} id="experience"  className=" mt-28 scroll-mt-28 sm:mb-4 ">
    <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <BriefcaseBusinessIcon className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Experience</h2>
          </motion.div>
          <div className="w-24 h-1.5 mb-10 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto rounded-full" />
      <motion.p
       initial={{ opacity: 0 }}
       animate={isInView ? { opacity: 1 } : { opacity: 0 }}
       transition={{ delay: 0.4, duration: 0.6 }}
       className="text-gray-400 text-lg max-w-2xl mx-auto"
               >
              A professional journey showcasing growth, expertise, accomplishments 
              across career roles, and a strong educational foundation.
      </motion.p>    
      </div>
       <VerticalTimeline lineColor="">
        {expData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgba(30, 30, 30, 0.9)",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(15, 118, 110, 1)",

                textAlign: "left",
                padding: "1.5rem",
                borderRadius: "8px", // Rounded corners
    
              }}
              contentArrowStyle={{
                borderRight: "0.6rem solid rgba(255, 255, 255, 0.7)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "rgba(0, 0, 0, 1)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-extrabold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}