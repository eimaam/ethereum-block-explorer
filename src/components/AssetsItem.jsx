import React from 'react'
import ethLogo from "../assets/EthereumLogo.png"

export const AssetsItem = () => {
  return (
    // asset last transferred from date
    <div className='assetItem'>
        <div>
            <img src={ethLogo} alt="" />
        </div>
        <div>
            <p>12/02/2022</p>
        </div>
        <div>
            <p>0x165cd37b4c644c2921454429e7f9358d18a45e14</p>
        </div>
    </div>
  )
}
