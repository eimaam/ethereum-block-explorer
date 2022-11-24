import React from 'react'

export const Explore = () => {
  return (
    <div className='w-85 float-right h-screen'>
        <div className='container--child flex--col h-screen'>
            <input className='p-4' type="text" placeholder='enter valid eth address'/>
            <button className='py-4 px-8 text-bold text-lg'>Search</button>
        </div>
    </div>
  )
}
