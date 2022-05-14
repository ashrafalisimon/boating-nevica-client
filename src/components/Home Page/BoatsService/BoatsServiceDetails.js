import React from 'react';
import {  ArrowRightIcon, CollectionIcon, UserCircleIcon, UserGroupIcon, ViewListIcon } from '@heroicons/react/solid'
import { Link, useNavigate } from 'react-router-dom';

const BoatsServiceDetails = ({service}) => {
    const { _id, name, price, feet ,other,bedroom, guests, description,img, packageName, servicerName, shortDescription  } =service;
    const navigate = useNavigate()
    const boatSerivceDetails = id =>{
        navigate(`/boatService/${id}`);
    }
       return( 
        <div className='max-w-sm py-2 rounded-lg overflow-hidden shadow-md'>
            <img className="w-full rounded-lg" src={img} alt=""></img>
            <div className="px-6 py-4 border-b border-slate-200">
                 <h4 className="font-bold hover:text-amber-400 cursor-pointer duration-500 text-2xl">{name}</h4>
                 <p className='font-medium text-lg text-slate-600'>{packageName}</p>
                 <h2 className='text-4xl py-2 text-center tracking-widest font-bold text-blue-500'>{price}<span className='tracking-normal text-lg text-slate-800'>/per day</span></h2>
                 <p className="text-gray-700 text-base">{shortDescription.slice(0,80)}...</p>
                 <div className='flex items-center'>
                     <UserCircleIcon className='h-5 w-5 mr-2 text-blue-400'/>
                     <span className='text-lg text-gray-500 font-medium'>{servicerName}</span>
                 </div>
            </div>
            <div className="px-6 pt-4 pb-2 space-y-3">
                <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <UserGroupIcon className='h-5 w-5 text-blue-400 mr-2'/>
                        <span className='font-medium'>{guests}</span>
                    </div>
                    <div className='flex'>
                        <CollectionIcon className='h-5 w-5 text-blue-400 mr-2'/>
                        <span className='font-medium'>{bedroom}</span>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <ArrowRightIcon className='h-5 w-5 text-blue-400 mr-2'/>
                        <span className='font-medium'>{feet}</span>
                    </div>
                    <div className='flex'>
                        <ViewListIcon className='h-5 w-5 text-blue-400 mr-2'/>
                        <span className='font-medium'>{other}</span>
                    </div>
                </div>
                <button onClick={()=>boatSerivceDetails(_id) } className="bg-blue-400 hover:bg-amber-400 text-white hover:text-gray-800 font-bold w-full  py-4 justify-center duration-500 px-4 rounded inline-flex items-center">
                   <Link to="/boats">BOOKING NOW </Link>
                </button>
            </div>
        </div>
    );
};

export default BoatsServiceDetails;