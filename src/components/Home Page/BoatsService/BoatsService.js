import React from 'react';
import useBoatsService from '../../../hooks/useBoatsService';
import background from '../../../images/bg-1.jpg';
import dcore from "../../../images/decore-image-min.png"
import BoatsServiceDetails from './BoatsServiceDetails';

const BoatsService = () => {
    const [boatServices] = useBoatsService();
    return (
        <div>
             <div className='bg-no-repeat bg-cover px-2 py-4 sm:py-36 sm:px-20 text-white space-y-1 md:space-y-4' style={{ backgroundImage: `url(${background})` }} >
                <div className='text-center md:w-3/4 mx-auto md:space-y-5'>
                    <h4 className='text-xl md:text-4xl  font-semibold tracking-wider '>Fleet of Luxury Boats</h4>
                    <p className='text-slate-50 md:w-2/3 mx-auto'>Every yacht enthusiast expects more from yacht rental company. Rental sitehas to be pleasant to the eye and fully enabled for many testimonial features.</p>
                    <img className='mx-auto' src={dcore} alt="" />
                </div>
            </div>

            {
                boatServices.map(boatService => <BoatsServiceDetails 
                    key={boatService._id}
                    boatService={boatService} />)
            }

        </div>
    );
};

export default BoatsService;