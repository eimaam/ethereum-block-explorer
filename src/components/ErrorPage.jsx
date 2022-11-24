import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'

export const ErrorPage = () => {
  return (
    <div className='w-full h-70vh flex--col'>
        <div className='container--child h-100vh flex--col'>
            <h1>Oops! The page you're looking for is either broken or does not exist!  🤢</h1>
            <button className='flex--row bg-primary'><FaArrowCircleLeft /> Back to Homepage</button>
        </div>
    </div>
  )
}
