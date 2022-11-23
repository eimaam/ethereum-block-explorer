import React from 'react'
import { useData } from '../../context/DataContext'
import { LoaderFullscreen } from '../LoaderFullscreen'
import { AssetsItem, HistoryItem } from './HistoryItem'

export const TransactionHistory = () => {
  const { transHistory, loading } = useData()

  if(loading){
    return <LoaderFullscreen />
  }

  
  return (
    <div id='assets'>
        {transHistory.slice(0,10).map((item, index) => {
          return <HistoryItem 
                  key={index}
                  date={item.block_signed_at.split("T")[0]}
                  time={item.block_signed_at.split("T")[1]}
                  value={item.value_quote}
                  from={item.from_address}
                  />
        })}
    </div>
  )
}
