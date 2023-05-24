import React from 'react'
import DailyWeather from './DailyWeather'
import HighLights from './HighLights'
import TempControls from './TempControls'

export default function MainContent({city}) {
  return (
    <main className='flex flex-col lg:w-2/3 lg:ps-10 gap-4 mt-4 mx-auto'>
        <TempControls></TempControls>
        <DailyWeather city={city}></DailyWeather>
        <HighLights city={city}></HighLights>
    </main>
  )
}
