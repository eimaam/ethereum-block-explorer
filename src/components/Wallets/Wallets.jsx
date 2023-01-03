import React from 'react'
import { Footer } from '../homepage/Footer'
import { Nav } from '../homepage/Nav'
import { useState } from 'react'
import { AddWalletModal } from '../../utilities/modals/AddWalletModal'
import { useEffect } from 'react'
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { database } from '../../firebaseConfig'
import { Card } from './Card'
import { toast } from 'react-toastify'

export const Wallets = () => {
  const [showModal, setShowModal] = useState(false)
  const [userWallets, setUserWallets] = useState([])

  const [data, setData] = useState({
    walletName: "",
    walletAddress: "",
  })
  // checks if entered address is already registered else evaluates to undefined
  const availableAddress = userWallets.find(item => item.walletAddress === data.walletAddress)

  // checks if entered wallet name is available already else evaluate to undefined
  const availableWalletName = userWallets.find(item => item.walletName === data.walletName)

  const handleChange = (e) => {
    const {name, value} = e.target
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  
  

  const deleteWallet = async (id, walletName) => {
    const promptVal = prompt(`type \'delete\' to remove "${walletName}" Wallet`)
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
  

  useEffect(() => {
    const fetchUserWallets = async () => {
      try {
        const q = query(collection(database, 'wallets'), where('walletOwner', "==", "imamddahir@gmail.com"))
        await onSnapshot(q, snapShot => {
          setUserWallets(snapShot.docs.map(data => ({
            ...data.data(),
            id: data.id
          })))
        })
        
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchUserWallets()
  }, [])


  return (
    <>
    <Nav />
    <div className='m-auto md:w-60 lg:w-1/2'>
      <h1 className='rounded-md px-4 mt-4'>Linked Wallet(s): {userWallets.length}</h1>
      {userWallets.map((item, index) => {
        return <Card 
                key={index} 
                walletName={item.walletName} 
                walletAddress={item.walletAddress} 
                handleClick={() => deleteWallet(item.id, item.walletName)}
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
