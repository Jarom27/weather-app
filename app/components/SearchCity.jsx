'use client'
import React from 'react'
import { setCity } from '../Data'

export default function SearchCity() {
    let location = ""
    function handleType(e){
        console.log(e.target.value)
        location = e.target.value
    }
    function handleClick(e){
        console.log(location)
        setCity(location)
    }
    return (
        <div className='flex ps-2 gap-1'>
            <input type='text' className='bg-bg-indigo-principal border-2 border-white' placeholder='search location' onChange={handleType}></input>
            <button className='bg-indigo-600 p-2 px-3' onClick={handleClick}>Search</button>
        </div>
    )
}
