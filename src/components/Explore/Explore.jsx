import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useData } from '../../context/DataContext'
import { SideNav } from '../Dashboard/SideNav'
import { TopNav } from '../Dashboard/TopNav'

export const Explore = () => {
  const exploreAddress = useParams()

  // importing function from DataContext
  const { LookUpAddress } = useData()

  // input data save state
  const [address, setAddress] = useState("")


 const handleChange = (e) => {
  setAddress(e.target.value)
 }


  return (
    <>
    <TopNav />
    <SideNav />
    <div className='w-85 float-right h-screen sm:w-screen'>
        <div className='container--child flex--col h-screen'>
            <input className=' placeholder:italic p-4 shadow border border-primary' type="text" placeholder='enter valid eth address' onChange={handleChange}/>
            <button className='bg-primary py-4 px-8 text-bold text-lg sm:py-2 px-4' onClick={() => LookUpAddress(address)}><Link to={`/explore/${exploreAddress}`}> Search</Link></button>
        </div>
    </div>
    </>
  )
}
