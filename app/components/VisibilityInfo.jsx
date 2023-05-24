import { Raleway } from 'next/font/google'
import React from 'react'
import { getCurrent } from '../Data'
const font = Raleway({subsets:["latin"]})

export default async function VisibilityInfo({city}) {
    let current_time = await getCurrent(city);
    return (
      <div className="mx-auto text-center py-8 bg-bg-indigo-principal w-full max-w-xs ">
          <h3>Visibility</h3>
          <h1 className={"text-5xl font-bold " + font.className}>{current_time.current.vis_miles}<span className="text-3xl font-extralight"> miles</span></h1>
      </div>
    )
}
