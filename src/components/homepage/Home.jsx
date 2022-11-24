import React from 'react'
import { FaCheck, FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import banner from "../../assets/ethereum-banner.svg"
import tokens from "../../assets/ethereum-erc-20-tokens.png"
import ethLogo from "../../assets/EthereumLogo.svg"
import { Footer } from '../Footer'
import { Nav } from './Nav'


export const Home = () => {
  return (
    <>
    <Nav />
    <div className='w-full h-70vh flex--col bg-primary'>
        <div className='w-60 grid grid-cols-2 gap-6'>
            <div className='flex--col items-start'>
                <h1 className='text-3xl font-bold'>One environment to manage all your assets on the Ethereum Network</h1>
                <h2 className='text-2xl text-default'>Securely Review your transactions and Manage all your ERC20 Tokens from an easy-to navigate Dashboard</h2>
                <button className='py-4 px-6 bg-secondary text-md text-dark'>Get Started</button>
            </div>
            <div className='w-600px'>
                <img src={banner} alt=""/>
            </div>
        </div>
    </div>
    <div className='w-full my-14 flex--col '>
      <div className='w-60 grid grid-cols-2 gap-6'>
        <div className='flex--col items-start justify-start gap-6'>
          <h1>Support for all ERC-20 Tokens</h1>
          <h2 className='flex-row justify-start'><FaCheck /> Easy to use</h2>
          <h2 className='flex-row justify-start'><FaCheck /> Safe</h2>
          <h2 className='flex-row justify-start'><FaCheck /> Secure</h2>
        </div>
        <div>
          <img src={tokens} alt="" />
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
