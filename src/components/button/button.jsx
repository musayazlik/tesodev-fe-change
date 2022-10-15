import React from 'react'

import './buttonStyle.scss'

const button = ({ text, customClass, onClick }) => {
  return (
    <>
      <div className={`${customClass ? customClass : ''}`}>
        <button onClick={() => onClick?.()} className='HeaderButton'>
          {text}
        </button>
      </div>
    </>
  )
}

export default button
