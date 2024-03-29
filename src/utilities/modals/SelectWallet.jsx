import React from 'react'
import ReactDOM from 'react-dom'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { LoaderFullscreen } from '../../components/LoaderFullscreen'
import { useAuth } from '../../context/AuthContext'
import { useData } from '../../context/DataContext'

export const SelectWallet = ({ handleModal }) => {
  const { walletList, setWalletAddress, setWalletName, setLoading } = useData()

  const WalletDetailCard = ({ walletName, walletAddress, handleClick}) => {
    return <div onClick={handleClick} className='bg-secondary w-full rounded-md px-1 py-2'>
              <h2>{walletName}</h2>
              <h3 className='w-full overflow-hidden overflow-ellipsis'>{walletAddress}</h3>
            </div>
  
  }

  const setAddress = (address, name) => {
    setLoading(true)
    setWalletAddress(address)
    setWalletName(name)
    handleModal()
  }

  return ReactDOM.createPortal(

    <div className='w-screen h-[100%] fixed top-0 left-0 bg-black/75 z-50 flex justify-center overflow-y-auto'>
        <div className='w-90 z-50 absolute flex--col px-10 py-12 md:w-1/2 lg:w-1/2 rounded-md bg-primary '>
          {walletList.length === 0 
          ? <div className='text-center'>
              <p><i>No registered Wallet...</i></p>
              <p><i>Add one to display Dashboard</i></p>
              <br />
              <button className='btn-secondary'>
                <Link to="/wallets"> Add Wallet </Link>
              </button>
            </div>
          : 
          walletList.map((item, index) => {
            return <WalletDetailCard
                    key={index}
                    walletName={item.walletName}
                    walletAddress={item.walletAddress} 
                    handleClick={() => setAddress(item.walletAddress, item.walletName)}
                    />
          })}
        </div>
    </div>
    ,
    document.getElementById('selectWalletModal')
  )
}
