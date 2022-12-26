import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdLogout } from "react-icons/md"
import { AiFillSetting } from "react-icons/ai"
import { FaWallet } from "react-icons/fa"
import avatar from "../../assets/IMG_0422 (2).HEIC"

export const Nav = () => {
  const [showSettingPanel, setShowSettingPanel] = useState(false)
  return (
    <nav className='bg-primary p-2 border boder-b-grey '>
      <ul className='w-60 flex flex-row m-auto justify-between sm:w-full'>
        <div className='flex--row'>
          <li className='text-base md:text-lg cursor-pointer'>
            <Link to="/">Home</Link>
          </li>
          <li className='text-base md:text-lg cursor-pointer sm:hidden'>
            <Link to="/">About Us</Link>
          </li>
        </div>
        <div className='flex--row'>
        <div className='flex--row'>
          <li><button className='sm:text-xs btn-secondary '>Connect Wallet</button></li>
          {/* <li><button className='sm:text-xs btn-secondary'>Get Our Mobile App</button></li> */}
          <li><Link to="/dashboard"><button className='btn-secondary sm:text-xs'>Dashboard</button></Link></li>
        </div>
        <div className='flex--col' onClick={() => setShowSettingPanel(prev => !prev)}>
          <img src={avatar} alt="" className='w-8 h-8 md:w-10 md:h-10 rounded-[100%]'/>
        {showSettingPanel &&
          <div className='bg-secondary flex flex-col justify-start items-start absolute top-12 md:top-16 sm:right-0 p-2 rounded-md cursor-pointer'>
            <h4 className=' hover:text-primary'>
              <Link to="/wallets" className='flex--row'>
                <FaWallet /> 
                Wallets
              </Link>
            </h4>
            <h4 className=' hover:text-primary'>
              <Link to="/settings" className='flex--row'>
                <AiFillSetting /> 
                Account Settings
              </Link>
            </h4>
            <h4 className='flex--row hover:text-primary'>
              <MdLogout /> 
              Log Out
            </h4>
          </div>
        }
        </div>
        </div>
      </ul>
    </nav>
  )
}
