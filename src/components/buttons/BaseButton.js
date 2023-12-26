// src/components/buttons/Button.js
import React from 'react';

const Button = ({ text, link }) => {
    return (
        <button className='border hover:border-primary hover:bg-primary text-gray-600 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out'>
            {text}
        </button>
    );
}

export default Button;
