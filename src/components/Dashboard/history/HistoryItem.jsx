import React from 'react'
import { FaUser } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

export const HistoryItem = ({from, value, time, date}) => {
    
  return (
        <div className='flex--row gap-20 sm:gap-0 border-b border-gray-300 w-full justify-start sm:flex sm:flex-wrap sm:justify-between'>
            <div>
                <p>{time.slice(0,5)}</p>
                <p>{date}</p>
            </div>
            <div className='grid grid-cols-2 gap-8 sm:gap-2'>
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
                        <p className='sm:w-100px w-200px text-ellipsis overflow-hidden'>{from}</p>
                    </div>
                </div>
            </div>

        </div>
        )
}
