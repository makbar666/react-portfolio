
import React from 'react';
import HeroIcon from '../assets/svg/hero-section.svg';
import BaseButton from './buttons/BaseButton';
import { motion } from 'framer-motion';

const Home = () => {
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
                <BaseButton text='Contact Me' link='/contact' />
                {/* BaseButton component atau elemen lainnya */}
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
