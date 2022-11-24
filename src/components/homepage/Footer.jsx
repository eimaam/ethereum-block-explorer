import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import ethLogo from "../../assets/EthereumLogo.svg"

export const Footer = () => {
  return (
    <footer className='w-full flex--col mt-48 border border-t-grey pt-20 sm:w-full'>
        <div className='w-60 m-0 md:w-80'>
            <div className='flex--row justify-around sm:flex-col'>
                <div className='flex--row sm:flex-col'>
                    <img className='w-24 h-auto sm:w-10 sm:h-auto' src={ethLogo} alt="ethereum logo" />
                    <h2 className='text-dark font-bold'>&lt; ETH-SCAN /&gt;</h2>
                </div>
                <div className="flex-col">
                    <h2>
                        Reach Us via:
                    </h2>
                    <div className='flex--row'>
                        <h1><FaLinkedinIn /></h1>
                        <h1><FaTwitter /></h1>
                        <h1><FaFacebook /></h1>
                    </div>
                </div>
            </div>
            <div className='flex--col gap-0 mt-6'>
                <p>All rights reserved &copy; 2022</p>
                <p>Priori Capital Assessment</p>
            </div>
        </div>
    </footer>
  )
}
