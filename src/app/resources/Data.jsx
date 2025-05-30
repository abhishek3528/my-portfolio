import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


// Experience Data
export const expData = [
  {
    title: "Software Engineer",
    location: "Tata Consultancy Services",
    description:
      "Led UI development for a mobile app using KnockoutJS, jQuery, and SammyJS, while developing backend services with Java and Spring Boot, leveraging RESTful APIs and efficient routing, and collaborating with cross-functional teams to enhance functionality and optimize performance.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Masters in Computer Science",
    location: "University of Alabama in Hunstville, Alabama",
    description:
      "Graduated with a 4.0/4.0 GPA, mastering subjects like Client-Server Architectures, Database Systems, Algorithms, Cloud Computing, and Network Security.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },
  {
    title: "Graduate Assistant",
    location: "University of Alabama in Hunstville, Alabama",
    description:
      "Instructed 80+ students in computing tools like Logisim, Quartus, FPGA, and ARM, while managing grading and exam integrity, and co-developed a coding platform with React, Node.js, and Docker for automated grading and real-time feedback.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Saayam for all, United States",
    description:
      "Build microservices with Spring Boot and AWS EKS, integrate responsive React components, and leverage AWS services like Lambda, Cognito, and databases such as Postgres and Aurora to create scalable, high-performance architectures.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] ;




// Skills Data

export const skillsData =[
  {
    name:"React",
    icon : "react.svg",
    alt_name:"React"
  },
  {
    name:"Java",
    icon : "java.svg",
    alt_name:"Java"
  },{
    name:"AWS",
    icon : "aws.svg",
    alt_name:"AWS"
  },
  {
    name:"Spring Boot",
    icon : "public\images\skills\spring-boot.svg",
    alt_name:"Spring Boot"
  },
  {
    name:"TypeScript",
    icon : "typescript.svg",
    alt_name:"TypeScript"
  },
  {
    name:"Docker",
    icon : "docker.svg",
    alt_name:"Docker"
  },
  {
    name:"KnockoutJs",
    icon : "knockout.svg",
    alt_name:"KnockoutJs"
  },
  {
    name:"Tailwind CSS",
    icon : "tailwind.svg",
    alt_name:"Tailwind CSS"
  },
  {
    name:"JavaScript",
    icon : "javascript.svg",
    alt_name:"JavaScript"
  },
  {
    name:"jQuery",
    icon : "jquery.svg",
    alt_name:"jQuery"
  },
  {
    name:"Redux",
    icon : "redux.svg",
    alt_name:"Redux"
  },
  {
    name:"HTML",
    icon : "html.svg",
    alt_name:"HTML"
  },
  {
    name:"CSS",
    icon : "css.svg",
    alt_name:"CSS"
  },
  {
    name:"Python",
    icon : "python.svg",
    alt_name:"Python"
  },
  {
    name:"MySQL",
    icon : "mysql.svg",
    alt_name:"MySQL"
  },
  {
    name:"PostgreSQL",
    icon : "postgresql.svg",
    alt_name:"PostgreSQL"
  },
  {
    name:"NodeJs",
    icon : "nodejs.svg",
    alt_name:"NodeJs"
  },
  {
    name:"Git",
    icon : "git.svg",
    alt_name:"Git"
  },
]

//Projects Data
export const projects = [
  {
    title: "AI News Summarizer",
    description: "An AI-powered web app that fetches real-time news, summarizes key insights, and analyzes sentiment, helping users track trends and stay informed effortlessly.",
    image: "/images/projects/news-summarizer.png",
    tags: ["React", "TypeScript", "Next.js","Flask", "Python", "Playwright","VADER", "Hugging Face Transformer (BART-LLM)"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AnimeBuzz",
    description: "Created a dynamic platform for an anime blog, featuring detailed information, secure authentication, efficient data retrieval, and seamless performance with real-time updates.",
    image: "/images/projects/animebuzz.png",
    tags: ["React", "Redux", "PostgreSQL", "Tailwind CSS","Java", "Spring Boot", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Contact Manager",
    description: "Built a contact management application with robust CRUD operations, seamless user interaction, efficient data communication, and thorough API testing for reliability.",
    image: "/images/projects/CM.svg",
    tags: ["React", "MySQL", "Spring Boot", "Spring Data JPA","Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];


// Certfications Data
export const certifications = [
  {
    title: "AWS Certified Developer – Associate",
    image: "/images/certifications/aws_dev_associate.png",
    link: "https://www.credly.com/badges/830f6b72-0446-414f-9e16-48bf92046c68/public_url",
    description: "Validated expertise in designing, developing, and maintaining cloud-based applications using AWS core services and best practices."
  },
  {
    title: "AWS Knowledge: Cloud Essentials",
    image: "/images/certifications/aws-cloud-essentials.png",
    link: "https://www.credly.com/badges/81618696-6b58-4d5e-b0fc-630b816fc924/public_url",
    description: "Demonstrates foundational understanding of AWS core services, basic cloud concepts, and essential architectural principles."
  },
];