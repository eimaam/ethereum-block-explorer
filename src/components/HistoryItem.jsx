import React from 'react'
import ethLogo from "../assets/EthereumLogo.svg"
import { useData } from '../context/DataContext'

export const HistoryItem = () => {
    const { transHistory } = useData()
  return (
    // asset last transferred from date
    <div className='assetItem'>
        <div>
            <h4>Value:</h4>
            <b>$17.19</b>
        </div>
        <div className='with--address'>
            <h4>Hash:</h4>
            <p>0x165cd37b4c644c2921454429e7f9358d18a45e14</p>
        </div>
        <div className='with--address'>
            <h4>From:</h4>
            <p>0x165cd37b4c644c2921454429e7f9358d18a45e14</p>
        </div>
        <div>
            <h4>Date</h4>
            <p>12/02/2022</p>
        </div>
    </div>
  )
}
