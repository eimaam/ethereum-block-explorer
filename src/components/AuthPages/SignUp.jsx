import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CgGoogle } from "react-icons/cg"
import { useAuth } from '../Context/AuthContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { toast } from "react-toastify"
import { auth } from '../firebaseConfig'
import { useData } from '../Context/DataContext'

export const SignUp = () => {
    const { setLoading, setUser, navigate, logInWithGoogle, userRef, setError, error } = useAuth()
    const { checkUsername, existingUsername } = useData()

    const [showMoreInputs, setShowMoreInputs] = useState(false)
    // const [existingUsername, setExistingUsername] = useState([])

    useEffect(() => {
        error !== "" &&
        setTimeout(() => {
            setError("")
        }, 2500);
    }, [error])

    const [data, setData] = useState({
        email: "",
        password: "",
        displayName: "",
        phoneNo: "",
        username: "",
        staysHostel: "",
        location: "",
    })

    
    const {email, password, displayName, phoneNo, username, staysHostel, location} = data

    // handle input change
    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setData(prevData => ({
            ...prevData,
            [name]:value
        }))
    }

    // run the checkUsername function to get list of usernames from database that matches one entered by new user on sign up and save to existingUsername state 
useEffect(() => {
    checkUsername(username)
  }, [username, data])

  
  // regular expression for USERNAME to use in testing if username corresponds to the expression
  const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{2,16}$/;

    // handle signup
    const signUp = async (e) => {
        e.preventDefault()
        if(password.length < 6){
            setLoading(false)
            setError('Password must be at least 6 characters long')
            return toast.error('Password must be at least 6 characters long')
            // check if username already exists
        }else if(existingUsername.length > 0){
            setError('Username already taken')
            return toast.error('Username already taken')
        }else if(username.length < 3){
            // check if entered username is up to 3 characters
            setError('Username must be at least 3 characters long')
            return toast.error('Username must be at least 3 characters long')
            // return error if username entered == "error" as site/error is reserved for error page
        }else if(username == "error"){
            setError('Ooops! You can\'t use that Username as it is a reserved word on the here!')
            return toast.error('Ooops! You can\'t use that Username as it is a reserved word on the here!')
            // test for username format using regex above
        }else if(!usernameRegex.test(data.username)){
        setError('Incorrect Username format.  Not supporting Username that starts with a number and can\'t end with \'.\'')
        return toast.error('Username format not supported')
        }
        
        try{
            await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setUser({
                    email: email,
                    displayName: displayName,
                })
                // take all entered data and save to database except user's password to avoid security breach
                setDoc(doc(userRef, email), {
                    email: email,
                    displayName: displayName,
                    username: username,
                    location: location,
                    phoneNo: phoneNo,
                    staysHostel: staysHostel,
                    isVerified: false,
                    accountStatus: "active", /*{ account status set to active and once user deletes account it gets updated to inactive/delete from settings page in order to keep track of deleted accounts}*/
                    joinedOn: serverTimestamp(),
                    totalAds: 0,
                    totalSales: 0,
                    activeAds: 0,
                })
                setLoading(false)
                toast.success('Signed up successfully...')
                // navigate to homepage after successfull sign up
                return navigate('/')
            })
        }
        catch(err){
            if(err.code === 'auth/wrong-password'){
                toast.error('Wrong Password')
                setError('Wrong Password')
                }else if(err.code === 'auth/too-many-requests'){
                toast.error('Too many trials! You will have to reset your password to access this site!')
                setError('Too many trials! You will have to reset your password to access this site!')
                }else if(err.code === 'auth/user-not-found'){
                }else if(err.code === 'auth/email-already-in-use'){
                toast.error('Email already in use!')
                setError('Email already in use')
                }else if(err.code === 'auth/user-not-found'){
                toast.error('User not found!')
                setError('User not found!')
                }else if(err.code === 'auth/network-request-failed'){
                setError('Sorry...! Something went wrong. Check your internet connection')
                }
                else{
                setLoading(false)
                console.log(err.message)
            }
        }
    }


  return (
    <div className='container' id='signup' data-aos="fade-up">
        <form onSubmit={signUp}>
            <h3>Hi there! 👋 Welcome!</h3>
            <h4>Enter your details to register your business/brand:</h4>
            {
            !showMoreInputs &&
            <>
            <div>
                <input 
                type="email"
                name='email' 
                placeholder='Email Address'
                value={email}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <input 
                type="number" 
                name='phoneNo'
                placeholder='Phone Number - preferrably WA number'
                pattern='08012345678 - without country code'
                value={phoneNo}
                onChange={handleChange}
                minLength={11}
                maxLength={11}
                />
            </div>
            <div>
                <input 
                type="text"
                name='displayName' 
                placeholder='Full Name/Business Name'
                value={displayName}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <input 
                type="password" 
                placeholder='Password'
                name='password'
                value={password}
                onChange={handleChange}
                required
                />
            </div>
            {email == ""|| phoneNo == ""|| displayName == ""|| password == "" ? <button disabled type='button'>Continue</button> : <button type='button' onClick={() => setShowMoreInputs(prevState => !prevState)}>Continue</button>}
            </>
            }

            {showMoreInputs &&
            <>
                <label style={{display: "block", marginRight: "auto", marginLeft: "30px", fontStyle: "italic", fontWeight: "bold", padding: "0", marginBlock: "0" }} htmlFor="">
                    {username ? `www.maidmarketplace/${username}` : "eg: www.maidmarketplace/iphonestore1"}
                </label>
            <div>
                <input 
                type="text" 
                name='username'
                value={username}
                placeholder='Username'
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <select name='staysHostel' defaultValue="Do you stay in Hostel?" onChange={handleChange}>
                    <option defaultValue="" disabled>Do you stay in Hostel?</option>
                    <option value="yes">YES</option>
                    <option value="no">NO</option>
                </select>
            </div>
            <i>If your answer to the above question is YES, enter your Hostel name 
                else enter area name or Store Location here in Maiduguri.
            </i>
            <div>
                <input 
                type="text" 
                name='location'
                value={location}
                placeholder='Area/Hostel Name or Store Location'
                onChange={handleChange}
                required
                />
            </div>
            </>
            }
            {
            showMoreInputs &&
            <>
            <div>
                <button onClick={() => setShowMoreInputs(prevState => !prevState)}>Previous</button>
            </div>
            <div>
                <input type='submit' value="Sign up" />
            </div>
            </>
            }
            <div>
                <p className='error'>{error}</p>
            </div>
            <p>or</p>
            <div>
                <button onClick={logInWithGoogle} type='button' className='flex-row' style={{margin: "auto"}}>
                    <CgGoogle /> Sign up with Google 
                </button>
            </div>
            <div>
                <p>Have an account already? 
                    <button className='btn--small'>
                        <Link to="/login">Login</Link>
                    </button>
                </p>
            </div>
        </form>
    </div>
  )
}
