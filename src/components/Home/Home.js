import React from 'react';
import Banner from '../Home Page/Banner/Banner';
import BoatsService from '../Home Page/BoatsService/BoatsService';
import Exprience from '../Home Page/Exprience/Exprience';
import PictureGellery from '../Home Page/PictureGellery/PictureGellery';

const Home = () => {
    return (
        <>
           <Banner/> 
           <Exprience/>
           <BoatsService/>
           <PictureGellery/>
        </>
    );
};

export default Home;