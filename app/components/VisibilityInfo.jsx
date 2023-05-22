import { Raleway } from 'next/font/google'
import React from 'react'
const font = Raleway({subsets:["latin"]})

export default function VisibilityInfo() {
  return (
    <div className="mx-auto text-center py-4 bg-bg-indigo-principal w-4/5 max-w-xs ">
        <h3>Visibility</h3>
        <h1 className={"text-5xl font-bold " + font.className}>6,4<span className="text-3xl font-extralight"> miles</span></h1>
    </div>
  )
}
