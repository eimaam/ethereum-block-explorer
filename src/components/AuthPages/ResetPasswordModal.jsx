// import { sendPasswordResetEmail } from 'firebase/auth'
import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import ReactDOM  from 'react-dom'
import { toast } from 'react-toastify'
import { auth } from '../../firebaseConfig'
// import { useAuth } from '../Context/AuthContext'
// import { auth } from '../firebaseConfig'

export const ResetPasswordModal = ({ handleClick }) => {
  // getting error and setError already defined state from useAuth context
//   const { message, setMessage } = useAuth()

  const [email, setEmail] = useState("")


  const resetPass = async (e) => {
    e.preventDefault()
    try{
      await sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info('Reset Email Sent! Check your Mailbox or Spam Folder')
      })
    }
    catch(err){
      if(err.code === "auth/user-not-found"){
        toast.error('User not found')
      }if(err.code === 'auth/missing-email'){
        toast.error('Empty e-mail field...')
      }else{
        toast.error(err.code)
      }
    } 
  }

  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-black/75 z-50'>
        <form className='w-90 md:w-1/2 lg:w-1/2 fixed top-1/2 left-1/2 translate-x-[-50%] flex--col px-2 py-12 rounded-md bg-primary'>
              <input 
              type="email" 
              placeholder='Registered Email'
              onChange={(e) => setEmail(e.target.value)}
              required
              />
              <button type='submit' className='btn-secondary' onClick={resetPass}>RESET</button>
              <br />
              <button type='button' onClick={handleClick} className='btn-small'>close</button>
        </form>
    </div>
    ,
    document.getElementById('resetPasswordModal')
  )
}
