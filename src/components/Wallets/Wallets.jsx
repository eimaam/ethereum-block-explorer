import React from 'react'
import { Nav } from '../homepage/Nav'
import { useState } from 'react'
import { AddWalletModal } from '../../utilities/modals/AddWalletModal'
import { deleteDoc, doc } from 'firebase/firestore'
import { database } from '../../firebaseConfig'
import { Card } from './Card'
import { toast } from 'react-toastify'
import { useData } from '../../context/DataContext'
import { useAuth } from '../../context/AuthContext'

export const Wallets = () => {
  const { navigate } = useAuth()
  const { walletAddress, setWalletAddress, walletList } = useData()


  const [showModal, setShowModal] = useState(false)


  const [data, setData] = useState({
    walletName: "",
    walletAddress: "",
  })
  // checks if entered address is already registered else evaluates to undefined
  const availableAddress = walletList.find(item => item.walletAddress === data.walletAddress)

  // checks if entered wallet name is available already else evaluate to undefined
  const availableWalletName = walletList.find(item => item.walletName === data.walletName)

  const handleChange = (e) => {
    const {name, value} = e.target
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }


  const deleteWallet = async (id, walletName) => {
    const promptVal = prompt(`type 'delete' to remove "${walletName}" Wallet`)
    if(promptVal === "delete"){
      try {
        await deleteDoc(doc(database, 'wallets', id))
        .then(() => {
          toast.info('Wallet removed')
        })
      } catch (error) {
        console.log(error.message)
      }
    }else if(promptVal === null){
      return toast.error('Action Canceled')
    }else{
      return toast.error('incorrect entry... Retry!')
    }
  }

  const setAddress = (address) => {
    setWalletAddress(address)
    navigate('/dashboard')
  }
  console.log(walletAddress)
  return (
    <>
    <Nav />
    <div className='m-auto md:w-60 lg:w-1/2 p-1'>
      <h1 className='rounded-md px-4 mt-4'>Linked Wallet(s): {walletList.length}</h1>
      {walletList.map((item, index) => {
        return <Card 
                key={index} 
                walletName={item.walletName} 
                walletAddress={item.walletAddress} 
                handleDelete={() => deleteWallet(item.id, item.walletName)}
                handleClick={() => setAddress(item.walletAddress)}
                />
              }
      )}
      {/* add wallet button */}
      <div className='text-center m-auto'>
      <i className='text-center text-xs m-auto'>Add Wallet</i>
        <h1 className='bg-primary w-10 h-10 flex--row rounded-[100%] m-auto cursor-pointer' onClick={() => setShowModal(true)}>+</h1>
      </div>
    </div>
    {showModal 
    && 
    <AddWalletModal 
    handleModal={() => setShowModal(false)}
    registeredAddress={availableAddress}
    registeredWalletName={availableWalletName}
    data={data}
    setData={setData}
    handleChange={handleChange}
    />
    }
    </>
  )
}
