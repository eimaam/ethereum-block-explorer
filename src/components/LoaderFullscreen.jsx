import React from 'react'
import { ClipLoader, DotLoader, FadeLoader, PropagateLoader, RotateLoader, SquareLoader, SyncLoader } from 'react-spinners'

export const LoaderFullscreen = ({title}) => {
  return (
    <div className='w-full h-100vh flex--col bg-secondary'>
      <div className='flex--col'>
        <SyncLoader />
        <h3>{title}</h3>
      </div>
    </div>
  )
}
