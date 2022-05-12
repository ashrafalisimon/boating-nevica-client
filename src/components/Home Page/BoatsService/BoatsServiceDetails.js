import React from 'react';

const BoatsServiceDetails = ({service}) => {
    const {name, price, feet ,other,bedroom, guests, description,img, packageName, servicerName, shortDescription  } =service;
       return( 
        <div className='max-w-sm py-2 rounded-lg overflow-hidden shadow-md'>
            <img className="w-full rounded-lg" src={img} alt=""></img>
            <div className="px-6 py-4">
                 <h4 className="font-bold text-xl mb-2">{name}</h4>
                 <p className="text-gray-700 text-base">{shortDescription}</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default BoatsServiceDetails;