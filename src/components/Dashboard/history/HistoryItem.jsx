import React from 'react'
import { BiMoney } from 'react-icons/bi'
import { FaInfo, FaUser } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

export const HistoryItem = ({from, value, time, date}) => {
    
  return (
        <div className='flex--row gap-20 sm:gap-4 border-b border-gray-300 w-full justify-start sm:grid-cols-3 sm:flex-wrap sm:justify-between'>
            <div>
                <p>{time}</p>
                <p>{date}</p>
            </div>
            <div className='grid grid-cols-2 gap-8'>
                <div className='flex--row justify-start'>
                    <h2><RiMoneyDollarCircleFill /></h2>
                    <div>
                        <h4>$Value:</h4>
                        <p>{value.toFixed(3)}</p>
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