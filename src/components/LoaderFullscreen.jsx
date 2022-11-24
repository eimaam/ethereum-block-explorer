import React from 'react'
import { DotLoader } from 'react-spinners'

export const LoaderFullscreen = ({title}) => {
  return (
    <div className='w-full h-70vh flex--col bg-primary opacity-90'>
      <div className='flex-col'>
        <DotLoader />
        <h2>{title}</h2>
      </div>
    </div>
  )
}
