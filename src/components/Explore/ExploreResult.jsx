import React from 'react'
import { MainAssetCard } from '../Dashboard/MainAssetCard'
import { TopNav } from '../Dashboard/TopNav'
import { SideNav } from '../Dashboard/SideNav'
import { Assets } from '../Dashboard/tokensList/Assets'
import { TransactionHistory } from '../Dashboard/history/TransactionHistory'
import { useData } from '../../context/DataContext'
import { LoaderFullscreen } from '../LoaderFullscreen'
import { Footer } from '../homepage/Footer'
import { useAuth } from '../../context/AuthContext'
import { useEffect } from 'react'

export const ExploreResult = () => {
  const { navigate } = useAuth()
  const { loading, walletAddress } = useData()

  useEffect(() => {
    walletAddress == "" && navigate('explore')
  }, [])


  


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
    </>
  )
}
