import React from 'react';

const NotFound = () => {
    return (
        <div className='md:px-16 md:py-24 text-center space-y-5'>
            <p className='text-4xl font-bold text-blue-500'>Look Like You Are Lost Page</p>
            <h1 className=' md:text-8xl font-semibold text-red-500'>404</h1>
            <div className='py-8'>
            <span className='bg-blue-400 py-4 px-12 rounded-md shadow-sm text-white text-xl font-semibold cursor-pointer'>Go Back</span>
            </div>
        </div>
    );
};

export default NotFound;