import React from 'react'
import DayInfo from './DayInfo'
import { getCurrent, getFutureForecast } from '../Data'

export default async function DailyWeather() {
    const future_time = await getFutureForecast()
    return (
      <div className='grid grid-cols-2 grid-rows-2 lg:flex lg:flex-row mx-auto mt-10 gap-3'>
          {future_time.forecast.forecastday.map((day,index) => <DayInfo key={index} day={day}></DayInfo>)}
      </div>
    )
}
