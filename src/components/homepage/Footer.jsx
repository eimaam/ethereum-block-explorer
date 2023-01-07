import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import ethLogo from "../../assets/EthereumLogo.svg"

export const Footer = () => {
  return (
    <footer className='w-full flex--col mt-48 border border-t-grey p-2 sm:w-full'>
        <div className='w-60 m-0 md:w-80'>
            <div className='flex--row justify-around sm:flex-col'>
                <div className='flex--row sm:flex-col'>
                    <img className='w-14 h-auto sm:w-10 sm:h-auto' src={ethLogo} alt="ethereum logo"/>
                </div>
                <div className="flex--col">
                    <h4 className='text-dark'>
                        Reach Us via:
                    </h4>
                    <div className='flex--row gap-4'>
                        <h2 className='text-primary hover:text-dark' ><FaLinkedinIn /></h2>
                        <h2 className='text-primary hover:text-dark' ><FaTwitter /></h2>
                        <h2 className='text-primary hover:text-dark' ><FaFacebook /></h2>
                    </div>
                </div>
            </div>
            <div className='flex--col gap-0 mt-2'>
                <p>All rights reserved &copy; 2022</p>
            </div>
        </div>
    </footer>
  )
}
