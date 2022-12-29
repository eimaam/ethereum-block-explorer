import { updatePassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { CgPassword } from 'react-icons/cg'
import { toast } from 'react-toastify'
import { useAuth } from '../../context/AuthContext'
import { auth } from '../../firebaseConfig'
import { DeleteAccountModal } from '../../utilities/modals/DeleteAccountModal'
import { Nav } from '../homepage/Nav'

export const AccountSettings = () => {
    const { user, loading, setLoading } = useAuth()

    const [showModal, setShowModal] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const [newPassword, setNewPassword] = useState("")


    const changePass = async (e) => {
        e.preventDefault()
        setLoading(true)
        if(newPassword.length < 6){
            setLoading(false)
            return toast.error('Password must be at least 6 characters long')
        }
        try{
            await updatePassword(user, newPassword)
            .then(() => {
                toast.info('Password changed!')
            })
        }catch(error){
            console.log(error.message)
        }
    }


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
        <form onSubmit={changePass} className='flex--col'>
            <input
            className='border border-dark' 
            type="password"
            name='newPassword' 
            placeholder='Enter New Password'
            onChange={(e) => setNewPassword(e.target.value)}
            required
            />
            <button type="submit" className='btn-primary'> Change </button>
        </form>
    }
    </div>
    {showModal && <DeleteAccountModal handleClick={() => setShowModal(false)}/>}
    </>
  )
}
