import React from 'react'

export const Container = ({ children }) => {
  return (
    <div className='container' id='rightContainer'>
        <div className='container--child'>
            { children }
        </div>
    </div>
  )
}
