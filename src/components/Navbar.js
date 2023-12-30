// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BaseButton from './buttons/BaseButton';
import { FaInstagram, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'; // Import ikon sesuai kebutuhan


const Navbar = () => {
  const [isNavbarFixed, setNavbarFixed] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setNavbarFixed(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    // Logika atau aksi yang ingin dilakukan saat tombol diklik
  };

  const handleIconClick = (iconLink) => {
    // Logika atau aksi yang ingin dilakukan saat ikon diklik
    window.open(iconLink, '_blank');
  };

  return (
    <motion.nav
      className={`w-full py-5 transition-all duration-300 ${isNavbarFixed ? 'fixed top-0 bg-white shadow-sm' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between md:px-0 px-10" >
          <div className="text-gray-600 font-bold text-2xl">Akbar.</div>
          <div className="hidden md:flex items-center"> {/* Tampilkan pada layar medium dan lebih besar */}
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
          <div className="flex items-center space-x-2">
            <div className=''>


            </div>
            {/* Tombol Contact Us */}
            <div
              className='cursor-pointer border hover:border-primary hover:bg-primary text-gray-600 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out'
              link="/signup"
              onClick={handleButtonClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className='flex space-x-5'>
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className=" cursor-pointer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => handleIconClick('https://www.instagram.com/')}
                    >
                      <FaInstagram size={24} />
                    </motion.div>
                  )}
                  {isHovered && (
                    <motion.div
                      className=" cursor-pointer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => handleIconClick('https://www.instagram.com/')}
                    >
                      <FaWhatsapp size={24} />
                    </motion.div>
                  )}
                  {isHovered && (
                    <motion.div
                      className=" cursor-pointer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => handleIconClick('https://www.instagram.com/')}
                    >
                      <FaRegEnvelope size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
                <span>Contact Us</span>
              </div>


            </div>

          </div>
          <div className="flex items-center md:hidden"> {/* Tampilkan pada layar kecil */}
            <button
              className="text-gray-600 hover:text-primary focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {/* Tombol hamburger atau ikon menu mobile */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="absolute bg-white right-0 top-[73px] w-full"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className='space-y-3 py-10'>
                  <div className="mr-6">
                    <a className="text-gray-600 hover:text-primary" href="/">Home</a>
                  </div>
                  <div className="mr-6">
                    <a className="text-gray-600 hover:text-primary" href="/about">About</a>
                  </div>
                  <div className="mr-6">
                    <a className="text-gray-600 hover:text-primary" href="/contact">Contact</a>
                  </div>
                  <div className="mr-6">
                    <BaseButton text="Contact Us" link="/signup" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
