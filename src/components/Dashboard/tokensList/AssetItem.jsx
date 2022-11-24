import React from 'react'

export const AssetItem = ({item}) => {
  return (
    <div className='w-max flex--row rounded-md bg-secondary py-2 px-4' data-aos="fade-right">
        <img className='w-10 h-10 sm:w-8 sm:h-8' src={item.logo_url} alt="" />
        <div>
            <h4>{item.contract_ticker_symbol}</h4>
            <p>${item.quote.toFixed(2)}</p>
            <p>{(item.balance / Math.pow(10, item.contract_decimals)).toFixed(2)}</p>
        </div>
    </div>
  )
}
