"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ChevronRight, Download } from "lucide-react";
import SocialLinks from "./SocialLinks";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="lg:py-16 relative ">
      {/* Background Pattern */}

        <div className="grid grid-cols-1 sm:grid-cols-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-7 space-y-6 text-center sm:text-left ">
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Hello, I&apos;m Abhishek,{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "Java Developer",
                  1000,
                  "AWS Certified Developer",
                  1000,
                  "Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={25}
                repeat={Infinity}
                className="text-white text-3xl sm:text-4xl lg:text-6xl"
              />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >

              <SocialLinks />


              <div className="flex flex-wrap gap-4 justify-center sm:justify-normal">
                <motion.a
                  href="/#contact"
                  className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium inline-flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Me
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-2.5 transition-transform" />
                </motion.a>

                <motion.a
                  href="https://drive.google.com/file/d/1HwoUsm7N48fBXJBvh85rbag8Y4ZMufs2/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 rounded-full bg-transparent border-2 border-purple-500 text-white font-medium inline-flex items-center gap-2 hover:bg-purple-500/10 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="col-span-5 place-self-center mt-10 lg:mt-0">

            <div className="relative">
              <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-75 blur-3xl animate-pulse"></div>
                <div className="absolute inset-[3px] rounded-full bg-gray-900"></div>
                <Image
                  src="/images/hero-image.png"
                  alt="Profile"
                  fill
                  className="absolute inset-0 w-full h-full rounded-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
    </section>
  );
};

export default HeroBanner;

