// import { browserLocalPersistence, onAuthStateChanged, setPersistence, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { toast } from "react-toastify"
// import { useAuth } from '../Context/AuthContext'
// import { auth } from '../firebaseConfig'
// import { LoaderFullscreen } from './LoaderFullscreen'
import { CgGoogle } from 'react-icons/cg'



export const Login = () => {
    // const { loading, setLoading, navigate, setIsLogged, error, setError, logInWithGoogle } = useAuth()

    // useEffect(() => {
    //     onAuthStateChanged(auth, data => {
    //         data && navigate('/')
    //     })
    // }, [])

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
    // const login = async (e) => {
    //     e.preventDefault()
    //     setLoading(true)
    //     try{
    //         await setPersistence(auth, browserLocalPersistence)
    //         await signInWithEmailAndPassword(auth, data.email, data.password)
    //         .then(() => {
    //             setIsLogged(true)
    //             toast.success('Welcome...')
    //             navigate('/')
    //         })
    //         setLoading(false)
    //     }
    //     catch(err){
    //         if(err.code === 'auth/wrong-password'){
    //             setLoading(false)
    //             toast.error('Wrong Password')
    //             setError('Wrong Password')
    //         }else if(err.code === 'auth/too-many-requests'){
    //             setLoading(false)
    //             toast.error('Too many trials! You will have to reset your password to access this site!')
    //             setError('Too many trials! You will have to reset your password to access this site!')
    //         }else if(err.code === 'auth/user-not-found'){
    //             setLoading(false)
    //             toast.error('User not found!')
    //             setError('User not found!')
    //         }else if(err.code === 'auth/network-request-failed'){
    //             setLoading(false)
    //             setError('Sorry...! Something went wrong. Check your internet connection')
    //         }else if(err.code === 'auth/invalid-email'){
    //             setLoading(false)
    //             toast.error('Email or Password incorrect')
    //             setError('Email or Password incorrect')
    //         }
    //         else{
    //         setLoading(false)
    //         console.log(err.message)
    //         toast.error('Retry...')
    //         }
    //     }
    // }

    // if(loading){
    //     return <LoaderFullscreen />
    // }
    
  return (
    <div className='w-full h-screen flex--col text-center' id='login'>
        <form className='border rounded-md flex--col w-80 lg:w-1/2 md:w-1/2 p-4'>
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
                <input className='btn-primary' type='submit' value="Log in"/>
            </div>
            <p>
                or
            </p>
            <div>
                <button className='btn-primary flex--row' style={{margin: "auto"}}>
                    <CgGoogle /> Login with Google 
                </button>
            </div>
            <div>
                <p>Forgot Password? <button className="btn-small"><Link to="/reset">RESET</Link></button></p>
                <p>or</p>
                <p>Don't have an account yet? 
                    <button className='btn-small'>
                        <Link to="/signup"> SIGN UP </Link>
                    </button>
                </p>
            </div>
        </form>
    </div>
  )
}
