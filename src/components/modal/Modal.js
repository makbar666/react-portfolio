import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90%', // Adjusted width for responsiveness
        maxWidth: '900px', // Set a maximum width for larger screens
        backgroundColor: 'transparent', // Set the background color to transparent
        border: 'none', // Remove default border
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set the background color with 30% black opacity
    },
};

const CustomModal = ({ isOpen, closeModal, title, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Custom Modal"
            style={customStyles}
        >
            <div className="bg-white rounded-lg p-8">
                <div className='flex justify-between '>
                    <h2 className="md:text-xl text-lg font-bold">{title}</h2>
                    <div className='grid content-center '>
                        <button className=" hover:bg-gray-200 font-bold py-2 px-2 rounded-full" onClick={closeModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='pt-5'>
                    {children}
                </div>
            </div>
        </Modal>
    );
};

export default CustomModal;
