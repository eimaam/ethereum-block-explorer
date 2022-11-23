import React from 'react'
import { BiHome } from 'react-icons/bi'
import { FaBars, FaSearchDollar } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { IoMdImages } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useData } from '../context/DataContext'

export const SideNav = () => {

    
  return (
    <div className='side--nav' id='nav'>
        <ul>
            <li>
                <Link to="/">
                    <BiHome /> Home
                </Link>
            </li>
            <li>
                <Link to="/">
                    <RiMoneyDollarCircleFill /> Assets
                </Link>
            </li>
            <li>
                <Link to="/">
                    <FaSearchDollar /> Explore
                </Link>
            </li>
            <li>
                <Link to="/">
                    <IoMdImages /> NFTs
                </Link>
            </li>
        </ul>
    </div>
  )
}
