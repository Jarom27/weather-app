import React from 'react'
import DayInfo from './DayInfo'

export default function DailyWeather() {
  return (
    <div className='flex flex-wrap'>
        <DayInfo></DayInfo>
        <DayInfo></DayInfo>
        <DayInfo></DayInfo>
        <DayInfo></DayInfo>
        <DayInfo></DayInfo>
    </div>
  )
}
