import React from 'react'
import CloseButton from './CloseButton'
import SearchCity from './SearchCity'
import CitySelection from './CitySelection'

export default function SideBar() {
     
    return (
        <div id = "sidebar" className='hidden w-screen lg:w-1/4 h-[75vh] lg:h-screen bg-bg-indigo-principal'>
            <div className='flex justify-end pt-2'>
                <CloseButton></CloseButton>
            </div>
            <div className='p-5'>
                <SearchCity></SearchCity>
            </div>
            <ul className='p-5'>
                <li><CitySelection city={"London"}></CitySelection></li>
                <li><CitySelection city={"Moscow"}></CitySelection></li>
                <li><CitySelection city={"Barcelona"}></CitySelection></li>
            </ul>
        </div>
    )
}
