import {  ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import useBoatsService from '../../../hooks/useBoatsService';
import background from '../../../images/bg-1.jpg';
import dcore from "../../../images/decore-image-min.png"
import BoatsServiceDetails from './BoatsServiceDetails';

const BoatsService = () => {
    const [boatServices] = useBoatsService();
    return (
        <div className=''>
             <div className='bg-no-repeat bg-cover  py-4 sm:py-36 sm:px-20 px-2 text-white space-y-1 md:space-y-4' style={{ backgroundImage: `url(${background})` }} >
                <div className='text-center md:w-3/4 mx-auto md:space-y-5'>
                    <h4 className='text-xl md:text-4xl  font-semibold tracking-wider '>Fleet of Luxury Boats</h4>
                    <p className='text-slate-50 md:w-2/3 mx-auto'>Every yacht enthusiast expects more from yacht rental company. Rental sitehas to be pleasant to the eye and fully enabled for many testimonial features.</p>
                    <img className='mx-auto' src={dcore} alt="" />
                </div>
            </div>

            <div className='md:-mt-20 sm:px-20 px-2 grid md:gap-8 grid-cols-1 mt- md:grid-cols-3 md:mb-8'>
                {
                    boatServices.slice(0,6).map(service => <BoatsServiceDetails
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
           <div className='text-center my-2 md:my-4'>
            <button className="border-gray-800 border-2 hover:border-amber-400
                hover:bg-amber-400 hover:text-white text-gray-800 font-bold  py-4  duration-500 px-12 border-solid">
                    <Link className='flex items-center space-x-1' to="/boats"><span>See More</span><ArrowRightIcon className='h-5 w-5'/></Link>
                </button>
           </div>

        </div>
    );
};

export default BoatsService;