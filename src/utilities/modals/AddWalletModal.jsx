import React from 'react'
import { useState } from 'react'
import ReactDOM  from 'react-dom'

export const AddWalletModal = () => {
    const [connectWallet, setConnectWallet] = useState(false)
    const [addWalletAddress, setAddWalletAddress] = useState(false)
  return ReactDOM.createPortal(
    <div className='w-screen fixed inset-0 bg-black/75 z-50'>
    {addWalletAddress ?
        <form className='w-90 fixed top-1/2 left-1/2 translate-x-[-50%] flex--col px-10 py-12 md:w-1/2 lg:w-1/2 rounded-md bg-primary'>
            <input 
            type="text" 
            name='walletAddress'
            placeholder='enter address'
            />
            <input 
            type="text" 
            name='walletName'
            placeholder='give your wallet a Name. e.g TrustWallet1'
            />
            <button type='submit' className='btn-secondary' >Add</button>
        </form>
        :
        <div className='w-90 fixed top-1/2 left-1/2 translate-x-[-50%] flex--col px-10 py-12 rounded-md bg-primary'>
            <button className='btn-secondary' disabled type='button' onClick={() => setConnectWallet(!connectWallet)}>Connect Wallet</button>
            <button className='btn-secondary' type='button' onClick={() => setAddWalletAddress(!addWalletAddress)}>Enter Address</button>
        </div>
    }
    </div>
    ,
    document.getElementById('addWalletModal')
  )
}
