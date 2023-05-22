import { Raleway } from 'next/font/google'
import React from 'react'
const font = Raleway({subsets:["latin"]})
export default function () {
  return (
    <div className="mx-auto text-center py-4 bg-bg-indigo-principal w-4/5 max-w-xs ">
        <h3>Humidity</h3>
        <h1 className={"text-5xl font-bold " + font.className}>84<span className="text-4xl font-extralight">%</span></h1>
        <progress value={70} max={100}></progress>
    </div>
  )
}
