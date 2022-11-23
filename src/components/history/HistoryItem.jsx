import React from 'react'
import { BiMoney } from 'react-icons/bi'
import { FaInfo, FaUser } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { useData } from '../../context/DataContext'
import { LoaderFullscreen } from '../LoaderFullscreen'

export const HistoryItem = ({from, value, time, date}) => {
    
 


  return (
        <div className='history--item'>
            <div>
                <p>{time}</p>
                <p>{date}</p>
            </div>
            <div className='flex-row' style={{justifyContent:"flex-start"}}>
                <h2><RiMoneyDollarCircleFill /></h2>
                <div>
                    <h4>Value:</h4>
                    <p>{value.toFixed(3)}</p>
                </div>
            </div>
            <div className='with--address flex-row'>
                <h2><FaUser /></h2>
                <div>
                    <h4>From:</h4>
                    <p>{from}</p>
                </div>
            </div>
        </div>
        )
}
