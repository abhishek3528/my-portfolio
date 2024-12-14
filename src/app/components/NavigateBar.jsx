"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Certifications",
    path: "#certifications",
  },
  {
    title: "Contact",
    path: "#contact",
  },

];

const NavigateBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);


  // const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setIsScrolled(true); // When user scrolls down 50px or more
  //     } else {
  //       setIsScrolled(false); // When at the top of the page
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    // <nav className="fixed mx-auto top-0 left-0 right-0 z-10
    //  bg-[#121212] bg-opacity-0 backdrop-blur-3xl">


    // the below nav tag is for rendering navbar transparent based on position
    // <nav
    //   className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    //     isScrolled
    //       ? " bg-opacity-0 backdrop-blur-3xl shadow-lg" // Scrolled state: blurred and semi-transparent
    //       : "bg-blueGray-900 bg-opacity-75" // Default: fully transparent
    //   }`}
    // >
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      bg-gray-900 bg-opacity-80 shadow-lg `}
    >
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl lg:text-4xl text-white font-semibold"
        >
          <label className="font-extralight cursor-pointer">{"<myPortfolio/>"}</label>
        </Link>
        <div className="mobile-menu block lg:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => {
              setNavbarOpen(true);
              // setIsScrolled(true);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => {
              setNavbarOpen(false);
              // setIsScrolled(false);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden lg:block lg:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavigateBar;
