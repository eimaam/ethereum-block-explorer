// import { browserLocalPersistence, onAuthStateChanged, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { toast } from "react-toastify"
// import { useAuth } from '../Context/AuthContext'
// import { auth } from '../firebaseConfig'
// import { LoaderFullscreen } from './LoaderFullscreen'
import { CgGoogle } from 'react-icons/cg'
import { ResetPasswordModal } from './ResetPasswordModal'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setUserId } from 'firebase/analytics'
import { auth } from '../../firebaseConfig'
import { useAuth } from '../../context/AuthContext'
import { toast } from 'react-toastify'
import { doc, setDoc } from 'firebase/firestore'



export const SignUp = () => {
    const { setUser, usersRef, loading, setLoading, navigate, logInWithGoogle } = useAuth()

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

    const signUp = async (e) => {
        e.preventDefault()
        setLoading(true)
        if(data.password.length < 6){
            setLoading(false)
            return toast.error('Password must be at least 6 characters long')
            // check if username already exists
        }else if(data.password !== data.confirmPassword){
            return toast.error('Password do not match')
        }

        try{
            await createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((res) => {
                setUser({
                    email: res.email
                })
                setDoc(doc(usersRef, data.email), {
                    email: data.email
                })
                toast.success('Signed up successfully...')
                navigate('dashboard')
                return setLoading(false)
            })
        }
        catch(err){
            if(err.code === 'auth/wrong-password'){
                toast.error('Wrong Password')
                }else if(err.code === 'auth/too-many-requests'){
                    toast.error('Too many trials! You will have to reset your password to access this site!')
                }else if(err.code === 'auth/user-not-found'){
                    toast.error('User not found')
                }else if(err.code === 'auth/email-already-in-use'){
                    toast.error('Email already in use!')
                }else if(err.code === 'auth/user-not-found'){
                    toast.error('User not found!')
                }else if(err.code === 'auth/network-request-failed'){
                    toast.error('Sorry...! Something went wrong. Check your internet connection')
                }
                else{
                    setLoading(false)
                    console.log(err.message)
            }
        }
        
    }
    
  return (
    <div className='w-full h-screen flex--col text-center' id='login'>
        <form onSubmit={signUp} className='border rounded-md flex--col w-90 lg:w-1/3 md:w-1/2 p-4'>
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
                <button type='button' className='btn-primary flex--row' style={{margin: "auto"}} onClick={logInWithGoogle}>
                    <CgGoogle /> Register with Google 
                </button>
            </div>
            <div>
                <p>Forgot Password? <button type='button' onClick={() => setShowModal(prev => !prev)} className="btn-small">RESET</button></p>
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
