
import React from 'react';
import HeroIcon from '../assets/svg/hero-section.svg';
import BaseButton from './buttons/BaseButton';

const Home = () => {
    return (
        <div className='flex justify-between items-center px-20 border'>
            <div className='text-start space-y-2 '>
                <h1 className='text-4xl font-bold'>Hi there, I'm Akbar.</h1>
                <p className='text-gray-500 text-lg'>I'm a Junior Front End developer based in Indonesia.</p>
                <BaseButton text='Curriculum Vitae' link='/contact' />
            </div>
            <div className=''>
                <img src={HeroIcon} alt='akbar' className='rounded-full w-[400px] h-[400px]' />
            </div>
        </div>
    );
}

export default Home;
