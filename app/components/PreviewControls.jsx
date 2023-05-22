import React from 'react'
import CurrentLocationButton from './CurrentLocationButton'
import PlacesButton from './PlacesButton'

export default function PreviewControls() {
  return (
    <div className='w-full flex justify-between p-3'>
        <PlacesButton></PlacesButton>
        <CurrentLocationButton></CurrentLocationButton>
    </div>
  )
}
