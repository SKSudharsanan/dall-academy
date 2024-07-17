import React, { useEffect, useState } from 'react';
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from 'framer-motion';

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const color = useMotionValue(COLORS_TOP[0]);
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      style={{
        border,
        boxShadow,
      }}
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.985,
      }}
      className="fixed top-8 left-32 right-32 bg-opacity-75 backdrop-blur-lg shadow-lg rounded-full z-20"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src="/logo-light.png" alt="Logo" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#Home"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#Services"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#Contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black">
          <a
            href="#Home"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#Services"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#Contact"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </motion.nav>
  );
};
