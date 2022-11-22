import React from 'react'
import ethLogo from "../assets/EthereumLogo.svg"
import { useData } from '../context/DataContext'
import { LoaderFullscreen } from './LoaderFullscreen'

export const TopWallets = () => {
    const { walletBalance, loading } = useData()

    if(loading){
        return <LoaderFullscreen />
    }

  return (
    <div className='top--wallets'>
    {walletBalance.slice(0,7).map((item, index) => {
                return (
                    <div className='balance--card'>
                        <img src={item.logo_url} alt="" />
                        <div>
                            <h4>{item.contract_ticker_symbol}</h4>
                            <p>${item.quote.toFixed(2)}</p>
                        </div>
                    </div>
                )
            })}
    </div>
  )
}
