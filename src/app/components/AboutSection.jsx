"use client";
import React, { useTransition, useState } from "react";

const AboutSection = () => {

  return (
    <section className="text-white mt-52 scroll-mt-20" id="about">
      
        <div className="mt-4 md:mt-0  flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mx-auto mb-4">About Me</h2>
          <div className="w-24 h-1.5 mb-10 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto rounded-full" />
            <p className="text-center text-sm sm:text-base lg:text-lg rounded-3xl lg:rounded-full border-x-2 border-teal-700 p-1 sm:p-14">
              With a strong academic foundation and a <span className="font-extrabold">4.0/4.0 GPA</span> in my Master&apos;s in Computer Science, 
              I have built a professional journey that spans ~3 years of diverse experience.
              I specialize in <span className="font-extrabold">full-stack</span> development, leveraging technologies such as React, Spring Boot, AWS, and PostgreSQL to design scalable, high-performance applications. 
              From developing <span className="font-extrabold">microservices</span> and responsive React components for companies like <span className="font-extrabold">Saayam For All</span> to spearheading the UI and 
              backend development for <span className="font-extrabold">ICICI Bank&apos;s iMobile Pay</span>, I&apos;ve consistently delivered impactful solutions using KnockoutJS, SammyJS, and jQuery. 
              My expertise includes cloud services (AWS Cognito, API Gateway, EKS), secure authentication (JWT), and dynamic web application development. 
              Additionally, as a <span className="font-extrabold">Hardware Lab Instructor</span>, I mentored over 80 students in subjects like Network Security, Computer Architecture, and FPGA programming, fostering practical learning and innovative problem-solving. 
              Driven by innovation and collaboration, I am committed to continuous growth and contributing to impactful projects.
            </p>
        </div>
      
    </section>
  );
};

export default AboutSection;
