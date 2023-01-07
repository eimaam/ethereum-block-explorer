import React from 'react'
import { BiHome } from 'react-icons/bi'
import { FaSearchDollar } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { IoMdImages } from 'react-icons/io'
import { Link } from 'react-router-dom'

export const SideNav = () => {
    
  return (
    <div className='bg-primary fixed left-0 top-0 bottom-0 w-15 min-h-screen flex--col items-start px-4 sm:hidden' id='nav'>
        <ul>
            <li className='text-xl py-4 hover:text-secondary md:text-lg'>
                <Link to="/" className='justify-start gap-4 flex--row '>
                    <BiHome className='text-gray-500'/> Home
                </Link>
            </li>
            <li className='text-xl py-4 hover:text-secondary md:text-lg'>
                <Link to="/dashboard" className='justify-start gap-4 flex--row '>
                    <RiMoneyDollarCircleFill className='text-gray-500'/> Assets
                </Link>
            </li>
            <li className='text-xl py-4 hover:text-secondary md:text-lg'>
                <Link to="/dashboard" className='justify-start gap-4 flex--row '>
                    <IoMdImages className='text-gray-500'/> NFTs
                </Link>
            </li>
            <li className='text-xl py-4 hover:text-secondary md:text-lg'>
                <Link to="/explore" className='justify-start  flex--row gap-4'>
                    <FaSearchDollar className='text-gray-500'/> Explore
                </Link>
            </li>
        </ul>
    </div>
  )
}
