import axios from 'axios'
import React, { useContext, createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const DataContext = createContext()

export const useData = () => {
    return useContext(DataContext)
}

export const DataProvider = ({ children }) => {
    const navigate = useNavigate()

    // state to manage wallet address entry
    const [walletAddress, setWalletAddress] = useState("0x690b9a9e9aa1c9db991c7721a92d351db4fac990")
    // const [balanceUrl, setBalanceUrl] = useState(`https://api.covalenthq.com/v1/1/address/${walletAddress}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${process.env.REACT_APP_API_KEY}`)
    // const [transactionsUrl, setTransactionsUrl] = useState(`https://api.covalenthq.com/v1/1/address/${walletAddress}/transactions_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${process.env.REACT_APP_API_KEY}`)
    
    
    let balanceUrl = `https://api.covalenthq.com/v1/1/address/${walletAddress}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=true&key=${process.env.REACT_APP_API_KEY}` 
    let transactionsUrl = `https://api.covalenthq.com/v1/1/address/${walletAddress}/transactions_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=true&key=${process.env.REACT_APP_API_KEY}` 

    const [loading, setLoading] = useState(true)
    const [walletBalance, setWalletBalance] = useState([])
    const [transHistory, setTransHistory] = useState([])

    let etherData = walletBalance.find(item => item.contract_name === "Ether") 
    
    useEffect(() => {
        const fetchBalance = () => {
          if(walletAddress.length < 10){
            return toast.error('Address not complete!')
          }
            axios.get(balanceUrl)
            .then((res) => {
              setWalletBalance(res.data.data.items)
            })
            .catch(err => console.log(err))
          }

        const fetchHistory = () => {
            axios.get(transactionsUrl)
            .then((res) => {
              setTransHistory(res.data.data.items)
              transHistory !== undefined && setLoading(false)
              toast.success("Assets fetched!")
            })
            .catch(err => console.log(err))
          }
          
          fetchHistory()
          fetchBalance()
    }, [walletAddress])


  const value = {
    walletBalance,
    etherData,
    balanceUrl,
    transactionsUrl,
    loading, 
    setLoading,
    transHistory,
    walletAddress, 
    setWalletAddress
  }

  return (
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
  )
}
