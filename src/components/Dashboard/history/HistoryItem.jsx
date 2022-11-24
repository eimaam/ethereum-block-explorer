import React from 'react'
import { FaUser } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

export const HistoryItem = ({from, value, time, date}) => {
    
  return (
        <div className='flex--row gap-20 border-b border-gray-300 w-full justify-start sm:gap-0 sm:flex sm:flex-wrap sm:justify-between'>
            <div className='w-200px sm:w-max sm:flex-initial'>
                <p>{time.slice(0,5)}</p>
                <p>{date}</p>
            </div>
            <div className='w-85 justify-around flex--row sm:w-max sm:flex sm:gap-2 sm:flex-1'>
                <div className='flex--row justify-start'>
                    <h2><RiMoneyDollarCircleFill /></h2>
                    <div>
                        <h4>$Value:</h4>
                        <p>{value && value.toFixed(3)}</p>
                    </div>
                </div>
                <div className='flex--row'>
                    <h2><FaUser /></h2>
                    <div>
                        <h4>From:</h4>
                        <p className='sm:w-100px w-56 text-ellipsis overflow-hidden'>{from}</p>
                    </div>
                </div>
            </div>

        </div>
        )
}
