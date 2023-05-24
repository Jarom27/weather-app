import React from 'react'
import DayInfo from './DayInfo'
import { getCurrent, getFutureForecast } from '../Data'

export default async function DailyWeather({city}) {
    const future_time = await getFutureForecast(city)
    return (
      <div className='grid grid-cols-2 grid-rows-2 lg:flex lg:flex-row lg:justify-start mt-5 gap-3'>
          {future_time.forecast.forecastday.map((day,index) => {
              if(index === 0){
                return <DayInfo key={index} day={day} name_day={"Today"}></DayInfo>
              }
              else if(index === 1){
                return <DayInfo key={index} day={day} name_day={"Tomorrow"}></DayInfo>
              }
              return <DayInfo key={index} day={day}></DayInfo>
            })}
      </div>
    )
}
