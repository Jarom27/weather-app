import { Raleway } from 'next/font/google'
import React from 'react'
import { getCurrent } from '../Data'
import Humidity from './HumidityInfo.module.css'
const font = Raleway({subsets:["latin"]})
export default async function HumidityInfo({city}) {
    const current_time = await getCurrent(city)
    return (
        <div className="mx-auto text-center py-4 bg-bg-indigo-principal w-full max-w-xs ">
            <h3>Humidity</h3>
            <h1 className={"text-5xl font-bold " + font.className}>{current_time.current.humidity}<span className="text-4xl font-extralight">%</span></h1>
            <progress className={Humidity} value={current_time.current.humidity} max={100}></progress>
        </div>
    )
}
