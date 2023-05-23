'use client'
import Image from 'next/image'
import React from 'react'

export default function CloseButton() {
    function handleClick(e){
        const sidebar = document.getElementById("sidebar");
        const preview = document.getElementById("preview");

        sidebar.classList.add("hidden");
        preview.classList.remove("hidden");
    }   
    return (
        <button onClick={handleClick}><Image src={"/close.svg"} className='fill-white' width={30} height={30} alt='close button'></Image></button>
    )
}
