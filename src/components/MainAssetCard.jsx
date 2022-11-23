import React, { useEffect, useState } from 'react'
import ethLogo from "../assets/EthereumLogo.svg"
import { BiHide, BiShare, BiShareAlt, BiShow } from "react-icons/bi"
import axios from 'axios'
import { LoaderFullscreen } from "./LoaderFullscreen"
import { useData } from '../context/DataContext'

export const MainAssetCard = () => {
  const { etherBalance, loading } = useData()

  if(etherBalance === undefined){
    return <LoaderFullscreen />
  }


  return (
    <div className='header' id='mainAssetCard' >
        <div className='main'>
          <div className='img'>
            <img src={ethLogo} alt="ethereum logo svg" />
          </div>
          <div>
            <div className='flex-col' style={{alignItems: "flex-start"}}>
              <h3>ETHEREUM</h3>
              <h2 className='address'>0x165cd37b4c644c2921454429e7f9358d18a45e14</h2>
              <h1>{`$ ${etherBalance.quote}`}</h1>
              <h2>≈ {etherBalance.balance} ETH</h2>
            </div>
            {/* <div>
              21/11/2022
            </div> */}
          </div>
        </div>
        <div className='flex-row'>
            <h1><BiHide /></h1>
            <h1><BiShow /></h1>
            <h1><BiShareAlt /></h1>
        </div>
    </div>
  )
}


{/* <div className='header' id='mainAssetCard' >
        <div className='main'>
          <div className='img'>
            <img src={ethLogo} alt="ethereum logo svg" />
          </div>
          <div>
            <div className='flex-col' style={{alignItems: "flex-start"}}>
              <h3>ETHEREUM</h3>
              <h2 className='address'>0x165cd37b4c644c2921454429e7f9358d18a45e14</h2>
              <h1>$41,600.089</h1>
              <h2>≈ 32.016 ETH</h2>
            </div>
            {/* <div>
              21/11/2022
            </div> */}
    //       </div>
    //     </div>
    //     <div className='flex-row'>
    //         <h1><BiHide /></h1>
    //         <h1><BiShow /></h1>
    //         <h1><BiShareAlt /></h1>
    //     </div>
    // </div> */}