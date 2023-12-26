// src/components/Home.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactLight from '../assets/svg/react-light.svg';
import VueIcon from '../assets/svg/vue.svg';
import AngularIcon from '../assets/svg/angular.svg';
import TailwindIcon from '../assets/svg/tailwindcss.svg';
import FlutterIcon from '../assets/svg/flutter.svg';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredVue, setIsHoveredVue] = useState(false);
  const [isHoveredAngular, setIsHoveredAngular] = useState(false);
  const [isHoveredTailwind, setIsHoveredTailwind] = useState(false);
  const [isHoveredFlutter, setIsHoveredFlutter] = useState(false);


  return (
    <div className='py-10 bg-primary'>
      <div>
        <h1 className='text-sm font-light'> SERVICES  </h1>
        <h1 className='text-4xl font-semibold'>What can I do?</h1>
      </div>
      <div className='py-5'>
        <div className='flex justify-center space-x-3'>
          {/* Item 1 */}
          <div
            className={`border bg-white p-8 rounded-lg cursor-pointer grid content-center ${isHovered ? ' hover:border-white' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex items-center"
              whileHover={{ marginLeft: '10px' }} // Pindah ke kiri saat dihover
              transition={{ duration: 0.3 }}
            >
              <img src={ReactLight} alt='React' className='h-[50px]' />
              {isHovered && (
                <div className="ml-2 px-2 text-gray-600 text-start w-[600px]">
                  <p >Saya memahami sedikit tentang React, Namun hanya sebatas slicing style dan membuat component sederhana. tetapi saya akan terus belajar dan memahami React lebih dalam lagi. </p>
                </div>
              )}
            </motion.div>
          </div>
          {/* Item 2 */}
          <div
            className={`border bg-white p-8 rounded-lg cursor-pointer grid content-center ${isHoveredVue ? ' hover:border-white' : ''}`}
            onMouseEnter={() => setIsHoveredVue(true)}
            onMouseLeave={() => setIsHoveredVue(false)}
          >
            <motion.div
              className="flex items-center"
              whileHover={{ marginLeft: '10px' }} // Pindah ke kiri saat dihover
              transition={{ duration: 0.3 }}
            >
              <img src={VueIcon} alt='Vue' className='h-[50px]' />
              {isHoveredVue && (
                <div className="ml-2 px-2 text-gray-600 text-start w-[600px]">
                  <p>Saya memahami sedikit tentang Vue mulai dari slicing style dan Consume API. Saya memiliki beberapa project yaitu Web CSIRT Banksulselbar, CSR PUSAKA Sulselbar, dan masih ada beberapa project lainnya. </p>
                </div>
              )}
            </motion.div>
          </div>
          {/* Item 3 */}
          <div
            className={`border bg-white p-8 rounded-lg cursor-pointer grid content-center ${isHoveredAngular ? ' hover:border-white' : ''}`}
            onMouseEnter={() => setIsHoveredAngular(true)}
            onMouseLeave={() => setIsHoveredAngular(false)}
          >
            <motion.div
              className="flex items-center"
              whileHover={{ marginLeft: '10px' }} // Pindah ke kiri saat dihover
              transition={{ duration: 0.3 }}
            >
              <img src={AngularIcon} alt='Angular' className='h-[50px]' />
              {isHoveredAngular && (
                <div className="ml-2 px-2 text-gray-600 text-start w-[600px]">
                  <p>Saya memahami sedikit tentang Angular mulai dari slicing style dan Consume API. Saya memiliki beberapa project yaitu Sistem Perjalanan Dinas LLDIKTI 9, dan masih ada beberapa project lainnya. </p>
                </div>
              )}
            </motion.div>
          </div>
          {/* Item 4 */}
          <div
            className={`border bg-white p-8 rounded-lg cursor-pointer grid content-center ${isHoveredTailwind ? ' hover:border-white' : ''}`}
            onMouseEnter={() => setIsHoveredTailwind(true)}
            onMouseLeave={() => setIsHoveredTailwind(false)}
          >
            <motion.div
              className="flex items-center"
              whileHover={{ marginLeft: '10px' }} // Pindah ke kiri saat dihover
              transition={{ duration: 0.3 }}
            >
              <img src={TailwindIcon} alt='Tailwind' className='h-[50px]' />
              {isHoveredTailwind && (
                <div className="ml-2 px-2 text-gray-600 text-start w-[600px]">
                  <p>Saya memahami Styling menggunakan TailwindCSS, Rata-rata project yang saya buat menggunakan TailwindCSS. </p>
                </div>
              )}
            </motion.div>
          </div>
          {/* Item 5 */}
          <div
            className={`border bg-white p-8 rounded-lg cursor-pointer grid content-center ${isHoveredFlutter ? ' hover:border-white' : ''}`}
            onMouseEnter={() => setIsHoveredFlutter(true)}
            onMouseLeave={() => setIsHoveredFlutter(false)}
          >
            <motion.div
              className="flex items-center"
              whileHover={{ marginLeft: '10px' }} // Pindah ke kiri saat dihover
              transition={{ duration: 0.3 }}
            >
              <img src={FlutterIcon} alt='Flutter' className='h-[50px]' />
              {isHoveredFlutter && (
                <div className="ml-2 px-2 text-gray-600 text-start w-[600px]">
                  <p>Saya memahami sedikit tentang Flutter, mulai dari style sampai consume API</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Home;
