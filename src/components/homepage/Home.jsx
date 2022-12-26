import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import banner from "../../assets/ethereum-banner.svg"
import tokens from "../../assets/ethereum-erc-20-tokens.png"
import { Footer } from './Footer'
import { Nav } from './Nav'


export const Home = () => {
  return (
    <>
    <Nav />
    <div className='w-full sm:min-h-70vh md:h-70vh lg:h-70vh flex--col bg-primary py-2'>
        <div className='w-70 grid grid-cols-2 gap-6 md:w-80 sm:flex--col sm:flex-col-reverse'>
            <div className='flex--col items-start' data-aos="fade-left">
                <h1 className='text-3xl font-bold sm:text-xl'>One environment to manage all your assets on the Ethereum Network</h1>
                <h2 className='text-default text-base'>Securely Review your transactions and Manage all your ERC20 Tokens from an easy-to navigate Dashboard</h2>
                <button className='py-4 px-6 bg-secondary text-md text-dark btn-secondary'>
                  <Link to="/dashboard">Get Started</Link></button>
            </div>
            <div className='w-full'>
                <img src={banner} alt="" data-aos="fade-right"/>
            </div>
        </div>
    </div>
    <div className='w-full my-14 flex--col' data-aos="fade-up">
      <div className='w-70 grid grid-cols-2 gap-20  md:w-80 sm:flex sm:flex-col'>
        <div>
          <img src={tokens} alt="ethereum tokens" />
        </div>
        <div className='flex--col items-start justify-start gap-6 sm:items-center' data-aos="fade-up">
          <h1 className='sm:text-center'>Support for all ERC-20 Tokens</h1>
          <h2 className='flex--row justify-start' data-aos="zoom-in"><FaCheck /> Easy to use</h2>
          <h2 className='flex--row justify-start' data-aos="zoom-in"><FaCheck /> Safe</h2>
          <h2 className='flex--row justify-start' data-aos="zoom-in"><FaCheck /> Secure</h2>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
