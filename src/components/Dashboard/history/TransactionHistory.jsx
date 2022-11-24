import React, { useState } from 'react'
import { useData } from '../../../context/DataContext'
import { LoaderFullscreen } from '../../LoaderFullscreen'
import { HistoryItem } from './HistoryItem'

export const TransactionHistory = () => {
  const { transHistory, loading } = useData()
  const [count, setCount] = useState(15)

  if(loading){
    return <LoaderFullscreen />
  }

  return (
    <div className='my-4 shadow-2xl rounded-md p-2' id='assets'>
        {transHistory.slice(0, count).map((item, index) => {
          return <HistoryItem 
                  key={index}
                  date={item.block_signed_at.split("T")[0]}
                  time={item.block_signed_at.split("T")[1]}
                  value={item.value_quote}
                  from={item.from_address}
                  />
        })}
        <br />
        <div className='flex--row '>
          {/* add count+count when clicked in order to increase slice value and display more transactions */}
          <button className='bg-primary m-3' onClick={() => setCount(prev => prev + prev)}>SHOW MORE</button>
        </div>
    </div>
  )
}