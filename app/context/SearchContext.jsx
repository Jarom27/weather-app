'use client'
import { createContext, useState } from "react"
import React from 'react'
import { features } from "../Features"

export const SearchContext = createContext()
export default function SearchProvider({children}) {
    const [city,setCity] = useState("London")
    const ajustes = features
    
    return (
        <SearchContext.Provider value={ajustes}>
            {children}
        </SearchContext.Provider>
    )
}


