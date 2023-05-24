'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function CurrentLocationButton() {
    const [location,setLocation] = useState(null)
    const options = {
      enableHighAccuracy : true,
      timeout : 5000
    }

    useEffect(()=>{
      console.log(location);
      if(location != null){
        window.location.replace(`/${location.coords.latitude},${location.coords.longitude}`)
      }
    },[location])

    function success(position){
      setLocation(position)
    }
    function error(error){
        console.log("Hubo un error");
    }
    function handleClick(e){
      navigator.geolocation.getCurrentPosition(success,error,options)
    }
    
    return (
      <button className='bg-gray-controls rounded-full p-2'><Image className = "fill-white" src="/my_location.svg" width={20} height = {20} alt='my location button' onClick={handleClick}></Image></button>
    )
}
