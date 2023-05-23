import React from 'react'
import DayInfo from './DayInfo'

export default function DailyWeather() {
  return (
    <div className='grid grid-cols-2 grid-rows-2 lg:flex lg:flex-row mx-auto mt-10 gap-3'>
        <DayInfo></DayInfo>
        <DayInfo></DayInfo>
        <DayInfo></DayInfo>
    </div>
  )
}
