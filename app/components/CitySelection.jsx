'use client'
import { Raleway } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const font = Raleway({subsets:["latin"]})
export default function CitySelection({city}) {
  return (
    <div className='text-white border-0 hover:border-[1px] hover:border-white w-full p-1 py-2'>
        <Link className={"ps-1 "+font.className} href={`/${city}`}>{city}</Link>
    </div>
  )
}
