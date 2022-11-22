import React from 'react'
import { AllAssets } from './components/AllAssets'
import { MainAssetCard } from './components/MainAssetCard'
import { Container } from './components/Container'
import { SideNav } from './components/SideNav'
import { TopNav } from './components/TopNav'

export const Home = () => {
  return (
    <div>
      <Container>
        <MainAssetCard />
        <AllAssets />
      </Container>
      
    </div>
  )
}
