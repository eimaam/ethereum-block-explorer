import React from 'react'
import { MoonLoader, ScaleLoader } from 'react-spinners'

export const LoaderFullscreen = ({title}) => {
  return (
    <div className='w-full h-screen flex--col bg-secondary'>
      <div className='flex--col'>
        <MoonLoader />
        <i>{title}</i>
      </div>
    </div>
  )
}
