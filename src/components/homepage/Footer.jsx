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
                </div>
                <div className="flex--col">
                    <h2 className='text-dark'>
                        Reach Us via:
                    </h2>
                    <div className='flex--row gap-4'>
                        <h1 className='text-primary hover:text-dark'><FaLinkedinIn /></h1>
                        <h1 className='text-primary hover:text-dark'><FaTwitter /></h1>
                        <h1 className='text-primary hover:text-dark'><FaFacebook /></h1>
                    </div>
                </div>
            </div>
            <div className='flex--col gap-0 mt-6'>
                <p>All rights reserved &copy; 2022</p>
                <p><a className='text-blue-800' href="https://www.priori.capital/">Priori Capital</a> Assessment</p>
            </div>
        </div>
    </footer>
  )
}
