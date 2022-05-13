import React from 'react';
import { useParams } from 'react-router-dom';

const BoatServiceDetails = () => {
    const {serviceId} =useParams();
    return (
        <div>
            <h1>THis is service details page {serviceId}</h1>
        </div>
    );
};

export default BoatServiceDetails;