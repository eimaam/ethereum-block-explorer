import React from 'react'
import { DotLoader } from 'react-spinners'

export const LoaderFullscreen = () => {
  return (
    <div className='container'>
        <div className='container--child'>
            <DotLoader />
        </div>
    </div>
  )
}
