import React from 'react'
import ethLogo from "../assets/EthereumLogo.svg"
import { useData } from '../context/DataContext'
import { LoaderFullscreen } from './LoaderFullscreen'

export const TopWallets = () => {
    const { walletBalance, loading } = useData()

    if(loading){
        return <LoaderFullscreen />
    }

    console.log(walletBalance)

  return (
    <div className='bg-primary p-4 sm:px-1 rounded-lg my-4 flex--row flex-wrap'>
    {walletBalance.slice(0,7).map((item, index) => {
                return (
                    <div key={index} className='w-max flex--row rounded-md bg-secondary py-2 px-4'>
                        <img className='w-10 h-10 sm:w-8 sm:h-8' src={item.logo_url} alt="" />
                        <div>
                            <h4>{item.contract_ticker_symbol}</h4>
                            <p>${item.quote.toFixed(2)}</p>
                            <p>{(item.balance / Math.pow(10, item.contract_decimals)).toFixed(2)}</p>
                        </div>
                    </div>
                )
            })}
    </div>
  )
}
