import React from 'react'
import Image from 'next/image'
import PreviewInfo from './PreviewInfo'
import PreviewControls from './PreviewControls'

export default function Preview() {
  return (
    <header className='w-screen h-[75vh] bg-bg-indigo-principal'>
        <PreviewControls></PreviewControls>
        <div className='aspect-[1.8/1] w-100 opacity-20 relative'>
            <Image className='object-cover' src="/images/cloud-background.png" fill={true} alt='Cloud background'></Image>
        </div>
        <PreviewInfo></PreviewInfo>
    </header>
  )
}
