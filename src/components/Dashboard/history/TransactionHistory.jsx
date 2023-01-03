import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { useData } from '../../../context/DataContext'
import { HistoryItem } from './HistoryItem'
// chart illustration image
import chart from "../../../assets/chart1.webp"
import { BiHide, BiShow } from 'react-icons/bi'

export const TransactionHistory = () => {
  const { transHistory } = useData()
  const [count, setCount] = useState(15)
  const [show, setShow] = useState(true)

  // if data is still being fetch, display loader
  if(transHistory === undefined){
    return <div className='flex--col'><ClipLoader /></div>
  }


  return (
    <>
    {/* condition to check if Address has a transaction or not and display different UI depending on the condition */}
    {transHistory.length !== 0 
    ? 
    <div className='my-4 shadow-lg rounded-md px-4 py-2' id='assets' >
      <div className='flex--row items-center justify-around cursor-pointer gap-6'>
        <div className='flex--row justify-start cursor-pointer gap-6 mr-auto sm:gap-2'>
            <img src={chart} className="w-14 h-auto sm:w-8" />
            <div>
              <h1 className='text-extras md:text-2xl'>History: </h1>
            </div>
        </div>
        {/* togglers for showing and hiding sections */}
        {show && <h1 className="text-4xl md:text-3xl sm:text-xl mr-10 sm:mr-5" onClick={() => setShow(prevState => !prevState)}><BiShow /></h1>}
        {!show && <h1 className="text-4xl md:text-3xl sm:text-xl mr-10 sm:mr-5" onClick={() => setShow(prevState => !prevState)}><BiHide /></h1>}
      </div>
      {/* display based onlly if show === true */}
      {show &&
      <>
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
          <button className='bg-primary rounded-md px-2 py-1 hover:text-white m-3' onClick={() => setCount(prev => prev + prev)}>SHOW MORE</button>
        </div>
        </>
      }
    </div>
    :
    <div className='my-4 shadow-2xl rounded-md p-2 h-36 flex--col' id='assets'>
      <h2 className='text-center'>No Transaction record for this address...</h2>
    </div>
    }
    </>
  )
}
