import React from 'react';
import dcore from "../../../images/decore-image-min.png";
import gellary02 from '../../../images/gallery-image-2-min.jpg';
import gellary04 from '../../../images/gallery-image-4-min.jpg';
import gellary05 from '../../../images/gallery-image-5-min.jpg';
import gellary06 from '../../../images/gallery-image-6-min.jpg';
import gellary07 from '../../../images/gallery-image-7-min.jpg';
import gellary08 from '../../../images/gallery-image-8-min.jpg';

const PictureGellery = () => {
    return (
        <div className='md:mt-16'>
            <div className='text-center md:space-y-4 py-2'>
                <h2 className='md:text-4xl font-bold text-slate-900'>Picture Gallery</h2>
                <p className='text-xs md:text-sm  md:w-1/2 mx-auto text-gray-500'>Every yacht enthusiast expects more from yacht rental company. Rental sitehas to bepleasant to the eye and fully enabled for many testimonial features.</p>
                <img className='mx-auto' src={dcore} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:mt-8'>
                <div><img src={gellary02} alt="" /></div>
                <div><img src={gellary04} alt="" /></div>
                <div><img src={gellary05} alt="" /></div>
                <div><img src={gellary06} alt="" /></div>
                <div><img src={gellary07} alt="" /></div>
                <div><img src={gellary08} alt="" /></div>
            </div>
        </div>
    );
};

export default PictureGellery;