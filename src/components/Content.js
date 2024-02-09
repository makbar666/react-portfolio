import React from "react";
import CSIRTImage from '../assets/png/landingpagecsirt.png';
import CSRPusakaImage from '../assets/png/landingpagecsrpusaka.png';
import EOffice from '../assets/png/landingpageeoffice.png';
import SimpegImage from '../assets/png/landingpagesimpeg.png';
import BaseButton from './buttons/BaseButton';
import { Link } from 'react-router-dom';


const Content = () => {

    return (
        <div>
            <div className='py-10 z-0 relative'>
                <h1 className='text-sm  font-semibold'>LAST PROJECT</h1>
                <h1 className='text-4xl  font-semibold'>What have I done?</h1>
                <div className="p-4 md:p-10 space-y-5 md:space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="transition duration-300 ease-in-out delay-75 hover:scale-110">
                            <div className="group space-y-1 grid content-center justify-items-center relative ">
                                <img src={CSIRTImage} alt="csirt" className="h-[200px] rounded-lg" />
                                <div className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-30 text-white cursor-pointer rounded-lg " >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <span className="text-justify text-lg"> Web CSIRT Banksulselbar </span>
                        </div>
                        <div className="transition duration-300 ease-in-out delay-75 hover:scale-110">
                            <div className="group space-y-1 grid content-center justify-items-center relative ">
                                <img src={CSRPusakaImage} alt="CSRPusakaImage" className="h-[200px] rounded-lg" />
                                <div className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-30 text-white cursor-pointer rounded-lg " >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <span className="text-justify text-lg"> CSR Pusaka Banksulselbar </span>
                        </div>
                        <div className="transition duration-300 ease-in-out delay-75 hover:scale-110">
                            <div className="group space-y-1 grid content-center justify-items-center relative ">
                                <img src={EOffice} alt="CSRPusakaImage" className="h-[200px] rounded-lg" />
                                <div className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-30 text-white cursor-pointer rounded-lg " >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <span className="text-justify text-lg"> E-Office Bapenda Barru </span>
                        </div>
                        <div className="transition duration-300 ease-in-out delay-75 hover:scale-110">
                            <div className="group space-y-1 grid content-center justify-items-center relative ">
                                <img src={SimpegImage} alt="CSRPusakaImage" className="h-[200px] rounded-lg" />
                                <div className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-30 text-white cursor-pointer rounded-lg " >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <span className="text-justify text-lg"> Simpeg RSUD Barru </span>
                        </div>
                    </div>
                    <div>
                        <Link to='/project'>
                            <BaseButton text='See More' >
                            </BaseButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;