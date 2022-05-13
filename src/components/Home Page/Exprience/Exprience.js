import { AdjustmentsIcon, ArrowRightIcon, CogIcon, UsersIcon } from '@heroicons/react/solid';
import React from 'react';
import ceoSine from "../../../images/sign-min.jpg"
import ImgExprience from '../../../images/exprience.png'
import { Link } from 'react-router-dom';
import dcore from "../../../images/decore-image-min.png"

const Exprience = () => {
    return (
        <div className='px-2 py-4 sm:py-24 sm:px-20'>
            <div className=' md:flex justify-between items-center '>
            <div className='md:w-1/2 w-full md:space-y-4'>
                <h3 className='text-2xl md:text-5xl md:leading-relaxed  font-semibold text-slate-800'>Providing a large fleet of Boats for a perfect and dreamy experience</h3>
                <p className='text-lg text-slate-400' >The business owner’s objective was to have an online presence that would provide potential clients with rich information and encourage them to spend time reading through descriptions of the sailboats and the company itself in detail. Nevica WordPress theme is perfect if you want to create a professional looking website for your sailing rental business.</p>
                <ul className='font-bold md:space-y-3'>
                    <li className='flex space-x-1 items-center'><ArrowRightIcon className='h-5 w-5 text-blue-400'/><span>Stunning Cruise Paths You Follow</span></li>
                    <li className='flex space-x-1 items-center'><ArrowRightIcon className='h-5 w-5 text-blue-400'/><span>Premium Boats and Yachts</span></li>
                    <li className='flex space-x-1 items-center'><ArrowRightIcon className='h-5 w-5 text-blue-400'/><span>Our Professional Approach</span></li>
                    <li className='flex space-x-1 items-center'><ArrowRightIcon className='h-5 w-5 text-blue-400'/><span>Quality Service Guaranteed</span></li>
                </ul>
                <div>
                    <img src={ceoSine} alt="" />
                    <span><small>CEO, Nevica Boat Rentals</small></span>
                </div>
            </div>
            <div className='md:w-1/2 w-full'>
                <img src={ImgExprience} alt="" />
            </div>
        </div>
        <div className='md:flex items-center space-x-4 space-y-2 justify-between md:mt-8 '>
            <div className='flex justify-between space-x-3'>
                <div className=''>
                    <CogIcon className='p-4 shadow-md h-20 w-20 text-blue-400'/>
                </div>
                <div className='space-y-3'>
                    <h5 className='text-2xl font-bold'>Priceless Experience</h5>
                    <img src={dcore} alt="" />
                    <p className='text-sm'>Asmod tempor incididunt labore magna ust enim sed veniams quis nostrud sed commodo ipsum duals.</p>
                    <button>
                       <Link className='border-b-2 border-slate-900 border-solid text-slate-900 font-medium my-2 hover:text-blue-400 hover:border-blue-400 duration-300 ' to='/'>Read More</Link>
                    </button>
                </div>
            </div>

            <div className='flex justify-between space-x-3'>
                <div className=''>
                    <AdjustmentsIcon className='p-4 shadow-md h-20 w-20 text-blue-400'/>
                </div>
                <div className='space-y-3'>
                    <h5 className='text-2xl font-bold'>Custom Packages</h5>
                    <img src={dcore} alt="" />
                    <p className='text-sm'>Waters brought evening above fruitful fruit second set man seed spirit it and subdue I, created.</p>
                    <button>
                       <Link className='border-b-2 border-slate-900 border-solid text-slate-900 font-medium my-2 hover:text-blue-400 hover:border-blue-400 duration-300 ' to='/'>Read More</Link>
                    </button>
                </div>
            </div>

            <div className='flex justify-between space-x-3'>
                <div className=''>
                    <UsersIcon className='p-4 shadow-md h-20 w-20 text-blue-400'/>
                </div>
                <div className='space-y-3'>
                    <h5 className='text-2xl font-bold'>Peoples Oriented</h5>
                    <img src={dcore} alt="" />
                    <p className='text-sm'>He whose upon them thing life darkness together and male was whose multiply, set seed had fish divide made.</p>
                    <button>
                       <Link className='border-b-2 border-slate-900 border-solid text-slate-900 font-medium my-2 hover:text-blue-400 hover:border-blue-400 duration-300 ' to='/'>Read More</Link>
                    </button>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Exprience;