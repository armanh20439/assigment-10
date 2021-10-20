import React, { useEffect, useState } from 'react';
import Servic from '../Servic/Servic';
import './Services.css'

const Services = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])


    return (
        <div className='background mb-3 pb-3'>
           <div className='row row-cols-1 background my-1 row-cols-md-3 mx-5 g-5'>
           {
                doctors.map(doctor=><Servic doctor={doctor}
                key={doctor.id}
                ></Servic>)
            }
           </div>
        </div>
    );
};

export default Services;