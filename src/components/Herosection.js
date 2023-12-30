
import React, { useState } from 'react';
import HeroIcon from '../assets/svg/hero-section.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'; // Import ikon sesuai kebutuhan

const Home = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleButtonClick = () => {
        // Logika atau aksi yang ingin dilakukan saat tombol diklik
    };

    const handleIconClick = (iconLink) => {
        // Logika atau aksi yang ingin dilakukan saat ikon diklik
        window.open(iconLink, '_blank');
    };

    return (
        <div className='md:flex md:justify-between grid md:py-0 py-20 items-center px-20 border'>
            <div className='text-start space-y-2'>
                <motion.h1
                    className='text-4xl font-bold'
                    initial={{ opacity: 0, x: 50 }} // Properti awal saat muncul
                    transition={{ duration: 0.5 }} // Durasi animasi
                    animate={{ opacity: 10, x: 0 }} // Animasi saat muncul
                    exit={{ opacity: 0, y: -50 }} // Animasi saat komponen keluar
                >
                    Hi there, I'm Akbar.
                </motion.h1>
                <motion.p
                    className='text-gray-500 text-lg'
                    initial={{ opacity: 0, y: -50 }} // Properti awal saat muncul
                    transition={{ duration: 0.4 }} // Durasi animasi
                    animate={{ opacity: 10, y: 0 }} // Animasi saat muncul
                    exit={{ opacity: 0, y: -50 }} // Animasi saat komponen keluar
                >
                    I'm a Junior Front End developer based in Indonesia.
                </motion.p>
                <div className="flex items-center space-x-2">
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
                                        onClick={() => handleIconClick('https://www.instagram.com/m.akbar1802')}
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
                                        onClick={() => handleIconClick('https://wa.me/+6285254099133')}
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
                                        onClick={() => handleIconClick('mailto:muhakbar1820@gmail.com')}
                                    >
                                        <FaRegEnvelope size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <span>Contact Us</span>
                        </div>


                    </div>
                </div>
            </div>
            <div className=''>
                <motion.img
                    src={HeroIcon}
                    alt='akbar'
                    className='rounded-full w-[400px] h-[400px]'
                    initial={{ opacity: 0, y: -90 }} // Properti awal saat muncul
                    transition={{ duration: 0.8 }} // Durasi animasi
                    animate={{ opacity: 10, y: 0 }} // Animasi saat muncul
                    exit={{ opacity: 0, y: -50 }} // Animasi saat komponen keluar
                />
            </div>
        </div>
    );
}

export default Home;
