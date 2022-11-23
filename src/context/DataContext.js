import axios from 'axios'
import React, { useContext, createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const DataContext = createContext()

export const useData = () => {
    return useContext(DataContext)
}

export const DataProvider = ({ children }) => {
    const navigate = useNavigate()
    
    // const url = `https://api.covalenthq.com/v1/1/address/0x690b9a9e9aa1c9db991c7721a92d351db4fac990/transactions_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${process.env.REACT_APP_API_KEY}` 
    // const balanceUrl = `https://api.covalenthq.com/v1/1/address/0x165cd37b4c644c2921454429e7f9358d18a45e14/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${process.env.REACT_APP_API_KEY}` 

    const balanceUrl = `https://api.covalenthq.com/v1/1/address/0x690b9a9e9aa1c9db991c7721a92d351db4fac990/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${process.env.REACT_APP_API_KEY}` 
    const transactionsUrl = `https://api.covalenthq.com/v1/1/address/0x690b9a9e9aa1c9db991c7721a92d351db4fac990/transactions_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${process.env.REACT_APP_API_KEY}` 

    const [loading, setLoading] = useState(true)
    const [walletBalance, setWalletBalance] = useState([])
    const [transHistory, setTransHistory] = useState([])

    let etherBalance = walletBalance.find(item => item.contract_name === "Ether") 

    // const fetchData = (url, setRes) => {
    //     axios.get(url)
    //     .then((res) => {
    //       setRes(res.data.data.items)
    //     })
    //     .catch(err => console.log(err))
    //     setLoading(false)
    //   }

    //   fetch balance and transactions
    //   const fetchAllData = () => {
    //     setLoading(true)
    //       fetchData(balanceUrl, setWalletBalance)
    //       fetchData(transactionsUrl, setTransHistory)
    //   }
    
    useEffect(() => {
        const fetchBalance = () => {
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
            })
            .catch(err => console.log(err))
          }
          
          fetchHistory()
          fetchBalance()
    }, [])

    console.log(loading)
    console.log(transHistory)

  const value = {
    walletBalance,
    etherBalance,
    balanceUrl,
    transactionsUrl,
    loading, 
    setLoading,
    transHistory,
  }

  return (
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
  )
}
