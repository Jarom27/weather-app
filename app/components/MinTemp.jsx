'use client'
import React, { useContext } from 'react'
import { TempContext } from '../context/TempContext'

export default function MinTemp({temp_c,temp_f}) {
    const {degrees} = useContext(TempContext)
    return (
        <span>
            {degrees == "C" ? `${temp_c} °C` : `${temp_f} °F`}
        </span>
    )
}
