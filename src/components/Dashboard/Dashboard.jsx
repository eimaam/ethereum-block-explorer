import React from 'react'
import { MainAssetCard } from './MainAssetCard'
import { TopNav } from './TopNav'
import { SideNav } from './SideNav'
import { Assets } from './tokensList/Assets'
import { TransactionHistory } from './history/TransactionHistory'
import { useData } from '../../context/DataContext'
import { LoaderFullscreen } from '../LoaderFullscreen'
import { Footer } from '../homepage/Footer'
import { useAuth } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { SelectWallet } from '../../utilities/modals/SelectWallet'
import { useEffect } from 'react'

export const Dashboard = () => {
  const { navigate } = useAuth()
  const { loading, setLoading, walletAddress, setWalletAddress } = useData()

  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    walletAddress != "" && setShowModal(false)
  }, [])


  if(loading){
    return <LoaderFullscreen title={'Processing...'}/>
  }


  return (
    <>
    <div className='w-85 float-right sm:w-full sm:float-none'>
        <div className='container--child min-h-screen'>
          <TopNav />
          <SideNav />
          <MainAssetCard />
          <Assets />
          <TransactionHistory />
        </div>
        <Footer />      
    </div>
    {showModal 
      && 
    <SelectWallet
    handleModal={() => setShowModal(prev => !prev)} 
    /> 
    }
    </>
  )
}
