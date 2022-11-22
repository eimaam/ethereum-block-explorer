import React from 'react'
import ethLogo from "../assets/EthereumLogo.svg"
import { FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer id='footer'>
        <div className='footer--item'>
            <div className='title'>
                <div>
                    <img src={ethLogo} alt="ethereum logo" />
                    <h1>&lt; ETH-SCAN /&gt;</h1>
                </div>
                <div className="flex-col">
                    <h2>
                        Reach Us via:
                    </h2>
                    <div className='flex-row' style={{gap: "1rem"}}>
                        <h1><FaLinkedinIn /></h1>
                        <h1><FaTwitter /></h1>
                        <h1><FaFacebook /></h1>
                    </div>
                </div>
            </div>
            <div className='foot--note'>
                <p>All rights reserved &copy; 2022</p>
                <p>Priori Capital Assessment</p>
            </div>
        </div>
    </footer>
  )
}
