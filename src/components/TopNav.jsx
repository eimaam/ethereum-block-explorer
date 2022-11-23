import React from 'react'
import { FaEthereum, FaSearch } from 'react-icons/fa'
import ethLogo from "../assets/EthereumLogo.svg"

export const TopNav = () => {
    
    
    const show = () => {
        const input = document.querySelector("input")
        const searchBtn = document.querySelector("#searchBtn")
        const cancelBtn = document.querySelector("#cancelBtn")
        const searchIcon = document.querySelector("#search")
        const title = document.querySelector("h3")
        const walletConnect = document.querySelector("#walletConnect")

        if(input.style.display !== "block"){
            input.style.display = "block"
            searchBtn.style.display = "block"
            cancelBtn.style.display = "block"
            searchIcon.style.display = "none"
            title.style.display = "none"
            walletConnect.style.display = "none"
        }else{
            input.style.display = "none"
            searchBtn.style.display = "none"
            cancelBtn.style.display = "none"
            searchIcon.style.display = "block"
            title.style.display = "block"
            walletConnect.style.display = "block"
        }
    }

  return (
    <div className='top--nav' id='topNav'>
        <div className='nav--item'>
            <div className='flex-row'>
                <img src={ethLogo} alt="" />
                <h3>&lt;ETH-SCAN /&gt;</h3>
            </div>
            <div className='flex-row'>
                <div className='flex-row'>
                    <input type="text" placeholder='enter ETH address'/>
                    <button type='submit' id='searchBtn'>Search</button>
                    <button type='submit' id='cancelBtn' onClick={show}>Cancel</button>
                    <h2 id='searchIcon' onClick={show}><FaSearch /></h2>
                </div>
                <div id='walletConnect'>
                    <button className='flex-row' style={{gap: "0.2rem"}}>
                        <FaEthereum /> CONNECT WALLET 
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
