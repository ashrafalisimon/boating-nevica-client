import { ArrowRightIcon, CollectionIcon, UserCircleIcon, UserGroupIcon, ViewListIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [user]= useAuthState(auth);
    const [item, setItem] =useState([]);
    useEffect(()=>{
        const getItem = async()=>{
            const email = user.email;
            const url =`https://rocky-hollows-98162.herokuapp.com/service?emaail=${email}`;
            const {data}=await axios.get(url)
            setItem(data);
        }
        getItem()
    },[user])
    const handleDelete = id=>{
        const proceed = window.confirm("Are You Sure?")
        if(proceed){
            const url= `https://rocky-hollows-98162.herokuapp.com/service/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data =>{
                const remaining = item.filter(bookService=> bookService._id !== id)
                setItem(remaining);
            })
        }
    }
    return (
        <div>
      <div className='md:mt-20 sm:px-20 px-2 grid md:gap-8 grid-cols-1 mt- md:grid-cols-3 md:mb-8'>
                {
                    item.map(service => 
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
                <button 
                onClick={()=>handleDelete(service._id)}
                className="bg-amber-400 hover:bg-blue-400 hover:text-white text-gray-800 font-bold w-full  py-4 justify-center duration-500 px-4 rounded inline-flex items-center">
                   DELETE NOW
                </button>
            </div>
        </div>
                )
                }
            </div>

    </div>
    );
};

export default MyItem;