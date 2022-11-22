import React from 'react'
import ethLogo from "../assets/EthereumLogo.png"
import { BiHide, BiShare, BiShareAlt, BiShow } from "react-icons/bi"

export const MainAssetCard = () => {
  return (
    <div>
        <div>
          <div>
            <img src={ethLogo} alt="ethereum logo svg" />
          </div>
          <div>
            <h3>Ethereum</h3>
            <h4>0x165cd37b4c644c2921454429e7f9358d18a45e14</h4>
            <h2>$41,600.089</h2>
            <h3>≈ 32.016 ETH</h3>
          </div>
          <div>
            21/11/2022
          </div>
        </div>
        <div>
            <h2><BiHide /></h2>
            <h2><BiShow /></h2>
            <h2><BiShareAlt /></h2>
        </div>
    </div>
  )
}
