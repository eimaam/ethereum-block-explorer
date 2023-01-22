import { browserLocalPersistence, onAuthStateChanged, setPersistence, signInWithPopup, signOut } from 'firebase/auth'
import { collection, doc, getDoc, setDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { auth, database, googleProvider } from '../firebaseConfig'

// defined the context
const AuthContext = createContext()

// creating the use context here
// exported to allow usage in other components
export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const usersRef = collection(database, "users")
    const walletsRef = collection(database, "wallets")

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getUser = async () => {
            setUser(null)
            onAuthStateChanged(auth, async data => {
                if(data){
                    try{
                        const document = await getDoc(doc(usersRef, data.email))
                        if(!document.exists()){
                            await setDoc(doc(usersRef, data.email), {
                                email: data.email,
                            })
                        }
                        setUser(data)
                        setLoading(false)
                    }
                    catch(err){
                        console.log(err.message)
                    }
                }
            })
        }
      getUser()
    }, [])

    const logInWithGoogle = async (e) => {
        e.preventDefault()
        try{
            await setPersistence(auth, browserLocalPersistence)
            await signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser({
                    email: res.email,
                })
                navigate('/')
                setLoading(false)
            })
        }
        catch(error){
            console.log(error.message)
        }
    }

    // logout/sign out func
    const logOut = (e) => {
        e.preventDefault()
        setLoading(true)
        setUser(null)
        signOut(auth)
        .then(() => {
            localStorage.clear()
            setLoading(false)
            toast.info('Signed out...')
        })
        return navigate('login')
    }
    

    const value = {
        navigate,
        user,
        setUser,
        loading,
        setLoading,
        logInWithGoogle,
        logOut,
        usersRef,
        walletsRef
    }

  return (
    <AuthContext.Provider value={value}>
        { children }
    </AuthContext.Provider>
  )
}
