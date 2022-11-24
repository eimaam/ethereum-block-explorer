import React from 'react'
import { MainAssetCard } from './MainAssetCard'
import { TopNav } from './TopNav'
import { SideNav } from './SideNav'
import { TopWallets } from './TopWallets'
import { TransactionHistory } from './history/TransactionHistory'

export const Dashboard = () => {
  return (
    <div className='w-85 float-right sm:w-full sm:float-none'>
        <div className='container--child'>
          <TopNav />
          <SideNav />
          <MainAssetCard />
          <TopWallets />
          <TransactionHistory />      
        </div>
    </div>
  )
}
