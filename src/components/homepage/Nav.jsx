import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='bg-primary p-2'>
      <ul className='w-60 flex--row m-auto justify-between'>
        <div className='flex--row'>
          <li className='text-lg'>Home</li>
          <li className='text-lg'>About us</li>
        </div>
        <div className='flex--row'>
          <li><button>Connect Wallet</button></li>
          <li><button>Get Our Mobile App</button></li>
          <li><Link to="/dashboard"><button>Dashboard</button></Link></li>
        </div>
      </ul>
    </nav>
  )
}
