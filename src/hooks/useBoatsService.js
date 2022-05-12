import { useEffect, useState } from "react";

const useBoatsService = ()=>{
    const [boatServices, setBoatServices] =useState({});
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setBoatServices(data));
    },[]);
    return [boatServices, setBoatServices];

}
export default useBoatsService;