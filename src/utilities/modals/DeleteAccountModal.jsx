import React from 'react'
import { useState } from 'react'
import ReactDOM  from 'react-dom'

export const DeleteAccountModal = ({handleClick}) => {
  return ReactDOM.createPortal(
    <div className='w-screen  fixed inset-0 bg-black/75 z-50'>
        <div className='w-90 fixed top-1/2 left-1/2 translate-x-[-50%] flex--col px-10 py-12 md:w-1/2 lg:w-1/2 rounded-md bg-primary'>
            <h3>NOTE: This action will delete your account and all data related to it.</h3>
            <div className='flex flex-row gap-4'>
                <button type='submit' className='btn-secondary bg-red'>Continue</button>
                <button type='submit' className='btn-secondary' onClick={handleClick}>Cancel</button>
            </div>
        </div>
    </div>
    ,
    document.getElementById('deleteAccountModal')
  )
}
