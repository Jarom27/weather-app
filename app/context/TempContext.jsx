'use client'
import React, { createContext, useState } from 'react'

export const TempContext = createContext()
export default function TempProvider({children}) {
    const [degrees,setDegrees] = useState("C");
    return (
            <TempContext.Provider value = {{degrees,setDegrees}}>
                {children}
            </TempContext.Provider>
    )
}
