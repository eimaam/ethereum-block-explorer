import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { useData } from '../../../context/DataContext'
import { LoaderFullscreen } from '../../LoaderFullscreen'
import { HistoryItem } from './HistoryItem'

export const TransactionHistory = () => {
  const { transHistory } = useData()
  const [count, setCount] = useState(15)

  // if data is still being fetch, display loader
  if(transHistory === undefined){
    return <div className='flex--col'><ClipLoader /></div>
  }

  return (
    <>
    {/* condition to check if Address has a transaction or not and display different UI depending on the condition */}
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
    
    </>
  )
}
