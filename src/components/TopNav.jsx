import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import ethLogo from "../assets/EthereumLogo.svg"

export const TopNav = () => {
  return (
    <div className='top--nav' id='topNav'>
        <div className='nav--item'>
            <div className='flex-row'>
                <img src={ethLogo} alt="" />
                <h3>&lt; ETH-SCAN /&gt;</h3>
            </div>
            <div className='flex-row'>
                <div className='flex-row'>
                    <input type="text" placeholder='enter ETH address'/>
                    <button type='submit'>SEARCH</button>
                </div>
                <div>
                    <button className='flex-row' style={{gap: "0.2rem"}}><FaEthereum /> CONNECT WALLET </button>
                </div>
            </div>
        </div>
    </div>
  )
}
