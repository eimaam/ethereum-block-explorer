import React from 'react'
import ethLogo from "../assets/EthereumLogo2.png"
import { Footer } from './homepage/Footer'
import { Nav } from './homepage/Nav'
import { MdDeleteForever } from "react-icons/md"
import { useState } from 'react'
import { AddWalletModal } from '../utilities/modals/AddWalletModal'

export const Wallets = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <Nav />
    <h1 className='m-auto  md:w-60 rounded-md px-4 mt-4'>Linked Wallet(s):</h1>
    <div className='flex flex-col justify-center gap-4 p-4'>
      <div className='m-auto w-full bg-primary rounded-md p-4 flex flex-col gap-4 md:w-60 lg:w-1/2'>
        <div className='flex items-center justify-between'>
          <h2 className='text-dark text-lg md:text-2xl'>Trust Wallet:</h2>
          <h2 className='text-dark text-lg md:text-2xl'><MdDeleteForever /></h2>
        </div>
        <div className='flex-row flex justify-start items-center'>
          <img src={ethLogo} alt="" className='w-14 w- md:w-20'/>
          <h2 className='text-secondary text-xl text-ellipsis overflow-hidden'>0xb1afb973cd4df19e7aae73d8be0b438c079cdb16</h2>
        </div>
      </div>
     <i className='text-center text-xs'>Add Wallet</i>
      <div className='bg-primary w-10 h-10 flex--row rounded-[100%] m-auto' onClick={() => setShowModal(true)}>
        <h1>+</h1>
      </div>
    </div>
    {showModal 
    && 
    <AddWalletModal />
    }


    <Footer />
    </>
  )
}
