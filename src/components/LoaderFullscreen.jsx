import React from 'react'
import { ScaleLoader } from 'react-spinners'

export const LoaderFullscreen = ({title}) => {
  return (
    <div className='w-full h-screen flex--col bg-secondary'>
      <div className='flex--col'>
        <ScaleLoader />
        <i>{title}</i>
      </div>
    </div>
  )
}
