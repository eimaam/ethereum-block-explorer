import React from 'react'
import { useState } from 'react'
import ReactDOM  from 'react-dom'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { database } from '../../firebaseConfig'
import { AiFillCloseCircle } from 'react-icons/ai'

export const AddWalletModal = ({ handleModal, registeredAddress, data, handleChange, registeredWalletName }) => {

    const [connectWallet, setConnectWallet] = useState(false)
    const [addWalletOption, setAddWalletOption] = useState(false)

    // add new wallet to firebase
    const addWalletAddress = async (e) => {
      e.preventDefault()
      // check if wallet address contains space and return error
      if(data.walletAddress.includes(" ")){
        return toast.error('Incorrect Wallet Address. Address cannot contain space')
      }else if(data.walletAddress.length < 42 | data.walletAddress.length > 42){
        return toast.error('Incorrect Wallet Address. Address must be min-max 42 Chars long')
        // check if address is added already
      }else if(registeredAddress != undefined){
        return toast.error('Address added already')
        // check for same wallet name
      }else if(registeredWalletName != undefined){
        return toast.error("There is a Wallet with such name.")
      }

      try{
        await addDoc(collection(database, 'wallets'), {
          walletName: data.walletName,
          walletAddress: data.walletAddress,
          walletOwner: "imamddahir@gmail.com"
        })
        toast.info('Wallet Added')
        handleModal(false)
      }catch(err){
        console.log(err.message)
      }
    }

  return ReactDOM.createPortal(
    <div className='w-screen fixed inset-0 bg-black/75 z-50'>
    {addWalletOption ?
        <form onSubmit={addWalletAddress} className='w-90 fixed top-1/2 left-1/2 translate-x-[-50%] flex--col px-10 py-12 md:w-1/2 lg:w-1/2 rounded-md bg-primary'>
            <h1 onClick={handleModal} className='text-red-600 absolute top-1 right-2'>
              <AiFillCloseCircle />
            </h1>

            <input 
            type="text" 
            name='walletAddress'
            value={data.walletAddress}
            placeholder='paste wallet address'
            onChange={handleChange}
            />

            <input 
            type="text" 
            name='walletName'
            value={data.walletName}
            placeholder='Wallet Name. e.g TrustWallet1'
            onChange={handleChange}
            />

            <button type='submit' className='btn-secondary'>Add</button>

        </form>
        :
        <div className='w-90 fixed top-1/2 left-1/2 translate-x-[-50%] flex--col px-10 py-12 rounded-md bg-primary'>
          <h1 onClick={handleModal} className='text-red-600 absolute top-1 right-2'>
            <AiFillCloseCircle />
          </h1>

          <button className='btn-secondary' type='button' onClick={() => setAddWalletOption(!addWalletOption)}>Enter Address</button>
          <button className='btn-secondary' disabled type='button' onClick={() => setConnectWallet(!connectWallet)}>Connect Wallet</button>
        </div>
    }
    </div>
    ,
    document.getElementById('addWalletModal')
  )
}