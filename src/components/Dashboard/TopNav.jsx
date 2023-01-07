import React, { useState } from 'react'
import { FaBars, FaEthereum, FaSearch } from 'react-icons/fa'
import ethLogo from "../../assets/EthereumLogo.svg"
import { useData } from '../../context/DataContext'
import { BiHome } from 'react-icons/bi'
import { FaSearchDollar } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { IoMdImages } from 'react-icons/io'
import { Link } from 'react-router-dom'

export const TopNav = () => {
    // importing walletAddress value and state updater to update as address is entered in search bar 
    const { walletAddress, LookUpAddress } = useData()

    // manage mobile navigation menu display ==> hide/show
    const [showNav, setShowNav] = useState(false)

    // function to manage items display on mobile when search is enabled
    const show = () => {
        // declaring variables and calling on items
        const hamburger = document.querySelector("#hamburger")
        const input = document.querySelector("input")
        const searchBtn = document.querySelector("#searchBtn")
        const cancelBtn = document.querySelector("#cancelBtn")
        const searchIcon = document.querySelector("#searchIcon")
        const walletConnect = document.querySelector("#walletConnect")

        if(input.style.display !== "block"){
            input.style.display = "block"
            searchBtn.style.display = "block"
            cancelBtn.style.display = "block"
            searchIcon.style.display = "none"
            walletConnect.style.display = "none"
            hamburger.style.display = "none"
        }else{
            input.style.display = "none"
            searchBtn.style.display = "none"
            cancelBtn.style.display = "none"
            searchIcon.style.display = "block"
            walletConnect.style.display = "block"
            hamburger.style.display = "flex"
        }
    }
    

    // state to save supplied Address  
    const [enteredAddress, setEnteredAddress] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setEnteredAddress(e.target.value)
    }

  return (
    <div className='fixed top-0 right-0 z-50 w-85 float-right bg-primary sm:w-full sm:float-none' id='topNav'>
        <div className='sm:float-none sm:w-full md:w-full m-auto w-55 flex--row justify-between py-2 px-2 border-b border-extras'>
            <div className='flex--row'>
                <div id='navToggler'>
                    {!showNav && 
                    <h2 className='hidden sm:block text-default z-50 text-2xl'>
                        <FaBars id='hamburger' onClick={() => setShowNav(prev => !prev)} />
                    </h2>
                    }
                    {showNav && 
                    <h2 className=' text-default absolute top-2 left-1 z-50 text-2xl'>
                        <GrClose onClick={() => setShowNav(prev => !prev)} />
                    </h2>
                    }
                </div>
                {/* <img src={ethLogo} alt="" className='w-8 h-auto sm:hidden'/> */}
                <h3 className='sm:hidden' id='title'>ETHER-MANAGER</h3>
            </div>
            <div className='flex--row' id='searchTools'>
                <div className='flex--row'>
                    <input 
                    className='w-96 sm:w-full sm:hidden'
                    type="text" 
                    placeholder={walletAddress !== "" ? walletAddress : `Enter ETH address`}
                    name='walletAddress'
                    onChange={handleChange}
                    />
                    <button className='sm:hidden btn-secondary ' id='searchBtn' onClick={() => LookUpAddress(enteredAddress)}>
                        Search
                    </button>
                    <button className='hidden' id='cancelBtn' onClick={show}>
                        Cancel
                    </button>
                    <h2 id='searchIcon' onClick={show}>
                        <FaSearch className='hidden sm:text-secondary sm:flex--row'/>
                    </h2>
                </div>
                <h3 className='text-default'>
                    <Link to="/wallets">
                        Wallets
                    </Link>
                </h3>
            </div>
        </div>
        {showNav &&
        <ul className='fixed left-0 top-0 bottom-0 w-full bg-primary min-h-screen flex--col ' id='mNav'>
            <li className='text-lg flex--row p-4 gap-3' onClick={() => setShowNav(false)}>
                <Link to="/" className='text-lg flex--row p-4 gap-3' onClick={() => setShowNav(false)}>
                    <BiHome /> Home
                </Link>
            </li>
            <li className='text-lg flex--row p-4 gap-3' onClick={() => setShowNav(false)}>
                <Link to="/dashboard" className='text-lg flex--row p-4 gap-3' onClick={() => setShowNav(false)}>
                    <RiMoneyDollarCircleFill /> Assets
                </Link>
            </li>
            <li className='text-lg flex--row p-4 gap-3' onClick={() => setShowNav(false)}>
                <Link to="/dashboard" className='text-lg flex--row p-4 gap-3' onClick={() => setShowNav(false)}>
                    <IoMdImages /> NFTs
                </Link>
            </li>
            <li className='text-lg flex--row p-4 gap-3' onClick={() => setShowNav(false)}>
                <Link to="/explore" className='text-lg flex--row p-4 gap-3' onClick={() => setShowNav(false)}>
                    <FaSearchDollar /> Explore
                </Link>
            </li>
        </ul>
        }
    </div>
  )
}
