'use client'
import { Raleway } from 'next/font/google'
import React from 'react'

const font = Raleway({subsets:["latin"]});

export default function TempControls() {
  return (
    <div className={'hidden lg:flex lg:justify-end lg:gap-3'+font.className}>
        <button className="rounded-full bg-indigo-temp p-2 px-3 mx-2">°C</button>
        <button className="rounded-full bg-indigo-temp p-2 px-3">°F</button>
    </div>
  )
}
