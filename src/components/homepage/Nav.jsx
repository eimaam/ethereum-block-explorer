import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='bg-primary p-2 border boder-b-grey'>
      <ul className='w-60 flex--row m-auto justify-between sm:w-full'>
        <div className='flex--row'>
          <li className='text-lg sm:hidden'>Home</li>
          <li className='text-lg sm:hidden'>About Us</li>
        </div>
        <div className='flex--row'>
          <li><button className='sm:text-xs'>Connect Wallet</button></li>
          <li><button className='sm:text-xs'>Get Our Mobile App</button></li>
          <li><Link to="/dashboard"><button className='sm:text-xs'>Dashboard</button></Link></li>
        </div>
      </ul>
    </nav>
  )
}
