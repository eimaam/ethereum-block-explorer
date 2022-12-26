import React from 'react'
import { useState } from 'react'
import { DeleteAccountModal } from '../../utilities/modals/DeleteAccountModal'
import { Nav } from '../homepage/Nav'

export const AccountSettings = () => {
    const [showModal, setShowModal] = useState(false)
    const [showForm, setShowForm] = useState(false)
  return (
    <>
    <Nav />
    <div className='flex flex-col md:w-60 lg:w-1/2 m-auto justify-center mt-4 p-4 gap-2'>
    {!showForm 
    && 
        <div className='flex flex-col'>
            <button type='button' className='btn-primary my-2' >Deactivate Account</button>
            <button type='button' className='btn-primary my-2' onClick={() => setShowForm(true)}>Change Passoword</button>
            <button type='button' className='btn-primary bg-red-500 my-2 text-default' onClick={() => setShowModal(true)}>Delete Account</button>
        </div>
    }
    {showForm 
    && 
        <form className='flex--col'>
            <input
            className='border border-dark' 
            type="text" 
            placeholder='Enter New Password'
            />
            <button type="submit" className='btn-primary'> Change </button>
        </form>
    }
    </div>
    {showModal && <DeleteAccountModal handleClick={() => setShowModal(false)}/>}
    </>
  )
}
