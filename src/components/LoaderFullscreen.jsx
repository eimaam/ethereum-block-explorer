import React from 'react'
import { DotLoader } from 'react-spinners'

export const LoaderFullscreen = () => {
  return (
    <div className='loader'>
      <div>
        <DotLoader />
      </div>
    </div>
  )
}
