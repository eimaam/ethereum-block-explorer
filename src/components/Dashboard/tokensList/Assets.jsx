import React, { useState } from 'react'
import { useData } from '../../../context/DataContext'
import { AssetItem } from './AssetItem'
import wallet from "../../../assets/wallet-icon.png"
import { BiHide, BiShow } from 'react-icons/bi'
export const Assets = () => {
    const { walletBalance } = useData()
    const [count, setCount] = useState(10)
    const [show, setShow] = useState(true)


  return (
    <div className='w-full bg-primary my-4 px-4 py-2 rounded-lg  '>
      <div className='flex--row items-center justify-around cursor-pointer gap-6'>
          <div className='flex--row justify-start cursor-pointer gap-6 mr-auto sm:gap-2'>
            <img src={wallet} className="w-14 h-auto sm:w-8" />
            <h1 className='text-extras md:text-2xl sm:text-xl'>Assets: {walletBalance.length} </h1>
          </div>
          {show && <h1 className="text-4xl md:text-3xl sm:text-xl mr-10 sm:mr-5" onClick={() => setShow(prevState => !prevState)}><BiShow /></h1>}
          {!show && <h1 className="text-4xl md:text-3xl sm:text-xl mr-10 sm:mr-5" onClick={() => setShow(prevState => !prevState)}><BiHide /></h1>}
      </div>
      {
        show &&
      <>
      <div className='w-full flex--row flex-wrap justify-start mt-10'>
          {walletBalance.slice(0,count).map((item, index) => {
              return (
                  <AssetItem 
                  key={index}
                  item={item}
                  />
                  )
              })}
      </div>
      <div className='flex--col'>
        {walletBalance.length > 10 && <button className='m-4' onClick={() => setCount(-1)}>Show All</button>}
      </div>
      </>
      }
  </div>
  )
}
