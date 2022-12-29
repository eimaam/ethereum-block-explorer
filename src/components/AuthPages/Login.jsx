// import { browserLocalPersistence, onAuthStateChanged, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { toast } from "react-toastify"
// import { useAuth } from '../Context/AuthContext'
// import { auth } from '../firebaseConfig'
// import { LoaderFullscreen } from './LoaderFullscreen'
import { CgGoogle } from 'react-icons/cg'
import { browserLocalPersistence, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import { useAuth } from '../../context/AuthContext'
import { auth } from '../../firebaseConfig'
import { toast } from 'react-toastify'
import { LoaderFullscreen } from '../LoaderFullscreen'
import { ResetPasswordModal } from './ResetPasswordModal'



export const Login = () => {
    const { loading, setLoading, navigate, logInWithGoogle } = useAuth()

    useEffect(() => {
        onAuthStateChanged(auth, data => {
            data && navigate('/')
        })
    }, [])

    const [showModal, setShowModal] = useState(false)

    const [data, setData] = useState({
        email: "",
        password: ""
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

    // login function
    const login = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
            await setPersistence(auth, browserLocalPersistence)
            await signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                toast.info('Welcome...')
                navigate("/dashboard")
            })
            setLoading(false)
        }catch (err) {
            if(err.code === 'auth/wrong-password'){
                setLoading(false)
                toast.error('Wrong Password')
            }else if(err.code === 'auth/too-many-requests'){
                setLoading(false)
                toast.error('Too many trials! You will have to reset your password to access this site!')
            }else if(err.code === 'auth/user-not-found'){
                setLoading(false)
                toast.error('User not found!')
            }else if(err.code === 'auth/network-request-failed'){
                setLoading(false)
            }else if(err.code === 'auth/invalid-email'){
                setLoading(false)
                toast.error('Email or Password incorrect')
            }else{
                setLoading(false)
                console.log(err.message)
                toast.error('Retry...')
            }
        }
    }



    // if(loading){
    //     return <LoaderFullscreen />
    // }
    
  return (
    <div className='w-full h-screen flex--col text-center' id='login'>
        <form onSubmit={login} className='border rounded-md flex--col w-90 lg:w-1/3 md:w-1/2 p-4'>
            <h2>Hi there! 👋 Welcome!</h2>
            <h3>Enter your login details:</h3>
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
            {/* error message */}
            {/* <i className="error">{error}</i> */}
            <div>
                <input className='btn-primary lg:px-10' type='submit' value="Log in"/>
            </div>
            <p>
                or
            </p>
            <div>
                <button type='button' className='btn-primary flex--row' style={{margin: "auto"}} onClick={logInWithGoogle}>
                    <CgGoogle /> Login with Google 
                </button>
            </div>
            <div>
                <p>
                    Forgot Password? 
                    <button type='button' className="btn-small" onClick={() => setShowModal(true)}>
                        RESET
                    </button>
                </p>
                <p>or</p>
                <p>Don't have an account yet? 
                    <button className='btn-small'>
                        <Link to="/signup"> SIGN UP </Link>
                    </button>
                </p>
            </div>
            {showModal 
            &&
            <ResetPasswordModal handleClick={() => setShowModal(false)}/> 
            }
        </form>
    </div>
  )
}
