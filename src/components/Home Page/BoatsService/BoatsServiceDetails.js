import React from 'react';

const BoatsServiceDetails = ({boatService}) => {
    const {name} =boatService;
    return (
        <div>
            <h1> {name} </h1>
        </div>
    );
};

export default BoatsServiceDetails;