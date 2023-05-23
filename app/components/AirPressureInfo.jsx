import { Raleway } from 'next/font/google'
import React from 'react'
import { getCurrent } from '../Data'
const font = Raleway({subsets:["latin"]})

export default async function AirPressureInfo() {
    let current_time = await getCurrent();
    return (
      <div className="mx-auto text-center py-4 bg-bg-indigo-principal w-full max-w-xs ">
          <h3>Air Pressure</h3>
          <h1 className={"text-5xl font-bold " + font.className}>{current_time.current.pressure_mb}<span className="text-3xl font-extralight"> mb</span></h1>
      </div>
    )
}
