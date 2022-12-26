// import { browserLocalPersistence, onAuthStateChanged, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { toast } from "react-toastify"
// import { useAuth } from '../Context/AuthContext'
// import { auth } from '../firebaseConfig'
// import { LoaderFullscreen } from './LoaderFullscreen'
import { CgGoogle } from 'react-icons/cg'
import { ResetPasswordModal } from './ResetPasswordModal'



export const SignUp = () => {
    // const { loading, setLoading, navigate, setIsLogged, error, setError, logInWithGoogle } = useAuth()

    // useEffect(() => {
    //     onAuthStateChanged(auth, data => {
    //         data && navigate('/')
    //     })
    // }, [])

    const [showModal, setShowModal] = useState(false)

    const [data, setData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    // handle change
    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setData(prevData => ({
            ...prevData,
            [name]:value
        }))
    }

    
  return (
    <div className='w-full h-screen flex--col text-center' id='login'>
        <form className='border rounded-md flex--col w-80 lg:w-1/3 md:w-1/2 p-4'>
            <h2>Hi there! 👋 Welcome!</h2>
            <h3>Enter details to sign up:</h3>
            <div className='w-full'>
                <input
                type="email" 
                name="email"
                value={data.email}
                placeholder='Email Address'
                onChange={handleChange}
                required
                />
            </div>
            <div className='w-full'>
                <input 
                type="password" 
                name="password"
                value={data.password}
                placeholder='Password'
                onChange={handleChange}
                required
                />
            </div>
            <div className='w-full'>
                <input 
                type="password" 
                name="confirmPassword"
                value={data.confirmPassword}
                placeholder='Confirm Password'
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <input className='btn-primary lg:px-10' type='submit' value="Sign up"/>
            </div>
            <p>
                or
            </p>
            <div>
                <button className='btn-primary flex--row' style={{margin: "auto"}}>
                    <CgGoogle /> Register with Google 
                </button>
            </div>
            <div>
                <p>Forgot Password? <button type='button' onClick={() => setShowModal(prev => !prev)} className="btn-small">RESET</button></p>
                <p>or</p>
                <p>Have an account already? &nbsp; 
                    <button className='btn-small'>
                        <Link to="/signup">Log in  </Link>
                    </button>
                </p>
            </div>
            {showModal 
            &&
            <ResetPasswordModal />
            }
        </form>
    </div>
  )
}
