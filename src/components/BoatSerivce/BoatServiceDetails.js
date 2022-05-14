import { ArrowRightIcon, CollectionIcon, UserCircleIcon, UserGroupIcon, ViewListIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BoatServiceDetails = () => {
  const { serviceId } = useParams();
  const [booking, setBooking] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  return (
    <div className="w-5/6 mx-auto px-20 py-2  rounded-lg overflow-hidden">
      <img className="w-full rounded-lg" src={booking.img} alt=""></img>
      <div className="px-6 py-4 border-b border-slate-200">
        <h4 className="font-bold hover:text-amber-400 cursor-pointer duration-500 text-2xl">
          Service Name: {booking.name}
        </h4>
        <p className="font-medium text-lg text-slate-600">Package Name: {booking.packageName}</p>
        <h2 className="text-4xl py-2 tracking-widest font-bold text-blue-500">
         Price: {booking.price}
          <span className="tracking-normal text-lg text-slate-800">
            /per day
          </span>
        </h2>
        <p className="text-gray-700 text-base">
         Description:  {booking.description}
        </p>
        <div className="flex items-center">
          <UserCircleIcon className="h-5 w-5 mr-2 text-blue-400" />
          <span className="text-lg text-gray-500 font-medium">
            {booking.servicerName}
          </span>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex">
            <UserGroupIcon className="h-5 w-5 text-blue-400 mr-2" />
            <span className="font-medium">{booking.guests}</span>
          </div>
          <div className="flex">
            <CollectionIcon className="h-5 w-5 text-blue-400 mr-2" />
            <span className="font-medium">{booking.bedroom}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex">
            <ArrowRightIcon className="h-5 w-5 text-blue-400 mr-2" />
            <span className="font-medium">{booking.feet}</span>
          </div>
          <div className="flex">
            <ViewListIcon className="h-5 w-5 text-blue-400 mr-2" />
            <span className="font-medium">{booking.other}</span>
          </div>
        </div>
        <button
          className="bg-blue-400 hover:bg-amber-400 text-white hover:text-gray-800 font-bold w-full  py-4 justify-center duration-500 px-4 rounded inline-flex items-center"
        >
          BOOK NOW
        </button>
      </div>
       <div className="px-6 pt-4 pb-2">
      <form className="space-y-4" >
           <input className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            required
             type="number" />
             
           <button
          className="bg-amber-400 hover:bg-blue-400 text-white hover:text-gray-800 font-bold w-full  py-4 justify-center duration-500 px-4 rounded inline-flex items-center"
        >
          Add Guests
        </button>
       </form>
       </div>
    </div>
  );
};

export default BoatServiceDetails;
