import Image from 'next/image'
import React from 'react'

export default function DayInfo() {
  return (
    <div className='bg-bg-indigo-principal w-28 flex flex-col justify-center px-1 text-center '>
        <p>Wed, 10 jun</p>
        <div className='relative w-1/2 aspect-square flex justify-center mx-auto'>
            <Image className='' src={"/images/LightRain.png"} fill={true}></Image>
        </div>
    </div>
  )
}
