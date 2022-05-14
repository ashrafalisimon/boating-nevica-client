import React from "react";
import dcore from "../../images/decore-image-min.png";
import useBoatsService from "../../hooks/useBoatsService";
import { ArrowRightIcon, CollectionIcon, UserCircleIcon, UserGroupIcon, ViewListIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";

const BoatsBooking = () => {
    const [boatServices] = useBoatsService();
    const navigate = useNavigate()
    const boatSerivceDetails = id =>{
        navigate(`/boatService/${id}`);
    }
  return (
   
    <div>
      <div
        className="py-4 sm:py-24 sm:px-20 px-2  space-y-1 md:space-y-4"
      >
        <div className="text-center md:w-3/4 mx-auto md:space-y-5">
          <h4 className="text-xl text-slate-900 md:text-4xl  font-semibold tracking-wider ">
            All Luxury Boats
          </h4>
          <p className="text-slate-600 md:w-2/3 mx-auto">
            Every yacht enthusiast expects more from yacht rental company.
            Rental sitehas to be pleasant to the eye and fully enabled for many
            testimonial features.
          </p>
          <img className="mx-auto" src={dcore} alt="" />
        </div>
      </div>
      <div className='md:-mt-20 sm:px-20 px-2 grid md:gap-8 grid-cols-1 mt- md:grid-cols-3 md:mb-8'>
                {
                    boatServices.map(service => 
                        <div key={service._id} className='max-w-sm py-2 rounded-lg overflow-hidden shadow-md'>
            <img className="w-full rounded-lg" src={service.img} alt=""></img>
            <div className="px-6 py-4 border-b border-slate-200">
                 <h4 className="font-bold hover:text-amber-400 cursor-pointer duration-500 text-2xl">{service.name}</h4>
                 <p className='font-medium text-lg text-slate-600'>{service.packageName}</p>
                 <h2 className='text-4xl py-2 text-center tracking-widest font-bold text-blue-500'>{service.price}<span className='tracking-normal text-lg text-slate-800'>/per day</span></h2>
                 <p className="text-gray-700 text-base">{service.shortDescription.slice(0,80)}...</p>
                 <div className='flex items-center'>
                     <UserCircleIcon className='h-5 w-5 mr-2 text-blue-400'/>
                     <span className='text-lg text-gray-500 font-medium'>{service.servicerName}</span>
                 </div>
            </div>
            <div className="px-6 pt-4 pb-2 space-y-3">
                <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <UserGroupIcon className='h-5 w-5 text-blue-400 mr-2'/>
                        <span className='font-medium'>{service.guests}</span>
                    </div>
                    <div className='flex'>
                        <CollectionIcon className='h-5 w-5 text-blue-400 mr-2'/>
                        <span className='font-medium'>{service.bedroom}</span>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex'>
                        <ArrowRightIcon className='h-5 w-5 text-blue-400 mr-2'/>
                        <span className='font-medium'>{service.feet}</span>
                    </div>
                    <div className='flex'>
                        <ViewListIcon className='h-5 w-5 text-blue-400 mr-2'/>
                        <span className='font-medium'>{service.other}</span>
                    </div>
                </div>
                <button onClick={()=>boatSerivceDetails(service._id) } className="bg-blue-400 hover:bg-amber-400 text-white hover:text-gray-800 font-bold w-full  py-4 justify-center duration-500 px-4 rounded inline-flex items-center">
                   BOOKING NOW
                </button>
                <button className="bg-amber-400 hover:bg-blue-400 hover:text-white text-gray-800 font-bold w-full  py-4 justify-center duration-500 px-4 rounded inline-flex items-center">
                   DELETE NOW
                </button>
            </div>
        </div>
                )
                }
            </div>

            <div className="w-48 mx-auto md:py-12">
            <button className="hover:border-blue-400 border-slate-800 border-2  hover:text-blue-400 text-slate-800 font-bold w-full  py-4 justify-center duration-500 px-4 rounded inline-flex items-center">
                   <Link to="/addService">Add New Item</Link>
                </button>
            </div>
    </div>
  );
};

export default BoatsBooking;
