import React from 'react';
import AboutImage from '../assets/png/about.png';

const About = () => {
    return (
        <div className='py-10 bg-primary'>
            <div className='text-center'>
                <h1 className='text-sm font-light'> ABOUT ME </h1>
                <span className='text-4xl font-semibold'>Who am I?</span>
            </div>
            <div className='px-4 md:px-20 py-5'>
                <div className='flex flex-col-reverse md:flex-row justify-center md:space-x-10'>
                    <div className='text-center md:text-start w-full md:w-[600px] space-y-3 grid content-center text-gray-800'>
                        <h1 className='text-2xl font-semibold'>Hi There! I'm Akbar.</h1>
                        <span className='text-base font-light'>Junior Front End </span>
                        <p className='leading-6'>
                            I am a junior front-end developer, a graduate of the Informatics Engineering study program at the University of Dipa Makassar. I have a passion for web development and I am currently learning about front-end development. I am also interested in UI/UX design. I have a good understanding of TailwindCSS, React JS, Angular JS, Vue JS, and Flutter.
                        </p>
                        <div>
                            <a href='https://drive.google.com/file/d/1tasCWWuzypCDUExHw5Iyp7SjcNkYFVbI/view?usp=sharing' target='_blank' rel='noreferrer'>
                                <button className='bg-white text-gray-600 font-semibold px-5 py-2 rounded-lg hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out 
                                '>Download CV</button>
                            </a>
                        </div>
                    </div>
                    <img src={AboutImage} alt='about' className='h-[200px] md:h-[400px] rounded-lg mt-5 md:mt-0 object-cover' />
                </div>
            </div>
        </div>
    );
}


export default About;