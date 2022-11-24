import React, { useState } from 'react'
import { useData } from '../../../context/DataContext'
import { AssetItem } from './AssetItem'

export const Assets = () => {
    const { walletBalance } = useData()
    const [count, setCount] = useState(10)


console.log(walletBalance)
  return (
    <div className='w-full bg-primary p-4 sm:px-1 rounded-lg my-4 flex--col flex-wrap'>
        <div className='w-full flex--row flex-wrap'>
            {walletBalance.slice(0,count).map((item, index) => {
                return (
                    <AssetItem 
                    key={index}
                    item={item}
                    />
                    )
                })}
        </div>
        {walletBalance.length > 10 && <button className='m-4' onClick={() => setCount(-1)}>Show All</button>}
    </div>
  )
}
