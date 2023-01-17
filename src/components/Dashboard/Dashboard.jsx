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

export const Dashboard = () => {
  const { navigate } = useAuth()
  const { loading, walletAddress } = useData()

  if(walletAddress === ""){
    return navigate('wallets')
  }
  // if(walletAddress === ""){
  //   return <LoaderFullscreen 
  //           title="Processing request..."
  //           />
  // }

  return (
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
  )
}
