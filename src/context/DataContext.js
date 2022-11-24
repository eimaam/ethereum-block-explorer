import axios from 'axios'
import React, { useContext, createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const DataContext = createContext()

export const useData = () => {
    return useContext(DataContext)
}

export const DataProvider = ({ children }) => {

    // state to manage wallet address entry
    const [walletAddress, setWalletAddress] = useState("0x690b9a9e9aa1c9db991c7721a92d351db4fac990")
    
    //urls for API call - balance and transaction sheets 
    let balanceUrl = `https://api.covalenthq.com/v1/1/address/${walletAddress}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=true&key=${process.env.REACT_APP_API_KEY}` 
    let transactionsUrl = `https://api.covalenthq.com/v1/1/address/${walletAddress}/transactions_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=true&key=${process.env.REACT_APP_API_KEY}` 

    // states to manage data fetching and saving
    const [loading, setLoading] = useState(true)
    const [walletBalance, setWalletBalance] = useState([])
    const [transHistory, setTransHistory] = useState([])

    //function to get Ethereum Balance from Wallet Balance
    let etherData = walletBalance.find(item => item.contract_name === "Ether") 
    
    // runs everytime address is changed 
    useEffect(() => {
        const fetchBalance = () => {
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
              }else{
                console.log(err)
              }
            })
          }

        const fetchHistory = () => {
            axios.get(transactionsUrl)
            .then((res) => {
              setTransHistory(res.data.data.items)
            })
            .catch(err => console.log(err))
          }
          
          fetchHistory()
          fetchBalance()

          setTimeout(() => {
            setLoading(false)
          }, 2500);

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
    LookUpAddress
  }

  return (
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
  )
}
