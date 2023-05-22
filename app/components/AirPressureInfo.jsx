import { Raleway } from 'next/font/google'
import React from 'react'
const font = Raleway({subsets:["latin"]})

export default function AirPressureInfo() {
  return (
    <div className="mx-auto text-center py-4 bg-bg-indigo-principal w-4/5 max-w-xs ">
        <h3>Air Pressure</h3>
        <h1 className={"text-5xl font-bold " + font.className}>998<span className="text-3xl font-extralight"> mb</span></h1>
    </div>
  )
}
