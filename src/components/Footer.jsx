import React from 'react'
import ethLogo from "../assets/EthereumLogo.png"
import { FaLinkedinIn, FaTwitter, FaFacebook } from "react-icons/fa"

export const Footer = () => {
  return (
    <div id='footer'>
        <div>
            <div>
                <div>
                    <img src={ethLogo} alt="ethereum logo" />
                </div>
                <div>
                    <h2>
                        Partner with us:
                    </h2>
                    <div>
                        <h3><FaTwitter /></h3>
                        <h3><FaTwitter /></h3>
                        <h3><FaTwitter /></h3>
                    </div>
                </div>
            </div>
            <div>
                <p>All rights reserved &copy; 2022</p>
                <p>Priori Capital Assessment</p>
            </div>
        </div>
    </div>
  )
}
