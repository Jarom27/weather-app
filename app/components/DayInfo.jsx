import { Raleway } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { getImageByWeatherKind } from '../Image_Selector'
import { DateFormat } from '../date_format'
import Maxtemp from './Maxtemp'
import MinTemp from './MinTemp'

const font_principal = Raleway({subsets: ["latin"]})

export default function DayInfo({day,name_day}) {
    let compare_dates = new Date()
    let format = new DateFormat(day.date)
    console.log(compare_dates.getDate());
    return (
      <div className='bg-bg-indigo-principal w-32 flex flex-col justify-start px-1 py-4 text-center '>
          <p>{name_day != "" && name_day != undefined ? name_day : format.getFormat()}</p>
          <div className='relative w-1/2 aspect-square flex justify-center mx-auto'>
              <Image className='' src={getImageByWeatherKind(day.day.condition.text)} fill={true} alt='Image according the kind of weather'></Image>
          </div>
          <div className={`pt-2 ${font_principal.className}`}>
            <p><Maxtemp temp_c={day.day.maxtemp_c} temp_f={day.day.maxtemp_f}></Maxtemp> <MinTemp temp_c={day.day.mintemp_c} temp_f={day.day.mintemp_f}></MinTemp></p>
          </div>
      </div>
    )
}
