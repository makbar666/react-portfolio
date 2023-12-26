// src/components/Navbar.js
import React from 'react';
import BaseButton from './buttons/BaseButton';

const Navbar = () => {
  return (
    <nav className="">
      <div className="container mx-auto py-5">
        <div className="flex items-center justify-between">
          <div className="text-gray-600 font-bold text-2xl">Akbar.</div>
          <div className="flex items-center">
            <div className="mr-6">
              <a className="text-gray-600 hover:text-primary" href="/">Home</a>
            </div>
            <div className="mr-6">
              <a className="text-gray-600 hover:text-primary" href="/about">About</a>
            </div>
            <div className="mr-6">
              <a className="text-gray-600 hover:text-primary" href="/contact">Contact</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-6">
              <BaseButton text="Contact Us" link="/signup" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
