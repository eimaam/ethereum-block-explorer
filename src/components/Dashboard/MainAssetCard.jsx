import React, { useState } from 'react'
import ethLogo from "../../assets/EthereumLogo.svg"
import { BiHide, BiShareAlt, BiShow } from "react-icons/bi"
import { LoaderFullscreen } from "../LoaderFullscreen"
import { useData } from '../../context/DataContext'
import { toast } from 'react-toastify'

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
  
    
    // address.setSelectionRange(0, 99999); // For mobile devices
  
    // defining the string format to copy
    navigator.clipboard.writeText(`ether-scan.vercel.app/${address.innerHTML}`);
    
    toast.success("Link Copied!");
  }


  // error handler
  // displays loading animation if data is being fetched
  // to avoid page break
  if(etherData === undefined){
    return <LoaderFullscreen />
  }

  // formatting the balance to main value in two decimal places using the contract decimals value
  const etherBalance = (etherData.balance / Math.pow(10, etherData.contract_decimals)).toFixed(2)
  
  return (
    <div className='sm:px-6 sm:justify-between bg-primary p-4 rounded-lg flex justify-around' id='mainAssetCard' >
        <div className='flex--row'>
          <div className='m-0 p-0'>
            <img className='w-28 h-auto sm:w-16 sm:h-auto' src={ethLogo} alt="ethereum logo svg" />
          </div>
          <div className='flex--col' style={{alignItems: "flex-start"}}>
            <h3>ETHEREUM</h3>
            <h2 className='text-white w-200px sm:w-100px overflow-hidden text-ellipsis address'>0x165cd37b4c644c2921454429e7f9358d18a45e14</h2>
            <h1 className='text-extras'>{!hideBalance ? `$ ${etherData.quote}` : "******"}</h1>
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


{/* <div className='header' id='mainAssetCard' >
        <div className='main'>
          <div className='img'>
            <img src={ethLogo} alt="ethereum logo svg" />
          </div>
          <div>
            <div className='flex-col' style={{alignItems: "flex-start"}}>
              <h3>ETHEREUM</h3>
              <h2 className='address'>0x165cd37b4c644c2921454429e7f9358d18a45e14</h2>
              <h1>$41,600.089</h1>
              <h2>≈ 32.016 ETH</h2>
            </div>
            {/* <div>
              21/11/2022
            </div> */}
    //       </div>
    //     </div>
    //     <div className='flex-row'>
    //         <h1><BiHide /></h1>
    //         <h1><BiShow /></h1>
    //         <h1><BiShareAlt /></h1>
    //     </div>
    // </div> */}