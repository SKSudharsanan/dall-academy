import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Tagline */}
        <div className="flex items-center">
          <img src="/logo-light.png" alt="dall.academy logo" className="h-10 mr-3" />
        </div>

        {/* Menu */}
        <div className="flex space-x-6">
            Copyright © Dall.academy
        </div>
      </div>
    </footer>
  );
};

export default Footer;
