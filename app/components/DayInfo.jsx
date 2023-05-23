import Image from 'next/image'
import React from 'react'

export default function DayInfo() {
  return (
    <div className='bg-bg-indigo-principal w-28 flex flex-col justify-center px-1 text-center '>
        <p>Wed, 10 jun</p>
        <div className='relative w-1/2 aspect-square flex justify-center mx-auto'>
            <Image className='' src={"/images/light_rain.png"} fill={true} alt='Image according the kind of weather'></Image>
        </div>
        <div>
          <p>16°C <span>11°C</span></p>
        </div>
    </div>
  )
}
