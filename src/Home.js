import React from 'react'
import { MainAssetCard } from './components/MainAssetCard'
import { SideNav } from './components/SideNav'

export const Home = () => {
  return (
    <div>
      <SideNav />
      <MainAssetCard />
    </div>
  )
}
