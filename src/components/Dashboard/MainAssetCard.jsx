import React, { useState } from 'react'
import ethLogo from "../../assets/EthereumLogo.svg"
import { BiHide, BiShareAlt, BiShow } from "react-icons/bi"
import { useData } from '../../context/DataContext'
import { toast } from 'react-toastify'
import { ClipLoader } from 'react-spinners'

export const MainAssetCard = () => {
  // importing searched address from DataContext
  const { walletAddress } = useData()
  // import ethereum data from DataContext
  const { etherData } = useData()

  // state to manage balance state ==> show/hide
  const [hideBalance, setHideBalance] = useState(false)

  // function to change the state value and toggle balance
  const toggleBalance = () => {
    setHideBalance(prev => !prev)
  }

  //function to copy unique share URL
  const share = () => {
    // referencing the address location
    let address = document.querySelector(".address");
    
    // defining the string format to copy
    navigator.clipboard.writeText(`ether-scan.vercel.app/${address.innerHTML}`);
    toast.success("Link Copied!");
  }


  // error handler
  // displays loading animation if data is being fetched
  // to avoid page break
  if(etherData === undefined){
    return <h2 className='flex--col'><ClipLoader /></h2>
  }

  // formatting the balance to main value in two decimal places using the contract decimals value
  const etherBalance = (etherData.balance / Math.pow(10, etherData.contract_decimals)).toFixed(5)
  
  return (
    <div className='sm:px-6 sm:justify-between bg-primary p-4 rounded-lg flex justify-around' id='mainAssetCard' >
        <div className='flex--row'>
          <div className='m-0 p-0'>
            <img className='w-28 h-auto sm:w-16 sm:h-auto' src={ethLogo} alt="ethereum logo svg" />
          </div>
          <div className='flex--col' style={{alignItems: "flex-start"}}>
            <h3>ETHEREUM</h3>
            <h2 className='text-white w-200px sm:w-100px overflow-hidden text-ellipsis address'>{walletAddress}</h2> 
            <h1 className='text-extras'>{!hideBalance ? `$ ${etherData.quote.toFixed(2)}` : "******"}</h1>
            <h2 className='text-white '>{!hideBalance ? `≈ ${etherBalance}` : "******"} <span>ETH</span></h2>
          </div>
        </div>
        <div className='flex--row'>
            {hideBalance && <h1 className="text-4xl sm:text-2xl" onClick={toggleBalance}><BiHide /></h1>}
            {!hideBalance && <h1 className="text-4xl sm:text-2xl" onClick={toggleBalance}><BiShow /></h1>}
            <h1 className="text-4xl sm:text-2xl" onClick={share}><BiShareAlt /></h1>
        </div>
    </div>
  )
}