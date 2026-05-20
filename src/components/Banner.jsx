import React from 'react';
import bookImg from '../assets/books.jpg';

const Banner = () => {
    return (
        <div className="flex items-center justify-between bg-gray-200 p-8 max-w-6xl mx-auto">
            <div className="flex flex-col space-y-4">
                <h1 className='text-3xl font-bold'>Welcome to Our Bookstore</h1>
                <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-bold'>Shop Now</button>
            </div>
            <img src={bookImg} alt="Books" className="w-3/12 h-auto" />  
        </div>
    );
};

export default Banner;