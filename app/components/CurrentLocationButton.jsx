'use client'
import Image from 'next/image'
import React from 'react'

export default function CurrentLocationButton() {
    function success(position){
        console.log(position.coords)
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }
    function handleClick(e){
      console.log(e)
      if(position != undefined){
        console.log("diferente")
      }
    }
    
    return (
      <button className='bg-gray-controls rounded-full p-2'><Image className = "fill-white" src="/my_location.svg" width={20} height = {20} alt='my location button' onClick={handleClick}></Image></button>
    )
}
