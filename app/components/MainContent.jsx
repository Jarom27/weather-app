import React from 'react'
import DailyWeather from './DailyWeather'
import HighLights from './HighLights'

export default function MainContent() {
  return (
    <main className='flex flex-col gap-4 mt-4'>
        <DailyWeather></DailyWeather>
        <HighLights></HighLights>
    </main>
  )
}
