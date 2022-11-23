import React from 'react'
import { AllAssets, TransactionHistory } from './components/history/TransactionHistory'
import { MainAssetCard } from './components/MainAssetCard'
import { Container } from './components/Container'
import { SideNav } from './components/SideNav'
import { TopNav } from './components/TopNav'
import { TopWallets } from './components/TopWallets'

export const Home = () => {
  return (
    <div>
      <Container>
        {/* <MainAssetCard /> */}
        {/* <TopWallets /> */}
        <TransactionHistory />
      </Container>
      
    </div>
  )
}
