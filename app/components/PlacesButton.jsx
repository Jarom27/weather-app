'use client'
import React, { useRef } from 'react'

export default function () {
    function handleClick(e){
        const sidebar = document.getElementById("sidebar")
        const preview = document.getElementById("preview")
        preview.classList.add("hidden")
        sidebar.classList.remove("hidden")
    }
    return (
      <button className='bg-gray-controls p-1 px-4' onClick={handleClick}>Search for places</button>
    )
}
