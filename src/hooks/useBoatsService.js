import { useEffect, useState } from "react";

const useBoatsService = ()=>{
    const [boatServices, setBoatServices] =useState([]);
    useEffect(()=>{
        fetch('https://rocky-hollows-98162.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setBoatServices(data));
    },[]);
    return [boatServices, setBoatServices];

}
export default useBoatsService;