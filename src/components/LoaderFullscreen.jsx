import React from 'react'
import { DotLoader } from 'react-spinners'

export const LoaderFullscreen = ({title}) => {
  return (
    <div className='loader'>
      <div className='flex-col'>
        <DotLoader />
        <h2>{title}</h2>
      </div>
    </div>
  )
}
