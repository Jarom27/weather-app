import { Raleway } from 'next/font/google'
import React from 'react'
import { getCurrent } from '../Data'

const font = Raleway({subsets:["latin"]})
export default async function HumidityInfo({city}) {
    const current_time = await getCurrent(city)
    return (
        <div className="mx-auto text-center py-4 bg-bg-indigo-principal w-full max-w-xs ">
            <h3>Humidity</h3>
            <h1 className={"text-5xl font-bold " + font.className}>{current_time.current.humidity}<span className="text-4xl font-extralight">%</span></h1>
            {/* <progress className={Humidity} value={current_time.current.humidity} max={100}></progress> */}
            <div className='mt-2 relative rounded-full mx-auto bg-indigo-200 w-2/3 h-3'>
                <div className={` rounded-full max-w-full absolute h-3 z-10 bg-yellow-light`} style={{width: `${current_time.current.humidity}%`}}></div>
            </div>
        </div>
    )
}
