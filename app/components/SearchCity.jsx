'use client'
import React from 'react'
import { setCity } from '../Data'

export default function SearchCity() {
    let city = ""
    function handleType(e){
        console.log(e.target.value)
        city = e.target.value
    }
    function handleClick(e){
        window.location.replace(`/${city}`)
    }
    return (
        <div className='flex ps-2 gap-1'>
            <input type='text' className='bg-bg-indigo-principal border-2 border-indigo-temp' placeholder='search location' onChange={handleType}></input>
            <button className='bg-indigo-600 p-2 px-3' onClick={handleClick}>Search</button>
        </div>
    )
}
