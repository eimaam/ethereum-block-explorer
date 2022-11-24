import React from 'react'
import { MainAssetCard } from './MainAssetCard'
import { TopNav } from './TopNav'
import { SideNav } from './SideNav'
import { TopWallets } from './TopWallets'
import { TransactionHistory } from './history/TransactionHistory'
import { useData } from '../../context/DataContext'
import { LoaderFullscreen } from '../LoaderFullscreen'
import { Footer } from '../homepage/Footer'

export const Dashboard = () => {
  const { loading } = useData()

  if(loading){
    return <LoaderFullscreen title="Fetching Balance Sheet"/>
  }

  return (
    <div className='w-85 float-right sm:w-full sm:float-none'>
        <div className='container--child'>
          <TopNav />
          <SideNav />
          <MainAssetCard />
          <TopWallets />
          <TransactionHistory />
        </div>
        <Footer />      
    </div>
  )
}
