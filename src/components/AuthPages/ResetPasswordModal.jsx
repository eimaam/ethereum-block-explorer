// import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import ReactDOM  from 'react-dom'
import { toast } from 'react-toastify'
// import { useAuth } from '../Context/AuthContext'
// import { auth } from '../firebaseConfig'

export const ResetPasswordModal = ({ handleClick }) => {
  // getting error and setError already defined state from useAuth context
//   const { message, setMessage } = useAuth()

  const [email, setEmail] = useState("")

  // function to send password reset mail
//   const resetPassword = async (e) => {
//     e.preventDefault()
//     try{
//       await sendPasswordResetEmail(auth, email)
//       .then(() => {
//         toast.info('Reset Email Sent! Check your Mailbox or Spam Folder')
//         setMessage('Reset Email Sent! Check your Mailbox or Spam Folder')
//       })
//     }
//     catch(err){
//       if(err.code === "auth/user-not-found"){
//         toast.error('User not found')
//       }else{
//         toast.error(err.code)
//       }
//     }
//   }

  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-black/75 z-50'>
        <form className='fixed top-1/2 left-1/2 translate-x-[-50%] flex--col px-10 py-12 w-1/2 rounded-md bg-primary'>
              <input 
              type="email" 
              placeholder='Registered Email'
              onChange={(e) => setEmail(e.target.value)}
              required
              />
              <input
              className='btn-secondary w-1/2' 
              type="submit" 
              value="RESET"
              />
              <br />
              <button type='button' onClick={handleClick} className='btn-small'>close</button>
        </form>
    </div>
    ,
    document.getElementById('resetPasswordModal')
  )
}
