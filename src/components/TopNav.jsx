import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import ethLogo from "../assets/EthereumLogo.png"

export const TopNav = () => {
  return (
    <div>
        <div>
            <img src={ethLogo} alt="" />
            <h2>&lt; ETH-SCAN /&gt;</h2>
        </div>
        <div>
            <div>
                <input type="text" placeholder='enter ETH address'/>
                <button type='submit'>SEARCH</button>
            </div>
            <div>
                <button>CONNECT WALLET <FaEthereum /></button>
            </div>
        </div>
    </div>
  )
}
