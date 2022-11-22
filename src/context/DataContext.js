import axios from 'axios'
import React, { useContext, createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const DataContext = createContext()

export const useData = () => {
    return useContext(DataContext)
}

export const DataProvider = ({ children }) => {
    const navigate = useNavigate()

    const url = `https://api.covalenthq.com/v1/1/address/0x00000000219ab540356cbb839cbe05303d7705fa/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=${process.env.REACT_APP_API_KEY}` 
    
    const [data, setData] = useState([])

    let etherData = data.find(item => item.contract_name === "Ether") 



  useEffect(() => {
    const fetchWalletData = () => {
      axios.get(url)
      .then((res) => {
        setData(res.data.data.items)
      })
      .catch(err => console.log(err))
    }

    fetchWalletData()
  }, [])

  const value = {
    data,
    etherData,
    url
  }

  return (
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
  )
}
