import React from 'react'
import ReactDOM from 'react-dom'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { LoaderFullscreen } from '../../components/LoaderFullscreen'
import { useAuth } from '../../context/AuthContext'
import { useData } from '../../context/DataContext'

export const SelectWallet = ({ handleModal }) => {
  const { walletList, setWalletAddress, loading, setLoading } = useData()

  const WalletDetailCard = ({ walletName, walletAddress, handleClick}) => {
    return <div onClick={handleClick} className='bg-secondary w-full rounded-md px-1 py-2'>
              <h2>{walletName}</h2>
              <h3 className='w-full overflow-hidden overflow-ellipsis'>{walletAddress}</h3>
            </div>
  
  }

  const setAddress = (address) => {
    setLoading(true)
    setWalletAddress(address)
    handleModal()
  }

  return ReactDOM.createPortal(

    <div className='w-screen h-[100%] fixed top-0 left-0 bg-black/75 z-50 flex justify-center overflow-y-auto'>
        <div className='w-90 z-50 absolute flex--col px-10 py-12 md:w-1/2 lg:w-1/2 rounded-md bg-primary '>
          <h1 onClick={handleModal} className='text-red-600 absolute top-1 right-2'>
              <AiFillCloseCircle />
          </h1>
          {walletList.length === 0 
          ? <div>
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
                    handleClick={() => setAddress(item.walletAddress)}
                    />
          })}
        </div>
    </div>
    ,
    document.getElementById('selectWalletModal')
  )
}
