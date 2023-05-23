import React from 'react'
import Image from 'next/image'
import PreviewInfo from './PreviewInfo'
import PreviewControls from './PreviewControls'
import { getImageByWeatherKind } from '../Image_Selector'
import { getCurrent } from '../Data'

export default async function Preview() {
  let current_weather = await getCurrent()
  return (
    <header id='preview' className='w-screen lg:w-1/4 h-[75vh] lg:h-screen bg-bg-indigo-principal'>
        <PreviewControls></PreviewControls>
        <div className='aspect-[1.8/1] w-100  relative'>
            <Image className='opacity-100 absolute top-4 left-24 ' src={getImageByWeatherKind(current_weather.current.condition.text)} width={120} height={120} alt='Image according to weather'></Image>
            <Image className='object-cover opacity-20' src="/images/cloud-background.png" fill={true} alt='Cloud background'></Image>
        </div>
        <PreviewInfo></PreviewInfo>
    </header>
  )
}
