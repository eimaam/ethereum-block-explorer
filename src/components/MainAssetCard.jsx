import React, { useState } from 'react'
import ethLogo from "../assets/EthereumLogo.svg"
import { BiHide, BiShareAlt, BiShow } from "react-icons/bi"
import { LoaderFullscreen } from "./LoaderFullscreen"
import { useData } from '../context/DataContext'
import { toast } from 'react-toastify'

export const MainAssetCard = () => {
  // import ethereum data from DataContext
  const { etherBalance } = useData()

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
  if(etherBalance === undefined){
    return <LoaderFullscreen />
  }

  return (
    <div className='header' id='mainAssetCard' >
        <div className='main'>
          <div className='img--container'>
            <img src={ethLogo} alt="ethereum logo svg" />
          </div>
          <div>
            <div className='flex-col' style={{alignItems: "flex-start"}}>
              <h3>ETHEREUM</h3>
              <h2 className='address'>0x165cd37b4c644c2921454429e7f9358d18a45e14</h2>
              <h1>{!hideBalance ? `$ ${etherBalance.quote}` : "*****"}</h1>
              <h2>{!hideBalance ? `≈ ${etherBalance.balance}` : "*****"} <span>ETH</span></h2>
            </div>
          </div>
        </div>
        <div className='tools flex-row'>
            {hideBalance && <h1 onClick={toggleBalance}><BiHide /></h1>}
            {!hideBalance && <h1 onClick={toggleBalance}><BiShow /></h1>}
            <h1 onClick={share}><BiShareAlt /></h1>
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