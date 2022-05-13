import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../../images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='bg-no-repeat bg-cover px-2 py-4 sm:py-48 sm:px-20 text-white space-y-1 md:space-y-4' style={{ backgroundImage: `url(${background})` }} >
                <h4 className='text-sm md:text-xl  font-medium tracking-wider '>Your Dream Boats</h4>
                <h1 className='text-3xl md:text-7xl  font-bold '>Most Realiable Luxury <span className='block mt-2 md:mt-4'> Boat Rental </span></h1>
                <div className='hover:text-amber-400 duration-300  explore-btn '>
                    <Link className='text-xl md:text-3xl ' to='/boats'>Explore Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;