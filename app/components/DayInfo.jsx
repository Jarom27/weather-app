import { Raleway } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { getImageByWeatherKind } from '../Image_Selector'

const font_principal = Raleway({subsets: ["latin"]})

export default function DayInfo({day}) {
  return (
    <div className='bg-bg-indigo-principal w-32 flex flex-col justify-start px-1 py-4 text-center '>
        <p>Wed, 10 jun</p>
        <div className='relative w-1/2 aspect-square flex justify-center mx-auto'>
            <Image className='' src={getImageByWeatherKind(day.day.condition.text)} fill={true} alt='Image according the kind of weather'></Image>
        </div>
        <div className={`pt-2 ${font_principal.className}`}>
          <p>{`${day.day.maxtemp_c} °C`} <span>{`${day.day.mintemp_c} °C`}</span></p>
        </div>
    </div>
  )
}
