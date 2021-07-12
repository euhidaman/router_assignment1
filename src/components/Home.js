import React from 'react';
import amanimg from '../images/amanimg.jpeg';

const Home = () => {
    return (
        <div className="p-10 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-48 w-full object-cover md:w-48" src={amanimg} alt="Man looking at item at a store" />
                </div>
                <div className="p-8">
                    <h1 className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">Euhid Aman</h1>
                    <h2 className="block mt-1 text-lg leading-tight font-medium text-black">20191CSE0146</h2>
                    <p className="mt-2 text-gray-500">Hello, Everyone !! I am Euhid Aman !!<br />This is my assignment-1 for REACT VAC</p>
                </div>
            </div>
        </div>
    )
}

export default Home
