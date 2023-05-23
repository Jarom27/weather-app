import React from 'react'
import DailyWeather from './DailyWeather'
import HighLights from './HighLights'

export default function MainContent() {
  return (
    <main className='flex flex-col lg:w-2/3 gap-4 mt-4'>
        {/* <TempControls></TempControls> */}
        <DailyWeather></DailyWeather>
        <HighLights></HighLights>
    </main>
  )
}
