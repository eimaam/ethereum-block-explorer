import React from 'react'
import { useData } from '../../../context/DataContext'
import { AssetItem } from './AssetItem'

export const Assets = () => {
    const { walletBalance } = useData()

console.log(walletBalance)
  return (
    <div className='w-full bg-primary p-4 sm:px-1 rounded-lg my-4 flex--col flex-wrap'>
        <div className='w-full flex--row flex-wrap'>
            {walletBalance.slice(0,10).map((item, index) => {
                return (
                    <AssetItem 
                    key={index}
                    item={item}
                    />
                    )
                })}
        </div>
        {walletBalance.length > 10 && <button className='m-4'>Show All</button>}
    </div>
  )
}
