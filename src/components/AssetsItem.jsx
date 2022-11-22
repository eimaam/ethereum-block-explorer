import React from 'react'
import ethLogo from "../assets/EthereumLogo.png"

export const AssetsItem = () => {
  return (
    // asset last transferred from date
    <div className='assetItem'>
        <div>
            <h4>Asset:</h4>
            <div className='flex-row'>
                <img src={ethLogo} alt="" />
                <p>Monk Coin</p>
            </div>
        </div>
        <div>
            <h4>Balance:</h4>
            <p>7657483947</p>
        </div>
        <div>
            <h4>Last Transfer</h4>
            <p>12/02/2022</p>
        </div>
        <div>
            <h4>From:</h4>
            <p>0x165cd37b4c644c2921454429e7f9358d18a45e14</p>
        </div>
    </div>
  )
}
