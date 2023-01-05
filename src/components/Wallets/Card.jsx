import React from 'react'
import ethLogo from "../../assets/EthereumLogo2.png"
import { MdDeleteForever } from "react-icons/md"
import { Link } from 'react-router-dom'


export const Card = ({walletName, walletAddress, handleClick}) => {
  return (
    <Link to="" className='m-auto flex flex-col justify-center gap-4 p-4'>
      <div className='m-auto w-full bg-primary rounded-md p-4 flex flex-col gap-4'>
        <div className='flex items-center justify-between'>
            <h2 className='text-dark text-lg md:text-2xl'>
                {walletName}
            </h2>
          <h2 className='text-dark text-lg md:text-2xl cursor-pointer' onClick={handleClick}><MdDeleteForever /></h2>
        </div>
        <div className='flex-row flex justify-start items-center'>
            <img src={ethLogo} alt="" className='w-14 w- md:w-20'/>
            <h2 className='text-secondary text-xl text-ellipsis overflow-hidden'>
                {walletAddress}
            </h2>
        </div>
      </div>
    </Link>
  )
}
