'use client'
import { Lato, Raleway } from 'next/font/google'
import React, { useContext } from 'react'
import { TempContext } from '../context/TempContext'

const font_for_numbers = Raleway({subsets:["latin"]})
const font_for_degrees = Lato({subsets:["latin"],weight:"300"})
export default function PreviewDegree({temp_c,temp_f}) {
    const {degrees} = useContext(TempContext)    
    return (
        <div>
            <h1 className={font_for_numbers.className}>{degrees == "C" ? temp_c : temp_f}<span className={font_for_degrees.className + " text-4xl"}>°{degrees}</span></h1>
        </div>
    )
}
