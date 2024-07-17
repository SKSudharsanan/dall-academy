import React, { useEffect } from 'react';
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
  } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];


export const Navbar = () => {
    const color = useMotionValue(COLORS_TOP[0]);
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;


    useEffect(() => {
        animate(color, COLORS_TOP, {
          ease: "easeInOut",
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        });
      }, []);

  return (
    <motion.nav  style={{
        border,
        boxShadow,
      }}
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
className="fixed top-4 left-40 right-40 transform -translate-x-1/3 bg-opacity-75 backdrop-blur-lg shadow-lg rounded-full z-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src="/logo-light.png" alt="Logo" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#Home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#Services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#Contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

