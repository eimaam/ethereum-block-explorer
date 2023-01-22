import axios from 'axios'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import React, { useContext, createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { database } from '../firebaseConfig'
import { useAuth } from './AuthContext'

const DataContext = createContext()

export const useData = () => {
    return useContext(DataContext)
}

export const DataProvider = ({ children }) => {

    const { user } = useAuth()
  
    // state to manage wallet address entry
    const [walletAddress, setWalletAddress] = useState("")

    // wallet list state - fetched from firestore
    const [walletList, setWalletList] = useState([])
    
    //urls for API call - balance and transaction sheets 
    let balanceUrl = `https://api.covalenthq.com/v1/1/address/${walletAddress}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=true&key=${process.env.REACT_APP_COVALENT_API_KEY}` 
    let transactionsUrl = `https://api.covalenthq.com/v1/1/address/${walletAddress}/transactions_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=true&key=${process.env.REACT_APP_COVALENT_API_KEY}` 

    // states to manage data fetching and saving
    const [loading, setLoading] = useState(true)
    const [walletBalance, setWalletBalance] = useState([])
    const [transHistory, setTransHistory] = useState([])

    //function to get Ethereum Balance from Wallet Balance
    let etherData = walletBalance.find(item => item.contract_name === "Ether") 
    
    // runs everytime address is changed 
    const fetchBalance = () => {
      setLoading(true)
      if(walletAddress.length < 10){
        return toast.error('Address not complete!')
      }
        axios.get(balanceUrl)
        .then((res) => {
          setWalletBalance(res.data.data.items)
        })
        .catch(err => {
          if(err.response.status === 400){
            toast.error('Invalid Address')
          }else if(err.code === "ERR_BAD_REQUEST"){
            toast.error('Request failed... Try again')
          }else{
            console.log(err)
          }
        })
      }

      // fetch added wallets from db
      useEffect(() => {
        const fetchWalletList = async () => {
          setLoading(true)
          try {
            const q = query(collection(database, 'wallets'), where('walletOwner', "==", "imamddahir@gmail.com"))
            await onSnapshot(q, snapShot => {
              localStorage.setItem("walletList", JSON.stringify(snapShot.docs.map(data => ({
                ...data.data(),
                id: data.id
              }))))
            })
            const list = JSON.parse(localStorage.getItem("walletList"))
            setWalletList(list)
            setLoading(false)
          } 
          catch (error) {
            console.log(error.message)
          }
        }

        fetchWalletList()

      }, [user])

      console.log(walletList)

    useEffect(() => {
        const fetchHistory = (fetchBalance) => {
          setLoading(true)
            axios.get(transactionsUrl)
            .then((res) => {
              setTransHistory(res.data.data.items)
              fetchBalance()
              setLoading(false)
            })
            .catch(err => console.log(err))
          }
          
          fetchHistory(fetchBalance)

    }, [walletAddress])

    // function to set Address to be processed - address to be passed as argument 
    const LookUpAddress = (enteredAddress) => { 
      // return error message if address field is empty
      if(enteredAddress === ""){
          return toast.error('pls enter an Address')
      }else if(enteredAddress.includes(" ")){
          return toast.error('Address can not contain space(s)')
      }
      setLoading(true)
      setWalletAddress(enteredAddress)
  }

    // export values
  const value = {
    walletBalance,
    etherData,
    balanceUrl,
    transactionsUrl,
    loading, 
    setLoading,
    transHistory,
    walletAddress, 
    setWalletAddress,
    LookUpAddress,
    walletList,
  }

  return (
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
  )
}
