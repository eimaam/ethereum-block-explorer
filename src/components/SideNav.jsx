import React from 'react'
import { BiHome } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const SideNav = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">
                    <BiHome /> Home
                </Link>
            </li>
            <li>
                <Link to="/">
                    <BiHome /> Assets
                </Link>
            </li>
            <li>
                <Link to="/">
                    <BiHome /> Explore
                </Link>
            </li>
            <li>
                <Link to="/">
                    <BiHome /> NFTs
                </Link>
            </li>
        </ul>
    </div>
  )
}
